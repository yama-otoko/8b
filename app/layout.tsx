import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eightbits.us"),
  title: "Eightbits — Intelligent Automation",
  description:
    "Eightbits designs and delivers reliable automation systems for public-sector and enterprise workflows.",
  openGraph: {
    title: "Eightbits — Intelligent Automation",
    description:
      "Reliable automation systems for public-sector and enterprise workflows.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Eightbits — Automation for critical work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eightbits — Intelligent Automation",
    description:
      "Reliable automation systems for public-sector and enterprise workflows.",
    images: ["/og.png"],
  },
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
