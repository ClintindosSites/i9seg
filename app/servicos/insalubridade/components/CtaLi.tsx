"use client";

import Link from "next/link";

export default function CtaLI() {
  return (
    <section className="cta-li">
      <div className="overlay"></div>

      <div className="container">
        <h2>Evite Multas e Processos Trabalhistas</h2>

        <p>
          Solicite agora seu Laudo Técnico de Insalubridade com especialistas.
        </p>

        <Link
          href="https://wa.me/553186191591?text=Olá,%20quero%20regularizar%20a%20insalubridade%20da%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Falar com Especialista
        </Link>
      </div>
    </section>
  );
}
