import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiGit,
  SiVite,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];
function Skills() {

  const allSkills = [...skills, ...skills];
  return (
    <div className="overflow-hidden border-y border-zinc-800 py-6">
      <div className="marquee-track flex w-max">
        {allSkills.map((skill, index) => (
          <div
            key={index}
            className="mr-12 flex items-center gap-3 text-lg text-zinc-400"
          >
            <skill.icon className="text-2xl text-teal-400" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;