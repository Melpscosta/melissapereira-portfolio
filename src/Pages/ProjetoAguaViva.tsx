import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoAguaViva() {
  const navigate = useNavigate();

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-24 scroll-smooth">
      {/* Header */}
      <div className="pt-28 max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between text-sm text-neutral-400">
          <button
            onClick={() => navigate("/")}
            className="hover:text-white transition"
          >
            ← Voltar para Home
          </button>

          <nav>
            <ol className="flex space-x-2">
              <li>
                <a href="/" className="hover:underline hover:text-white">
                  Home
                </a>
              </li>
              <li>›</li>
              <li>
                <a
                  href="/portfolio"
                  className="hover:underline hover:text-white"
                >
                  Portfolio
                </a>
              </li>
              <li>›</li>
              <li className="text-neutral-500 dark:text-neutral-400">
                ÁguaViva
              </li>
            </ol>
          </nav>
        </div>

        {/* Título + intro */}
        <motion.section {...fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4">
            ÁguaViva
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
            Plataforma de voluntariado e ecoturismo que conecta pessoas ao
            propósito da preservação marinha com recompensas reais e impacto
            positivo.
          </p>
        </motion.section>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
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
          <h2 className="text-2xl font-bold text-white">
            Funcionalidades principais
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Cadastro de voluntários e anfitriões</li>
            <li>Sistema de pontuação por ações ambientais</li>
            <li>Troca de pontos por benefícios reais</li>
            <li>Reservas de hospedagem ecológica</li>
            <li>Integração com escolas e instituições</li>
            <li>Dashboard administrativo e campanhas de conscientização</li>
          </ul>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            "Wireframe - 13.png",
            "Wireframe - 12.png",
            "Wireframe - 7.png",
            "Wireframe - 14.png",
            "Wireframe - 15.png",
            "FAQs.png",
          ].map((img, i) => (
            <img
              key={i}
              src={`/assets/${img}`}
              className="w-full h-auto rounded-xl border border-white/10 shadow-xl object-contain"
              alt={`ÁguaViva ${i + 1}`}
            />
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
          <h2 className="text-2xl font-bold text-white">
            Resultados esperados
          </h2>
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
