import { unbounded } from "@/styles/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "../../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ThemeSelector from "../components/ThemeSelector";
import IntlBar from "../components/IntlBar";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL("https://bkvr.dev.br"),
  title: "Caio Bukvar - Developer Portfolio",
  description: "Caio Bukvar's portfolio as a software developer",
  keywords: ["NextJS", "React", "TailwindCSS", "Javascript"],
  robots: {
    googleBot: {
      index: true,
    },
  },
  openGraph: {
    title: "Caio Bukvar - Developer Portfolio",
    description: "Developing solutions since 2021.",
    images: "/app/opengraph-image.png",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  // Load translations from Next Intl (locale is automatically detected)
  const t = await getTranslations("Navbar");

  const navbarTranslations = {
    about: t("about"),
    experience: t("experience"),
    projects: t("projects"),
    contact: t("contact"),
  };

  return (
    <html lang={locale}>
      <body
        className={`min-h-screen bg-slate-200 text-slate-400 dark:bg-slate-900 ${unbounded.className}`}
      >
        <Toaster
          richColors
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
            },
          }}
        />
        <Navbar navbarTranslations={navbarTranslations} />
        {children}

        <IntlBar />
        <ThemeSelector />
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
