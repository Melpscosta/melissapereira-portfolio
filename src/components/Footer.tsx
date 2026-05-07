import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stackAtual = ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion", "Lucide"];

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      id="final"
      className="relative pb-16 px-4"
    >
      <div className="relative max-w-4xl mx-auto rounded-3xl border border-white/10 bg-ink-700/70 overflow-hidden p-8 md:p-14 text-center">
        {/* glow de fundo */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-crimson-600/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <motion.h2
          variants={fadeUp}
          className="type-section-title leading-tight relative"
        >
          Contato
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-white/60 mt-5 max-w-xl mx-auto text-sm md:text-base leading-relaxed relative"
        >
          Tem um projeto especial em mente? Vou adorar ouvir sua ideia.
          Me mande um e-mail — podemos construir algo incrível juntas.
        </motion.p>

        <motion.div variants={fadeUp} className="relative mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:melissapcosta@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-crimson-600 hover:bg-crimson-500 text-white text-sm font-medium transition-all duration-300 shadow-accent hover:shadow-accent-lg focus-ring"
          >
            <Mail size={16} />
            melissapcosta@gmail.com
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="relative mt-6 flex justify-center gap-3">
          <a
            href="https://github.com/Melpscosta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/30 text-sm transition focus-ring"
          >
            <Github size={15} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/melissa-pereira-da-costa-b3a2a519a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/30 text-sm transition focus-ring"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
        </motion.div>
      </div>

      {/* Rodapé inferior */}
      <div className="max-w-4xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />
          <span className="font-mono">© {new Date().getFullYear()} Melissa Pereira da Costa</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center">
          <span className="font-mono text-white/30 tracking-wider">Construído com</span>
          {stackAtual.map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span className="text-white/70 font-mono">{s}</span>
              {i < stackAtual.length - 1 && <span className="text-white/20">·</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
