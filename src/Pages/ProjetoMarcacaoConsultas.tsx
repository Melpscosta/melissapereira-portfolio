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

export default function ProjetoMarcacaoConsultas() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate({ pathname: "/", hash: "#work" });
  };

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-parkinsans min-h-screen px-6 pb-24 scroll-smooth">
      {/* Header */}
      <div className="pt-24 md:pt-32 max-w-6xl mx-auto">
        <motion.button
          {...fadeInUp}
          onClick={handleBack}
          aria-label="Voltar para projetos"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-crimson-500/60 hover:bg-crimson-600/15 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para projetos
        </motion.button>

        {/* Título grandão alinhado à esquerda */}
        <motion.h1
          {...fadeInUp}
          className="font-parkinsans mt-6 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-extrabold uppercase tracking-wide text-crimson-500 mb-3"
        >
          Marcação de Consultas
        </motion.h1>

        {/* Breadcrumb embaixo do título */}
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
          Sistema completo de agendamento médico online, focado em
          acessibilidade, simplicidade e eficiência para pacientes e
          profissionais da saúde.
        </motion.p>

        <motion.a
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          href="https://health-care-oc7dmynso-melissas-projects-bcf7b155.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center rounded-full border border-crimson-500/50 bg-crimson-600/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-crimson-600/35"
        >
          Acessar app no Vercel
        </motion.a>
      </div>

      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto mt-16">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Sobre o projeto</h2>
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
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Funcionalidades principais</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Cadastro de pacientes, médicos e especialidades</li>
            <li>Agendamento e cancelamento de consultas</li>
            <li>Visualização da agenda médica</li>
            <li>Edição e remoção de registros</li>
            <li>Conexão com banco de dados relacional</li>
            <li>Interface desktop responsiva com Windows Forms</li>
          </ul>
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            Percebemos a importância de sistemas que melhorem a organização e o
            atendimento na área da saúde, especialmente em unidades públicas ou
            clínicas que ainda operam com agendamentos manuais. A ideia foi
            criar um sistema prático e funcional para simular essa realidade.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Resultados esperados</h2>
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
