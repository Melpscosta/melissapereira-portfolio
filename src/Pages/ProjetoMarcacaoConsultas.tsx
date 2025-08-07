import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoMarcacaoConsultas() {
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
                Marcação de Consultas
              </li>
            </ol>
          </nav>
        </div>

        {/* Título + intro */}
        <motion.section {...fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4">
            Marcação de Consultas
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
            Sistema completo de agendamento médico online, focado em
            acessibilidade, simplicidade e eficiência para pacientes e
            profissionais da saúde.
          </p>
        </motion.section>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Sobre o projeto</h2>
          <p className="leading-relaxed text-neutral-300">
            Desenvolvido em equipe, esse projeto simula um sistema real de
            agendamento de consultas médicas com funcionalidades para cadastro
            de pacientes, médicos e especialidades, além do controle das
            consultas agendadas e realizadas.
          </p>
          <p className="leading-relaxed text-neutral-300">
            Foi implementado em C# com Windows Forms e banco de dados
            relacional, com foco no desenvolvimento de habilidades de CRUD,
            conexão com banco e interface gráfica amigável.
          </p>
        </motion.section>

        {/* FUNCIONALIDADES */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Funcionalidades principais
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Cadastro de pacientes, médicos e especialidades</li>
            <li>Agendamento e cancelamento de consultas</li>
            <li>Visualização da agenda médica</li>
            <li>Edição e remoção de registros</li>
            <li>Conexão com banco de dados relacional</li>
            <li>Interface desktop responsiva com Windows Forms</li>
          </ul>
        </motion.section>

        {/* Imagens */}
        <motion.section
          {...fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {["marcacao1", "marcacao2", "marcacao3"].map((img, i) => (
            <img
              key={i}
              src={`/assets/${img}.png`}
              className="w-full h-full rounded-xl border border-white/10 shadow-xl object-cover"
              alt={`Marcação de Consultas ${i + 1}`}
            />
          ))}
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            Percebemos a importância de sistemas que melhorem a organização e o
            atendimento na área da saúde, especialmente em unidades públicas ou
            clínicas que ainda operam com agendamentos manuais. A ideia foi
            criar um sistema prático e funcional para simular essa realidade.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Resultados esperados
          </h2>
          <p className="leading-relaxed text-neutral-300">
            O sistema pode ser utilizado como base para projetos reais de
            informatização da saúde. Além de fortalecer habilidades técnicas, o
            projeto nos preparou para desenvolver soluções completas que
            envolvem banco de dados, UI/UX e lógica de negócio.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
