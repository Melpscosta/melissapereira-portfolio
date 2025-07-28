import React from "react";
import { motion } from "framer-motion";
import { projetosDetalhados } from "../../data/ProjetoDetalhado";

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
        Participei ativamente de projetos com forte impacto social, ambiental e tecnológico. 
        Cada solução foi pensada com foco em acessibilidade, impacto real e experiência de usuário.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slugs.map((slug, i) => {
          const proj = projetosDetalhados[slug];
          return (
            <a
              key={i}
              href={`/projetos/${slug}`}
              className="group block bg-neutral-900 border border-white/10 rounded-xl overflow-hidden 
                transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-pink-500/30"
            >
              {proj.imagem && (
                <img
                  src={proj.imagem}
                  alt={proj.titulo}
                  className="w-full h-60 object-cover"
                />
              )}

              <div className="p-5 flex flex-col items-start text-left">
                <h3 className="text-lg font-bold text-white mb-1 truncate w-full">
                  {proj.titulo}
                </h3>

                <p className="text-sm text-neutral-400 mb-3 line-clamp-3">
                  {proj.descricao}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tecnologias.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full 
                        hover:bg-pink-500 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </motion.section>
  );
}
