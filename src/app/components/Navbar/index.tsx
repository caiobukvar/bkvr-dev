"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar(req: any) {
  const path = usePathname();

  return (
    <div className="flex w-full align-center p-6 gap-6 bg-slate-800">
      <Link
        href="/"
        className={`hover:text-lime-400 ${path === "/" ? "text-lime-500" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`hover:text-lime-400 ${
          path === "/projects" ? "text-lime-500" : ""
        }`}
      >
        Projects
      </Link>
      <Link
        href="/social"
        className={`hover:text-lime-400 ${
          path === "/social" ? "text-lime-500" : ""
        }`}
      >
        Social
      </Link>
    </div>
  );
}
