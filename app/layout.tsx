import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LERIVO — Web3 creator campaigns",
  description:
    "Платформа, где мемкоины платят креаторам за контент и внимание.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}