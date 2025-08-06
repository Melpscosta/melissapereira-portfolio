import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoPorto() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-16 scroll-smooth">
      {/* Título e introdução */}
      <motion.section
        {...fadeInUp}
        className="pt-32 pb-20 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-5xl font-extrabold text-pink-400 mb-4">
          Porto Seguro
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
          Pré-diagnóstico veicular com IA, agendamento online e precificação automática em uma experiência digital completa.
        </p>
      </motion.section>

      {/* Seção: Sobre o Projeto */}
      <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Sobre o projeto</h2>
        <p className="leading-relaxed text-neutral-300 mb-4">
          Já imaginou como seria fácil agendar um horário no mecânico, localizar oficinas credenciadas próximas, reservar peças online e obter um pré-diagnóstico com IA, tudo em um só ambiente digital?
        </p>
        <p className="leading-relaxed text-neutral-300">
          Esse foi o objetivo com o projeto desenvolvido para a <strong>Porto Seguro</strong> em parceria com a <strong>FIAP</strong>: transformar uma jornada fragmentada de manutenção veicular em uma experiência eficiente, transparente e digital.
        </p>
      </motion.section>

      {/* Imagem 1 */}
      <motion.section {...fadeInUp} className="mb-16 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-1.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>

      {/* Motivação */}
      <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          O que nos motivou?
        </h2>
        <p className="leading-relaxed text-neutral-300">
          Durante o projeto acadêmico com a FIAP, identificamos gargalos no processo tradicional: lentidão, pouca integração e falta de transparência. A proposta foi usar tecnologia de ponta para transformar esse cenário em uma jornada simples e eficaz para o usuário.
        </p>
      </motion.section>

      {/* Imagem 2 */}
      <motion.section {...fadeInUp} className="mb-16 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-2.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>

      {/* Funcionalidades */}
      <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          Funcionalidades principais
        </h2>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>Localização de oficinas credenciadas</li>
          <li>Agendamento online de horários</li>
          <li>Reserva de peças pelo sistema</li>
          <li>Pré-diagnóstico com Inteligência Artificial</li>
          <li>Precificação automática e transparente</li>
        </ul>
      </motion.section>

      {/* Imagem 3 */}
      <motion.section {...fadeInUp} className="mb-16 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-3.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>

      {/* Imagem 4 */}
      <motion.section {...fadeInUp} className="mb-16 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-4.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>

      {/* Resultados esperados */}
      <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Resultados esperados</h2>
        <p className="leading-relaxed text-neutral-300">
          A plataforma promove uma experiência omnicanal para o cliente final, reduzindo atritos e aumentando a eficiência. Ela fortalece o relacionamento entre clientes e oficinas da Porto Seguro e marca um passo importante na transformação digital do setor automotivo.
        </p>
      </motion.section>

      {/* Imagem 5 */}
      <motion.section {...fadeInUp} className="mb-32 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-5.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>
    </main>
  );
}
