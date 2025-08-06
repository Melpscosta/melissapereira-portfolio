import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoConexaoSolidaria() {
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
                Conexão Solidária
              </li>
            </ol>
          </nav>
        </div>

        {/* Título + intro */}
        <motion.section {...fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-400 mb-4">
            Conexão Solidária
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
            Comunicação offline para emergências via rede Bluetooth Mesh. Troque
            mensagens mesmo sem internet durante enchentes, apagões ou desastres
            naturais.
          </p>
        </motion.section>
      </div>

      <div className="space-y-24 max-w-5xl mx-auto">
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
