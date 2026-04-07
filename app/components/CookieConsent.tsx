"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  // 🚨 EVITA HYDRATION ERROR
  if (!mounted) return null;

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <p>
          Utilizamos cookies para melhorar sua experiência. Veja nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>

        <div className="cookie-buttons">
          <button onClick={acceptCookies} className="btn-accept">
            Aceitar
          </button>

          <button onClick={declineCookies} className="btn-decline">
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
