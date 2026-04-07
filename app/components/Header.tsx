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
              src="/images/logo.png"
              alt="i9 SEG"
              width={140}
              height={50}
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="nav-desktop">
            <Link href="/">Início</Link>
            <Link href="/#sobre">Sobre</Link>

            <div className="dropdown">
              <span>Serviços ▾</span>
              <div className="dropdown-content">
                <Link href="/servicos/pgr">PGR</Link>
                <Link href="/servicos/pcmso">PCMSO</Link>
              </div>
            </div>

            <Link href="/#faq">FAQ</Link>
            <Link href="/#contato">Contato</Link>

            <a
              className="btn-header"
              target="_blank"
              href="https://wa.me/553186191591"
            >
              WhatsApp
            </a>
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
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
