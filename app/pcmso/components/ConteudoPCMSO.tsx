export default function ConteudoPCMSO() {
  return (
    <section className="conteudo-pcmso">
      <div className="container">
        <h2>O que é o PCMSO?</h2>
        <p>
          O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é uma
          exigência da NR-07 e tem como objetivo promover e preservar a saúde
          dos trabalhadores. Ele estabelece diretrizes para exames médicos
          ocupacionais e monitoramento da saúde conforme os riscos identificados
          no PGR.
        </p>

        <h2>Exames obrigatórios no PCMSO</h2>
        <ul>
          <li>Exame Admissional</li>
          <li>Exame Periódico</li>
          <li>Exame de Retorno ao Trabalho</li>
          <li>Exame de Mudança de Função</li>
          <li>Exame Demissional</li>
        </ul>

        <h2>Por que sua empresa precisa do PCMSO?</h2>
        <ul>
          <li>Evitar multas e autuações do Ministério do Trabalho</li>
          <li>Reduzir afastamentos e ações trabalhistas</li>
          <li>Garantir conformidade com a NR-07</li>
          <li>Promover saúde e produtividade</li>
          <li>Segurança jurídica empresarial</li>
        </ul>

        <h2>Como funciona nosso processo</h2>

        <div className="processo-grid">
          <div className="processo-item">
            <h4>1. Levantamento de Riscos</h4>
            <p>
              Integração com o PGR para identificação dos riscos ocupacionais.
            </p>
          </div>

          <div className="processo-item">
            <h4>2. Elaboração do Programa</h4>
            <p>Criação do documento técnico conforme exigências legais.</p>
          </div>

          <div className="processo-item">
            <h4>3. Coordenação Médica</h4>
            <p>Médico responsável técnico conforme NR-07.</p>
          </div>

          <div className="processo-item">
            <h4>4. Gestão Contínua</h4>
            <p>Atualizações, relatórios anuais e acompanhamento permanente.</p>
          </div>
        </div>

        <h2>Riscos de não possuir PCMSO</h2>
        <p>
          Empresas que não possuem PCMSO estão sujeitas a multas, interdições,
          indenizações e responsabilização civil e criminal em caso de acidentes
          ou doenças ocupacionais.
        </p>
      </div>
    </section>
  );
}
