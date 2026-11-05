const steps = [
  {
    title: "HTML and CSS",
    text: "I built my first pages and learned how layouts work.",
  },
  {
    title: "tailwindcss",
    text: "Change my design to tailwindcss.",
  },
  {
    title: "JavaScript",
    text: "I made pages that react to clicks and to data.",
  },
  {
    title: "TypeScript",
    text: "I added types to catch mistakes early.",
  },
  {
    title: "React",
    text: "I built apps with components and state.",
  },
];

function About() {
  return (
    <div>
      <h1 className="text-5xl font-bold">About me</h1>

      <div className="mt-8 flex max-w-3xl flex-col gap-5 text-lg text-muted">
        <p>
          I am a full-stack web development student in Ethiopia. I love turning
          ideas into websites that are simple and easy to use.
        </p>
        <p>
          I started with HTML and CSS, then JavaScript, and now I build apps
          with React and TypeScript. I learn best by building real projects.
        </p>
      </div>

      <div className="mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-card p-5">
          <p className="text-xl font-bold text-main">Web apps</p>
          <p className="text-sm text-muted">React and TypeScript</p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-5">
          <p className="text-xl font-bold text-main">UI</p>
          <p className="text-sm text-muted">Clean, simple design</p>
        </div>
        <div className="rounded-2xl border border-line bg-card p-5">
          <p className="text-xl font-bold text-main">Teamwork</p>
          <p className="text-sm text-muted">Learning with others</p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold">My learning path</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative border-t-2 border-line pt-6"
            >
              <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full bg-accent" />
              <p className="text-sm font-medium text-accent">0{index + 1}</p>
              <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-muted">{step.text}</p>
              {index === steps.length - 1 && (
                <span className="mt-3 inline-block rounded-full border border-edge px-3 py-1 text-xs text-accent">
                  Learning now
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
