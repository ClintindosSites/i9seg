"use client";

export default function ConteudoLI() {
  return (
    <section className="conteudo-li">
      <div className="container">
        <h2>O que é o Laudo Técnico de Insalubridade?</h2>

        <p>
          O Laudo Técnico de Insalubridade é um documento obrigatório previsto
          na NR-15 que identifica se há exposição do trabalhador a agentes
          nocivos acima dos limites de tolerância estabelecidos pela legislação.
        </p>

        <div className="grid-info">
          <div className="info-card">
            <h3>Agentes Físicos</h3>
            <p>
              Ruído, calor, frio, vibração, radiações ionizantes e não
              ionizantes.
            </p>
          </div>

          <div className="info-card">
            <h3>Agentes Químicos</h3>
            <p>Poeiras, fumos metálicos, vapores, gases e névoas.</p>
          </div>

          <div className="info-card">
            <h3>Agentes Biológicos</h3>
            <p>Vírus, bactérias, fungos e outros microrganismos.</p>
          </div>
        </div>

        <h2>Por que sua empresa precisa?</h2>

        <ul className="beneficios">
          <li>✔ Evita pagamento indevido de adicional de insalubridade</li>
          <li>✔ Protege contra ações trabalhistas</li>
          <li>✔ Reduz risco de multas do Ministério do Trabalho</li>
          <li>✔ Garante base técnica para defesa jurídica</li>
          <li>✔ Cumprimento integral da NR-15</li>
        </ul>
      </div>
    </section>
  );
}
