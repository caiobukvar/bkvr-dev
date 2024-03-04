"use client";

import { Blocks, Briefcase, Contact, Rocket } from "lucide-react";
import Link from "next/link";

interface NavbarTranslations {
  about: string;
  experience: string;
  projects: string;
  contact: string;
}
interface Props {
  navbarTranslations: NavbarTranslations;
}

export default function Navbar({ navbarTranslations }: Props) {
  const { about, experience, projects, contact } = navbarTranslations;

  return (
    <div
      className="sticky top-0 z-10 flex w-full items-center justify-center gap-8 
     bg-slate-300 p-5 text-sm tracking-tight text-slate-600 dark:bg-slate-700 dark:text-lime-600
      "
    >
      <Link
        href="/"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-slate-800
        hover:underline focus:text-slate-400 focus:underline
          md:gap-2 dark:hover:text-lime-500`}
      >
        <Contact />
        <p className="hidden md:block">{about}</p>
      </Link>
      <Link
        href="#experience"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-slate-800 hover:underline
        focus:text-slate-400 focus:underline
        md:gap-2 dark:hover:text-lime-500`}
      >
        <Briefcase />
        <p className="hidden md:block">{experience}</p>
      </Link>
      <Link
        href="#projects"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-slate-800 hover:underline
        focus:text-slate-400 focus:underline
        md:gap-2 dark:hover:text-lime-500`}
      >
        {" "}
        <Blocks />
        <p className="hidden md:block">{projects}</p>
      </Link>
      <Link
        href="#contact"
        className={`flex items-center gap-10 rounded-sm p-2 outline-none hover:text-slate-800 hover:underline
        focus:underline md:gap-2
         dark:hover:text-lime-500`}
      >
        <Rocket />
        <p className="hidden md:block">{contact}</p>
      </Link>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 opacity-10" />
    </div>
  );
}
