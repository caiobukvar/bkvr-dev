"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(req: any) {
  const path = usePathname();

  return (
    <div className="flex w-full align-center justify-center md:justify-start lg:justify-start p-5 gap-5 bg-slate-800 sticky top-0 z-10">
      <Link
        href="/"
        className={`hover:text-lime-400 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/" ? "text-lime-500" : ""
        }`}
      >
        Home
      </Link>
      <Link
        href="#projects"
        className={`hover:text-lime-400 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/projects" ? "text-lime-500" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="#social"
        className={`hover:text-lime-400 outline-none rounded-sm p-2 focus:text-lime-800 ${
          path === "/social" ? "text-lime-500" : ""
        }`}
      >
        Social
      </Link>
    </div>
  );
}
