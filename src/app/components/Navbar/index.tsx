"use client";

import { Blocks, Briefcase, Contact, Rocket } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(req: any) {
  const path = usePathname();

  return (
    <div className="flex w-full align-center justify-center md:justify-start lg:justify-start p-5 gap-5 text-sm bg-slate-700 sticky top-0 z-10 tracking-tight">
      <Link
        href="/"
        className={`flex gap-10 md:gap-2 items-center hover:text-lime-400 hover:underline hover:decoration-lime-600 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/" ? "text-lime-500" : ""
        }`}
      >
        <Contact />
        <p className="hidden md:block">About me</p>
      </Link>
      <Link
        href="#experience"
        className={`flex gap-10 md:gap-2 items-center hover:text-lime-400 hover:underline hover:decoration-lime-600 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/experience" ? "text-lime-500" : ""
        }`}
      >
        <Briefcase />
        <p className="hidden md:block">Experience</p>
      </Link>
      <Link
        href="#projects"
        className={`flex gap-10 md:gap-2 items-center hover:text-lime-400 hover:underline hover:decoration-lime-600 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/projects" ? "text-lime-500" : ""
        }`}
      >
        {" "}
        <Blocks />
        <p className="hidden md:block">My projects</p>
      </Link>
      <Link
        href="#social"
        className={`flex gap-10 md:gap-2 items-center hover:text-lime-400 hover:underline hover:decoration-lime-600 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/social" ? "text-lime-500" : ""
        }`}
      >
        <Rocket />
        <p className="hidden md:block">Social</p>
      </Link>

      <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-tl from-lime-600 to-black pointer-events-none opacity-10" />
    </div>
  );
}
