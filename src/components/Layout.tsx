import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-page text-main">
      <Navbar />

      <main className="mx-auto w-full max-w-screen-2xl flex-1 px-6 py-10 md:px-12 lg:px-20">
        <Outlet />
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-screen-2xl flex-wrap justify-between gap-2 px-6 py-6 text-sm text-muted md:px-12 lg:px-20">
          <span>© 2026 Ahlam Nuru</span>
          <span>Built with React</span>
        </div>
      </footer>
    </div>
  );
}

export default Layout;