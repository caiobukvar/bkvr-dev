"use client";
import repos from "@/lib/repos.json";
import { Blocks } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";
interface Projects {
  id: number;
  name: string;
  description: string;
  url: string;
  githubURL: string;
  thumbnail: string;
  tags: string[];
  status: string;
}
interface ProjectSummaryTranslations {
  title: string;
  inputPlaceholder: string;
}

interface Props {
  projectSummaryTranslations: ProjectSummaryTranslations;
}

export default function ProjectsSummary({ projectSummaryTranslations }: Props) {
  const { title, inputPlaceholder } = projectSummaryTranslations;
  const [projects, setProjects] = useState<Projects[]>(repos);
  const [filteredProjects, setFilteredProjects] = useState<Projects[]>(repos);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredProjects(filtered);
  }, [projects, filter]);

  return (
    <div className="mt-24 flex w-full max-w-screen-lg flex-col gap-16 p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Blocks />
          <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder={inputPlaceholder}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=" rounded-md bg-transparent py-2 text-xl font-semibold tracking-tight text-lime-600 outline-none placeholder:text-slate-600"
          />
        </div>
        <div className="grid auto-rows-[280px] gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
