import type { Metadata } from "next";
import "./globals.css";

import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "VisionaryLabs - Let's build your MVP!",
  description: "VisionarLabs specializes in building innovative and efficient Minimum Viable Products (MVPs) that empower businesses to validate ideas, captivate audiences, and scale seamlessly. From sleek web apps to high-converting landing pages and robust integrations, we turn your vision into reality.",
  keywords: [
    "MVP development",
    "web applications",
    "landing pages",
    "SEO-ready content",
    "modern scalable tech",
    "VisionarLabs",
    "startup solutions",
    "product development agency",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >{children}</body>
    </html>
  );
}
