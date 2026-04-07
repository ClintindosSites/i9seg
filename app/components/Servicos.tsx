import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Ergonomia – AET e Fatores Psicossociais",
      description:
        "Elaboração completa da AET, AEP e análise psicossocial conforme NR-17. Reduza afastamentos e passivos trabalhistas.",
      link: "/ergonomia",
    },
    {
      title: "PGR – Programa de Gerenciamento de Riscos",
      description:
        "Implantação completa do PGR conforme NR-01, com inventário de riscos e plano de ação obrigatório.",
      link: "/gerenciamento-de-riscos",
    },
    {
      title: "PCMSO – Programa de Controle Médico",
      description:
        "Gestão completa do PCMSO conforme NR-07, garantindo acompanhamento médico ocupacional.",
      link: "/pcmso",
    },
    {
      title: "LTCAT",
      description:
        "Laudo técnico essencial para aposentadoria especial e conformidade previdenciária.",
      link: "/ltcat",
    },
    {
      title: "LI – Laudo de Insalubridade",
      description:
        "Avaliação técnica de agentes físicos, químicos e biológicos para evitar autuações e custos indevidos.",
      link: "/insalubridade",
    },
    {
      title: "LP – Laudo de Periculosidade",
      description:
        "Análise detalhada de riscos conforme NR-16, incluindo eletricidade e inflamáveis.",
      link: "/periculosidade",
    },
    {
      title: "Assistência Técnica Pericial",
      description:
        "Atuação em processos trabalhistas com parecer técnico para reduzir riscos jurídicos.",
      link: "/assistencia-tecnica",
    },
    {
      title: "Consultoria em Segurança do Trabalho",
      description:
        "Implementação completa de programas e adequação às Normas Regulamentadoras.",
      link: "/consultoria",
    },
    {
      title: "Gestão de Riscos Ocupacionais",
      description:
        "Identificação e controle de riscos físicos, químicos, biológicos e ergonômicos.",
      link: "/riscos",
    },
    {
      title: "Treinamentos em Segurança",
      description:
        "Capacitação conforme NRs para evitar acidentes, multas e interdições.",
      link: "/treinamento",
    },
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <p className="section-subtitle">
          Confira os benefícios que nossos serviços podem oferecer à sua empresa
        </p>

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
