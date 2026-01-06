import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Personal Coach | Turn Clarity Into Consistent Action",
  description:
    "Your personal AI coach for follow-through. Turn clarity into consistent action — in under 5 minutes a day.",
  keywords: [
    "AI personal coach",
    "habit coach AI",
    "productivity coach app",
    "AI coach",
    "personal development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
