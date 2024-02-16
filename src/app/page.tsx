import Image from "next/image";
import About from "./components/About";
import ProjectsSummary from "./components/ProjectsSummary";
import Avatar from "/public/AvatarMaker.svg";
import Link from "next/link";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col min-h-screen items-center p-6 gap-6">
        <Image
          src={Avatar}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h1 className="text-5xl text-lime-500 font-bold animate-pulse">{`<BKVR />`}</h1>
        <About />

        <Link
          href="#projects"
          className="bg-slate-700 hover:bg-slate-600 outline-none hover:ring-2 hover:ring-lime-600 hover:underline text-lime-600 text-md rounded-md p-3 animate-slide-in-left focus-visible:ring-2 focus-visible:ring-lime-600"
        >
          Learn more
        </Link>
      </section>

      <section
        className="flex flex-col min-h-screen items-center p-6 gap-6"
        id="projects"
      >
        <ProjectsSummary />
      </section>

      <section
        className="flex flex-col min-h-screen items-center p-6 gap-6"
        id="social"
      >
        <Socials />
      </section>
    </main>
  );
}
