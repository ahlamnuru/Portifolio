const steps = ["HTML and CSS", "JavaScript", "React", "TypeScript", "React Router"];

function About() {
  return (
    <div>
      <h1 className="text-5xl font-bold">About me</h1>

      <div className="mt-8 flex flex-wrap gap-10">
        <div className="flex flex-1 basis-96 flex-col gap-5 text-lg text-zinc-400">
          <p>
            I am a full-stack web development student in Ethiopia. I love
            turning ideas into websites that are simple and easy to use.
          </p>
          <p>
            I started with HTML and CSS, then JavaScript, and now I build apps
            with React and TypeScript. I learn best by building real projects.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xl font-bold text-white">Web apps</p>
              <p className="text-sm">React and TypeScript</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xl font-bold text-white">UI</p>
              <p className="text-sm">Clean, simple design</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-xl font-bold text-white">Teamwork</p>
              <p className="text-sm">Learning with others</p>
            </div>
          </div>
        </div>

        <div className="flex-1 basis-80 rounded-2xl border border-zinc-800 bg-zinc-900 p-7">
          <h2 className="mb-4 text-2xl font-bold">My learning path</h2>
          {steps.map((step) => (
            <div
              key={step}
              className="flex items-center gap-4 border-t border-zinc-800 py-3"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;