import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projetosDetalhados } from "../data/ProjetoDetalhado";

const linkBySlug: Record<string, string> = {
  "porto-seguro": "/projetos/porto",
  mottu: "/projetos/mottu",
  "agua-viva": "/projetos/agua-viva",
  "marcacao-de-consultas-medicas": "/projetos/marcacao-de-consultas-medicas",
};

const ORDEM_SLUGS = [
  "porto-seguro",
  "marcacao-de-consultas-medicas",
  "agua-viva",
  "mottu",
] as const;

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function pickCover(slug: string, p: (typeof projetosDetalhados)[string]) {
  if (slug === "mottu" && p.mottuCover) return p.mottuCover;
  return p.cover || p.hero || p.imagem || p.galeria?.[0] || null;
}

function slugParaUrlPreview(titulo: string) {
  return titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function projetoHref(slug: string) {
  return linkBySlug[slug] || `/projetos/${slug}`;
}

function BrowserMockup({
  cover,
  titulo,
  className = "",
  imgClassName = "",
}: {
  cover: string | null;
  titulo: string;
  className?: string;
  imgClassName?: string;
}) {
  const bar = slugParaUrlPreview(titulo);
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.09] bg-ink-800 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.85)] sm:rounded-2xl ${className}`}
    >
      <div className="flex h-9 items-center gap-2 border-b border-white/[0.06] bg-ink-900/95 px-3 sm:h-10 sm:px-4">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/90 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/90 sm:h-2.5 sm:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/90 sm:h-2.5 sm:w-2.5" />
        </span>
        <div className="min-w-0 flex-1 rounded-md border border-white/[0.06] bg-black/40 px-2 py-1 text-center sm:px-2.5 sm:py-1.5">
          <span className="truncate font-mono text-[9px] uppercase tracking-wider text-white/35 sm:text-[11px]">
            {bar}.dev · preview
          </span>
        </div>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-black">
        {cover ? (
          <img
            src={cover}
            alt=""
            loading="lazy"
            className={`h-full w-full object-cover object-top ${imgClassName}`}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className="grid h-full place-items-center p-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-white/25 sm:text-xs">
            Preview em breve
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Secção projetos: cada projeto é um único cartão clicável (preview + texto).
 * Layout alternado no desktop; o tema segue o resto do site (preto, crimson, motion suave).
 */
export default function MyWork() {
  const reduceMotion = useReducedMotion();
  const ordered = useMemo(() => {
    const slugs = ORDEM_SLUGS.filter((s) => s in projetosDetalhados);
    const extras = Object.keys(projetosDetalhados).filter(
      (k) => !slugs.includes(k as (typeof ORDEM_SLUGS)[number])
    );
    return [...slugs, ...extras];
  }, []);

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Brilho de fundo alinhado ao hero / certificados */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 20% 10%, rgba(220, 20, 60, 0.12), transparent 55%), radial-gradient(ellipse 55% 40% at 100% 80%, rgba(80, 0, 0, 0.18), transparent 50%)",
        }}
      />

      <motion.header
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 max-w-2xl md:mb-16"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-crimson-500/90">
          Trabalhos selecionados
        </p>
        <h2 id="work-heading" className="type-section-title mt-3">
          Projetos
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/50 md:text-base">
          Cada bloco inteiro abre o estudo completo — clicas ou tocas em qualquer parte do cartão (título, texto ou
          preview).
        </p>
      </motion.header>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.06 }}
        transition={{ staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: reduceMotion ? 0 : 0.05 }}
        className="flex flex-col gap-8 sm:gap-10 md:gap-12"
      >
        {ordered.map((slug, index) => {
          const p = projetosDetalhados[slug];
          const cover = pickCover(slug, p);
          const to = projetoHref(slug);
          const reverse = index % 2 === 1;

          return (
            <motion.div key={slug} variants={cardReveal} className="relative">
              <Link
                to={to}
                className={[
                  "focus-ring group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-700/35 outline-offset-4",
                  "transition-[transform,box-shadow,border-color,background-color] duration-500 ease-out",
                  "hover:-translate-y-1 hover:border-crimson-600/45 hover:bg-ink-700/55 hover:shadow-[0_32px_80px_-28px_rgba(220,20,60,0.22)]",
                  "active:translate-y-0 active:duration-150",
                ].join(" ")}
              >
                {/* Faixa crimson no hover — eco visual do resto do portfólio */}
                <span
                  className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-crimson-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div
                  className={[
                    "flex flex-col gap-6 p-5 sm:gap-8 sm:p-7 md:gap-10 md:p-8 lg:items-center",
                    reverse ? "lg:flex-row-reverse" : "lg:flex-row",
                  ].join(" ")}
                >
                  <div className="w-full min-w-0 lg:w-[54%] lg:max-w-none">
                    <BrowserMockup
                      cover={cover}
                      titulo={p.titulo}
                      className="transition duration-500 group-hover:border-crimson-600/25"
                      imgClassName="transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-center lg:w-[46%]">
                    <span className="font-mono text-xs tabular-nums text-crimson-500/85">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-parkinsans mt-2 text-xl font-bold uppercase leading-snug tracking-wide text-white sm:text-2xl md:text-[1.65rem]">
                      {p.titulo}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/60 sm:text-base">{p.descricao}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tecnologias.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 font-mono text-[10px] tracking-wide text-white/70 transition duration-300 group-hover:border-crimson-600/35 group-hover:text-white/85 sm:text-[11px]"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.tecnologias.length > 6 && (
                        <span className="py-1 font-mono text-[10px] text-white/35">
                          +{p.tecnologias.length - 6}
                        </span>
                      )}
                    </div>

                    <span className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-crimson-400 transition duration-300 group-hover:gap-3 group-hover:text-crimson-300">
                      Ver caso completo
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:-rotate-45"
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
