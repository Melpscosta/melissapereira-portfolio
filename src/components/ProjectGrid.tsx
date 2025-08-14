import { Link } from "react-router-dom";
import { projetosDetalhados } from "../data/ProjetoDetalhado"

const items = Object.entries(projetosDetalhados).map(([slug, p]) => ({
  slug,
  titulo: p.titulo,
  cover: p.cover || p.imagem, // fallback para o campo legado
}));

export default function ProjectGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
      {items.map((p) => (
        <Link
          key={p.slug}
          to={`/work/${p.slug}`}
          className="mb-6 inline-block w-full"
          style={{ breakInside: "avoid" }}
        >
          <article className="overflow-hidden rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 transition">
            {p.cover && (
              <img
                src={p.cover}
                alt={p.titulo}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            )}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{p.titulo}</h3>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
}
