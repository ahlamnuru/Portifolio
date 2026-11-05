import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // for now we only show a thank you message, there is no backend yet
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">Let us talk</h1>

      <div className="mt-8 flex flex-wrap gap-10">
        <div className="flex flex-1 basis-80 flex-col gap-4 text-lg text-zinc-400">
          <p>Have a question or a project in mind? Send me a message.</p>
          <p className="text-white">youremail@example.com</p>
          <p>Location: Ethiopia</p>
          <div className="flex gap-5 text-base">
            <a
              href="https://github.com/ahlamnuru"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-400"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-teal-400">
              LinkedIn
            </a>
            <a href="#" className="hover:text-teal-400">
              Telegram
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 basis-96 flex-col gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-8"
        >
          {sent && (
            <p className="rounded-lg bg-teal-400/10 p-3 text-teal-400">
              Thank you! Your message was sent.
            </p>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-zinc-400">
              Your name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-zinc-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border border-zinc-700 bg-zinc-950 px-4 text-white"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white"
            />
          </div>

          <button
            type="submit"
            className="h-12 rounded-lg bg-teal-400 font-medium text-zinc-950"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;