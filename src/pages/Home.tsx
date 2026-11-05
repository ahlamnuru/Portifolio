import Skills from "../components/Skills";

function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Hi, I'm Ahlam</h1>
      <p className="mt-4 text-zinc-400">I'm A Passionate Web Developer and learner.</p>
      <div className="mt-12">
        <Skills />
      </div>
    </div>
  );
}

export default Home;