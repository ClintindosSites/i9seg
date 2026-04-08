import Link from "next/link";

export default function HeroPCMSO() {
  return (
    <section className="hero-servico pcmso-hero">
      <div className="overlay" />

      <div className="container hero-content">
        <span className="tag-servico">NR-07 • PCMSO • Saúde Ocupacional</span>

        <h1>PCMSO – Programa de Controle Médico de Saúde Ocupacional</h1>

        <p className="hero-subseo">
          Elaboração, implantação e gestão completa do PCMSO conforme NR-07.
          Proteja sua empresa, reduza passivos trabalhistas e garanta
          acompanhamento médico adequado aos seus colaboradores.
        </p>

        <ul className="hero-benefits">
          <li>✔ Conformidade total com a NR-07</li>
          <li>✔ Monitoramento da saúde dos colaboradores</li>
          <li>✔ Redução de riscos e afastamentos</li>
          <li>✔ Gestão completa dos exames ocupacionais</li>
        </ul>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/553186191591?text=Olá,%20quero%20implantar%20o%20PCMSO%20na%20minha%20empresa"
          className="btn-primary"
        >
          Solicitar Proposta de PCMSO
        </Link>
      </div>
    </section>
  );
}
