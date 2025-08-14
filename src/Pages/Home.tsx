import React, { useEffect } from "react";
import MyWork from "../components/myWork";
import Exp from "../components/Exp";
import Expertise from "../components/expertise";
import { Carousel, CarouselContent, CarouselItem } from "@/components/carousel";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import HashScrollHandler from "../components/HashScrollHandler"; // <- novo

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const certificados = [
  { nome: "Estratégias e Modelos de Negócios - FIAP", pdf: "/certificados/doc.pdf", imagem: "/assets/business.jpg" },
  { nome: "Python - FIAP", pdf: "/certificados/py.pdf", imagem: "/assets/Py.jpg" },
];

export default function MelissaPortfolio() {
  useEffect(() => {
    console.log(
      "%cOi curioso👋 Seja bem-vindo(a) ao meu portfólio!",
      "color: #ec4899; font-size: 16px; font-weight: bold;"
    );
  }, []);

  return (
    <main className="bg-white dark:bg-neutral-950 text-black dark:text-white font-sans min-h-screen px-6 pb-16 scroll-smooth">
      {/* rola até a âncora ao mudar o hash (#work, #experience, etc.) */}
      <HashScrollHandler />

      {/* HOME */}
      <section id="home" className="pt-32 pb-24 scroll-mt-24">
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

      {/* EXPERTISE */}
      <section id="expertise" className="scroll-mt-24">
        <Expertise />
      </section>

      {/* CERTIFICADOS (opcional no menu: #certificados) */}
      <motion.section id="certificados" {...fadeInUp} className="mt-32 text-center scroll-mt-24">
        <h2 className="text-4xl font-bold mb-10 text-center">Certificados</h2>
        <Carousel>
          <CarouselContent className="flex overflow-x-auto gap-10 px-80">
            {certificados.map((certificado, index) => (
              <CarouselItem
                key={index}
                className="min-w-[240px] bg-white dark:bg-neutral-800 text-black dark:text-white p-4 rounded-md hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <a href={certificado.pdf} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-full h-40 overflow-hidden rounded-md mb-2">
                    <img src={certificado.imagem} alt={certificado.nome} className="object-contain w-full h-full rounded-md" />
                  </div>
                  <p className="text-center font-semibold">{certificado.nome}</p>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.section>

      {/* WORK */}
      <section id="work" className="scroll-mt-24">
        <MyWork />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="scroll-mt-24">
        <Exp />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>
    </main>
  );
}
