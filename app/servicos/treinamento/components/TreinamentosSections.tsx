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
            Falar com Especialista{" "}
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
      </section>
    </>
  );
}
