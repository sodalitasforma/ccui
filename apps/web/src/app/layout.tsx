import "../../../../packages/tokens/src/css-vars.css";
import "../../../../packages/primitives/src/primitives.css";
import "../../../../packages/catholic/src/catholic.css";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forma",
  description: "Catholic UI Kit and design system.",
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
