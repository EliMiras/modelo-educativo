import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight, Mail, Menu, Phone, ShoppingCart } from "lucide-react";
import { useMemo, useState } from "react";

import aulaHero from "@/assets/modelo-educativo-aula.jpg";
import aulaContexto from "@/assets/modelo-adaptacion-contexto.jpg";
import aulaGlobal from "@/assets/modelo-educacion-global.jpg";
import aulaHolistica from "@/assets/modelo-metodologia-holistica.jpg";
import logoColor from "@/assets/logo-exdintra.svg";
import logoWhite from "@/assets/logo-exdintra-white.svg";
import almaymente from "@/assets/partners/almaymente.png";
import federica from "@/assets/partners/federica.png";
import northern from "@/assets/partners/northern.png";
import udima from "@/assets/partners/udima.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Modelo Educativo - Exdintra" },
      {
        name: "description",
        content:
          "Conoce el modelo educativo de Exdintra: educación consciente, metodología holística, aula real y educación global.",
      },
      { property: "og:title", content: "Modelo Educativo - Exdintra" },
      {
        property: "og:description",
        content:
          "Un modelo educativo consciente para docentes que buscan transformar su práctica en el aula.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Másters", href: "https://exdintra.com/programs-category/masters/" },
  { label: "Diplomados", href: "https://exdintra.com/programs-category/diplomados/" },
  { label: "Cursos", href: "https://exdintra.com/programs-category/cursos/" },
  { label: "Prácticas internacionales", href: "https://exdintra.com/practicas-internacionales/" },
  { label: "Modelo educativo", href: "https://exdintra.com/modelo-educativo/" },
  { label: "Blog", href: "https://exdintra.com/blog/" },
];

const partners = [
  { name: "Universidad a Distancia de Madrid", image: udima },
  { name: "Alma y Mente", image: almaymente },
  { name: "Federica Trombetta", image: federica },
  { name: "Northern International University", image: northern },
];

const pillars = [
  {
    eyebrow: "Desarrollo integral de la persona",
    title: "Metodología Holística",
    image: aulaHolistica,
    alt: "Docentes en un aula Waldorf compartiendo materiales pedagógicos",
    text: "Creando un estado positivo para el aprendizaje. En Exdintra entendemos que no hay desarrollo profesional sin desarrollo personal. Nos involucramos emocionalmente con el docente en el proceso, fomentamos la curiosidad y la participación, concediendo especial atención al intercambio de experiencias e ideas, y trabajamos teniendo en cuenta pensamiento creativo, asociativo y crítico a través de propuestas reales de aula.",
  },
  {
    eyebrow: "De enseñanza de cada docente",
    title: "Adaptación al contexto",
    image: aulaContexto,
    alt: "Profesora acompañando a estudiantes con materiales Montessori en el aula",
    text: "Aprendiendo desde la práctica del aula real. Saber y no hacer, es no saber. Nuestra metodología está basada en el «aprender haciendo», de este modo se convierte en un proceso global que abraza a la persona con todo su potencial racional, social y emocional acompañándola en todo el proceso del curso para cumplir sus objetivos.",
  },
  {
    eyebrow: "Enseñanza enfocada para fomentar la educación global",
    title: "Educación Global",
    image: aulaGlobal,
    alt: "Profesor y alumnos trabajando alrededor de un mapa en el aula",
    text: "La educación global como metodología educativa ofrece la oportunidad de desarrollar una mentalidad abierta, empática y solidaria, que permite ser ciudadanos del mundo comprometidos con la construcción de un futuro más justo, equitativo y sostenible.",
  },
];

const footerGroups = [
  {
    title: "Programas Académicos",
    links: ["Masters", "Diplomados", "Cursos", "Prácticas Internacionales"],
  },
  {
    title: "Quienes somos",
    links: ["Sobre Nosotros", "Alianzas", "Blog"],
  },
  {
    title: "Ayuda",
    links: ["Preguntas Frecuentes", "Aviso Legal", "Política de Privacidad", "Política de Cookies"],
  },
];

