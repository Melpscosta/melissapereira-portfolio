import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "#home", label: "Início" },
  { to: "#about", label: "Sobre" },
  { to: "#work", label: "Projetos" },
  { to: "#contact", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#home");
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links.map((l) => l.to.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-[999] transition-all duration-500",
        scrolled
          ? "glass border-b border-white/10"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-5 h-16 flex items-center justify-end gap-2">
        <Link to="/" className="sr-only">
          Página inicial
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const isActive = active === l.to && pathname === "/";
            return (
              <Link
                key={l.to}
                to={{ pathname: "/", hash: l.to }}
                className="relative px-3 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/65 hover:text-white transition-colors focus-ring rounded-md"
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-crimson-600 to-crimson-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 glass"
          >
            <nav className="flex flex-col px-5 py-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={{ pathname: "/", hash: l.to }}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm text-white/80 hover:text-white transition border-b border-white/5 last:border-0"
                >
                  <span className="text-crimson-500 mr-2">/</span>
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
