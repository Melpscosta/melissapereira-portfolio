import { NavLink } from "react-router-dom";
import { useState } from "react";

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-xl transition ${isActive ? "bg-white/10" : "hover:bg-white/5"}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="font-bold tracking-wide">Melissa</NavLink>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls}>// home</NavLink>
          <NavLink to="/expertise" className={linkCls}>// expertise</NavLink>
          <NavLink to="/work" className={linkCls}>// work</NavLink>
          <NavLink to="/experience" className={linkCls}>// experience</NavLink>
          <NavLink to="/contact" className={linkCls}>// contact</NavLink>
        </nav>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2" onClick={() => setOpen(false)}>
            <NavLink to="/" className={linkCls}>Home</NavLink>
            <NavLink to="/expertise" className={linkCls}>Expertise</NavLink>
            <NavLink to="/work" className={linkCls}>Work</NavLink>
            <NavLink to="/experience" className={linkCls}>Experience</NavLink>
            <NavLink to="/contact" className={linkCls}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
