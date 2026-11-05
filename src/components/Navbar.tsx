import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "border-b-2 border-teal-400 pb-1 text-teal-400"
      : "border-b-2 border-transparent pb-1 text-zinc-400 hover:text-white";

  return (
    <header className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
      <NavLink to="/" className="text-lg font-bold text-white">
        Ahlam Nuru
      </NavLink>

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
    </header>
  );
}

export default Navbar;