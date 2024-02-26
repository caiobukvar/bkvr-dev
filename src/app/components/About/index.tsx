/* eslint-disable react/no-unescaped-entities */

import { Contact } from "lucide-react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <div className="flex w-full max-w-screen-lg animate-slide-in-left flex-col gap-16 p-4 ">
      <h1
        className={`text-center text-3xl italic tracking-tight text-slate-600`}
      >
        {t("title-1")}
        <span
          className={`font-bold text-lime-600 underline hover:text-lime-500 `}
        >
          Caio Bukvar
        </span>
        {t("title-2")}
      </h1>

      <div className="flex flex-col gap-6 ">
        <div className="flex items-center gap-2 text-slate-800 dark:text-slate-400">
          <Contact />
          <h3 className="text-xl font-bold md:text-2xl">{t("about-me")}</h3>
        </div>
        <div className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400">
          <p>{t("about-p1")}</p>
          <p>{t("about-p2")}</p>
          <p>{t("about-p3")}</p>
          <p>{t("about-p4")}</p>
        </div>
      </div>
    </div>
  );
}
