interface ProjectCardProps {
  project: {
    id: number;
    name: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <button className="flex flex-col justify-between bg-slate-800 p-5 gap-3 w-[300px] rounded-md overflow-hidden relative outline-none hover:ring-2 hover:ring-lime-600 text-left focus-visible:ring-2 focus-visible:ring-lime-400">
      <p>Content here</p>
      <p>{project.name}</p>
    </button>
  );
}
