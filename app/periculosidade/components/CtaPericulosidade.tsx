import Link from "next/link";

export default function CtaPericulosidade() {
  return (
    <section className="cta-periculosidade">
      <div className="overlay"></div>

      <div className="container">
        <h2>Evite Processos e Pagamentos Indevidos</h2>

        <p>
          Solicite agora seu Laudo Técnico de Periculosidade com especialistas
          certificados e garanta conformidade com a NR-16.
        </p>

        <Link
          href="https://wa.me/553186191591?text=Olá,%20quero%20regularizar%20a%20periculosidade%20da%20minha%20empresa"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Falar com Especialista
        </Link>
      </div>
    </section>
  );
}
