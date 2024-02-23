import { unbounded } from "../styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "<BKVR />",
  description: "Software Developer Portfolio",
  keywords: ["NextJS", "React", "TailwindCSS", "Javascript"],
  robots: {
    googleBot: {
      index: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen bg-slate-900 text-slate-400">
      <Head>
        <title>
          {"<"}BKVR {"/>"}
        </title>
        <meta name="description" content="Software Developer Portfolio" />
        <meta property="og:url" content="https://www.bkvr.dev.br" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="<BKVR />" />
        <meta
          property="og:description"
          content="Software Developer Portfolio"
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/9ee1429b-345f-4bdc-82ed-2f0a3ff3ac31.png?token=03Sk1W-up-b-zlFQnd-agWkAFHSHhrCAXdobSRLfQhs&height=601&width=1200&expires=33244695074"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bkvr.dev.br" />
        <meta property="twitter:url" content="https://www.bkvr.dev.br" />
        <meta name="twitter:title" content="<BKVR />" />
        <meta
          name="twitter:description"
          content="Software Developer Portfolio"
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/9ee1429b-345f-4bdc-82ed-2f0a3ff3ac31.png?token=03Sk1W-up-b-zlFQnd-agWkAFHSHhrCAXdobSRLfQhs&height=601&width=1200&expires=33244695074"
        />
      </Head>
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
