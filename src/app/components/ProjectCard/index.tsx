/* eslint-disable @next/next/no-img-element */
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Link as LinkIcon, X } from "lucide-react";
import Github from "/public/images/github-logo.svg";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    url: string;
    githubURL: string;
    thumbnail: string;
    tags: string[];
    status: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        className="relative flex w-full flex-col gap-6 overflow-hidden rounded-md 
          bg-slate-800 p-5 text-left outline-none
          hover:ring-2 hover:ring-lime-600 
          focus-visible:ring-2 focus-visible:ring-lime-600"
      >
        <div className="flex flex-col gap-2">
          <div
            className={`w-[90px] rounded-md p-[1px] text-center text-xs text-slate-200 ${
              project.status === "In progress"
                ? "bg-orange-600"
                : "bg-green-600"
            }`}
          >
            {project.status}
          </div>
          <p className="text-xl text-lime-600">{project.name}</p>
        </div>

        <img
          src={project.thumbnail}
          alt="thumb"
          className="h-[150px] w-full self-center rounded-sm"
        />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-lime-600 opacity-10" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60" />
        <Dialog.Content
          className="fixed inset-0 left-1/2 top-1/2 mt-12 flex h-full max-h-[70vh] w-[90vw] -translate-x-1/2
         -translate-y-1/2 flex-col overflow-auto rounded-md bg-slate-800 outline-none md:w-full md:max-w-[640px]"
        >
          <Dialog.Close className="absolute right-0 top-0 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex h-full min-h-full w-full flex-col gap-5 p-5">
            <div className="flex items-center gap-5 md:gap-10">
              <p className="w-1/2 text-xl font-bold text-lime-600 md:w-auto md:text-2xl">
                {project.name}
              </p>
              <p
                className={`rounded-r-md border-l-[2px] border-l-lime-600 p-2 text-sm text-slate-200 ${
                  project.status === "In progress"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
              >
                {project.status}
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href={project.githubURL}
                target="_blank"
                className="flex items-center gap-2 border-b-[2px] border-b-transparent
                hover:scale-105"
              >
                <Image src={Github} alt="github" width={24} height={24} />
                <span className="text-xs tracking-tighter text-slate-500">
                  github repo
                </span>
              </a>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="flex items-center gap-2 border-b-[2px] border-b-transparent
                  hover:scale-105"
                >
                  <LinkIcon width={24} height={24} />
                  <span className="text-xs tracking-tighter text-slate-500 ">
                    deploy
                  </span>
                </a>
              )}
            </div>

            <p className="text-md">{project.description}</p>

            <Link
              href={project.url ? project.url : project.githubURL}
              target="_blank"
              className="self-center rounded-md hover:ring-2 hover:ring-lime-600"
            >
              <Image
                src={project.thumbnail}
                width={500}
                height={300}
                alt="thumb"
                className="rounded-md"
              />
            </Link>

            <div className="flex w-full flex-col gap-2">
              <p className="text-lg font-bold text-slate-600">
                Technologies used:
              </p>
              <div className="flex flex-wrap gap-2 pb-5">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-md bg-slate-400 p-1 text-xs text-slate-800"
                  >
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
