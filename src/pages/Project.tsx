import { useSearchParams } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTech = searchParams.get("tech");

  // a list of every tool, with no repeats
  const allTech = [...new Set(projects.flatMap((project) => project.tech))];

  // if a tool is selected, keep only the projects that use it
  const shownProjects = selectedTech
    ? projects.filter((project) => project.tech.includes(selectedTech))
    : projects;

  return (
    <div>
      <h1 className="text-5xl font-bold">Projects</h1>

      <div className="mt-6 mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setSearchParams({})}
          className={`rounded-full px-5 py-2 ${
            !selectedTech ? "bg-teal-400 text-zinc-950" : "border border-zinc-700"
          }`}
        >
          All
        </button>

        {allTech.map((item) => (
          <button
            key={item}
            onClick={() => setSearchParams({ tech: item })}
            className={`rounded-full px-5 py-2 ${
              selectedTech === item ? "bg-teal-400 text-zinc-950" : "border border-zinc-700"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shownProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;