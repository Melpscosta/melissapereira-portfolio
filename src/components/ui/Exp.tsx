import { useState } from "react";
import { ChevronUp, ChevronDown, MapPin } from "lucide-react"; // Corrigido aqui ✅

const experiencia = [
  {
    cargo: "Abbott",
    periodo: "2024 – Present",
    local: "São Paulo, BR",
    descricao: "Experiência em ambiente corporativo global, com interface entre áreas de vacinas e marketing. Contribuí com criação e tradução de apresentações, planilhas de automação em Excel com código VBA, e aplicação de conhecimentos de design em materiais internos. Também participei no processo de criação do site de vendas de vacinas da empresa (Influconnect).",
    tecnologias: ["UX/UI", "Microsoft 365", "Tradução de linguagem técnica para corporaivo", "Figma"],
  },
];

export default function ExperienciaAccordion() {
  const [ativo, setAtivo] = useState(null);

  const toggle = (index) => {
    setAtivo(ativo === index ? null : index);
  };

  return (
    <section className="mt-32 px-4 max-w-4xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Experiência Profissional
      </h2>

      {experiencia.map((exp, index) => (
        <div key={index} className="mb-6">
          {/* Cabeçalho do Accordion */}
          <button
            onClick={() => toggle(index)}
            className="w-full bg-[#9b34ef] rounded-md px-6 py-3 flex justify-between items-center text-black font-semibold text-lg transition-all"
          >
            <span>{exp.cargo}</span>
            <span>{exp.periodo}</span>
            {ativo === index ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {/* Corpo do Accordion */}
          {ativo === index && (
            <div className="bg-[#1e1b2e] rounded-md p-6 mt-2 flex flex-col gap-4 shadow-lg transition-all">
              {/* Local */}
              <div className="flex items-center text-sm gap-4 text-neutral-400">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  {exp.local}
                </span>
              </div>

              {/* Descrição */}
              <p className="text-neutral-300 leading-relaxed text-sm">
                {exp.descricao}
              </p>

              {/* Bullets com tecnologias */}
              <div className="flex flex-wrap gap-2">
                {exp.tecnologias.map((tec, i) => (
                  <span
                    key={i}
                    className="bg-[#2c2740] text-white text-xs px-3 py-1 rounded-full"
                  >
                    {tec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
