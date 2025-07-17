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
      <h2 className="text-4xl font-bold mb-10 text-center">
        Projetos
      </h2>
      <p className="text-neutral-300 max-w-2xl mx-auto text-sm mb-12">
        Desenvolvi soluções escaláveis para web e mobile, em SPA e PWA com
        React. Já colaborei com mais de 50 projetos no Brasil e no mundo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slugs.map((slug, i) => {
          const proj = projetosDetalhados[slug];
          return (
            <div
              key={i}
              className="bg-neutral-900 border border-white/10 rounded-lg flex flex-col hover:ring-1 hover:ring-pink-500 transition-all h-full"
            >
              {proj.imagem && (
                <img
                  src={proj.imagem}
                  alt={proj.titulo}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
              )}

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-pink-400 mb-2">
                  {proj.titulo}
                </h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {proj.descricao}
                </p>

                {/* Botões lado a lado */}
                <div className="mt-auto flex gap-2">
                  <Button
                    variant="outline"
                    className="w-1/2 border-white text-white hover:bg-pink-500 hover:text-white transition h-12"
                    onClick={() => (window.location.href = `/projetos/${slug}`)}
                  >
                    Ver mais
                  </Button>

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 flex justify-center items-center gap-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition px-4 py-2"
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
