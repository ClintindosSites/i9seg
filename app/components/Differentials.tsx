export default function Differentials() {
  const items = [
    {
      icon: "✔",
      title: "Conformidade Garantida",
      description:
        "Atendemos rigorosamente às normas regulamentadoras, garantindo segurança jurídica e redução de riscos trabalhistas.",
    },
    {
      icon: "⚡",
      title: "Implementação Ágil",
      description:
        "Processos eficientes e organizados que não interferem na operação da empresa.",
    },
    {
      icon: "👷",
      title: "Equipe Especializada",
      description:
        "Profissionais certificados com ampla experiência em segurança do trabalho e perícias técnicas.",
    },
    {
      icon: "🎯",
      title: "Soluções Personalizadas",
      description:
        "Cada empresa é única. Desenvolvemos estratégias específicas para seus riscos e necessidades.",
    },
  ];

  return (
    <section className="diferenciais">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2>Por que escolher a i9 SEG?</h2>
          <p>Diferenciais que fazem a diferença na segurança da sua empresa</p>
        </div>

        {/* GRID */}
        <div className="diferenciais-grid">
          {items.map((item, index) => (
            <div key={index} className="diferencial-card">
              <div className="diferencial-title">
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="proof">
          ⭐ Mais de 500 empresas atendidas com 98% de satisfação
        </p>
      </div>
    </section>
  );
}
