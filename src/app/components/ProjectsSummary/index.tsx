"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard";

export default function ProjectsSummary() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/caiobukvar/repos`
        );
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
          setFilteredProjects(data);
        } else {
          console.error("Failed to fetch projects:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const filtered = projects.filter((project) =>
      project.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProjects(filtered);
  }, [projects, filter]);

  return (
    <div className="flex flex-col w-full max-w-screen-lg gap-16 p-4 animate-slide-in-left">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">My projects:</h3>
        <div>
          <input
            type="text"
            placeholder="Filter projects by name..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className=" bg-transparent rounded-md py-2 text-xl font-semibold tracking-tight text-lime-600 placeholder:text-slate-500 outline-none"
          />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6">
          {filteredProjects.map((project) => {
            return <ProjectCard project={project} key={project} />;
          })}
        </div>
      </div>
    </div>
  );
}
