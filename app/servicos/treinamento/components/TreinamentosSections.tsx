import Link from "next/link";

export function TreinamentosSections() {
  return (
    <>
      {/* TREINAMENTOS */}
      <section className="section dark">
        <div className="container">
          <h2>Principais Treinamentos</h2>

          <div className="grid">
            <div className=" card-treinamento">
              <h3>NR-10</h3>
              <p>Segurança em instalações e serviços em eletricidade.</p>
            </div>

            <div className="card-treinamento">
              <h3>NR-35</h3>
              <p>Trabalho em altura com foco em prevenção de quedas.</p>
            </div>

            <div className="card-treinamento">
              <h3>NR-33</h3>
              <p>Espaços confinados e controle de riscos críticos.</p>
            </div>

            <div className="card-treinamento">
              <h3>NR-06</h3>
              <p>Uso correto de Equipamentos de Proteção Individual.</p>
            </div>

            <div className="card-treinamento">
              <h3>CIPA</h3>
              <p>Formação e treinamento da comissão interna.</p>
            </div>

            <div className="card-treinamento">
              <h3>Personalizados</h3>
              <p>Treinamentos adaptados à realidade da sua empresa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* METODOLOGIA */}
      <section className="section">
        <div className="container">
          <h2>Como Funcionam os Treinamentos</h2>

          <div className="processo">
            <div className="etapa">
              <h3>Diagnóstico</h3>
              <p>Levantamento das NRs aplicáveis.</p>
            </div>

            <div className="etapa">
              <h3>Planejamento</h3>
              <p>Definição de conteúdo e cronograma.</p>
            </div>

            <div className="etapa">
              <h3>Execução</h3>
              <p>Treinamento teórico e prático.</p>
            </div>

            <div className="etapa">
              <h3>Certificação</h3>
              <p>Entrega de certificados e registros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS + ALERTA (mais enxuto) */}
      <section className="section dark">
        <div className="container">
          <h2>Benefícios para sua Empresa</h2>

          <ul className="beneficios">
            <li>✔ Redução de acidentes</li>
            <li>✔ Evita multas e autuações</li>
            <li>✔ Mais produtividade</li>
            <li>✔ Segurança jurídica</li>
          </ul>

          <div className="alerta-box">
            <strong>Atenção:</strong> a falta de treinamentos pode gerar multas,
            interdição e responsabilização em caso de acidentes.
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className=" cta-treinamento">
        <div className="overlay"></div>
        <div className="container">
          <h2>Capacite sua equipe e evite riscos</h2>
          <p>Solicite um orçamento personalizado agora.</p>

          <Link
            target="_blank"
            href="https://wa.me/553186191591?text=Olá,%20preciso%20de%20treinamentos%20conforme%20NRs"
            className="btn-primary"
          >
            Falar com Especialista
          </Link>
        </div>
      </section>
    </>
  );
}
