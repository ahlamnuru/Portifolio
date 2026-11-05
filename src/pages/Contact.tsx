import { useState, type FormEvent } from "react";

// paste your own formspree link here
const FORM_URL = "https://formspree.io/f/your-form-id";

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <h1 className="text-5xl font-bold">Let us talk</h1>

      <div className="mt-8 flex flex-wrap gap-10">
        <div className="flex flex-1 basis-80 flex-col gap-4 text-lg text-muted">
          <p>Have a question or a project in mind? Send me a message.</p>
          <p className="text-main">youremail@example.com</p>
          <p>Location: Ethiopia</p>
          <div className="flex gap-5 text-base">
            <a
              href="https://github.com/ahlamnuru"
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
            <a href="#" className="hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="hover:text-accent">
              Telegram
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-1 basis-96 flex-col gap-5 rounded-2xl border border-line bg-card p-8"
        >
          {status === "success" && (
            <p className="rounded-lg bg-teal-400/10 p-3 text-accent">
              Thank you! Your message was sent.
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="rounded-lg bg-red-500/10 p-3 text-red-500">
              Sorry, something went wrong. Please try again.
            </p>
          )}

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-muted">
              Your name
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 rounded-lg border border-edge bg-page px-4 text-main"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-lg border border-edge bg-page px-4 text-main"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 rounded-lg border border-edge bg-page px-4 py-3 text-main"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="h-12 rounded-lg bg-teal-400 font-medium text-zinc-950 disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;