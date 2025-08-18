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

export default function ProjetoConexaoSolidaria() {
  const navigate = useNavigate();

  // Se quiser galeria no estilo Porto, basta preencher os nomes dos arquivos em /assets
  // const images = ["conexao1", "conexao2", "conexao3"];

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
          Conexão Solidária
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
          Comunicação offline para emergências via rede Bluetooth Mesh.
        </motion.p>
      </div>

      <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto mt-16">
        {/* SOBRE */}
        <motion.section {...fadeInUp} className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Sobre o projeto</h2>
          <p className="leading-relaxed text-neutral-300">
            A Conexão Solidária é uma plataforma criada para permitir
            comunicação entre pessoas em situações de emergência, quando a
            internet ou o sinal de celular estão indisponíveis. Utilizando rede
            mesh via Bluetooth Low Energy (BLE), o aplicativo conecta
            dispositivos próximos e permite o envio de mensagens offline.
          </p>
          <p className="leading-relaxed text-neutral-300">
            O sistema armazena as mensagens localmente e sincroniza com uma API
            central assim que qualquer nó da rede volta a ter conexão. Dessa
            forma, informações críticas podem chegar até ONGs e órgãos públicos
            rapidamente.
          </p>
        </motion.section>

        {/* FUNCIONALIDADES */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Funcionalidades principais
          </h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Troca de mensagens offline via Bluetooth BLE</li>
            <li>Rede mesh com saltos entre dispositivos</li>
            <li>Armazenamento local e sincronização automática</li>
            <li>Compatível com Android e iOS</li>
            <li>Dashboard web para monitoramento de ocorrências</li>
          </ul>
        </motion.section>

        {/* GALERIA (opcional, igual ao padrão Porto)
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
                src={`/assets/${img}.png`}
                alt={`Screenshot ${i + 1}`}
                loading="lazy"
                className="w-full h-auto rounded-xl border border-white/10 shadow-xl object-cover"
              />
            </figure>
          ))}
        </motion.section>
        */}

        {/* MOTIVAÇÃO */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">O que nos motivou?</h2>
          <p className="leading-relaxed text-neutral-300">
            A comunicação é a primeira infraestrutura a falhar durante desastres
            naturais, deixando comunidades isoladas. Essa solução busca devolver
            a capacidade de organização e socorro, mesmo sem acesso à internet,
            com custo praticamente zero.
          </p>
        </motion.section>

        {/* RESULTADOS */}
        <motion.section {...fadeInUp} className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Resultados esperados
          </h2>
          <p className="leading-relaxed text-neutral-300">
            Espera-se impactar de 300 a 5.000 pessoas por região, com foco em
            comunidades vulneráveis. A solução é de baixo custo, altamente
            escalável e viável para uso real com celulares comuns.
          </p>
        </motion.section>
      </div>
    </main>
  );
}
