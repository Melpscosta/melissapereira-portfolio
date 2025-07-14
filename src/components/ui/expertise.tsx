import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, CloudCog} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function MyExpertise() {
  const cards = [
    {
      titulo: ['FrontEnd'],
      cor: 'text-pink-400 underline decoration-pink-400',
      icone: <Layout className=" text-pink-400" />,
      texto:'Experiência com HTML, CSS, Tailwind, JavaScript, TypeScript, React, React Native e Vite. Habilidade em criar interfaces responsivas e intuitivas para web e mobile.',
    },
    {
      titulo: ['BackEnd'],
      cor: 'text-blue-400 underline decoration-blue-400',
      icone: '🛠️',
      texto: 'Conhecimento em Python, Java, C++ e bancos de dados com SQL e PL/SQL. Capacidade de realizar a integração entre front-end e back-end de forma eficiente.',
    },
    {
      titulo: ['Infraestrutura e Tecnologias Emergentes'],
      cor: 'text-orange-400 underline decoration-orange-400',
      icone: '☁️',
      texto:
        'Familiaridade com AWS, MVs e Docker para ambientes de desenvolvimento e implantação. Conhecimentos em IA e IoT. Experiência com Power Automate para a otimização de processos internos',
    },
  ];

  return (
    <motion.section {...fadeInUp} className="mt-32 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-12">My Expertise</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-white/20 rounded-lg p-6 flex flex-col gap-6 h-full"
          >
            {/* Ícone */}
            <div className="text-4xl text-white">{item.icone}</div>

            {/* Título com sublinhado só na primeira palavra */}
            <h3 className="text-xl font-bold leading-snug">
              <span className={`${item.cor} mr-1`}>{item.titulo[0]}</span>
              <span className="text-white">{item.titulo[1]}</span>
            </h3>

            {/* Texto com barra lateral e estilo <h3> simulado */}
            <p className="text-sm text-neutral-300 font-mono pl-4 border-l-[3px] border-neutral-600 leading-relaxed whitespace-pre-line">
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
