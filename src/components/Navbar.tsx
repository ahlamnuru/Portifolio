import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-2 border-accent pb-1 text-accent"
      : "border-b-2 border-transparent pb-1 text-muted hover:text-main";

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-12 lg:px-20">
      <NavLink to="/" className="text-lg font-bold text-main">
        Ahlam Nuru
      </NavLink>

      <div className="flex items-center gap-6">
        <nav className="flex gap-6">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;