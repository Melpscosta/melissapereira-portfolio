import { useParams } from "react-router-dom";
import { projetosDetalhados } from "../data/ProjetoDetalhado";
import { motion } from "framer-motion";

export default function ProjetoDetalhado() {
  const { id } = useParams();
  const projeto = projetosDetalhados[id || ""];

  if (!projeto) {
    return (
      <div className="min-h-screen text-center pt-40 text-neutral-500 text-lg">
        Projeto não encontrado.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen max-w-5xl mx-auto px-6 py-24 text-white"
    >
      {/* Título */}
      <h1 className="text-4xl font-bold mb-6 text-pink-400">{projeto.titulo}</h1>

      {/* Imagem principal */}
      {projeto.imagem && (
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="rounded-xl mb-10 w-full h-80 object-cover shadow-lg border border-white/10"
        />
      )}

      {/* Descrição */}
      <p className="text-lg text-neutral-300 mb-12 leading-relaxed">
        {projeto.descricao}
      </p>

      {/* Tecnologias */}
      <div>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Tecnologias utilizadas
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-neutral-200 text-sm">
          {projeto.tecnologias.map((tech, idx) => (
            <li
              key={idx}
              className="bg-white/10 py-2 px-4 rounded-lg text-center hover:bg-pink-500 hover:text-white transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
