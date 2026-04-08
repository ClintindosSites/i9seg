"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHideHeader(true); // descendo
      } else {
        setHideHeader(false); // subindo
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${hideHeader ? "hide" : ""}`}>
        <div className="container header-flex">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={100}
              height={80}
              priority
              style={{ height: "auto" }}
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="nav-desktop">
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>

            <div className="dropdown">
              <span>Serviços ▾</span>
              <div className="dropdown-content">
                <Link href="/servicos/assistencia-tecnica">
                  Assistência Técnica Pericial
                </Link>
                <Link href="/servicos/consultoria">
                  Consultoria em Segurança do Trabalho
                </Link>
                <Link href="/servicos/gestao-de-riscos">
                  Gestão de Riscos Ocupacionais
                </Link>
                <Link href="/servicos/periculosidade">
                  LP – Laudo de Periculosidade
                </Link>
                <Link href="/servicos/insalubridade">
                  LI – Laudo de Insalubridade
                </Link>
                <Link href="/servicos/ltcat">LTCAT</Link>
                <Link href="/servicos/pcmso">
                  PCMSO – Programa de Controle Médico
                </Link>
                <Link href="/servicos/gerenciamento-de-riscos">
                  PGR – Programa de Gerenciamento de Riscos
                </Link>
                <Link href="/servicos/ergonomia">
                  Ergonomia – AET e Fatores Psicossociais
                </Link>
              </div>
            </div>

            <Link href="/#faq">FAQ</Link>
            <Link href="/#contato">Contato</Link>

            <Link
              className="btn-header"
              target="_blank"
              href="https://wa.me/553186191591"
            >
              WhatsApp
            </Link>
          </nav>

          {/* HAMBURGER */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          Início
        </Link>
        <Link href="/#sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </Link>

        <Link href="/#contato" onClick={() => setMenuOpen(false)}>
          Contato
        </Link>
        <Link href="/servicos/assistencia-tecnica">
          Assistência Técnica Pericial
        </Link>
        <Link href="/servicos/consultoria">
          Consultoria em Segurança do Trabalho
        </Link>
        <Link href="/servicos/gestao-de-riscos">
          Gestão de Riscos Ocupacionais
        </Link>
        <Link href="/servicos/periculosidade">
          LP – Laudo de Periculosidade
        </Link>
        <Link href="/servicos/insalubridade">LI – Laudo de Insalubridade</Link>
        <Link href="/servicos/ltcat">LTCAT</Link>
        <Link href="/servicos/pcmso">PCMSO – Programa de Controle Médico</Link>
        <Link href="/servicos/gerenciamento-de-riscos">
          PGR – Programa de Gerenciamento de Riscos
        </Link>
        <Link href="/servicos/ergonomia">
          Ergonomia – AET e Fatores Psicossociais
        </Link>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
