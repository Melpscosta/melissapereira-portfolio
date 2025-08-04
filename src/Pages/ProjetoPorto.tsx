import React from "react";
import { motion } from "framer-motion";

export default function ProjetoPorto() {
  return (
    <main className="pt-24 px-6 max-w-5xl mx-auto text-neutral-200">
      {/* Título e frase de impacto */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-pink-400 mb-4">
          Porto Seguro – Plataforma Integrada de Manutenção Automotiva com IA
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-neutral-300">
          Pré-diagnóstico veicular com IA, agendamento online e precificação automática em uma experiência digital completa.
        </p>
      </motion.section>

      {/* Sobre o projeto / contexto */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Sobre o projeto
        </h2>
        <p className="leading-relaxed text-neutral-300 mb-4">
          Já imaginou como seria fácil agendar um horário no mecânico, localizar as oficinas credenciadas mais próximas, reservar peças online, obter um pré-diagnóstico por meio de uma IA treinada e, a partir disso, receber um orçamento personalizado – tudo em um único ambiente digital?
        </p>
        <p className="leading-relaxed text-neutral-300">
          Esse foi o nosso objetivo com este projeto desenvolvido para a <strong>Porto Seguro</strong> em parceria com a <strong>FIAP</strong>: transformar uma jornada fragmentada de manutenção veicular em um fluxo digital fluido e conveniente, com foco em eficiência, redução de custos e experiência do cliente.
        </p>
      </section>

      {/* Motivação */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          O que nos motivou a criar essa solução?
        </h2>
        <p className="leading-relaxed text-neutral-300">
          Durante o projeto acadêmico com a FIAP, identificamos gargalos na jornada tradicional de manutenção automotiva: processos lentos, pouca transparência, e ausência de integração digital. Com o apoio da Porto Seguro, buscamos criar uma plataforma unificada que resolve essas dores com tecnologia de ponta e foco total na experiência do usuário.
        </p>
      </section>

      {/* Imagem mockup 1 */}
      <section className="mb-20">
        <img
          src="/imagens/porto-mockup-1.png"
          alt="Mockup do site da plataforma Porto"
          className="w-full rounded-xl border border-white/10 shadow-lg"
        />
      </section>

      {/* Funcionalidades */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Funcionalidades principais
        </h2>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>Localização de oficinas credenciadas próximas</li>
          <li>Agendamento de horários diretamente pelo site</li>
          <li>Reserva online de peças para o reparo</li>
          <li>Pré-diagnóstico automatizado com Inteligência Artificial</li>
          <li>Orçamento automático com base no diagnóstico</li>
        </ul>
      </section>

      {/* Imagem mockup 2 */}
      <section className="mb-20">
        <img
          src="/imagens/porto-mockup-2.png"
          alt="Design responsivo da plataforma"
          className="w-full rounded-xl border border-white/10 shadow-lg"
        />
      </section>

      {/* Conclusão */}
      <section className="mb-32">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Resultados esperados
        </h2>
        <p className="leading-relaxed text-neutral-300">
          A plataforma proposta oferece uma experiência omnicanal para o cliente final, reduzindo atritos e aumentando a eficiência do processo. É uma solução que fortalece o relacionamento entre clientes e oficinas credenciadas da Porto Seguro, além de abrir caminho para uma transformação digital mais ampla no setor automotivo.
        </p>
      </section>
    </main>
  );
}
