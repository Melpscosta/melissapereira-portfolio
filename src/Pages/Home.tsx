import { useEffect, useState } from "react";
import MyWork from "../components/myWork";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";
import HashScrollHandler from "../components/HashScrollHandler";
import Grainient from "../components/Grainient";
import melissaSobreFoto from "../assets/WhatsApp Image 2026-04-22 at 20.25.07.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

type Certificado = {
  nome: string;
  pdf: string;
  descricao: string;
  /** Omitir quando o certificado não informar carga horária */
  horas?: string;
  instituicao: string;
};

const certificados: Certificado[] = [
  {
    nome: "Qualificação Profissional em Desenvolvimento de Aplicações Móveis",
    pdf: "/certificados/AppsGoldQualified.pdf",
    descricao:
      "Qualificação focada em desenvolvimento de aplicações móveis, arquitetura e boas práticas para produtos digitais robustos.",
    instituicao: "FIAP",
  },
  {
    nome: "Design System",
    pdf: "/certificados/DesignSystem.pdf",
    descricao:
      "Criação e evolução de sistemas de design: tokens, componentes, documentação e alinhamento entre design e código.",
    horas: "8 h",
    instituicao: "ALURA",
  },
  {
    nome: "Estratégias e Modelos de Negócios",
    pdf: "/certificados/doc.pdf",
    descricao:
      "Visão estratégica de negócios, modelagem de proposta de valor e alinhamento entre produto, mercado e operação.",
    horas: "100 h",
    instituicao: "FIAP",
  },
  {
    nome: "Qualificação Profissional em Estratégia e Inovação Tecnológica com aplicações em IA e IoT",
    pdf: "/certificados/IAQualifiedPratapdf.pdf",
    descricao:
      "Estratégia e inovação tecnológica com aplicações em inteligência artificial e internet das coisas, conectando visão de negócio a soluções reais.",
    instituicao: "FIAP",
  },
  {
    nome: "Python",
    pdf: "/certificados/py.pdf",
    descricao:
      "Linguagem Python aplicada a lógica, estruturas de dados e bases para automação e desenvolvimento backend.",
    horas: "80 h",
    instituicao: "FIAP",
  },
  {
    nome: "UI para Devs",
    pdf: "/certificados/UIParaDevsAlura.pdf",
    descricao:
      "Interface do ponto de vista do desenvolvedor: hierarquia visual, componentes e consistência na entrega em código.",
    horas: "8 h",
    instituicao: "ALURA",
  },
  {
    nome: "User Experience Nano",
    pdf: "/certificados/UserExperienceNano.pdf",
    descricao:
      "Pesquisa com usuários, jornadas, prototipação e usabilidade para projetar experiências digitais centradas na pessoa.",
    horas: "60 h",
    instituicao: "FIAP",
  },
];

function tripleCerts(list: Certificado[]) {
  return [...list, ...list, ...list];
}

/** Faixas com conjuntos diferentes: índices pares × ímpares (sem repetir o mesmo PDF entre fileiras). */
function splitCertsPorFileira(list: Certificado[]) {
  const pares = list.filter((_, i) => i % 2 === 0);
  const impares = list.filter((_, i) => i % 2 === 1);
  if (impares.length === 0) return { fileira0: list, fileira1: list };
  if (pares.length === 0) return { fileira0: list, fileira1: list };
  return { fileira0: pares, fileira1: impares };
}

