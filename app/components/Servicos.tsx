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
          </Link>
        </div>
      </div>
    </section>
  );
}
