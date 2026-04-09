import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* LOGO + DESCRIÇÃO */}
        <div className="footer-col">
          <Image src="/images/logo.png" alt="i9 SEG" width={140} height={50} />
          <p>
            Especialistas em Segurança do Trabalho. Garantimos que sua empresa
            esteja 100% regularizada e protegida contra multas e processos.
          </p>
        </div>

        {/* LINKS RÁPIDOS */}
        <div className="footer-col">
          <h3>Links</h3>
          <Link href="/">Início</Link>
          <Link href="/#sobre">Sobre</Link>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/#contato">Contato</Link>
        </div>

        {/* SERVIÇOS */}
        <div className="footer-col">
          <h3>Serviços</h3>
          <Link href="/servicos/pgr">PGR</Link>
          <Link href="/servicos/pcmso">PCMSO</Link>
          <Link href="/servicos/ltcat">LTCAT</Link>
          <Link href="/servicos/insalubridade">Insalubridade</Link>
          <Link href="/servicos/periculosidade">Periculosidade</Link>
          <Link href="/servicos/ergonomia">Ergonomia</Link>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h3>Contato</h3>
          <p>📍 Belo Horizonte - MG</p>
          <p>📞 (31) 8619-1591</p>

          <Link
            className="btn-primary"
            href="https://wa.me/553186191591?text=Olá,%20quero%20informações"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </div>

      {/* LINHA FINAL */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} i9 SEG - Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
