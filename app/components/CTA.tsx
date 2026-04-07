import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Não encontrou o que procura?</h2>

        <p>
          Entre em contato conosco e descubra soluções personalizadas para a sua
          empresa.
        </p>

        <Link href="/#contato" className="cta-button">
          Fale com um Especialista →
        </Link>
      </div>
    </section>
  );
}
