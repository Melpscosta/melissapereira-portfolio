import React, { useEffect } from "react";
import MyWork from "../components/myWork";

import Exp from "../components/Exp"

import Expertise from "../components/expertise";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/carousel";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

/* const especialidades = [
  {
    titulo: "Front-end",
    conteudo: "Experiência com HTML, CSS, Tailwind, JavaScript, TypeScript, React, React Native e Vite. 
    Habilidade em criar interfaces responsivas e intuitivas para web e mobile.",
  },
  {
    titulo: "Back-end",
    conteudo: "Conhecimento em Python, Java, C++ e bancos de dados com SQL e PL/SQL. Experiência em consultas complexas e lógica de aplicação para suporte às funcionalidades. 
    Integro front-end e back-end de forma eficiente.",
  },
  {
    titulo: "Design",
    conteudo: "Domínio em web design com Figma e Photoshop.
    Apaixonada por criar interfaces limpas, acessíveis e visualmente atraentes.",
  },
    {
    titulo: "Infraestrutura e Tecnologias Emergentes",
    conteudo: "Familiaridade com AWS, máquinas virtuais e Docker para ambientes de desenvolvimento e implantação. 
    Interesse e conhecimentos iniciais em Inteligência Artificial (IA) e Internet das Coisas (IoT), aplicando esses conceitos em projetos acadêmicos e pessoais.",
  },
]; */

const certificados = [
  {
    nome: 'Estratégias e Modelos de Negócios - FIAP',
    pdf: '/certificados/doc.pdf',
    imagem: '/assets/business.jpg',
  },
  {
    nome: 'Python - FIAP',
    pdf: '/certificados/py.pdf',
    imagem: '/assets/Py.jpg',
  },
];


export default function MelissaPortfolio() {
  useEffect(() => {
    console.log(
      `%cOi curioso👋 Seja bem-vindo(a) ao meu portfólio!`,
      "color: #ec4899; font-size: 16px; font-weight: bold;"
    );
  }, []);

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-16 scroll-smooth">
      <section id="home" className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <motion.h1
            {...fadeInUp}
            className="text-6xl md:text-7xl font-extrabold tracking-tight uppercase text-black dark:text-white"
          >
            Melissa Pereira da Costa
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-400 font-mono tracking-wide"
          >
            Tenho 21 anos, sou desenvolvedora full stack com foco em front-end.
            <br />
            Busco unir tecnologia e criatividade para criar experiências digitais marcantes.
          </motion.p>
        </div>
      </section>

      <Expertise />

      <motion.section {...fadeInUp} className="mt-32 text-center">
  <h2 className="text-4xl font-bold mb-10 text-center">
        Certificados
      </h2>
  <Carousel>
    <CarouselContent className="flex overflow-x-auto gap-10 px-80  ">
      {certificados.map((certificado, index) => (
        <CarouselItem
          key={index}
          className="min-w-[240px] bg-white dark:bg-neutral-800 text-black dark:text-white p-4 rounded-md hover:scale-105 transition-transform duration-300 shadow-md"
        >
          <a
            href={certificado.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="w-full h-40 overflow-hidden rounded-md mb-2">
              <img
                src={certificado.imagem}
                alt={certificado.nome}
                className="object-contain w-full h-full rounded-md"
              />
            </div>
            <p className="text-center font-semibold">{certificado.nome}</p>
          </a>
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
</motion.section>


      <MyWork />

      <Exp />

    

      {/*  <motion.section
    {...fadeInUp}
    id="final"
    className="mt-32 mb-10 text-center text-sm text-neutral-600 dark:text-neutral-500"
  >
    <p>
      Aberta a colaborações freelance com propósito. Se você tem um projeto especial e acha que podemos construir algo incrível juntos, vou adorar ouvir sua ideia. Me mande um e-mail — vamos conversar!
    </p>
    <p className="mt-1">
      Contato:{" "}
      <span className="text-black dark:text-white">
        <a
          href="mailto:melissapcosta@gmail.com"
          className="underline hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          melissapcosta@gmail.com
        </a>
      </span>
    </p>

    <div className="mt-4 flex justify-center gap-4">
      <a
        href="https://github.com/Melpscosta"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-neutral-200 dark:bg-neutral-800 px-5 py-2 text-black dark:text-white transition hover:bg-neutral-300 dark:hover:bg-neutral-700"
      >
        <Github size={18} />
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/melissa-pereira-da-costa-b3a2a519a/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-500"
      >
        <Linkedin size={18} />
        LinkedIn
      </a>
    </div>
  </motion.section>
 */}
      <Footer />
    </main>
  );
}
