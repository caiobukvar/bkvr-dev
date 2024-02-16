import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    url: string;
    githubURL: string;
    thumbnail: string;
    tags: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <button className="flex flex-col justify-between bg-slate-800 p-5 gap-3 w-full rounded-md overflow-hidden relative outline-none hover:ring-2 hover:ring-lime-600 text-left focus-visible:ring-2 focus-visible:ring-lime-600">
      <p className="text-lg text-lime-600">{project.name}</p>

      <Image
        src={project.thumbnail}
        width={300}
        height={250}
        alt="thumb"
        className="rounded-sm"
      />

      <div className="flex flex-wrap gap-3">
        {project.tags.map((tag) => {
          return (
            <div
              key={tag}
              className="rounded-md p-2 bg-slate-400 text-slate-800 text-xs"
            >
              {tag}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-lime-600 to-black/0 pointer-events-none opacity-10" />
    </button>
  );
}
