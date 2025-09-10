/* eslint-disable react/no-unescaped-entities */

import { Contact } from "lucide-react";
import { useTranslations } from "next-intl";
import TypedHeader from "../TypedHeader";

export default function About() {
  const t = useTranslations("About");

  const headerTransaltions = {
    title1: t("title-1"),
    title2: t("title-2"),
  };

  return (
    <div className="flex w-full max-w-screen-lg flex-col gap-16 px-12 ">
      <TypedHeader headerTransaltions={headerTransaltions} />

      <div id="about-me-main" className="flex flex-col gap-6 ">
        <div className="flex flex-col gap-2 text-slate-800 dark:text-slate-400">
          <div id="about-me-header" className="flex gap-2">
            <Contact />
            <h3 className="text-xl font-bold md:text-2xl">{t("about-me")}</h3>
          </div>
          <div
            id="about-me-list"
            className="flex flex-col gap-4 border-l-2 border-lime-600 pl-6 text-sm text-slate-800 md:text-base dark:text-slate-400"
          >
            <p>{t("about-p1")}</p>
            <p>{t("about-p2")}</p>
            <p>{t("about-p3")}</p>
            <p>{t("about-p4")}</p>
            <p>{t("hobbies-p1")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
