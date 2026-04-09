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
          </div>

          <Link href="/#faq">FAQ</Link>
          <Link href="/#contato">Contato</Link>
        </div>
      </aside>
    </>
  );
}
