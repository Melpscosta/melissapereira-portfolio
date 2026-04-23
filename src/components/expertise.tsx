import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Layout, Server, Cloud } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

type Card = {
  titulo: string;
  icone: ReactNode;
  texto: string;
  tags: string[];
};

export default function MyExpertise() {
  const cards: Card[] = [
    {
      titulo: "Front-End",
      icone: <Layout className="w-5 h-5" />,
      texto:
        "Interfaces responsivas e elegantes com React, TypeScript e Tailwind. Animações sutis com Framer Motion e atenção à acessibilidade.",
      tags: ["React", "TypeScript", "Tailwind", "Vite", "React Native"],
    },
    {
      titulo: "Back-End",
      icone: <Server className="w-5 h-5" />,
      texto:
        "APIs robustas em Node.js, Python e Java. Modelagem e consultas em SQL/PL-SQL, com integração limpa entre front e back.",
      tags: ["Node.js", "Python", "Java", "SQL", "PL/SQL"],
    },
    {
      titulo: "Infra & Emergentes",
      icone: <Cloud className="w-5 h-5" />,
      texto:
        "Cloud com AWS, containers com Docker e automações com Power Automate. Exploro IoT e IA para soluções com propósito.",
      tags: ["AWS", "Docker", "IoT", "IA", "Power Automate"],
    },
  ];

  return (
    <section className="mt-32 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-crimson-500 mb-3">
          / habilidades
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-white">O que eu faço</h2>
        <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm md:text-base">
          Tecnologias e áreas que atravesso no dia a dia construindo produtos digitais.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {cards.map((item, index) => (
          <motion.article
            key={index}
            variants={cardVariants}
            className="group relative rounded-2xl border border-white/10 bg-ink-700/70 p-7 transition-all duration-500 hover:border-crimson-600/50 hover:bg-ink-700 hover:-translate-y-1 hover:shadow-accent"
          >
            {/* brilho sutil */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-crimson-600/20 via-transparent to-transparent" />
            </div>

            <div className="flex items-center justify-between">
              <span className="grid place-items-center h-10 w-10 rounded-xl border border-crimson-600/30 bg-crimson-600/10 text-crimson-400 group-hover:text-crimson-300 transition">
                {item.icone}
              </span>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/30">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-5 text-lg font-semibold text-white">{item.titulo}</h3>

            <p className="mt-3 text-sm text-white/60 leading-relaxed">{item.texto}</p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {item.tags.map((t, i) => (
                <span
                  key={i}
                  className="text-[11px] font-mono tracking-wide text-white/70 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] group-hover:border-crimson-600/30 transition"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
