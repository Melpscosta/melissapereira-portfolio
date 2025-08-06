import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoPorto() {
  const navigate = useNavigate();

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-24 scroll-smooth">
      {/* Header: breadcrumb + voltar */}
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
                Porto Seguro
              </li>
            </ol>
          </nav>
        </div>

        {/* Título + intro */}
        <motion.section {...fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4">
            Porto Seguro
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
            Pré-diagnóstico veicular com IA, agendamento online e precificação
            automática em uma experiência digital completa.
          </p>
        </motion.section>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Sobre o projeto</h2>
          <p className="leading-relaxed text-neutral-300">
            Já imaginou como seria fácil agendar um horário no mecânico,
            localizar oficinas credenciadas próximas, reservar peças online e
            obter um pré-diagnóstico com IA, tudo em um só ambiente digital?
          </p>
          <p className="leading-relaxed text-neutral-300">
            Esse foi o objetivo com o projeto desenvolvido para a{" "}
            <strong>Porto Seguro</strong> em parceria com a{" "}
            <strong>FIAP</strong>: transformar uma jornada fragmentada de
            manutenção veicular em uma experiência eficiente, transparente e
            digital.
          </p>
        </motion.section>

        {/* FUNCIONALIDADES */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Funcionalidades principais
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Localização de oficinas credenciadas</li>
            <li>Agendamento online de horários</li>
            <li>Reserva de peças pelo sistema</li>
            <li>Pré-diagnóstico com Inteligência Artificial</li>
            <li>Precificação automática e transparente</li>
          </ul>
        </motion.section>

        <motion.section
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {["porto1", "porto2", "porto4", "porto5", "porto6", "porto8"].map(
            (img, i) => (
              <img
                key={i}
                src={`/assets/${img}.png`}
                className="w-full rounded-xl border border-white/10 shadow-xl object-cover"
                alt={`Screenshot ${i + 1}`}
              />
            )
          )}
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            Durante o projeto acadêmico com a FIAP, identificamos gargalos no
            processo tradicional: lentidão, pouca integração e falta de
            transparência. A proposta foi usar tecnologia de ponta para
            transformar esse cenário em uma jornada simples e eficaz para o
            usuário.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Resultados esperados
          </h2>
          <p className="leading-relaxed text-neutral-300">
            A plataforma promove uma experiência omnicanal para o cliente final,
            reduzindo atritos e aumentando a eficiência. Ela fortalece o
            relacionamento entre clientes e oficinas da Porto Seguro e marca um
            passo importante na transformação digital do setor automotivo.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