function CertMarqueeCard({ c }: { c: Certificado }) {
  return (
    <article className="group relative w-[min(88vw,340px)] shrink-0 sm:w-[400px] md:w-[440px] lg:w-[480px]">
      <a
        href={c.pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring block outline-none"
        aria-label={`${c.nome} — ${c.instituicao}, abrir PDF em nova aba`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-800 shadow-[0_0_0_1px_rgba(255,255,255,0.05)] transition-[transform,box-shadow,border-color] duration-500 ease-out will-change-transform group-hover:-translate-y-1 group-hover:border-crimson-600/50 group-hover:shadow-[0_32px_80px_-24px_rgba(220,20,60,0.28)] group-focus-visible:-translate-y-1 group-focus-visible:border-crimson-600/50">
          <div className="relative h-[220px] w-full overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-black sm:h-[248px] md:h-[276px] lg:h-[300px]">
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-95 group-focus-within:opacity-95"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 z-[1] overflow-hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
              aria-hidden
            >
              <div className="absolute inset-y-0 -left-1/3 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent motion-safe:group-hover:animate-[certSweep_3s_ease-in-out_infinite] motion-reduce:group-hover:animate-none" />
            </div>
            <object
              data={`${c.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              type="application/pdf"
              tabIndex={-1}
              className="pointer-events-none relative z-0 h-full w-full scale-[1.02] transition-transform duration-700 ease-out select-none group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
              aria-hidden
            >
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-ink-900 via-ink-800 to-black p-8">
                <div className="flex flex-col items-center">
                  <FileText className="h-16 w-16 text-crimson-500/85 sm:h-[4.25rem] sm:w-[4.25rem]" aria-hidden />
                  <span className="mt-2 text-[10px] font-mono uppercase tracking-[0.24em] text-white/40">PDF</span>
                </div>
              </div>
            </object>

            <div
              className="pointer-events-none absolute inset-0 z-[2] bg-black/0 transition-colors duration-500 group-hover:bg-black/82 group-focus-within:bg-black/82"
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-0 z-[3] flex flex-col justify-center px-4 py-5 sm:px-6 sm:py-6">
              <div className="translate-y-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-xl border border-white/12 bg-neutral-950/95 p-4 shadow-2xl ring-1 ring-black/60 backdrop-blur-md sm:p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-crimson-400">{c.instituicao}</p>
                  <h3 className="font-parkinsans mt-2 text-sm font-bold leading-snug tracking-wide text-white sm:text-base sm:leading-snug">
                    {c.nome}
                  </h3>
                  <p className="mt-2 line-clamp-4 text-xs leading-relaxed text-white/90 sm:text-[13px] sm:leading-relaxed">
                    {c.descricao}
                  </p>
                  {c.horas?.trim() ? (
                    <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">{c.horas}</p>
                  ) : null}
                  <p className="mt-4 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
                    Abrir PDF
                    <ArrowUpRight className="h-3.5 w-3.5 text-crimson-400" aria-hidden />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

const heroTech = ["React", "TypeScript", "CSS", "HTML", "Tailwind", "JavaScript"];

/** Textura SVG leve (film grain) para a secção Sobre — repete em mosaico */
const sobreNoiseDataUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`;

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

export default function MelissaPortfolio() {
  const [heroDim, setHeroDim] = useState(0);
  const { fileira0, fileira1 } = splitCertsPorFileira(certificados);

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
              className="type-display-hero"
            >
              Melissa Pereira
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }}
              className="type-lead mt-6 max-w-3xl"
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
                <h2 className="type-section-title">
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

      {/* ─────────── PROJETOS (logo após Sobre) ─────────── */}
      <section
        id="work"
        className="relative mt-0 scroll-mt-24 overflow-hidden bg-black px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 md:px-8 md:pb-24 md:pt-14"
        aria-labelledby="work-heading"
      >
        <MyWork />
      </section>

      {/* ─────────── CERTIFICADOS ─────────── */}
      <motion.section
        id="certificados"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.5 }}
        className="relative mt-0 scroll-mt-24 overflow-hidden bg-black px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 md:px-8 md:pb-24 md:pt-10"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(220, 20, 60, 0.35), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(80, 0, 0, 0.25), transparent 50%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative z-20 max-w-3xl text-left"
          >
            <header>
              <h2 className="type-section-title">
                Certificados
              </h2>
            </header>
          </motion.div>
        </div>

        {/* Faixas full-bleed — mesmo espaçamento título → conteúdo que em Sobre (mt-8 sm:mt-10) */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-8 w-screen max-w-[100vw] sm:mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-black via-black/95 to-transparent sm:w-24 md:w-32"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-black via-black/95 to-transparent sm:w-24 md:w-32"
            aria-hidden
          />
          <div className="space-y-12 py-6 sm:space-y-16 sm:py-8 md:space-y-20 md:py-10">
            <div className="overflow-hidden">
              <div className="cert-marquee-track flex w-max items-center gap-5 px-3 sm:gap-7 sm:px-6 md:gap-9 md:px-10">
                {tripleCerts(fileira0).map((c, index) => (
                  <CertMarqueeCard key={`r0-${c.pdf}-${index}`} c={c} />
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="cert-marquee-track cert-marquee-track--rev flex w-max items-center gap-6 px-4 sm:gap-9 sm:px-8 md:gap-11 md:px-12">
                {tripleCerts(fileira1).map((c, index) => (
                  <CertMarqueeCard key={`r1-${c.pdf}-${index}`} c={c} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
