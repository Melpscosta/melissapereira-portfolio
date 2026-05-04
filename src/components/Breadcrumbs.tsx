import { Link, useLocation } from "react-router-dom";

const LABEL_OVERRIDES: Record<string, string> = {
  "": "Home", // raiz
  projetos: "Projetos",
  // projetos específicos (adicione os seus aqui)
  porto: "Porto Seguro",
  mottu: "Mottu",
  "agua-viva": "Água Viva",
  "marcacao-de-consultas-medicas": "HealthCare",
};

function slugToTitle(slug: string) {
  if (!slug) return "Home";
  // se houver override, usa
  if (LABEL_OVERRIDES[slug]) return LABEL_OVERRIDES[slug];

  // senão, formata “kebab-case” -> “Kebab Case”
  return decodeURIComponent(slug)
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

export default function Breadcrumbs() {
  const { pathname } = useLocation();

  // normaliza: tira barras duplicadas, leading/trailing slash
  const parts = pathname
    .replace(/\/+/g, "/")
    .replace(/^\/|\/$/g, "")
    .split("/")
    .filter(Boolean);

  // constrói crumbs cumulativos: /a, /a/b, /a/b/c...
  const crumbs = parts.map((seg, i) => {
    const path = "/" + parts.slice(0, i + 1).join("/");
    const label = slugToTitle(seg);
    return { path, label };
  });

  return (
    <nav aria-label="breadcrumb" className="text-sm">
     <ol className="flex flex-wrap gap-2 items-center">
        <li>
          <Link to="/" className="opacity-80 hover:opacity-100">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            <span className="opacity-40">›</span>
            {i === crumbs.length - 1 ? (
              <span className="font-medium text-neutral-500 dark:text-neutral-400">
                {c.label}
              </span>
            ) : (
              <Link to={c.path} className="opacity-80 hover:opacity-100">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
