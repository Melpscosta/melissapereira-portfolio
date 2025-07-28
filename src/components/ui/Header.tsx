import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 text-sm">
      <motion.div
        className="bg-black/80 backdrop-blur flex justify-between items-center px-6 max-w-6xl mx-auto py-4 font-semibold tracking-wider"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navegação */}
        <nav className="flex gap-6">
          <a href="#home" className="hover:text-pink-400 transition">HOME </a>
          <a href="#projetos" className="hover:text-pink-400 transition">PROJETOS </a>
          <a href="#exp" className="hover:text-pink-400 transition">EXPERIÊNCIA </a>
          <a href="#final" className="hover:text-pink-400 transition">FINAL</a>
        </nav>

        {/* Botão de Toggle sempre visível */}
      </motion.div>
    </header>
  );
}
