import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";

export type ExpItem = {
  titulo: string;
  empresa?: string;
  periodo?: string;
  local?: string;
  tipo?: "trabalho" | "educacao" | "projeto";
  pontos?: string[];
  tecnologias?: string[];
};

type ExpProps = {
  itens?: ExpItem[];
  className?: string;
  titulo?: string;
  subtitulo?: string;
};

/* Experiência padrão (edite livremente) */
const DEFAULT_ITENS: ExpItem[] = [
  {
    titulo: "Desenvolvedora Full Stack",
    empresa: "Projetos Acadêmicos & Freelas",
    periodo: "2024 — Presente",
    local: "Remoto",
    tipo: "trabalho",
    pontos: [
      "Desenvolvimento de interfaces responsivas com React, TypeScript e Tailwind.",
      "Integração com APIs REST e bancos SQL/PL-SQL em soluções de impacto social.",
      "Foco em acessibilidade, performance e experiência do usuário.",
    ],
    tecnologias: ["React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL"],
  },
  {
    titulo: "Challenge Mottu — IoT & Mapeamento",
    empresa: "FIAP × Mottu",
    periodo: "2025",
    tipo: "projeto",
    pontos: [
      "Sistema de mapeamento de pátios com QR Code, BLE e ESP32.",
      "Cálculo de posicionamento via RSSI e visualização em tempo real.",
    ],
    tecnologias: ["React", "ESP32", "BLE", "MQTT", "PostgreSQL"],
  },
  {
    titulo: "Análise e Desenvolvimento de Sistemas",
    empresa: "FIAP",
    periodo: "2023 — 2025",
    local: "São Paulo, BR",
    tipo: "educacao",
    pontos: [
      "Formação em engenharia de software, banco de dados e arquitetura de sistemas.",
      "Projetos interdisciplinares com foco em IoT, IA e sustentabilidade.",
    ],
    tecnologias: ["Java", "Python", "C++", "SQL", "AWS"],
  },
];

const iconFor = (tipo?: ExpItem["tipo"]) => {
  if (tipo === "educacao") return <GraduationCap className="w-4 h-4" />;
  if (tipo === "projeto") return <Sparkles className="w-4 h-4" />;
  return <Briefcase className="w-4 h-4" />;
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

const Exp: React.FC<ExpProps> = ({
  itens,
  className,
  titulo = "Experiência",
  subtitulo = "Uma linha do tempo da minha trajetória profissional e acadêmica.",
}) => {
  const data = itens && itens.length > 0 ? itens : DEFAULT_ITENS;

  return (
    <section className={["px-4 max-w-5xl mx-auto", className].filter(Boolean).join(" ")}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-3xl text-left"
      >
        <h2 className="font-ojuju text-4xl md:text-5xl font-bold uppercase tracking-wide text-crimson-500">
          {titulo}
        </h2>
        <p className="mt-4 text-sm text-white/50 md:text-base">
          {subtitulo}
        </p>
      </motion.div>

      <div className="relative pl-6 md:pl-0">
        {/* linha vertical */}
        <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-px -translate-x-0 md:-translate-x-1/2">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-crimson-600/60 via-crimson-600/10 to-transparent blur-sm" />
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="space-y-10 md:space-y-14"
        >
          {data.map((exp, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <motion.li
                key={i}
                variants={itemVariants}
                className="relative md:grid md:grid-cols-2 md:gap-10"
              >
                {/* marcador */}
                <span className="absolute left-[11px] md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <span className="relative grid place-items-center">
                    <span className="absolute inset-0 rounded-full bg-crimson-600/30 blur-md animate-soft-pulse" />
                    <span className="relative h-3.5 w-3.5 rounded-full bg-crimson-600 ring-4 ring-ink-900" />
                  </span>
                </span>

                {/* card */}
                <div
                  className={[
                    "pl-8 md:pl-0",
                    side === "left" ? "md:pr-10 md:text-right md:col-start-1" : "md:pl-10 md:col-start-2",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "group relative rounded-2xl border border-white/10 bg-ink-700/70",
                      "p-5 md:p-6 transition-all duration-500",
                      "hover:border-crimson-600/50 hover:bg-ink-700",
                      "hover:shadow-accent",
                    ].join(" ")}
                  >
                    {/* brilho sutil no hover */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-crimson-600/20 via-transparent to-transparent" />
                    </div>

                    <div
                      className={[
                        "flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase",
                        "text-crimson-500",
                        side === "left" ? "md:justify-end" : "md:justify-start",
                      ].join(" ")}
                    >
                      <span className="grid place-items-center h-6 w-6 rounded-full bg-crimson-600/15 border border-crimson-600/30">
                        {iconFor(exp.tipo)}
                      </span>
                      {exp.periodo && <span className="font-mono">{exp.periodo}</span>}
                    </div>

                    <h3 className="mt-3 text-white font-semibold text-lg md:text-xl">
                      {exp.titulo}
                    </h3>

                    {(exp.empresa || exp.local) && (
                      <p className="mt-1 text-sm text-white/60">
                        {exp.empresa}
                        {exp.local && <span className="text-white/30"> · {exp.local}</span>}
                      </p>
                    )}

                    {Array.isArray(exp.pontos) && exp.pontos.length > 0 && (
                      <ul
                        className={[
                          "mt-4 space-y-1.5 text-[13.5px] text-white/70 leading-relaxed",
                          side === "left" ? "md:text-right" : "md:text-left",
                        ].join(" ")}
                      >
                        {exp.pontos.map((p, k) => (
                          <li key={k} className="flex gap-2 md:justify-start">
                            <span
                              className={[
                                "text-crimson-500 mt-[6px] h-1 w-1 rounded-full bg-crimson-500 shrink-0",
                                side === "left" ? "md:order-2 md:ml-2" : "md:mr-2",
                              ].join(" ")}
                              aria-hidden
                            />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {Array.isArray(exp.tecnologias) && exp.tecnologias.length > 0 && (
                      <div
                        className={[
                          "mt-5 flex flex-wrap gap-1.5",
                          side === "left" ? "md:justify-end" : "md:justify-start",
                        ].join(" ")}
                      >
                        {exp.tecnologias.map((t, k) => (
                          <span
                            key={k}
                            className="text-[11px] font-mono tracking-wide text-white/70 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] hover:border-crimson-600/40 hover:text-white transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};

export default Exp;
