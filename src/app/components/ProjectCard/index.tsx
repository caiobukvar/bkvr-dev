import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Link, X } from "lucide-react";
import Github from "/public/images/github-logo.svg";

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
      <Dialog.Trigger className="flex flex-col justify-between bg-slate-800 p-5 gap-3 w-full rounded-md overflow-hidden relative outline-none hover:ring-2 hover:ring-lime-600 text-left focus-visible:ring-2 focus-visible:ring-lime-600">
        <div className="flex flex-col gap-2">
          <div
            className={`rounded-md p-[1px] text-xs text-slate-200 w-[90px] text-center ${
              project.status === "In progress"
                ? "bg-orange-600"
                : "bg-green-600"
            }`}
          >
            {project.status}
          </div>
          <p className="text-xl text-lime-600">{project.name}</p>
        </div>

        <Image
          src={project.thumbnail}
          width={300}
          height={250}
          alt="thumb"
          className="rounded-sm self-center"
        />

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="rounded-md p-1 bg-slate-400 text-slate-800 text-xs"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-lime-600 to-black/0 pointer-events-none opacity-10" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed inset-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[640px] max-h-[70vh] h-full w-[90vw] md:w-full overflow-auto bg-slate-800 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <div className="flex flex-col w-full min-h-full h-full p-5 gap-5">
            <div className="flex gap-10 items-center">
              <p className="text-2xl text-lime-600 font-bold">{project.name}</p>
              <p
                className={`border-l-[2px] border-l-lime-600 p-2 text-sm text-slate-200 rounded-r-md ${
                  project.status === "In progress"
                    ? "bg-orange-500"
                    : "bg-green-500"
                }`}
              >
                {project.status}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={project.githubURL}
                target="_blank"
                className="hover:border-b-[1px] hover:border-b-lime-600"
              >
                <Image src={Github} alt="github" width={24} height={24} />
              </a>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  className="border-b-[1px] border-b-transparent hover:border-b-[1px] hover:border-b-lime-600"
                >
                  <Link width={24} height={24} />
                </a>
              )}
            </div>

            <p className="text-md">{project.description}</p>

            <Image
              src={project.thumbnail}
              width={500}
              height={300}
              alt="thumb"
              className="rounded-md self-center"
            />

            <div className="flex flex-col w-full gap-2">
              <p className="text-lg text-slate-600 font-bold">
                Technologies used:
              </p>
              <div className="flex flex-wrap gap-2 pb-5">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="rounded-md p-1 bg-slate-400 text-slate-800 text-xs"
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
