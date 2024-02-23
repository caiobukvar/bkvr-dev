/* eslint-disable react/no-unescaped-entities */
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
  title: "Caio Bukvar - BKVR",
  description: "Caio Bukvar's portfolio as a software developer",
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
      <Toaster
        richColors
        toastOptions={{
          style: {
            background: "rgb(51 65 85)",
          },
        }}
      />
      <Head>
        <title>Caio Bukvar's portfolio</title>
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
          content="https://opengraph.b-cdn.net/production/documents/ea4238a9-6a7a-4857-a787-40af9ca4f54b.png?token=AQMg4Fiez6vis005O39556OlZPohHIH3Q1U8yP-i6-E&height=481&width=498&expires=33244698999"
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
          content="https://opengraph.b-cdn.net/production/documents/ea4238a9-6a7a-4857-a787-40af9ca4f54b.png?token=AQMg4Fiez6vis005O39556OlZPohHIH3Q1U8yP-i6-E&height=481&width=498&expires=33244698999"
        />
      </Head>
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
