"use client";

import { useState } from "react";

const copy = {
  en: {
    nav: ["Services", "Equipment", "About", "Service Area"],
    eyebrow: "Land clearing • Site preparation • Hauling",
    title: "The equipment and experience to move your project forward.",
    body: "Residential and industrial land services across Southwest Florida, from Port Charlotte to Marco Island.",
    estimate: "Get a Free Estimate",
    services: "Explore Services",
    stat1: "Years of experience",
    stat2: "Free estimates",
    stat3: "Open 7 days",
    label: "Español",
    servicesEyebrow: "What we do",
    servicesTitle: "One crew. The right equipment. A site ready for what comes next.",
    servicesIntro: "Practical land and material services for residential and industrial projects.",
    servicesList: [
      ["Land Clearing", "Clear overgrown or undeveloped land and prepare the property for its next use."],
      ["Site Preparation", "Prepare the ground and work area for construction, access, or property improvements."],
      ["Demolition", "Demolition support planned around the size, access, and needs of each job site."],
      ["Topsoil", "Topsoil handling and placement for property, landscape, and site preparation needs."],
      ["Rock Fill", "Rock fill placement for stable access areas, pads, and project preparation."],
      ["Dirt & Debris Hauling", "Dumpster-assisted removal of dirt, soil, rock, and job-site material. Dumpsters are not rented separately."],
    ],
    equipmentEyebrow: "Company equipment",
    equipmentTitle: "Ready to work—not waiting on a rental.",
    equipmentBody: "JCP operates the heavy equipment needed for clearing, material movement, preparation, and hauling. That means one point of contact from the first estimate through the work on site.",
    equipmentItems: ["Kubota excavator", "Kubota SVL75-2 compact track loader", "Dumpsters for material hauling"],
    aboutEyebrow: "Built for real job sites",
    aboutTitle: "Local experience. Direct communication. Work focused on the site.",
    aboutBody: "JCP General Business has served Southwest Florida since 2015. We work with homeowners and industrial clients who need capable equipment, clear coordination, and a straightforward estimate.",
    resTitle: "Residential",
    resBody: "Lots, private properties, access areas, site preparation, and material removal.",
    indTitle: "Industrial",
    indBody: "Equipment-supported clearing, preparation, demolition, and hauling for larger job sites.",
    areaEyebrow: "Where we work",
    areaTitle: "Southwest Florida, from Port Charlotte to Marco Island.",
    areaBody: "Call to confirm availability for your property or project location.",
    cities: ["Port Charlotte", "Punta Gorda", "Cape Coral", "Fort Myers", "Lehigh Acres", "Estero", "Bonita Springs", "Naples", "Marco Island"],
    contactEyebrow: "Free estimates",
    contactTitle: "Tell us what needs to be cleared, moved, prepared, or hauled.",
    contactBody: "Available Monday through Sunday, 7:00 AM–5:00 PM.",
    spanishLine: "Spanish line",
    englishLine: "English line",
    visit: "Business address",
    address: "3520 34th Ave SE, Naples, FL 34117",
    finalCta: "Call for a Free Estimate",
    footer: "Land services for residential and industrial projects across Southwest Florida.",
  },
  es: {
    nav: ["Servicios", "Equipos", "Nosotros", "Área de servicio"],
    eyebrow: "Limpieza de terrenos • Preparación • Transporte",
    title: "El equipo y la experiencia para hacer avanzar su proyecto.",
    body: "Servicios residenciales e industriales en el suroeste de Florida, desde Port Charlotte hasta Marco Island.",
    estimate: "Solicitar estimado gratis",
    services: "Ver servicios",
    stat1: "Años de experiencia",
    stat2: "Estimados gratis",
    stat3: "Abierto 7 días",
    label: "English",
    servicesEyebrow: "Lo que hacemos",
    servicesTitle: "Un equipo. La maquinaria adecuada. Un terreno listo para la próxima etapa.",
    servicesIntro: "Servicios de terreno y materiales para proyectos residenciales e industriales.",
    servicesList: [
      ["Limpieza de terrenos", "Limpieza de propiedades con vegetación o sin desarrollar para prepararlas para su próximo uso."],
      ["Preparación de sitios", "Preparación del terreno y del área de trabajo para construcción, acceso o mejoras de propiedad."],
      ["Demolición", "Apoyo de demolición planificado según el tamaño, acceso y necesidades de cada proyecto."],
      ["Tierra vegetal", "Manejo y colocación de topsoil para propiedades, jardines y preparación de sitios."],
      ["Relleno de piedra", "Colocación de rock fill para áreas de acceso, bases y preparación de proyectos."],
      ["Retiro de tierra y materiales", "Retiro con dumpsters de tierra, piedra y materiales del área de trabajo. Los dumpsters no se alquilan por separado."],
    ],
    equipmentEyebrow: "Equipo de la compañía",
    equipmentTitle: "Listos para trabajar, sin depender del alquiler de maquinaria.",
    equipmentBody: "JCP opera la maquinaria necesaria para limpieza, movimiento de materiales, preparación y transporte. Tendrá un solo punto de contacto desde el estimado hasta el trabajo en el sitio.",
    equipmentItems: ["Excavadora Kubota", "Minicargador de orugas Kubota SVL75-2", "Dumpsters para transportar materiales"],
    aboutEyebrow: "Preparados para trabajos reales",
    aboutTitle: "Experiencia local. Comunicación directa. Trabajo enfocado en el terreno.",
    aboutBody: "JCP General Business sirve al suroeste de Florida desde 2015. Trabajamos con propietarios y clientes industriales que necesitan maquinaria capaz, coordinación clara y un estimado directo.",
    resTitle: "Residencial",
    resBody: "Terrenos, propiedades privadas, áreas de acceso, preparación y retiro de materiales.",
    indTitle: "Industrial",
    indBody: "Limpieza, preparación, demolición y transporte con maquinaria para proyectos de mayor escala.",
    areaEyebrow: "Dónde trabajamos",
    areaTitle: "Suroeste de Florida, desde Port Charlotte hasta Marco Island.",
    areaBody: "Llámenos para confirmar disponibilidad en la ubicación de su propiedad o proyecto.",
    cities: ["Port Charlotte", "Punta Gorda", "Cape Coral", "Fort Myers", "Lehigh Acres", "Estero", "Bonita Springs", "Naples", "Marco Island"],
    contactEyebrow: "Estimados gratis",
    contactTitle: "Díganos qué necesita limpiar, mover, preparar o retirar.",
    contactBody: "Disponibles de lunes a domingo, de 7:00 a. m. a 5:00 p. m.",
    spanishLine: "Línea en español",
    englishLine: "Línea en inglés",
    visit: "Dirección comercial",
    address: "3520 34th Ave SE, Naples, FL 34117",
    finalCta: "Llamar para un estimado gratis",
    footer: "Servicios residenciales e industriales en todo el suroeste de Florida.",
  },
};

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = copy[language];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="JCP General Business home">
          <span className="brand-mark">JCP</span>
          <span className="brand-name">GENERAL BUSINESS</span>
        </a>
        <nav aria-label="Main navigation">
          {t.nav.map((item, index) => (
            <a key={item} href={["#services", "#equipment", "#about", "#area"][index]}>
              {item}
            </a>
          ))}
        </nav>
        <button
          className="language"
          onClick={() => setLanguage(language === "en" ? "es" : "en")}
          aria-label={`Switch to ${t.label}`}
        >
          {t.label}
        </button>
        <a className="header-call" href="tel:+12392349918">
          <span>English</span>
          (239) 234-9918
        </a>
      </header>

      <section className="hero">
        <div className="hero-image" role="img" aria-label="JCP excavator ready for land work" />
        <div className="hero-shade" />
        <div className="hero-accent" />
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-copy">{t.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+12392509480">
              {t.estimate}
            </a>
            <a className="button button-ghost" href="#services">
              {t.services} <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-contact">
          <p>Hablamos español</p>
          <a href="tel:+12392509480">(239) 250-9480</a>
        </div>
      </section>

      <section className="trust-strip" aria-label="Company highlights">
        <div><strong>11+</strong><span>{t.stat1}</span></div>
        <div><strong>$0</strong><span>{t.stat2}</span></div>
        <div><strong>7–5</strong><span>{t.stat3}</span></div>
        <p>Serving Southwest Florida since 2015</p>
      </section>

      <section className="section services" id="services">
        <div className="section-heading">
          <p className="section-eyebrow">{t.servicesEyebrow}</p>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesIntro}</p>
        </div>
        <div className="service-grid">
          {t.servicesList.map(([title, description], index) => (
            <article className="service-card" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="equipment" id="equipment">
        <div className="equipment-photo">
          {/* The source is a local, compression-ready company photo. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/jcp-skid-steer.jpg" alt="JCP Kubota SVL75-2 compact track loader" />
          <div className="photo-label">JCP <span>GENERAL BUSINESS</span></div>
        </div>
        <div className="equipment-copy">
          <p className="section-eyebrow">{t.equipmentEyebrow}</p>
          <h2>{t.equipmentTitle}</h2>
          <p>{t.equipmentBody}</p>
          <ul>
            {t.equipmentItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="text-link" href="tel:+12392349918">{t.finalCta} →</a>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="about-copy">
          <p className="section-eyebrow">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutBody}</p>
        </div>
        <div className="client-types">
          <article>
            <span>01</span>
            <h3>{t.resTitle}</h3>
            <p>{t.resBody}</p>
          </article>
          <article>
            <span>02</span>
            <h3>{t.indTitle}</h3>
            <p>{t.indBody}</p>
          </article>
        </div>
      </section>

      <section className="service-area" id="area">
        <div className="area-copy">
          <p className="section-eyebrow">{t.areaEyebrow}</p>
          <h2>{t.areaTitle}</h2>
          <p>{t.areaBody}</p>
          <div className="city-list">
            {t.cities.map((city) => <span key={city}>{city}</span>)}
          </div>
        </div>
        <div className="area-route" aria-hidden="true">
          <span className="route-start">Port Charlotte</span>
          <div className="route-line"><i /><i /><i /><i /><i /></div>
          <span className="route-end">Marco Island</span>
          <strong>SWFL</strong>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro">
          <p className="section-eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
        </div>
        <div className="contact-details">
          <a href="tel:+12392509480">
            <span>{t.spanishLine}</span>
            <strong>(239) 250-9480</strong>
          </a>
          <a href="tel:+12392349918">
            <span>{t.englishLine}</span>
            <strong>(239) 234-9918</strong>
          </a>
          <a href="https://maps.google.com/?q=3520+34th+Ave+SE+Naples+FL+34117" target="_blank" rel="noreferrer">
            <span>{t.visit}</span>
            <strong>{t.address}</strong>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#">
          <span className="brand-mark">JCP</span>
          <span className="brand-name">GENERAL BUSINESS</span>
        </a>
        <p>{t.footer}</p>
        <p>© 2026 JCP General Business I Corp.</p>
      </footer>

      <a className="mobile-call" href="tel:+12392509480">
        {language === "en" ? "Call for a free estimate" : "Llame para un estimado gratis"}
      </a>
    </main>
  );
}
