import { unbounded } from "../styles/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

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
      <meta property="og:description" content="Software Developer Portfolio" />
      <meta
        property="og:image"
        content="/public/images/projects/thumb-bkvr.png"
      />
      <meta property="og:url" content="https://bkvr.dev.br" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="<BKVR />" />

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
