import { Link } from "react-router-dom";
import Skills from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const featured = projects.filter((project) =>
  ["rest-countries", "multi-step-form", "product-list-with-cart"].includes(
    project.id
  )
);

function Home() {
  return (
    <div>
      <section className="flex max-w-3xl flex-col gap-6 py-10">
        <p className="text-sm font-medium tracking-widest text-teal-400">
          FULL-STACK DEVELOPER IN TRAINING
        </p>
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Hi, I am Ahlam Nuru. I build clean web apps with React.
        </h1>
        <p className="text-lg text-zinc-400">
          I turn ideas into simple, easy-to-use websites. Based in Ethiopia.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-teal-400 px-7 py-3 font-medium text-zinc-950"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-zinc-700 px-7 py-3 font-medium"
          >
            Contact me
          </Link>
        </div>
      </section>

      <div className="mt-10">
        <Skills />
      </div>

      <section className="mt-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Featured projects</h2>
          <Link to="/projects" className="text-teal-400">
            See all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;