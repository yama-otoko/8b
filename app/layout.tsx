import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eightbits — Digital Product Studio",
  description:
    "Eightbits designs and engineers digital products, AI systems, and new ventures from zero to scale.",
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
