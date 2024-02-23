/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import About from "./components/About";
import Experience from "./components/Experience";
import ProjectsSummary from "./components/ProjectsSummary";
import Socials from "./components/Socials";
import Avatar from "/public/images/avatar2.png";
import Head from "next/head";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: "Caio Bukvar's Portfolio",
    description: "Software Developer Portfolio",
    keywords: ["NextJS", "React", "TailwindCSS", "Javascript"],
    robots: {
      googleBot: {
        index: true,
      },
    },
    metadataBase: new URL("https://bkvr.dev.br"),
    openGraph: {
      images: "/opengraph-image.png",
    },
  };
}

export default function Home() {
  return (
    <main>
      <Head>
        <title>Caio Bukvar's Portfolio</title>
        <meta property="og:title" content="Caio Bukvar's Portfolio" />
        <meta
          property="og:description"
          content="Software Developer Portfolio"
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:url" content="https://bkvr.dev.br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Caio Bukvar's Portfolio" />
      </Head>

      <section className="mt-12 flex min-h-screen flex-col items-center gap-6 ">
        <div className="flex flex-col items-center gap-2 text-center">
          <Image
            src={Avatar}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-md shadow-sm shadow-lime-600"
          />

          <div>
            <h1 className="animate-pulse text-5xl font-bold tracking-tight text-lime-500 hover:text-lime-400 ">{`<BKVR />`}</h1>
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
          Work experience
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 opacity-10" />
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
          Personal projects
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-full bg-gradient-to-b from-lime-600 opacity-10" />
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
