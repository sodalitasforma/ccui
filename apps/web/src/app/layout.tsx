import "../../../../packages/tokens/src/css-vars.css";
import "../../../../packages/primitives/src/primitives.css";
import "../../../../packages/catholic/src/catholic.css";
import "./globals.css";
import type { Metadata } from "next";

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
