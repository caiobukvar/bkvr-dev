import Image from "next/image";
import About from "./components/About";
import ProjectsSummary from "./components/ProjectsSummary";
import Avatar from "/public/AvatarMaker.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section
        className="flex flex-col min-h-screen items-center p-6 gap-6"
        id="about"
      >
        <Image
          src={Avatar}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <h1 className="text-5xl text-lime-500 font-bold">{`<BKVR />`}</h1>
        <About />

        <Link
          href="#projects"
          className="bg-slate-700 hover:bg-slate-600 hover:outline hover:outline-2 hover:outline-lime-600 hover:underline text-lime-600 text-md rounded-md p-3 animate-slide-in-left"
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
    </main>
  );
}
