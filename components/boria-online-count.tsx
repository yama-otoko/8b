"use client";

import { useEffect, useState } from "react";

type PresenceResponse = {
  online: number;
  updatedAt: string;
};

const REFRESH_INTERVAL_MS = 30_000;
const PRESENCE_URL = process.env.NEXT_PUBLIC_BORIA_PRESENCE_URL;

export function BoriaOnlineCount() {
  const [online, setOnline] = useState<number | null>(null);
  const [status, setStatus] = useState<"loading" | "available" | "unavailable">("loading");

  useEffect(() => {
    let active = true;

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

    void refresh();
    const interval = window.setInterval(refresh, REFRESH_INTERVAL_MS);

    return () => {
      active = false;
      window.clearInterval(interval);
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
