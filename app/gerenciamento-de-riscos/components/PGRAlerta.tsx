export default function PGRAlerta() {
  return (
    <section className="secao-alerta">
      <div className="container">
        <h2>Quais os riscos de não ter o PGR?</h2>

        <div className="grid-alerta">
          <div className="alerta-card">
            <h3>Multas e Autuações</h3>
            <p>
              Fiscalizações podem gerar multas significativas por descumprimento
              da NR-01.
            </p>
          </div>

          <div className="alerta-card">
            <h3>Processos Trabalhistas</h3>
            <p>
              A ausência de controle de riscos aumenta o passivo trabalhista.
            </p>
          </div>

          <div className="alerta-card">
            <h3>Acidentes e Afastamentos</h3>
            <p>
              Sem gerenciamento adequado, aumentam as chances de acidentes
              ocupacionais.
            </p>
          </div>

          <div className="alerta-card">
            <h3>Interdição da Empresa</h3>
            <p>Em casos graves, o estabelecimento pode ser interditado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
