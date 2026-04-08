import Link from "next/link";

export default function RiscosHeroIntro() {
  return (
    <>
      {/* HERO */}
      <section className="hero-riscos">
        <div className="overlay"></div>

        <div className="container hero-content">
          <h1>Consultoria em Fatores de Riscos Ocupacionais</h1>

          <p>
            Identificação, avaliação e controle de riscos físicos, químicos,
            biológicos, ergonômicos e psicossociais conforme NR-01.
          </p>

          <Link
            href="https://wa.me/553186191591?text=Quero%20avaliar%20os%20riscos%20ocupacionais%20da%20minha%20empresa"
            target="_blank"
            className="btn-primary"
          >
            Solicitar Avaliação de Riscos
          </Link>
        </div>
      </section>

      {/* INTRODUÇÃO */}
      <section className="section">
        <div className="container">
          <h2>Gestão Estratégica de Riscos Ocupacionais</h2>

          <p>
            A correta identificação dos fatores de riscos ocupacionais é
            essencial para a conformidade legal e proteção da empresa contra
            multas, processos trabalhistas e afastamentos previdenciários.
          </p>

          <p>
            Atuamos com metodologia técnica estruturada conforme exigências da
            NR-01 e demais Normas Regulamentadoras aplicáveis.
          </p>
        </div>
      </section>
    </>
  );
}
