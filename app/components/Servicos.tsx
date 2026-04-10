import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Ergonomia – AET e Fatores Psicossociais",
      description:
        "Elaboração completa da AET, AEP e análise psicossocial conforme NR-17. Reduza afastamentos e passivos trabalhistas.",
      link: "/servicos/ergonomia",
    },
    {
      title: "PGR – Programa de Gerenciamento de Riscos",
      description:
        "Implantação completa do PGR conforme NR-01, com inventário de riscos e plano de ação obrigatório.",
      link: "/servicos/gerenciamento-de-riscos",
    },
    {
      title: "PCMSO – Programa de Controle Médico",
      description:
        "Gestão completa do PCMSO conforme NR-07, garantindo acompanhamento médico ocupacional.",
      link: "/servicos/pcmso",
    },
    {
      title: "LTCAT",
      description:
        "Laudo técnico essencial para aposentadoria especial e conformidade previdenciária.",
      link: "/servicos/ltcat",
    },
    {
      title: "LI – Laudo de Insalubridade",
      description:
        "Avaliação técnica de agentes físicos, químicos e biológicos para evitar autuações e custos indevidos.",
      link: "/servicos/insalubridade",
    },
    {
      title: "LP – Laudo de Periculosidade",
      description:
        "Análise detalhada de riscos conforme NR-16, incluindo eletricidade e inflamáveis.",
      link: "/servicos/periculosidade",
    },
    {
      title: "Assistência Técnica Pericial",
      description:
        "Atuação em processos trabalhistas com parecer técnico para reduzir riscos jurídicos.",
      link: "/servicos/assistencia-tecnica",
    },
    {
      title: "Consultoria em Segurança do Trabalho",
      description:
        "Implementação completa de programas e adequação às Normas Regulamentadoras.",
      link: "/servicos/consultoria",
    },
    {
      title: "Gestão de Riscos Ocupacionais",
      description:
        "Identificação e controle de riscos físicos, químicos, biológicos e ergonômicos.",
      link: "/servicos/gestao-de-riscos",
    },
    {
      title: "Treinamentos em Segurança",
      description:
        "Capacitação conforme NRs para evitar acidentes, multas e interdições.",
      link: "/servicos/treinamento",
    },
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <div className="servicos-text">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Confira os benefícios que nossos serviços podem oferecer à sua
            empresa
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <Link href={service.link} className="btn-secondary">
                Saiba Mais
              </Link>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="services-cta">
          <Link
            href="https://wa.me/553186191591?text=Olá,%20quero%20regularizar%20minha%20empresa"
            target="_blank"
            className="btn-primary"
          >
            Solicitar Orçamento
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="18"
                height="18"
                fill="currentColor"
              >
                <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.7 5.5 2.1 7.9L.6 31.4l7.7-2c2.3 1.2 4.9 1.8 7.5 1.8 8.5 0 15.4-6.9 15.4-15.4S24.5.6 16 .6zm0 28c-2.4 0-4.7-.6-6.7-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.2-2-1.8-4.3-1.8-6.7C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.6 16 28.6zm6.5-9.8c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3 0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.4.9.3 1.6.5 2.1.6.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
