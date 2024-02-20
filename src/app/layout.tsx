import { unbounded } from "../styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "BKVR Development",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 text-slate-400 min-h-screen">
      <Toaster
        richColors
        toastOptions={{
          style: {
            background: "#475569",
          },
        }}
      />
      <body className={unbounded.className}>
        <Navbar />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
