import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import { unbounded } from "../styles/fonts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://bkvr.dev.br"),
  keywords: ["NextJS", "React", "TailwindCSS", "Javascript"],
  robots: {
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    images:
      "https://opengraph.b-cdn.net/production/documents/9ee1429b-345f-4bdc-82ed-2f0a3ff3ac31.png?token=03Sk1W-up-b-zlFQnd-agWkAFHSHhrCAXdobSRLfQhs&height=601&width=1200&expires=33244695074",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen bg-slate-900 text-slate-400">
      <Toaster
        richColors
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
          },
        }}
      />
      <body className={unbounded.className}>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
