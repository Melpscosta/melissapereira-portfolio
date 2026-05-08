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

export default function ProjetoPorto() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate({ pathname: "/", hash: "#work" });
  };

  const images = ["porto1", "porto2", "porto4", "porto5", "porto6", "porto8"];

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
          Porto Seguro
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
          Pré-diagnóstico veicular com IA, agendamento online e precificação
          automática em uma experiência digital completa.
        </motion.p>
      </div>

      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto mt-16">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Sobre o projeto</h2>
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
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">
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

        {/* GALERIA MASONRY (encaixa imagens de qualquer tamanho) */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Galeria do app</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid"
              style={{ breakInside: "avoid" }} // garante suporte amplo
            >
              <img
                src={`/assets/${img}.png`}
                alt={`Screenshot ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl object-cover"
              />
            </figure>
          ))}
          </div>
        </motion.section>

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">O que nos motivou?</h2>
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
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">
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
