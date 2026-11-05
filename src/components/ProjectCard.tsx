import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

function ProjectCard({ project }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-zinc-400">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-teal-400"
          >
            {item}
          </span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="font-medium hover:text-teal-400">
        View details →
      </Link>
    </article>
  );
}

export default ProjectCard;