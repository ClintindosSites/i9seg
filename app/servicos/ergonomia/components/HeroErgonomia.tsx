"use client";

import Link from "next/link";

export default function HeroErgonomia() {
  return (
    <section className="hero-servico ergonomia-hero">
      <div className="overlay" />

      <div className="container hero-content">
        <span className="tag-servico">NR-17 • Ergonomia Empresarial • AET</span>

        <h1>
          Análise Ergonômica do Trabalho (AET) e Ergonomia Empresarial conforme
          NR-17
        </h1>

        <p className="hero-subseo">
          Especialistas em Ergonomia para empresas de todos os portes. Atuamos
          na adequação à NR-17, prevenção de LER/DORT e avaliação de riscos
          psicossociais conforme exigências legais atualizadas.
        </p>

        <ul className="hero-benefits">
          <li>✔ Adequação total à NR-17</li>
          <li>✔ Redução de passivos trabalhistas</li>
          <li>✔ Prevenção de LER/DORT e afastamentos</li>
          <li>✔ Avaliação de riscos psicossociais</li>
        </ul>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/553186191591?text=Olá,%20quero%20solicitar%20AET%20e%20avaliação%20ergonômica%20para%20minha%20empresa"
          className="btn-primary"
        >
          Solicitar Avaliação Ergonômica Agora
        </Link>
      </div>
    </section>
  );
}
