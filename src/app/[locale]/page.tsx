import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import Experience from "../components/Experience";
import ProjectsSummary from "../components/ProjectsSummary";
import Socials from "../components/Socials";
import Avatar from "/public/images/avatar2.png";
import IntlBar from "../components/IntlBar";

export default function Home() {
  const t = useTranslations("App");

  return (
    <main>
      <section className="flex min-h-screen flex-col items-center gap-6 ">
        <IntlBar />
        <div className="flex flex-col items-center gap-2 text-center">
          <Image
            src={Avatar}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-md shadow-sm shadow-lime-600"
          />

          <div>
            <h1
              className="animate-pulse text-5xl font-bold tracking-tight
             text-lime-500 hover:text-lime-400 "
            >{`<BKVR />`}</h1>
          </div>
        </div>

        <About />

        <Link
          href="#experience"
          className="text-md relative animate-slide-in-left rounded-md bg-slate-700 
          p-3 text-lime-600 shadow-sm shadow-lime-700 outline-none
            hover:bg-slate-600 hover:text-lime-500 hover:underline hover:ring-2
            hover:ring-lime-500 focus-visible:ring-2 focus-visible:ring-lime-600"
        >
          {t("button-1")}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full rounded-md bg-gradient-to-b from-lime-600 opacity-10" />
        </Link>
      </section>

      <section
        className="flex min-h-screen flex-col items-center gap-6"
        id="experience"
      >
        <Experience />

        <Link
          href="#projects"
          className="text-md relative animate-slide-in-left rounded-md bg-slate-700 
          p-3 text-lime-600 shadow-sm shadow-lime-700 outline-none
            hover:bg-slate-600 hover:text-lime-500 hover:underline hover:ring-2
            hover:ring-lime-500 focus-visible:ring-2 focus-visible:ring-lime-600"
        >
          {t("button-2")}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full rounded-md bg-gradient-to-b from-lime-600 opacity-10" />
        </Link>
      </section>

      <section
        className="flex min-h-screen flex-col items-center"
        id="projects"
      >
        <ProjectsSummary />
      </section>

      <section className="flex min-h-screen  flex-col items-center" id="social">
        <Socials />
      </section>
    </main>
  );
}
