import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoAguaViva() {
  const navigate = useNavigate();

  const images = [
    "Wireframe - 13.png",
    "Wireframe - 12.png",
    "Wireframe - 7.png",
    "Wireframe - 14.png",
    "Wireframe - 15.png",
    "FAQs.png",
  ];

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-24 scroll-smooth">
      {/* Botão voltar (apenas seta) fixo no canto */}
      <button
        onClick={() => navigate(-1)}
        aria-label="Voltar"
        className="fixed left-4 top-6 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/30 backdrop-blur hover:bg-black/50 transition"
      >
        <ArrowLeft className="h-5 w-5 text-white" />
      </button>

      {/* Header */}
      <div className="pt-24 md:pt-32 max-w-6xl mx-auto">
        {/* Título grandão alinhado à esquerda */}
        <motion.h1
          {...fadeInUp}
          className="text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight text-white mb-3"
        >
          ÁguaViva
        </motion.h1>

        {/* Breadcrumb embaixo do título, à esquerda */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.05 }}
          className="text-sm text-neutral-400"
        >
          <Breadcrumbs />
        </motion.div>

        {/* Intro */}
        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl"
        >
          Plataforma de voluntariado e ecoturismo que conecta pessoas ao propósito da preservação marinha.
        </motion.p>
      </div>

      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto mt-16">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Sobre o projeto</h2>
          <p className="leading-relaxed text-neutral-300">
            ÁguaViva é mais que uma plataforma: é um movimento em prol dos
            oceanos. Através de ações voluntárias, os usuários acumulam pontos
            que podem ser trocados por experiências sustentáveis, como
            hospedagens, passeios ecológicos e descontos em comércios locais.
          </p>
          <p className="leading-relaxed text-neutral-300">
            A plataforma também atua como um portal de educação ambiental,
            especialmente voltado a jovens e estudantes, com excursões,
            campanhas e integração com instituições de ensino. Cada ação gera
            impacto real na conservação da vida marinha.
          </p>
        </motion.section>

        {/* FUNCIONALIDADES */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Funcionalidades principais</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Cadastro de voluntários e anfitriões</li>
            <li>Sistema de pontuação por ações ambientais</li>
            <li>Troca de pontos por benefícios reais</li>
            <li>Reservas de hospedagem ecológica</li>
            <li>Integração com escolas e instituições</li>
            <li>Dashboard administrativo e campanhas de conscientização</li>
          </ul>
        </motion.section>

        {/* GALERIA MASONRY (igual ao padrão Porto) */}
        <motion.section
          {...fadeInUp}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          {images.map((img, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid"
              style={{ breakInside: "avoid" }}
            >
              <img
                src={`/assets/${img}`}
                alt={`ÁguaViva ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl object-cover"
              />
            </figure>
          ))}
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            Em um cenário de degradação marinha acelerada, sentimos a urgência
            de criar uma solução que engaje pessoas de forma positiva,
            recompensadora e educativa. A ideia é transformar boas ações em
            experiências reais, gerando impacto ambiental e social ao mesmo
            tempo.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">Resultados esperados</h2>
          <p className="leading-relaxed text-neutral-300">
            Esperamos promover a educação ambiental, incentivar o ecoturismo
            sustentável e envolver milhares de pessoas em ações concretas de
            preservação dos oceanos. O projeto é escalável, acessível e com
            grande potencial de impacto global.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
