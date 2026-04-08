import Link from "next/link";

export default function CtaErgonomia() {
  return (
    <section className="cta-final ergonomia-cta">
      <div className="overlay" />

      <div className="container cta-content">
        <h2>
          Adeque sua Empresa à NR-17 com AET – Análise Ergonômica do Trabalho
        </h2>

        <p>
          Evite multas, reduza afastamentos por LER/DORT e elimine riscos
          trabalhistas com uma avaliação ergonômica completa, incluindo análise
          de fatores psicossociais.
        </p>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/553186191591?text=Olá,%20preciso%20de%20AET%20e%20adequação%20à%20NR-17"
          className="btn-primary cta-button"
        >
          Solicitar Avaliação Ergonômica Agora
        </Link>
      </div>
    </section>
  );
}
