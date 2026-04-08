"use client";

import Link from "next/link";

export default function AutoridadeLTCAT() {
  return (
    <section className="autoridade-ltcat">
      <div className="container">
        <h2>Por que escolher a i9 SEG?</h2>

        <ul>
          <li>✔ Profissionais habilitados em Segurança do Trabalho</li>
          <li>✔ Laudos com embasamento técnico e jurídico</li>
          <li>✔ Atendimento ágil e personalizado</li>
          <li>✔ Suporte completo em demandas previdenciárias</li>
        </ul>

        <Link
          href="https://wa.me/553186191591?text=Quero%20regularizar%20o%20LTCAT"
          target="_blank"
          className="btn-secondary"
        >
          Falar com Especialista
        </Link>
      </div>
    </section>
  );
}
