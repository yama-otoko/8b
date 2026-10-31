"use client";

import { useEffect, useState } from "react";

type PresenceResponse = {
  online: number;
  updatedAt: string;
};

const REFRESH_INTERVAL_MS = 30_000;
const RECONNECT_DELAY_MS = 3_000;
const PRESENCE_URL = process.env.NEXT_PUBLIC_BORIA_PRESENCE_URL;

function presenceSocketUrl(endpoint: string): string {
  const url = new URL(endpoint);
  if (url.protocol === "https:") url.protocol = "wss:";
  else if (url.protocol === "http:") url.protocol = "ws:";
  else throw new Error("Presence endpoint must use HTTP or HTTPS");
  url.pathname = `${url.pathname.replace(/\/$/, "")}/connect`;
  url.search = "";
  url.hash = "";
  return url.toString();
}

export function BoriaOnlineCount() {
  const [online, setOnline] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "available" | "unavailable">("loading");

  useEffect(() => {
    let active = true;
    let socket: WebSocket | undefined;
    let reconnectTimer: number | undefined;

    async function refresh() {
      try {
        if (!PRESENCE_URL) throw new Error("Presence endpoint is not configured");
        const response = await fetch(PRESENCE_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("Presence endpoint unavailable");

        const payload = (await response.json()) as PresenceResponse;
        if (!Number.isInteger(payload.online) || payload.online < 0) {
          throw new Error("Invalid presence response");
        }

        if (active) {
          setOnline(payload.online);
          setStatus("available");
        }
      } catch {
        if (active) {
          setOnline(null);
          setStatus("unavailable");
        }
      }
    }

    function connect() {
      if (!active || !PRESENCE_URL) {
        setStatus("unavailable");
        return;
      }

      try {
        socket = new WebSocket(presenceSocketUrl(PRESENCE_URL));
      } catch {
        setStatus("unavailable");
        return;
      }

      socket.addEventListener("open", () => void refresh());
      socket.addEventListener("error", () => {
        if (active) setStatus("unavailable");
      });
      socket.addEventListener("close", () => {
        if (!active) return;
        setOnline(null);
        setStatus("unavailable");
        reconnectTimer = window.setTimeout(connect, RECONNECT_DELAY_MS);
      });
    }

    connect();
    const interval = window.setInterval(refresh, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(interval);
      if (reconnectTimer !== undefined) window.clearTimeout(reconnectTimer);
      socket?.close(1000, "page closed");
    };
  }, []);

  return (
    <div
      className={`radar-status${status === "unavailable" ? " radar-status-unavailable" : ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span>{status === "available" ? "LIVE MESH" : "MESH TELEMETRY"}</span>
      <b>{online ?? "—"}</b>
      <small>
        {status === "available" ? "PEOPLE ONLINE" : status === "loading" ? "CONNECTING" : "UNAVAILABLE"}
      </small>
    </div>
  );
}
