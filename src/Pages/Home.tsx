import { useEffect, useState } from "react";
import MyWork from "../components/myWork";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Footer from "@/components/Footer";
import HashScrollHandler from "../components/HashScrollHandler";
import Grainient from "../components/Grainient";
import melissaSobreFoto from "../assets/WhatsApp Image 2026-04-22 at 20.25.07.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const certificados = [
  { nome: "Apps Gold Qualified", pdf: "/certificados/AppsGoldQualified.pdf" },
  { nome: "Design System", pdf: "/certificados/DesignSystem.pdf" },
  { nome: "Estratégias e Modelos de Negócios", pdf: "/certificados/doc.pdf" },
  { nome: "IA Qualified Prata", pdf: "/certificados/IAQualifiedPratapdf.pdf" },
  { nome: "Python", pdf: "/certificados/py.pdf" },
  { nome: "UI para Devs (Alura)", pdf: "/certificados/UIParaDevsAlura.pdf" },
  { nome: "User Experience Nano", pdf: "/certificados/UserExperienceNano.pdf" },
];

const heroTech = ["React", "TypeScript", "CSS", "HTML", "Tailwind", "JavaScript"];

/** Textura SVG leve (film grain) para a secção Sobre — repete em mosaico */
const sobreNoiseDataUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`;

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

export default function MelissaPortfolio() {
  const [heroDim, setHeroDim] = useState(0);
  const [certApi, setCertApi] = useState<CarouselApi>();

  useEffect(() => {
    console.log(
      "%cOi, curioso(a) 👋 Bem-vindo(a) ao meu portfólio.",
      "color:#dc143c;font-size:14px;font-weight:600;letter-spacing:.04em"
    );
  }, []);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const end = Math.min(Math.max(window.innerHeight * 0.68, 480), 920);
      const raw = Math.min(1, Math.max(0, y / end));
      const eased = Math.pow(raw, 0.82);
      setHeroDim(smoothstep(eased));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!certApi) return;
    const id = window.setInterval(() => {
      certApi.scrollNext();
    }, 4200);
    return () => window.clearInterval(id);
  }, [certApi]);

  return (
    <main className="font-sans min-h-screen scroll-smooth text-white">
      <HashScrollHandler />

      {/* ─────────── HERO ─────────── */}
      <section
        id="home"
        className="relative min-h-[100dvh] scroll-mt-24 overflow-hidden bg-black"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 will-change-[opacity]" style={{ opacity: 1 - heroDim }}>
            <Grainient
              className="absolute inset-0 min-h-full w-full"
              color1="#900a0a"
              color2="#000000"
              color3="#720000"
              timeSpeed={0.55}
              colorBalance={-0.41}
              warpStrength={1}
              warpFrequency={3}
              warpSpeed={2}
              warpAmplitude={36}
              blendAngle={-11}
              blendSoftness={0.2}
              rotationAmount={450}
              noiseScale={2}
              grainAmount={0.1}
              grainScale={2}
              grainAnimated={false}
              contrast={1.5}
              gamma={1}
              saturation={1}
              centerX={0}
              centerY={0}
              zoom={0.9}
            />
          </div>
          <div className="absolute inset-0 bg-black will-change-[opacity]" style={{ opacity: heroDim }} />
        </div>

        {/* Ponte visual: hero dissolve em preto (com eco mínimo do vermelho) antes do Sobre */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[clamp(5.5rem,20dvh,12rem)] bg-gradient-to-t from-black via-black/88 to-transparent md:h-[clamp(6.5rem,24dvh,14rem)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[clamp(4rem,14dvh,8rem)] bg-gradient-to-t from-transparent via-crimson-900/12 to-transparent opacity-80"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-5xl flex-col px-5 pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.75, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-ojuju font-bold text-[clamp(2.75rem,10vw,5.5rem)] uppercase leading-[0.98] tracking-[0.02em] text-crimson-500/90"
            >
              Melissa Pereira
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-parkinsans mt-6 max-w-3xl text-[clamp(0.85rem,2.4vw,1.15rem)] font-medium uppercase leading-snug tracking-[0.38em] text-white/70 md:tracking-[0.48em]"
            >
              Desenvolvedora front-end
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex shrink-0 flex-wrap items-center justify-center gap-x-6 gap-y-2.5 pb-4 text-sm text-white/55 md:gap-x-9 md:text-[0.95rem]"
          >
            {heroTech.map((t) => (
              <span key={t} className="font-parkinsans font-normal tracking-wide">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── SOBRE — continuação orgânica do hero (noise + mistura no topo) ─────────── */}
      <section
        id="about"
        className="relative scroll-mt-24 overflow-hidden bg-black px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-8 md:pb-24 md:pt-14 lg:pb-28 lg:pt-16"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.16] mix-blend-overlay"
          style={{
            backgroundImage: sobreNoiseDataUrl,
            backgroundRepeat: "repeat",
            backgroundSize: "96px 96px",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-soft-light"
          style={{
            backgroundImage: sobreNoiseDataUrl,
            backgroundRepeat: "repeat",
            backgroundSize: "160px 160px",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="flex flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16 xl:gap-20"
          >
            <div className="min-w-0 flex-1 lg:max-w-xl xl:max-w-[28rem]">
              <header>
                <h2 className="font-parkinsans text-4xl font-extrabold uppercase tracking-wide text-crimson-500 sm:text-5xl">
                  Sobre
                </h2>
              </header>

              <div className="mt-8 space-y-5 text-[15px] leading-[1.78] text-white/75 sm:mt-10 sm:text-base">
                <p>
                  <span className="font-medium text-white/95">Olá! Eu sou a Melissa.</span> Sou formada em Análise e
                  Desenvolvimento de Sistemas pela FIAP — e foi nessa jornada que encontrei o que mais me move:{" "}
                  <span className="text-white/90">front-end e design</span>, e a vontade constante de dar forma a ideias
                  na tela.
                </p>
                <p>
                  Hoje me aprofundo em <strong className="font-medium text-white/90">web design</strong> e no
                  desenvolvimento de produtos digitais, buscando unir estética, usabilidade e funcionalidade em cada
                  entrega. Gosto de pensar no detalhe que deixa a experiência mais clara, mais fluida e mais memorável —
                  sem abrir mão de código limpo e acessível.
                </p>
                <p>
                  Estou sempre em movimento: estudando, testando coisas novas e refinando o que já sei, com o objetivo de
                  crescer na área e ajudar a transformar ideias em{" "}
                  <span className="text-white/90">soluções reais</span> que as pessoas gostem de usar.
                </p>
              </div>
            </div>

            <figure className="mx-auto flex w-full max-w-xs shrink-0 justify-center sm:max-w-sm lg:mx-0 lg:max-w-md xl:max-w-lg">
              <div className="rounded-[1.35rem] bg-white/[0.02] p-2 sm:p-3">
                <img
                  src={melissaSobreFoto}
                  alt="Melissa Pereira"
                  className="mx-auto block h-auto max-h-[min(78vh,720px)] w-full max-w-full object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </figure>
          </motion.div>
        </div>
      </section>

      {/* ─────────── CERTIFICADOS ─────────── */}
      <motion.section
        id="certificados"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="relative mt-0 scroll-mt-24 overflow-hidden bg-black px-4 pb-12 pt-4 sm:px-6 sm:pb-14 sm:pt-5 md:px-8 md:pb-16 md:pt-6 lg:pb-20"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl text-left md:mb-14">
            <h2 className="font-parkinsans text-4xl font-extrabold uppercase tracking-wide text-crimson-500 md:text-5xl">
              Certificados
            </h2>
            <p className="mt-4 text-sm text-white/50 md:text-base">
              Formação contínua em desenvolvimento, design e experiência de produto.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setCertApi}
            className="relative px-2 md:px-6"
          >
            <CarouselContent className="pb-2">
              {certificados.map((c, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[88%] sm:basis-[68%] md:basis-1/2 lg:basis-[42%] xl:basis-[36%]"
                >
                  <article className="h-full rounded-2xl border border-white/10 bg-ink-700 p-4 transition-all duration-500 hover:border-crimson-600/50 hover:shadow-accent">
                    <a
                      href={c.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl focus-ring"
                    >
                      <div className="mb-3 h-52 overflow-hidden rounded-lg bg-ink-800">
                        <object
                          data={`${c.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                          type="application/pdf"
                          className="h-full w-full"
                          aria-label={`Prévia do certificado ${c.nome}`}
                        >
                          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink-800 via-ink-700 to-ink-800 p-5">
                            <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-white/10 bg-black/30">
                              <FileText className="h-10 w-10 text-crimson-500/90" />
                              <span className="mt-2 text-[11px] font-mono uppercase tracking-[0.22em] text-white/60">
                                PDF
                              </span>
                            </div>
                          </div>
                        </object>
                      </div>
                      <p className="text-center text-sm text-white/80 transition group-hover:text-white">
                        {c.nome}
                      </p>
                    </a>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-1/2 -translate-y-1/2 border-white/20 bg-black/70 text-white hover:bg-black hover:text-white md:-left-1" />
            <CarouselNext className="right-0 top-1/2 -translate-y-1/2 border-white/20 bg-black/70 text-white hover:bg-black hover:text-white md:-right-1" />
          </Carousel>
        </div>
      </motion.section>

      {/* ─────────── PROJETOS ─────────── */}
      <section
        id="work"
        className="relative mt-0 scroll-mt-24 bg-black pt-14 sm:pt-16 md:pt-20"
      >
        <MyWork />
      </section>

      {/* ─────────── CONTATO ─────────── */}
      <section
        id="contact"
        className="relative scroll-mt-24 bg-black pt-14 sm:pt-16 md:pt-20"
      >
        <Footer />
      </section>
    </main>
  );
}
