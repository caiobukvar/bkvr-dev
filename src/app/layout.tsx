import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import { inter, unbounded, jura } from "@/fonts";
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
            color: "#a3e635",
            borderColor: "#a3e635",
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
