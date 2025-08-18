// src/components/Exp.tsx
import React from "react";

export type ExpItem = {
  titulo: string;
  empresa?: string;
  periodo?: string;
  local?: string;
  pontos?: string[];
  tecnologias?: string[];
};

type ExpProps = {
  itens?: ExpItem[];      // <-- opcional
  className?: string;
};

const Exp: React.FC<ExpProps> = ({ itens = [], className }) => { // <-- default []
  return (
    <section className={className}>
      <ul className="space-y-6">
        {itens.map((exp: ExpItem, idx: number) => (
          <li key={idx} className="rounded-2xl border border-white/10 p-5 bg-neutral-950/70">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-white font-semibold text-lg">{exp.titulo}</h3>
              {exp.empresa && <span className="text-neutral-300">• {exp.empresa}</span>}
              {exp.periodo && <span className="text-neutral-400 text-sm">{exp.periodo}</span>}
              {exp.local && <span className="text-neutral-400 text-sm">• {exp.local}</span>}
            </div>

            {Array.isArray(exp.pontos) && exp.pontos.length > 0 && (
              <ul className="mt-3 list-disc list-inside text-neutral-300 space-y-1">
                {exp.pontos.map((p: string, i: number) => <li key={i}>{p}</li>)}
              </ul>
            )}

            {Array.isArray(exp.tecnologias) && exp.tecnologias.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tecnologias.map((t: string, i: number) => (
                  <span key={i} className="bg-white/10 text-neutral-200 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Exp;
