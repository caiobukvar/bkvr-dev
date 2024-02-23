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
      "https://opengraph.b-cdn.net/production/documents/ea4238a9-6a7a-4857-a787-40af9ca4f54b.png?token=AQMg4Fiez6vis005O39556OlZPohHIH3Q1U8yP-i6-E&height=481&width=498&expires=33244698999",
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
