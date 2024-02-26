import { unbounded } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Toaster } from "sonner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../../styles/globals.css";

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
  openGraph: {
    title: "Caio Bukvar - BKVR",
    description: "Developing solutions since 2021.",
    images: [{ url: "/app/opengraph-image.png" }],
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="min-h-screen bg-slate-900 text-slate-400">
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