function Index() {
  const [activePillar, setActivePillar] = useState(0);
  const currentPillar = pillars[activePillar];

  const nextPillar = () => setActivePillar((current) => (current + 1) % pillars.length);
  const previousPillar = () => setActivePillar((current) => (current + pillars.length - 1) % pillars.length);

  const carouselLabel = useMemo(
    () => `${activePillar + 1} de ${pillars.length}: ${currentPillar.title}`,
    [activePillar, currentPillar.title],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
          <a href="https://exdintra.com/" aria-label="Exdintra" className="block shrink-0">
            <img src={logoWhite} alt="Exdintra" className="h-10 w-auto sm:h-12" width={210} height={54} />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-heading text-xs font-black uppercase leading-none text-primary-foreground transition hover:text-mint"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://exdintra.com/carrito/"
              className="inline-flex items-center gap-2 font-heading text-xs font-black uppercase text-primary-foreground transition hover:text-mint"
            >
              <ShoppingCart aria-hidden="true" className="size-4" />0 € 0 Carrito
            </a>
            <Button asChild className="rounded-full bg-mint px-7 font-heading text-xs font-black uppercase text-mint-foreground shadow-none hover:bg-mint/90">
              <a href="https://exdintra.com/contacto/">Contacto</a>
            </Button>
          </div>
          <Button aria-label="Abrir menú" size="icon" className="rounded-full bg-mint text-mint-foreground shadow-none lg:hidden">
            <Menu aria-hidden="true" />
          </Button>
        </div>
      </header>

      <section className="relative min-h-[520px] bg-hero pt-28 text-primary-foreground sm:min-h-[600px] lg:min-h-[610px]">
        <img
          src={aulaHero}
          alt="Aula Montessori con una profesora acompañando a un grupo de alumnos"
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-screen"
          width={1536}
          height={1024}
        />
        <div className="bg-exdintra-hero absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-28 lg:pt-24">
          <div className="max-w-2xl">
            <p className="mb-4 font-heading text-sm font-black uppercase text-mint">Exdintra Innovative Training</p>
            <h1 className="font-heading text-5xl font-black leading-none sm:text-6xl lg:text-7xl">
              Modelo Educativo
            </h1>
            <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">
              La educación en este momento necesita una verdadera transformación y ello comienza con el cambio personal de los educadores y la toma de consciencia del modelo educativo en el que se encuentran.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <img src={logoColor} alt="Exdintra Innovative Training" className="w-full max-w-md drop-shadow-2xl" width={430} height={425} />
          </div>
        </div>
      </section>

      <section className="curve-accent relative bg-background py-16 sm:py-24">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div className="relative overflow-hidden rounded-[45%] shadow-soft">
            <img
              src={aulaHero}
              alt="Niños aprendiendo con materiales manipulativos en un aula luminosa"
              className="aspect-[1.24/1] w-full object-cover"
              width={1536}
              height={1024}
            />
          </div>
          <div>
            <h2 className="font-heading text-4xl font-black leading-tight text-primary sm:text-5xl">
              ¿Qué es la Educación Consciente?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground sm:text-lg">
              Es un enfoque pedagógico que se centra en el desarrollo integral de los estudiantes, cultivando la autoconciencia, la empatía y la resiliencia emocional. Se basa en la conexión auténtica entre educadores y estudiantes, fomentando un aprendizaje significativo que va más allá de la mera adquisición de conocimientos, promoviendo valores y habilidades para afrontar la vida de manera consciente y ética. Este enfoque busca formar individuos capaces de contribuir positivamente a la sociedad.
            </p>
            <h3 className="mt-8 max-w-2xl font-heading text-2xl font-black leading-tight text-secondary sm:text-3xl">
              Los docentes conscientes promueven alumnos conscientes, los alumnos conscientes se transforman en ciudadanos conscientes
            </h3>
          </div>
        </div>
      </section>

      <section className="bg-section py-14 sm:py-18">
        <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
          <h2 className="font-heading text-2xl font-black text-primary sm:text-3xl">
            Aliados que comparten nuestra visión
          </h2>
          <div className="mt-10 grid grid-cols-2 items-center gap-9 md:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="flex h-24 items-center justify-center px-4">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-20 w-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="mt-7 flex justify-center gap-2" aria-hidden="true">
            <span className="size-2 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-mint" />
            <span className="size-2 rounded-full bg-mint" />
          </div>
        </div>
      </section>

      <section id="modelo" className="bg-exdintra-model py-16 text-primary-foreground sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-black leading-tight text-mint sm:text-5xl">
              Modelo Educativo de Exdintra
            </h2>
            <div className="mx-auto mt-5 h-3 w-44 rounded-full bg-primary-foreground" />
            <p className="mt-8 text-base leading-relaxed sm:text-lg">
              ¿Cómo entendemos desde Exdintra la docencia y cómo la integramos en nuestras formaciones? Porque queremos darte soluciones efectivas a lo que «tú» realmente necesitas, hemos creado un modelo único basado en <strong>3 pilares esenciales</strong>:
            </p>
          </div>

          <div className="mt-12 rounded-[2rem] bg-background p-3 text-foreground shadow-exdintra sm:p-5 lg:p-7">
            <div className="grid min-h-[520px] gap-7 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-muted">
                <img
                  key={currentPillar.title}
                  src={currentPillar.image}
                  alt={currentPillar.alt}
                  className="h-full min-h-[310px] w-full object-cover animate-in fade-in duration-500"
                  loading="lazy"
                  width={1536}
                  height={1024}
                />
                <div className="absolute left-5 top-5 rounded-full bg-mint px-5 py-2 font-heading text-sm font-black uppercase text-mint-foreground">
                  Pilar {activePillar + 1}
                </div>
              </div>
              <div className="flex flex-col justify-between p-3 sm:p-6 lg:p-8">
                <div>
                  <p className="font-heading text-sm font-black uppercase text-mint">{currentPillar.eyebrow}</p>
                  <h3 className="mt-3 font-heading text-4xl font-black leading-tight text-primary sm:text-5xl">
                    {currentPillar.title}
                  </h3>
                  <p className="mt-7 text-lg leading-relaxed text-foreground">{currentPillar.text}</p>
                </div>
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3" aria-label={carouselLabel}>
                    {pillars.map((pillar, index) => (
                      <button
                        key={pillar.title}
                        type="button"
                        onClick={() => setActivePillar(index)}
                        aria-label={`Ver ${pillar.title}`}
                        className={`h-3 rounded-full transition-all ${index === activePillar ? "w-12 bg-primary" : "w-3 bg-brand-soft hover:bg-mint"}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button type="button" size="icon" variant="outline" onClick={previousPillar} aria-label="Pilar anterior" className="rounded-full">
                      <ArrowLeft aria-hidden="true" />
                    </Button>
                    <Button type="button" size="icon" onClick={nextPillar} aria-label="Pilar siguiente" className="rounded-full bg-primary text-primary-foreground">
                      <ArrowRight aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="font-heading text-sm font-black uppercase text-mint">Un Nuevo Enfoque</p>
            <h2 className="mt-3 font-heading text-4xl font-black leading-tight text-primary sm:text-5xl">
              Nuestro mundo necesita más docentes dispuestos a crecer y a amplificar su impacto positivo en las aulas
            </h2>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground">
              <p>
                Nuestro modelo educativo guía a quienes no se identifican con el paradigma actual, implicándonos con ellos en el descubrimiento de un nuevo modo de entender la “nueva educación”.
              </p>
              <p>
                Lleva el contenido transformador de Exdintra a tu aula para impulsar el rendimiento, aumentar la felicidad y mejorar el compromiso de tus alumnos.
              </p>
              <p>
                Todos los que formamos Exdintra creemos en una docencia flexible y adaptable cooperativa, creativa en el uso de recursos y herramientas, abierta a nuevos retos, dinámica, lúdica, donde no solo está transformándose la metodología de enseñanza, sino también, los papeles que desempeñan en el aula profesores y alumnos.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-7 -top-7 hidden size-32 rounded-full bg-mint md:block" aria-hidden="true" />
            <img
              src={aulaHolistica}
              alt="Docentes compartiendo una dinámica de aprendizaje consciente en el aula"
              className="relative aspect-[1.08/1] w-full rounded-[2rem] object-cover shadow-soft"
              loading="lazy"
              width={1536}
              height={1024}
            />
          </div>
        </div>
      </section>

      <section className="bg-section py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <h2 className="font-heading text-4xl font-black leading-tight text-primary sm:text-5xl">
            Sé parte de esta re-evolución educativa
          </h2>
          <Button asChild className="mt-8 rounded-full bg-mint px-9 py-6 font-heading text-base font-black uppercase text-mint-foreground shadow-exdintra hover:bg-mint/90">
            <a href="https://exdintra.com/programas-academicos/">
              Comienza Aquí <ChevronRight aria-hidden="true" className="size-5" />
            </a>
          </Button>
        </div>
      </section>

      <footer className="bg-secondary py-14 text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <img src={logoWhite} alt="Exdintra" className="h-12 w-auto" loading="lazy" width={210} height={54} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/80">
              Formación innovadora para docentes que quieren transformar su manera de enseñar y acompañar el aprendizaje.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-lg font-black text-mint">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/85">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="https://exdintra.com/" className="transition hover:text-mint">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-heading text-lg font-black text-mint">Contacto</h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
              <li>
                <a className="inline-flex items-center gap-2 transition hover:text-mint" href="tel:+34650909336">
                  <Phone aria-hidden="true" className="size-4" /> España (+34) 650 909 336
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2 transition hover:text-mint" href="mailto:info@exdintra.com">
                  <Mail aria-hidden="true" className="size-4" /> info@exdintra.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
