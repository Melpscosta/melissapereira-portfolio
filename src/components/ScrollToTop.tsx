import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
    // Evita o navegador restaurar a posição antiga
    if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
    }
    // Se for navegação com âncora (#work, #contact), deixamos o HashScrollHandler cuidar
    if (hash) return;

    // Ao trocar de página (ex.: /projetos/porto), sobe pro topo
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, [pathname, hash]);

    return null;
}
