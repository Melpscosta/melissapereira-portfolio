// src/Pages/MyWork.tsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projetosDetalhados } from "../data/ProjetoDetalhado";

const linkBySlug: Record<string, string> = {
  "porto-seguro": "/projetos/porto",
  mottu: "/projetos/mottu",
  "conexao-solidaria": "/projetos/conexao-solidaria",
  "agua-viva": "/projetos/agua-viva",
  "marcacao-de-consultas-medicas": "/projetos/marcacao-de-consultas-medicas",
};

const fadeIn = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

// Capa por regras (prioriza mottuCover; força sem imagem em dois slugs)
function pickCover(slug: string, p: typeof projetosDetalhados[string]) {
  const forceNoImage =
    slug === "conexao-solidaria" || slug === "marcacao-de-consultas-medicas";
  if (forceNoImage) return null;

  if (slug === "mottu" && p.mottuCover) return p.mottuCover!;
  return p.cover || p.hero || p.imagem || p.galeria?.[0] || null;
}

export default function MyWork() {
  const slugs = Object.keys(projetosDetalhados);

  return (
    <section id="projetos" className="mt-28 max-w-7xl mx-auto px-4">
      <motion.h2
        {...fadeIn}
        transition={{ duration: 0.5 }}
        className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-white text-center"
      >
        Projetos
      </motion.h2>

      <motion.p
        {...fadeIn}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-neutral-300 max-w-2xl mx-auto text-sm md:text-base text-center mt-3 mb-10"
      >
        Participei de iniciativas com impacto social, ambiental e tecnológico.
        Cada solução foi pensada para acessibilidade, impacto real e ótima experiência de uso.
      </motion.p>

      {/* Masonry em columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {slugs.map((slug, i) => {
          const proj = projetosDetalhados[slug];
          const to = linkBySlug[slug] || `/projetos/${slug}`;
          const cover = pickCover(slug, proj);

          return (
            <motion.article
              key={slug}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="mb-6 break-inside-avoid"
            >
              <Link
                to={to}
                className="group block rounded-2xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:shadow-pink-500/15 transition"
              >
                {/* Topo: imagem inteira se existir */}
                {cover ? (
                  <div className="bg-neutral-900">
                    <img
                      src={cover}
                      alt="" // evita título duplicado caso a imagem quebre
                      loading="lazy"
                      className="w-full h-auto object-contain block"
                      // se der erro no src, some com a imagem para não mostrar o alt
                      onError={(e) => {
                        const el = e.currentTarget as HTMLImageElement;
                        el.style.display = "none";
                      }}
                    />
                  </div>
                ) : null}

                {/* Rodapé com infos (sempre visível) */}
                <div className="p-5 bg-neutral-950">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {proj.titulo}
                  </h3>

                  <p className="text-sm text-neutral-400 mb-3">
                    {proj.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proj.tecnologias.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full hover:bg-pink-500 hover:text-white transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
