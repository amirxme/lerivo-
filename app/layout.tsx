import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LERIVO — Where memecoins meet creators",
  description:
    "The Web3 platform where memecoins pay creators for memes, videos, threads and design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}