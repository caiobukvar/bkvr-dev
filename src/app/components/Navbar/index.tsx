import { Blocks, Briefcase, Contact, Rocket } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Navbar(req: any) {
  const t = useTranslations("Navbar");

  return (
    <div
      className="align-center sticky top-0 z-10 flex w-full justify-center 
     gap-5 bg-slate-700 p-5 text-sm tracking-tight text-lime-600
    md:justify-start lg:justify-start 
      "
    >
      <Link
        href="/"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-lime-500
        hover:underline hover:ring-lime-500 focus:text-slate-400
          focus:underline md:gap-2`}
      >
        <Contact />
        <p className="hidden md:block">{t("about")}</p>
      </Link>
      <Link
        href="#experience"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-lime-500
        hover:underline hover:ring-lime-500 focus:text-slate-400
        focus:underline md:gap-2`}
      >
        <Briefcase />
        <p className="hidden md:block">{t("experience")}</p>
      </Link>
      <Link
        href="#projects"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-lime-500
        hover:underline hover:ring-lime-500 focus:text-slate-400
        focus:underline md:gap-2`}
      >
        {" "}
        <Blocks />
        <p className="hidden md:block">{t("projects")}</p>
      </Link>
      <Link
        href="#social"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-lime-500
        hover:underline hover:ring-lime-500 focus:underline
         md:gap-2`}
      >
        <Rocket />
        <p className="hidden md:block">{t("social")}</p>
      </Link>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 opacity-10" />
    </div>
  );
}
