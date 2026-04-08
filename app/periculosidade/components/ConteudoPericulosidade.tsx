export default function ConteudoPericulosidade() {
  return (
    <section className="conteudo-periculosidade">
      <div className="container">
        <h2>O que é o Laudo Técnico de Periculosidade?</h2>

        <p>
          O Laudo Técnico de Periculosidade é o documento que identifica se o
          trabalhador está exposto a condições de risco que justifiquem o
          pagamento do adicional de periculosidade conforme NR-16.
        </p>

        <p>
          A avaliação técnica precisa evita pagamentos indevidos e reduz o risco
          de ações trabalhistas e autuações.
        </p>

        <div className="grid-riscos">
          <div className="risco-card">
            <h3>Inflamáveis</h3>
            <p>Manipulação e armazenamento de líquidos e gases inflamáveis.</p>
          </div>

          <div className="risco-card">
            <h3>Eletricidade</h3>
            <p>Atividades com exposição a risco elétrico de alta tensão.</p>
          </div>

          <div className="risco-card">
            <h3>Explosivos</h3>
            <p>Operações com materiais explosivos ou risco de detonação.</p>
          </div>

          <div className="risco-card">
            <h3>Outras Atividades Perigosas</h3>
            <p>Segurança patrimonial armada e atividades de alto risco.</p>
          </div>
        </div>

        <h2>Quando sua empresa precisa do Laudo?</h2>

        <ul className="lista-beneficios">
          <li>✔ Funcionários expostos a inflamáveis ou eletricidade</li>
          <li>✔ Questionamento judicial sobre adicional de periculosidade</li>
          <li>✔ Fiscalização do Ministério do Trabalho</li>
          <li>✔ Auditorias internas e compliance trabalhista</li>
        </ul>
      </div>
    </section>
  );
}
