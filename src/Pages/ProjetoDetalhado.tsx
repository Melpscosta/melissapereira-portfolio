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
      className="min-h-screen max-w-3xl mx-auto px-6 py-24 text-white"
    >
      <h1 className="text-4xl font-bold mb-4">{projeto.titulo}</h1>
      <p className="text-neutral-300 mb-8">{projeto.descricao}</p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-pink-400">Tecnologias usadas:</h2>
        <ul className="list-disc list-inside text-neutral-300">
          {projeto.tecnologias.map((tech, idx) => (
            <li key={idx}>{tech}</li>
          ))}
        </ul>
      </div>

      {projeto.imagem && (
        <img
          src={projeto.imagem}
          alt={projeto.titulo}
          className="rounded-md mb-8 w-full object-cover"
        />
      )}

      {projeto.link && (
        <a
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded transition"
        >
          Ver Projeto Online
        </a>
      )}
    </motion.div>
  );
}
