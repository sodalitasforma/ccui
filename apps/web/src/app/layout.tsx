import "@catholiccommons/tokens/css-vars.css";
import "@catholiccommons/primitives/primitives.css";
import "@catholiccommons/catholic/catholic.css";
import "./globals.css";
import type { Metadata } from "next";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Catholic Commons UI",
  description: "Catholic Commons UI: an open-source Catholic interface system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
