import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectsSummary from "../components/ProjectsSummary";
import Socials from "../components/Socials";
import Avatar from "/public/images/avatar2.png";
import { ChevronDown } from "lucide-react";
import VoluntaryWork from "../components/VoluntaryWork";
import Achievements from "../components/Achievements";

export default function Home() {
  const t = useTranslations("App");
  const p = useTranslations("Projects");
  const s = useTranslations("Socials");

  const projectSummaryTranslations = {
    title: `${p("title")}`,
    inputPlaceholder: `${p("input.placeholder")}`,
    projectTechs: `${p("project-techs")}`,
  };

  const socialsTranslations = {
    title: `${s("title")}`,
    findMe: `${s("find-me")}`,
    formTitle: `${s("form.title")}`,
    formInputPlaceholder: `${s("form.input-placeholder")}`,
    formTextareaPlaceholder: `${s("form.textarea-placeholder")}`,
    formButton: `${s("form.button")}`,
    tSuccessMsg: `${s("toasts.success.msg")}`,
    tErrorMsg: `${s("toasts.error.content.msg")}`,
    tErrorDesc: `${s("toasts.error.content.description")}`,
    tFailMsg: `${s("toasts.error.content.description")}`,
  };

  return (
    <main className="dark:text-slate:400 text-slate-800">
      <section className="mt-12 flex flex-col items-center gap-6 ">
        <div className="flex flex-col items-center gap-4 text-center">
          <Image
            src={Avatar}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-md shadow-md shadow-slate-800  dark:shadow-lime-600"
          />

          <div>
            <h1
              className="animate-pulse text-5xl font-bold tracking-tight
              text-slate-700 dark:text-lime-500"
            >{`<BKVR />`}</h1>
          </div>
        </div>

        <About />

        <Achievements />

        <Link
          href="/#experience"
          className="md:text-md relative flex items-center justify-center gap-1 rounded-md bg-slate-300 p-3 text-sm text-slate-600 shadow-sm shadow-slate-700 outline-none 
          hover:bg-slate-200 hover:text-slate-500 hover:ring-2 hover:ring-slate-500 
            focus-visible:ring-2 focus-visible:ring-lime-600
          dark:bg-slate-700 dark:text-lime-600 dark:shadow-lime-700 dark:hover:bg-slate-600 dark:hover:text-lime-500 dark:hover:ring-lime-500"
        >
          <ChevronDown />
          {t("button-1")}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full rounded-md bg-gradient-to-b from-lime-600 opacity-10" />
        </Link>
      </section>

      <section className="flex flex-col items-center gap-6" id="experience">
        <Experience />

        <VoluntaryWork />

        <Link
          href="/#projects"
          className="md:text-md relative flex items-center justify-center gap-1 rounded-md bg-slate-300 p-3 text-sm text-slate-600 shadow-sm shadow-slate-700 outline-none 
        hover:bg-slate-200 hover:text-slate-500 hover:ring-2 hover:ring-slate-500 
          focus-visible:ring-2 focus-visible:ring-lime-600
        dark:bg-slate-700 dark:text-lime-600 dark:shadow-lime-700 dark:hover:bg-slate-600 dark:hover:text-lime-500 dark:hover:ring-lime-500"
        >
          <ChevronDown />
          {t("button-2")}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full rounded-md bg-gradient-to-b from-lime-600 opacity-10" />
        </Link>
      </section>

      <section className="flex flex-col items-center gap-8" id="projects">
        <ProjectsSummary
          projectSummaryTranslations={projectSummaryTranslations}
        />
      </section>

      <section className="flex flex-col items-center" id="contact">
        <Socials socialsTranslations={socialsTranslations} />
      </section>
    </main>
  );
}
