import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};


const stackAtual = [
  { nome: "React", cor: "bg-sky-500" },
  { nome: "TypeScript", cor: "bg-blue-600" },
  { nome: "Tailwind", cor: "bg-cyan-500" },
  { nome: "Vite", cor: "bg-purple-500" },
  { nome: "Framer Motion", cor: "bg-pink-500" },
  { nome: "Lucide", cor: "bg-neutral-800" },
];

export default function Footer() {
  return (
    <motion.footer
      {...fadeInUp}
      id="final"
      className="mt-32 mb-10 px-4 text-center text-sm text-neutral-600 dark:text-neutral-500"
    >
      <p>
        Aberta a colaborações freelance com propósito. Se você tem um projeto especial e acha que podemos construir algo incrível juntos, vou adorar ouvir sua ideia. Me mande um e-mail — vamos conversar!
      </p>
      <p className="mt-1">
        Contato:{" "}
        <span className="text-black dark:text-white">
          <a
            href="mailto:melissapcosta@gmail.com"
            className="underline hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            melissapcosta@gmail.com
          </a>
        </span>
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://github.com/Melpscosta"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-neutral-200 dark:bg-neutral-800 px-5 py-2 text-black dark:text-white transition hover:bg-neutral-300 dark:hover:bg-neutral-700"
        >
          <Github size={18} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/melissa-pereira-da-costa-b3a2a519a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-500"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>

      {/* Stack atual */}
      <div className="mt-16">
        <h3 className="text-sm font-semibold mb-3 text-neutral-700 dark:text-neutral-300">Stacks usadas neste portifólio</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {stackAtual.map((item, index) => (
            <span
              key={index}
              className={`text-xs px-3 py-1 rounded-full text-white ${item.cor}`}
            >
              {item.nome}
            </span>
          ))}
        </div>
      </div>

    </motion.footer>
  );
}
