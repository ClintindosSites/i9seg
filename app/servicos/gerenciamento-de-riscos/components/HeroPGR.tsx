import Link from "next/link";

export default function HeroPGR() {
  return (
    <section className="hero-servico pgr-hero">
      <div className="overlay" />

      <div className="container hero-content">
        <span className="tag-servico">NR-01 • PGR • Gestão de Riscos</span>

        <h1>PGR – Programa de Gerenciamento de Riscos conforme NR-01</h1>

        <p className="hero-subseo">
          Implantamos o PGR completo para sua empresa, com inventário de riscos
          ocupacionais e plano de ação obrigatório. Evite multas, reduza riscos
          e mantenha sua empresa 100% em conformidade legal.
        </p>

        <ul className="hero-benefits">
          <li>✔ Conformidade total com a NR-01</li>
          <li>✔ Identificação e controle de riscos</li>
          <li>✔ Redução de acidentes e passivos trabalhistas</li>
          <li>✔ Documentação técnica completa</li>
        </ul>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/553186191591?text=Olá,%20quero%20implantar%20o%20PGR%20na%20minha%20empresa"
          className="btn-primary"
        >
          Solicitar Implantação do PGR
        </Link>
      </div>
    </section>
  );
}
