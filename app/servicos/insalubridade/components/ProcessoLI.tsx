"use client";

export default function ProcessoLI() {
  return (
    <section className="processo-li">
      <div className="container">
        <h2>Como realizamos o Laudo de Insalubridade</h2>

        <div className="processo-grid">
          <div className="processo-item">
            <span>01</span>
            <h4>Visita Técnica</h4>
            <p>Análise detalhada das atividades e ambiente de trabalho.</p>
          </div>

          <div className="processo-item">
            <span>02</span>
            <h4>Medições Técnicas</h4>
            <p>
              Utilização de equipamentos calibrados e metodologia normativa.
            </p>
          </div>

          <div className="processo-item">
            <span>03</span>
            <h4>Relatório Jurídico</h4>
            <p>Documento técnico completo e defensável.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
