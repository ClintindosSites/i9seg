export default function ConsultoriaSections() {
  return (
    <>
      {/* DIFERENCIAL */}
      <section className="section dark">
        <div className="container">
          <h2>Nosso Diferencial Estratégico</h2>

          <p>
            Não entregamos apenas documentos. Entregamos estrutura, estratégia e
            prevenção real.
          </p>

          <div className="highlight">
            <p>
              ✔ Atuação técnica especializada ✔ Visão preventiva e estratégica ✔
              Atualização constante conforme legislação ✔ Atendimento
              personalizado para cada porte de empresa
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contato" className="cta-consultoria">
        <div className="overlay"></div>
        <div className="container">
          <h2>
            Transforme a Segurança da sua Empresa em um Sistema Estratégico
          </h2>

          <p>
            Solicite uma análise técnica e descubra como podemos estruturar sua
            gestão de SST.
          </p>

          <a
            href="https://wa.me/553186191591?text=Quero%20uma%20consultoria%20em%20segurança%20do%20trabalho"
            target="_blank"
            className="btn-primary"
          >
            Falar com Especialista
          </a>
        </div>
      </section>
    </>
  );
}
