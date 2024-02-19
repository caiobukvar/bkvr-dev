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

export default function ProjectsSummary() {
  const [projects, setProjects] = useState<Projects[]>(repos);
  const [filteredProjects, setFilteredProjects] = useState<Projects[]>(repos);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [projects, filter]);

  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-16 p-4 mt-12">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <Blocks />
          <h3 className="text-2xl font-bold">My projects:</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder="Filter projects by name..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=" bg-transparent rounded-md py-2 text-xl font-semibold tracking-tight text-lime-600 placeholder:text-slate-500 outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[450px] gap-6">
          {filteredProjects.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
