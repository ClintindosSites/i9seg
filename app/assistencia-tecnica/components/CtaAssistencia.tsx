import Link from "next/link";

export default function CtaAssistencia() {
  return (
    <section id="contato" className="cta-final-pericia">
      <div className="overlay"></div>

      <div className="container">
        <h2>Proteja sua empresa com suporte técnico especializado</h2>

        <p>
          Fale com um especialista agora e receba uma análise estratégica do seu
          processo trabalhista. Reduza riscos e evite prejuízos financeiros.
        </p>

        <Link
          target="_blank"
          href="https://wa.me/553186191591?text=Olá,%20quero%20analisar%20um%20processo%20trabalhista"
          className="btn-primary"
        >
          Falar com Especialista
        </Link>
      </div>
    </section>
  );
}
