import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-teal-400">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/projects" className="text-zinc-400 hover:text-white">
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-5xl font-bold">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-400">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-teal-400"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        <a href={project.liveUrl} className="rounded-lg bg-teal-400 px-6 py-3 font-medium text-zinc-950">
          Live site
        </a>
        <a href={project.codeUrl} className="rounded-lg border border-zinc-700 px-6 py-3 font-medium">
          Code
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail;