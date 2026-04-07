"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/slide-1.png",
    title: "Proteja Sua Empresa Contra Multas e Processos",
    description:
      "Implantamos PGR, PCMSO e laudos técnicos exigidos por lei para manter sua empresa 100% regularizada.",
    link: "https://wa.me/553186191591?text=Olá,%20quero%20regularizar%20minha%20empresa%20com%20Segurança%20do%20Trabalho",
    button: "Solicitar Orçamento",
  },
  {
    image: "/images/slide-2.png",
    title: "Ergonomia e AET Conforme NR-17",
    description:
      "Reduza afastamentos, aumente produtividade e evite passivos trabalhistas com análises ergonômicas completas.",
    link: "https://wa.me/553186191591?text=Olá,%20preciso%20de%20AET%20e%20análise%20ergonômica",
    button: "Falar com Especialista",
  },
  {
    image: "/images/slide-3.png",
    title: "LTCAT, Insalubridade e Periculosidade",
    description:
      "Elaboração de laudos técnicos completos para garantir segurança jurídica e previdenciária.",
    link: "https://wa.me/553186191591?text=Olá,%20preciso%20de%20LTCAT%20ou%20Laudo%20Técnico",
    button: "Solicitar Avaliação",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="overlay"></div>

            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>

              <a
                className="btn-primary"
                target="_blank"
                href={slide.link}
                rel="noopener noreferrer"
              >
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
