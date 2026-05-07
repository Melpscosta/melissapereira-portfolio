import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/** Variantes do pai — necessário para os filhos saírem de `hidden` (senão ficam invisíveis). */
const contactContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const stackAtual = ["React", "TypeScript", "Tailwind", "Vite", "Framer Motion", "Lucide"];

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      variants={contactContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.06, margin: "0px 0px -40px 0px" }}
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-black pb-16 pt-14 px-4 sm:pt-16 md:pb-20 md:pt-20"
    >
      {/* Fundo: brilho + grelha suave (sem caixa / card em volta do conteúdo) */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[min(90%,640px)] -translate-x-1/2 rounded-full bg-crimson-600/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.h2 variants={fadeUp} className="type-section-title leading-tight">
          Contato
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base"
        >
          Tem um projeto especial em mente? Vou adorar ouvir sua ideia.
          Me mande um e-mail — podemos construir algo incrível juntas.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-crimson-500/90"
        >
          Entrar em contato
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="relative mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="mailto:melissapcosta@gmail.com"
            title="melissapcosta@gmail.com"
            aria-label="Abrir Gmail para enviar e-mail a melissapcosta@gmail.com"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-crimson-600 hover:bg-crimson-500 text-white text-sm font-medium transition-all duration-300 shadow-accent hover:shadow-accent-lg focus-ring"
          >
            <Mail size={16} aria-hidden />
            Gmail
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </a>
          <a
            href="https://github.com/Melpscosta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white/90 hover:text-white hover:border-white/30 hover:bg-white/[0.08] text-sm font-medium transition focus-ring"
          >
            <Github size={16} aria-hidden />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/melissa-pereira-da-costa-b3a2a519a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] text-white/90 hover:text-white hover:border-white/30 hover:bg-white/[0.08] text-sm font-medium transition focus-ring"
          >
            <Linkedin size={16} aria-hidden />
            LinkedIn
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-4 font-mono text-xs text-white/40">
          melissapcosta@gmail.com
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/40 border-t border-white/[0.06] pt-10">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-crimson-600" />
          <span className="font-mono">© {new Date().getFullYear()} Melissa Pereira da Costa</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 justify-center">
          <span className="font-mono text-white/30 tracking-wider">Construído com</span>
          {stackAtual.map((s, i) => (
            <span key={s} className="flex items-center gap-1">
              <span className="text-white/60 font-mono">{s}</span>
              {i < stackAtual.length - 1 && <span className="text-white/20">·</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
