import { Link } from "react-router-dom";
import { useState } from "react";

const base =
  "px-3 py-2 rounded-xl transition hover:bg-white/5";

export default function Header() {
  const [open, setOpen] = useState(false);

  const Item = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link to={{ pathname: "/", hash: to }} className={base} onClick={() => setOpen(false)}>
      {children}
    </Link>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-neutral-950 text-white border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">

        <nav className="hidden md:flex items-center gap-1">
          <Item to="#home">// home</Item>
          <Item to="#expertise">// expertise</Item>
          <Item to="#work">// work</Item>
          <Item to="#experience">// experience</Item>
          <Item to="#contact">// contact</Item>
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
          <nav className="flex flex-col gap-1 pt-2">
            <Item to="#home">Home</Item>
            <Item to="#expertise">Expertise</Item>
            <Item to="#work">Work</Item>
            <Item to="#experience">Experience</Item>
            <Item to="#contact">Contact</Item>
          </nav>
        </div>
      )}
    </header>
  );
}
