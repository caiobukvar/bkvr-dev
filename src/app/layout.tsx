import type { Metadata } from "next";
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
      <Toaster />
      <body className={unbounded.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
