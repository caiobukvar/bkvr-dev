"use client";

import { Blocks, Briefcase, Contact, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(req: any) {
  const path = usePathname();

  return (
    <div
      className="flex w-full align-center justify-center text-sm p-5 gap-5 
     sticky top-0 z-10 tracking-tight bg-slate-700 text-lime-600
    md:justify-start lg:justify-start 
      "
    >
      <Link
        href="/"
        className={`flex gap-10 md:gap-2 items-center outline-none rounded-sm p-2
        hover:ring-lime-500 hover:text-lime-500 hover:underline
          focus:text-slate-400 focus:underline`}
      >
        <Contact />
        <p className="hidden md:block">About me</p>
      </Link>
      <Link
        href="#experience"
        className={`flex gap-10 md:gap-2 items-center outline-none rounded-sm p-2
        hover:ring-lime-500 hover:text-lime-500 hover:underline
        focus:text-slate-400 focus:underline`}
      >
        <Briefcase />
        <p className="hidden md:block">Experience</p>
      </Link>
      <Link
        href="#projects"
        className={`flex gap-10 md:gap-2 items-center outline-none rounded-sm p-2
        hover:ring-lime-500 hover:text-lime-500 hover:underline
        focus:text-slate-400 focus:underline`}
      >
        {" "}
        <Blocks />
        <p className="hidden md:block">My projects</p>
      </Link>
      <Link
        href="#social"
        className={`flex gap-10 md:gap-2 items-center outline-none rounded-sm p-2
        hover:ring-lime-500 hover:text-lime-500 hover:underline
         focus:underline`}
      >
        <Rocket />
        <p className="hidden md:block">Social</p>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 pointer-events-none opacity-10" />
    </div>
  );
}
