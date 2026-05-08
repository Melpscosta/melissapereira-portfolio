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

export default function ProjetoMottu() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate({ pathname: "/", hash: "#work" });
  };

  // nomes dos arquivos que você me passou em /assets
  const images = ["mottu1", "mottu2", "Mottu3", "Mottu4", "Mottu5"];

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
          Mottu
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
          MVP de localização inteligente de motos em pátios com ESP32 e
          celulares.
        </motion.p>
      </div>

      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto mt-16">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Sobre o projeto</h2>
          <p className="leading-relaxed text-neutral-300">
            Estamos desenvolvendo um MVP de localização inteligente de motos em
            pátios utilizando um módulo ESP32 fixo e celulares com Bluetooth
            ligado simulando as motos.
          </p>
          <p className="leading-relaxed text-neutral-300">
            O ESP32 escaneia constantemente os sinais BLE ao seu redor e, com
            base na intensidade do sinal (RSSI), estima a proximidade de cada
            moto em tempo real. O sistema exibe um painel de localização com
            atualização contínua da presença, entrada e saída das motos nas zonas
            do pátio.
          </p>
        </motion.section>

        {/* PROBLEMAS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">
            Problemas que serão resolvidos
          </h2>
          <p className="leading-relaxed text-neutral-300">
            O projeto resolve a dificuldade de localizar motos específicas em
            pátios desorganizados, onde os dispositivos de rastreamento atuais
            são ineficazes ou ausentes. Hoje, a busca é manual, lenta e imprecisa,
            reduzindo produtividade e aumentando custos.
          </p>
        </motion.section>

        {/* BENEFÍCIOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">
            Benefícios da solução
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Dispensa o uso de hardware caro nas motos</li>
            <li>Fácil de testar com celulares com Bluetooth</li>
            <li>Leitura contínua e visualização em tempo real</li>
            <li>Alta escalabilidade para diferentes filiais</li>
            <li>
              Base sólida para futuras evoluções (visão computacional,
              trilateração, etc.)
            </li>
          </ul>
        </motion.section>

        {/* GALERIA MASONRY */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Galeria do app</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {images.map((img, i) => (
            <figure
              key={i}
              className="mb-4 break-inside-avoid"
              style={{ breakInside: "avoid" }}
            >
              <img
                src={`/assets/${img}.png`}
                alt={`Mottu screenshot ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl object-cover"
              />
            </figure>
          ))}
          </div>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="font-parkinsans text-2xl font-bold uppercase tracking-wide text-white">Resultados esperados</h2>
          <p className="leading-relaxed text-neutral-300">
            Espera-se uma melhoria significativa na gestão de pátios com redução
            do tempo para encontrar motos, menor erro humano, menor perda de
            ativos e maior eficiência operacional. A solução abre caminho para
            novas tecnologias como visão computacional e trilateração.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
