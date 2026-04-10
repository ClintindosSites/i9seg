"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  // esconder header ao scroll
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // travar scroll quando menu abrir
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // fechar menu com ESC (nível profissional)
  useEffect(() => {
    const handleEsc = (e: any) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`header ${hideHeader ? "hide" : ""}`}>
        <div className="container header-flex">
          <Link href="/" className="logo" onClick={closeMenu}>
            <Image
              src="/images/logo.webp"
              alt="Logo"
              width={100}
              height={80}
              priority
            />
          </Link>

          {/* DESKTOP */}
          <nav className="nav-desktop">
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>

            <div className="dropdown">
              <span>Serviços ▾</span>
              <div className="dropdown-content">
                <Link href="/servicos/assistencia-tecnica">
                  Assistência Técnica
                </Link>
                <Link href="/servicos/consultoria">Consultoria</Link>
                <Link href="/servicos/gestao-de-riscos">Gestão de Riscos</Link>
                <Link href="/servicos/periculosidade">Periculosidade</Link>
                <Link href="/servicos/insalubridade">Insalubridade</Link>
                <Link href="/servicos/ltcat">LTCAT</Link>
                <Link href="/servicos/pcmso">PCMSO</Link>
                <Link href="/servicos/gerenciamento-de-riscos">PGR</Link>
                <Link href="/servicos/ergonomia">Ergonomia</Link>
                <Link href="/servicos/treinamento">Treinamento</Link>
              </div>
            </div>

            <Link href="/#faq">FAQ</Link>
            <Link href="/#contato">Contato</Link>

            <Link
              className="btn-primary"
              target="_blank"
              href="https://wa.me/553186191591"
            >
              WhatsApp{" "}
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M16 .6C7.5.6.6 7.5.6 16c0 2.8.7 5.5 2.1 7.9L.6 31.4l7.7-2c2.3 1.2 4.9 1.8 7.5 1.8 8.5 0 15.4-6.9 15.4-15.4S24.5.6 16 .6zm0 28c-2.4 0-4.7-.6-6.7-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5c-1.2-2-1.8-4.3-1.8-6.7C3.3 9 9 3.3 16 3.3S28.7 9 28.7 16 23 28.6 16 28.6zm6.5-9.8c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.8-2-1.1-2.7-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3 0 1.8 1.3 3.5 1.5 3.7.2.2 2.6 4 6.3 5.4.9.3 1.6.5 2.1.6.9.3 1.7.2 2.3.1.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
                </svg>
              </span>
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

      {/* OVERLAY (corrigido) */}
      <div
        className={`header-overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* MENU MOBILE */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-links">
          <Link href="/" onClick={closeMenu}>
            Início
          </Link>
          <Link href="/#sobre" onClick={closeMenu}>
            Sobre
          </Link>

          <div className="mobile-group">
            <Link href="/servicos/assistencia-tecnica" onClick={closeMenu}>
              Assistência Técnica
            </Link>
            <Link href="/servicos/consultoria" onClick={closeMenu}>
              Consultoria
            </Link>
            <Link href="/servicos/gestao-de-riscos" onClick={closeMenu}>
              Gestão de Riscos
            </Link>
            <Link href="/servicos/periculosidade" onClick={closeMenu}>
              Periculosidade
            </Link>
            <Link href="/servicos/insalubridade" onClick={closeMenu}>
              Insalubridade
            </Link>
            <Link href="/servicos/ltcat" onClick={closeMenu}>
              LTCAT
            </Link>
            <Link href="/servicos/pcmso" onClick={closeMenu}>
              PCMSO
            </Link>
            <Link href="/servicos/gerenciamento-de-riscos" onClick={closeMenu}>
              PGR
            </Link>
            <Link href="/servicos/ergonomia" onClick={closeMenu}>
              Ergonomia
            </Link>
            <Link href="/servicos/treinamento" onClick={closeMenu}>
              Treinamento
            </Link>
          </div>

          <Link href="/#faq">FAQ</Link>
          <Link href="/#contato">Contato</Link>
        </div>
      </aside>
    </>
  );
}
