import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function HashScrollHandler() {
    const { hash } = useLocation();

    useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const el = document.getElementById(id);
    if (!el) return;

    // garante que o layout já foi pintado
    requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    }, [hash]);

    return null;
}
