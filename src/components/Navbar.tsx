import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({isActive}: {isActive: boolean }) => isActive ? "text-teal-400" : "text-zinc-400 hover:text-white";

  return (
    <header className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
      <NavLink to="/" className="text-lg font-bold text-white"> Whitney</NavLink>
    <nav className="flex gap-6">
      <NavLink to="/" end className={linkStyle}>Home</NavLink>
      <NavLink to="/about" className={linkStyle}>About</NavLink>
      <NavLink to="/crojects" className={linkStyle}>Projects</NavLink>
      <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
    </nav>
    </header>
  );
}

export default Navbar;