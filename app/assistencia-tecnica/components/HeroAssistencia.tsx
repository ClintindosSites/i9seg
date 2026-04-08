import Link from "next/link";

export default function HeroPericia() {
  return (
    <section className="hero-pericia">
      <div className="overlay"></div>

      <div className="container hero-content">
        <span className="tag">
          Perícia Trabalhista • Defesa Técnica • Segurança Jurídica
        </span>

        <h1>Assistência Técnica em Perícia Trabalhista</h1>

        <p>
          Defesa técnica estratégica para proteger sua empresa em processos
          judiciais, reduzindo riscos financeiros, passivos trabalhistas e
          condenações indevidas.
        </p>

        <ul className="hero-benefits">
          <li>✔ Redução de condenações trabalhistas</li>
          <li>✔ Parecer técnico especializado</li>
          <li>✔ Acompanhamento em perícias judiciais</li>
          <li>✔ Defesa técnica sólida e estratégica</li>
        </ul>

        <Link
          href="https://wa.me/553186191591?text=Olá,%20quero%20analisar%20um%20processo%20trabalhista"
          className="btn-primary"
        >
          Solicitar Avaliação do Processo
        </Link>
      </div>
    </section>
  );
}
