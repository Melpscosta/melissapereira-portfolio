import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function MyExpertise() {
  const cards = [
    {
      titulo: 'FrontEnd', 
      cor: 'decoration-pink-400 text-white',
      icone: <Layout className="w-7 h-7 text-pink-400" />,
      texto:
        'Experiência com HTML, CSS, Tailwind, JavaScript, TypeScript, React, React Native e Vite. Habilidade em criar interfaces responsivas e intuitivas para web e mobile.',
    },
    {
      titulo: 'BackEnd',
      cor: 'decoration-blue-400 text-white',
      icone: <Server className="w-7 h-7 text-blue-400" />,
      texto:
        'Conhecimento em Python, Java, C++ e bancos de dados com SQL e PL/SQL. Capacidade de realizar a integração entre front-end e back-end de forma eficiente.',
    },
    {
      titulo: 'Infraestrutura e Tecnologias Emergentes',
      cor: 'decoration-orange-400 text-white',
      icone: <Cloud className="w-7 h-7 text-orange-400" />,
      texto:
        'Familiaridade com AWS, MVs e Docker para ambientes de desenvolvimento e implantação. Conhecimentos em IA e IoT. Experiência com Power Automate para a otimização de processos internos',
    },
  ];

  return (
    <motion.section {...fadeInUp} className="mt-32 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Habilidades
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-white/20 rounded-lg p-6 flex flex-col items-center text-center gap-4 h-full"
          >
            {/* Ícone centralizado */}
            <div>{item.icone}</div>

            {/* Título com underline colorido */}
            <h3 className={`text-lg font-semibold underline ${item.cor}`}>
              {item.titulo}
            </h3>

            {/* Texto com barra lateral e estilo discreto */}
            <p className="text-sm text-neutral-300 font-mono border-l-4 border-neutral-600 pl-4 leading-relaxed text-left">
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
