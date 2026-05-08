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

const healthcareScreenshots = [
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (2).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (3).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (4).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (5).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (7).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (9).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (10).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (11).jpeg",
  "/JornadaHealthCare/WhatsApp Image 2026-04-29 at 23.49.08 (13).jpeg",
];

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
          className="font-syne mt-6 text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] font-extrabold uppercase tracking-wide text-crimson-500 mb-3"
        >
          HealthCare
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
          App de marcação de consultas médicas e troca de mensagens, criado para
          facilitar o dia a dia de médicos e pacientes com uma experiência clara
          e prática.
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
            O HealthCare foi pensado como um app moderno para organizar a
            jornada de atendimento: desde o agendamento até o acompanhamento das
            conversas entre médico e paciente.
          </p>
          <p className="leading-relaxed text-neutral-300">
            A proposta une produtividade e cuidado, reduzindo fricções no
            contato entre as partes e centralizando informações importantes em
            uma interface simples de usar.
          </p>
        </motion.section>

        {/* FUNCIONALIDADES */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Funcionalidades principais</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Agendamento e reagendamento de consultas em poucos passos</li>
            <li>Histórico de consultas para melhor acompanhamento</li>
            <li>Troca de mensagens entre médicos e pacientes</li>
            <li>Visão da agenda por data, horário e especialidade</li>
            <li>Fluxo intuitivo para reduzir tempo de operação</li>
            <li>Interface pensada para uso rápido no dia a dia</li>
          </ul>
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            A rotina de clínicas e consultórios exige comunicação constante e
            organização precisa. O HealthCare nasceu para tornar esse processo
            mais fluido, com foco em agilidade no atendimento e proximidade
            entre profissionais de saúde e pacientes.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Resultados esperados</h2>
          <p className="leading-relaxed text-neutral-300">
            O app oferece uma base sólida para evoluções futuras em saúde
            digital, como lembretes inteligentes, prontuário integrado e novos
            recursos de comunicação, sempre com foco na experiência humana.
          </p>
        </motion.section>

        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Galeria do app</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {healthcareScreenshots.map((image, index) => (
              <figure
                key={image}
                className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40"
              >
                <img
                  src={image}
                  alt={`Tela ${index + 1} do app HealthCare`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
