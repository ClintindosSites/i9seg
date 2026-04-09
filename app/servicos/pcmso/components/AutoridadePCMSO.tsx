import Link from "next/link";

export default function AutoridadePCMSO() {
  return (
    <section className="autoridade-pcmso">
      <div className="container">
        <h2>Por que escolher a i9 SEG?</h2>

        <ul>
          <li>Médico do trabalho responsável técnico</li>
          <li>Documentação juridicamente defensável</li>
          <li>Atendimento rápido e personalizado</li>
          <li>Suporte completo em fiscalizações</li>
        </ul>

        <Link
          target="_blank"
          href="https://wa.me/553186191591?text=Quero%20regularizar%20o%20PCMSO"
          className="btn-primary"
          rel="noopener noreferrer"
        >
          Falar com Especialista
        </Link>
      </div>
    </section>
  );
}
