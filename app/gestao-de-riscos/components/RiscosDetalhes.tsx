export default function RiscosDetalhes() {
  return (
    <>
      {/* TIPOS DE RISCO */}
      <section className="section white dark">
        <div className="container">
          <h2>Classificação dos Riscos Avaliados</h2>

          <div className="grid">
            <div className="card-info">
              <h3>Riscos Físicos</h3>
              <p>
                Ruído, calor, frio, vibração, radiações e outros agentes
                ambientais.
              </p>
            </div>

            <div className="card-info">
              <h3>Riscos Químicos</h3>
              <p>
                Exposição a poeiras, fumos, vapores, gases e substâncias
                químicas.
              </p>
            </div>

            <div className="card-info">
              <h3>Riscos Biológicos</h3>
              <p>
                Contato com vírus, bactérias, fungos e agentes contaminantes.
              </p>
            </div>

            <div className="card-info">
              <h3>Riscos Ergonômicos</h3>
              <p>
                Posturas inadequadas, repetitividade, esforço físico e carga
                mental.
              </p>
            </div>

            <div className="card-info">
              <h3>Riscos Psicossociais</h3>
              <p>
                Estresse ocupacional, pressão excessiva, conflitos e sobrecarga
                emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="section">
        <div className="container">
          <h2>Como Funciona Nossa Consultoria</h2>

          <div className="processo">
            <div className="etapa">
              <h3>1. Levantamento Técnico</h3>
              <p>Análise detalhada das atividades e ambientes de trabalho.</p>
            </div>

            <div className="etapa">
              <h3>2. Avaliação e Classificação</h3>
              <p>
                Identificação e mensuração dos riscos ocupacionais existentes.
              </p>
            </div>

            <div className="etapa">
              <h3>3. Inventário de Riscos</h3>
              <p>Elaboração do inventário conforme exigido pela NR-01.</p>
            </div>

            <div className="etapa">
              <h3>4. Plano de Ação</h3>
              <p>Definição de medidas preventivas e corretivas.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
