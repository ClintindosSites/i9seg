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
