export default function TreinamentosPage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-treinamentos">
        <div className="overlay"></div>

        <div className="container hero-content">
          <h1>
            Treinamentos em Segurança do Trabalho conforme Normas
            Regulamentadoras
          </h1>

          <p>
            Capacitação obrigatória para empresas que desejam reduzir acidentes,
            evitar multas e garantir conformidade com a legislação trabalhista.
          </p>

          <a
            target="_blank"
            href="https://wa.me/553186191591?text=Olá,%20preciso%20de%20treinamentos%20em%20Segurança%20do%20Trabalho"
            className="btn-primary"
          >
            Solicitar Proposta de Treinamento
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <h2>Por que os treinamentos são obrigatórios?</h2>

          <p>
            As Normas Regulamentadoras (NRs) exigem capacitação periódica dos
            colaboradores conforme os riscos das atividades exercidas.
          </p>

          <p>
            A ausência de treinamentos pode resultar em multas, interdições,
            responsabilização civil e criminal do empregador.
          </p>
        </div>
      </section>
    </>
  );
}
