import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ProjetoMottu() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-16 scroll-smooth">
      {/* Título e introdução */}
      <motion.section
        {...fadeInUp}
        className="pt-32 pb-20 max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl md:text-5xl font-extrabold text-pink-400 mb-4">
          Mottu
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto">
          Mvp De Localização Inteligente De Motos Em Pátios Com Esp32 e celulares.
        </p>
      </motion.section>

      {/* Seção: Sobre o Projeto */}
      <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Sobre o projeto</h2>
        <p className="leading-relaxed text-neutral-300 mb-4">
          Estamos desenvolvendo um MVP de localização inteligente de motos em pátios utilizando uma combinação simples, viável e escalável: um módulo ESP32 fixo e celulares com Bluetooth ligado simulando as motos.
        </p>
        <p className="leading-relaxed text-neutral-300">
          O ESP32 escaneia constantemente os sinais Bluetooth ao seu redor e, com base na intensidade do sinal (RSSI), estima a proximidade de cada moto em tempo real. O sistema exibe um painel de localização com atualização contínua da presença, entrada e saída das motos nas zonas do pátio.
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
          Problemas que serão resolvidos
        </h2>
        <p className="leading-relaxed text-neutral-300">
           O projeto resolve a dificuldade de localizar motos específicas em pátios desorganizados, onde os dispositivos de rastreamento atuais são ineficazes ou ausentes. O sistema atual oferece apenas uma estimativa ampla, exigindo buscas manuais demoradas e imprecisas, o que reduz a produtividade e aumenta custos.
        </p>
      </motion.section>

      {/* Imagem 2 */}
      <motion.section {...fadeInUp} className="mb-16 max-w-5xl mx-auto">
        <img
          src="/imagens/porto-mockup-2.png"
          className="w-full rounded-xl border border-white/10 shadow-xl"
        />
      </motion.section>

         <motion.section {...fadeInUp} className="mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">
          Benefícios da solução
        </h2>
        <ul className="list-disc list-inside space-y-2 text-neutral-300">
          <li>Dispensa o uso de hardware caro nas motos</li>
          <li>Fácil de testar com celulares com Bluetooth</li>
          <li>Leitura contínua e visualização em tempo real</li>
          <li>Alta escalabilidade para diferentes filiais</li>
          <li>Base sólida para futuras evoluções tecnológicas</li>
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
          Espera-se uma melhoria significativa na gestão de pátios com redução de tempo para encontrar motos, menor erro humano, menor perda de ativos e maior eficiência operacional. A solução abre caminho para novas tecnologias, como visão computacional e trilateração.
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
