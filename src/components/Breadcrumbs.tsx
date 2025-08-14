import { Link, useLocation } from "react-router-dom";

const labels: Record<string, string> = {
    "": "Home",
    work: "Work",
    expertise: "Expertise",
    experience: "Experience",
    contact: "Contact",
};

export default function Breadcrumbs() {
    const { pathname } = useLocation();
    const parts = pathname
    .replace(/^\/+|\/+$/g, "")
    .split("/")
    .filter(Boolean);
    const crumbs = parts.map((seg, i) => ({
    path: "/" + parts.slice(0, i + 1).join("/"),
    label: labels[seg] || seg.replace(/-/g, " "),
    }));

    return (
    <nav aria-label="Breadcrumb" className="text-sm">
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
            <span className="font-medium">{c.label}</span>
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
