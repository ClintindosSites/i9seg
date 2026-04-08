export default function ConteudoLTCAT() {
  return (
    <section className="conteudo-ltcat">
      <div className="container">
        <h2>O que é o LTCAT?</h2>
        <p>
          O LTCAT (Laudo Técnico das Condições Ambientais de Trabalho) é um
          documento exigido pela legislação previdenciária que avalia a
          exposição do trabalhador a agentes nocivos físicos, químicos e
          biológicos.
        </p>

        <p>
          Ele é fundamental para caracterização da aposentadoria especial e para
          comprovação técnica perante o INSS.
        </p>

        <h2>Base Legal</h2>
        <ul>
          <li>Lei 8.213/91 – Benefícios Previdenciários</li>
          <li>Artigo 58 da Lei Previdenciária</li>
          <li>Decreto 3.048/99</li>
          <li>Exigência para emissão correta do PPP</li>
        </ul>

        <h2>Quando o LTCAT é obrigatório?</h2>
        <ul>
          <li>Quando há exposição a agentes nocivos</li>
          <li>Para emissão do PPP (Perfil Profissiográfico Previdenciário)</li>
          <li>Para aposentadoria especial</li>
          <li>Em fiscalizações do INSS</li>
          <li>Em processos trabalhistas e previdenciários</li>
        </ul>

        <h2>O que avaliamos no LTCAT?</h2>

        <div className="ltcat-grid">
          <div className="ltcat-item">
            <h4>Agentes Físicos</h4>
            <p>Ruído, calor, frio, vibração, radiação.</p>
          </div>

          <div className="ltcat-item">
            <h4>Agentes Químicos</h4>
            <p>Poeiras, fumos, vapores, gases e substâncias químicas.</p>
          </div>

          <div className="ltcat-item">
            <h4>Agentes Biológicos</h4>
            <p>Vírus, bactérias, fungos e outros microrganismos.</p>
          </div>

          <div className="ltcat-item">
            <h4>Tempo de Exposição</h4>
            <p>Análise técnica da habitualidade e permanência.</p>
          </div>
        </div>

        <h2>Riscos de não possuir LTCAT</h2>
        <p>
          A ausência do LTCAT pode gerar autuações, passivos previdenciários,
          reconhecimento judicial de aposentadoria especial sem defesa técnica
          adequada e prejuízos financeiros significativos.
        </p>

        <h2>Como funciona nosso processo</h2>

        <div className="processo-grid">
          <div className="processo-item">
            <h4>1. Levantamento Técnico</h4>
            <p>Análise das atividades e ambientes.</p>
          </div>

          <div className="processo-item">
            <h4>2. Avaliação Quantitativa</h4>
            <p>Medições técnicas conforme normas.</p>
          </div>

          <div className="processo-item">
            <h4>3. Elaboração do Laudo</h4>
            <p>Documento completo e juridicamente defensável.</p>
          </div>

          <div className="processo-item">
            <h4>4. Suporte Técnico</h4>
            <p>Apoio em fiscalizações e demandas previdenciárias.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
