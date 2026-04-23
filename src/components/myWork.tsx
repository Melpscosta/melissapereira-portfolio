import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projetosDetalhados } from "../data/ProjetoDetalhado";

const linkBySlug: Record<string, string> = {
  "porto-seguro": "/projetos/porto",
  mottu: "/projetos/mottu",
  "conexao-solidaria": "/projetos/conexao-solidaria",
  "agua-viva": "/projetos/agua-viva",
  "marcacao-de-consultas-medicas": "/projetos/marcacao-de-consultas-medicas",
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
};

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
    <section id="projetos" className="bg-black max-w-6xl mx-auto px-2 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-3xl text-left"
      >
        <h2 className="font-ojuju text-4xl md:text-5xl font-bold uppercase tracking-wide text-crimson-500">
          Projetos
        </h2>
        <p className="mt-4 text-sm text-white/50 md:text-base">
          Projetos em atualização — em breve com nova curadoria e organização.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.08 }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]"
      >
        {slugs.map((slug) => {
          const proj = projetosDetalhados[slug];
          const to = linkBySlug[slug] || `/projetos/${slug}`;
          const cover = pickCover(slug, proj);

          return (
            <motion.article
              key={slug}
              variants={fadeIn}
              className="mb-6 break-inside-avoid"
            >
              <Link
                to={to}
                className="group block rounded-2xl overflow-hidden border border-white/10 bg-ink-700/60 hover:border-crimson-600/40 hover:shadow-accent transition-all duration-500 focus-ring"
              >
                {cover && (
                  <div className="relative bg-ink-800 overflow-hidden">
                    <img
                      src={cover}
                      alt=""
                      loading="lazy"
                      className="w-full h-auto object-contain block transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                )}

                <div className="p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[17px] font-semibold text-white leading-snug">
                      {proj.titulo}
                    </h3>
                    <span className="grid place-items-center h-8 w-8 rounded-full border border-white/10 text-white/60 group-hover:text-white group-hover:bg-crimson-600 group-hover:border-crimson-600 group-hover:-rotate-45 transition-all duration-500 shrink-0">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-white/55 leading-relaxed">
                    {proj.descricao}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tecnologias.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono tracking-wide text-white/70 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] group-hover:border-crimson-600/40 transition"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.tecnologias.length > 4 && (
                      <span className="text-[11px] font-mono text-white/40 px-2.5 py-1">
                        +{proj.tecnologias.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
