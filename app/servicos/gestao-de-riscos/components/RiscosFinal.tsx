import Link from "next/link";

export default function RiscosFinal() {
  return (
    <>
      {/* ALERTA */}
      <section className="section alerta">
        <div className="container">
          <h2>Riscos de Não Avaliar os Fatores Ocupacionais</h2>

          <p>
            Empresas que não realizam gestão adequada de riscos podem sofrer
            autuações, multas administrativas, aumento do FAP, ações
            trabalhistas, indenizações e até interdição de atividades.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className=" cta-riscos">
        <div className="overlay"></div>
        <div className="container">
          <h2>Proteja sua empresa contra riscos e passivos</h2>

          <p>Solicite agora uma avaliação técnica personalizada.</p>

          <Link
            href="https://wa.me/553186191591?text=Olá,%20quero%20contratar%20gestão%20de%20risco%20para%20minha%20empresa.%20 Pode%20me%20passar%20mais%20informações?"
            target="_blank"
            className="btn-primary"
          >
            Falar com Especialista
          </Link>
        </div>
      </section>
    </>
  );
}
