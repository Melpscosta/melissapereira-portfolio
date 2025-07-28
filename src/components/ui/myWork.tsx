import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { projetosDetalhados } from "../../data/ProjetoDetalhado";
import { Github } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function MyWork() {
  const slugs = Object.keys(projetosDetalhados);

  return (
    <motion.section
      {...fadeInUp}
      id="projetos"
      className="mt-32 max-w-7xl mx-auto px-4 text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projetos</h2>
      <p className="text-neutral-300 max-w-2xl mx-auto text-sm mb-12">
        Ao longo dos meus dois anos de formação na FIAP, tive a oportunidade de
        participar de uma variedade de projetos desafiadores, tanto individuais
        quanto em equipe. Cada um deles representou uma etapa importante na
        minha jornada como desenvolvedora. Esses projetos me permitiram aplicar
        na prática os conhecimentos adquiridos em sala de aula, explorar novas
        tecnologias, resolver problemas reais e desenvolver uma visão mais
        completa sobre o ciclo de desenvolvimento de software. A seguir, você
        poderá explorar alguns desses trabalhos, que refletem minha evolução
        técnica, criatividade e comprometimento com soluções funcionais e bem
        projetadas.
      </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {slugs.map((slug, i) => {
        const proj = projetosDetalhados[slug];
        return (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-pink-500/30"
          >
            {/* Imagem no topo */}
            {proj.imagem && (
              <img
                src={proj.imagem}
                alt={proj.titulo}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6 flex flex-col h-full">
              <h3 className="text-pink-400 text-lg font-semibold mb-2">
                {proj.titulo}
              </h3>
              <p className="text-sm text-neutral-400 mb-6">{proj.descricao}</p>

              <div className="mt-auto flex gap-3">
                <button
                  className="flex-1 border border-neutral-700 text-white py-2 rounded-md hover:bg-pink-600 transition text-sm"
                  onClick={() => (window.location.href = `/projetos/${slug}`)}
                >
                  Ver mais
                </button>

                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border border-neutral-700 text-white py-2 rounded-md hover:bg-neutral-800 transition text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </motion.section>
  );
}
