import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-6 py-6 text-sm text-zinc-400">
          <span>© 2026 Ahlam Nuru</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;