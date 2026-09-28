import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eightbits — Intelligent Automation",
  description:
    "Eightbits designs and delivers reliable automation systems for public-sector and enterprise workflows.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
