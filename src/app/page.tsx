import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsSummary from "./components/ProjectsSummary";
import Socials from "./components/Socials";
import Avatar from "/public/images/avatar2.png";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col min-h-screen items-center gap-6 mt-12 ">
        <div className="flex flex-col gap-2 items-center text-center">
          <Image
            src={Avatar}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-md shadow-sm shadow-lime-600"
          />

          <div>
            <h1 className="text-5xl text-lime-500 font-bold tracking-tight animate-pulse hover:text-lime-400 ">{`<BKVR />`}</h1>
          </div>
        </div>

        <About />

        <Link
          href="#experience"
          className="relative bg-slate-700 hover:bg-slate-600 outline-none shadow-sm 
          text-lime-600 text-md rounded-md p-3 animate-slide-in-left
            hover:ring-2 hover:ring-lime-500 hover:text-lime-500 hover:underline
            focus-visible:ring-2 focus-visible:ring-lime-600 shadow-lime-700"
        >
          Work experience
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 pointer-events-none opacity-10" />
        </Link>
      </section>

      <section
        className="flex flex-col min-h-screen items-center gap-6"
        id="experience"
      >
        <Experience />

        <Link
          href="#projects"
          className="relative bg-slate-700 hover:bg-slate-600 outline-none shadow-sm 
          text-lime-600 text-md rounded-md p-3 animate-slide-in-left
            hover:ring-2 hover:ring-lime-500 hover:text-lime-500 hover:underline
            focus-visible:ring-2 focus-visible:ring-lime-600 shadow-lime-700"
        >
          Personal projects
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 pointer-events-none opacity-10" />
        </Link>
      </section>

      <section
        className="flex flex-col min-h-screen items-center"
        id="projects"
      >
        <ProjectsSummary />
      </section>

      <section className="flex flex-col  min-h-screen items-center" id="social">
        <Socials />
      </section>
    </main>
  );
}
