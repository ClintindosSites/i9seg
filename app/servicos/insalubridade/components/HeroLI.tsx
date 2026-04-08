"use client";

import Link from "next/link";

export default function HeroLI() {
  return (
    <section className="hero-li">
      <div className="overlay"></div>

      <div className="container hero-content">
        <span className="tag">NR-15 • Insalubridade • Segurança Jurídica</span>

        <h1>Laudo Técnico de Insalubridade (LI) conforme NR-15</h1>

        <p>
          Avaliação técnica especializada para identificar exposição a agentes
          físicos, químicos e biológicos, evitando pagamentos indevidos,
          autuações e passivos trabalhistas.
        </p>

        <Link
          href="https://wa.me/553186191591?text=Olá,%20preciso%20de%20Laudo%20de%20Insalubridade"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Solicitar Avaliação Técnica
        </Link>
      </div>
    </section>
  );
}
