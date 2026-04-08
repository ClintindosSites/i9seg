"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {
  const stats = [
    { value: 10, suffix: "+", label: "Anos de Experiência" },
    { value: 500, suffix: "+", label: "Empresas Atendidas" },
    { value: 20, suffix: "+", label: "Profissionais Certificados" },
    { value: 98, suffix: "%", label: "Taxa de Satisfação" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 30);

      return setInterval(() => {
        start += increment;

        if (start >= end) {
          start = end;
          clearInterval(intervals[index]);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="sobre" className="sobre">
      <div className="container sobre-grid">
        {/* TEXTO */}
        <div className="sobre-texto">
          <h2>Expertise e Confiança em Segurança do Trabalho</h2>

          <p>
            A i9 SEG é uma consultoria especializada em segurança do trabalho e
            ergonomia, com mais de uma década de experiência no mercado
            brasileiro.
          </p>

          <p>
            Oferecemos soluções personalizadas com atendimento técnico
            especializado e foco total na conformidade legal da sua empresa.
          </p>

          <div className="diferenciais">
            <ul>
              <li>✔ Conformidade total com Normas Regulamentadoras</li>
              <li>✔ Redução de riscos trabalhistas</li>
              <li>✔ Atendimento técnico especializado</li>
              <li>✔ Estratégias adaptadas à realidade da empresa</li>
            </ul>
            <img src="/images/logo.webp" alt="logo de i9seg" />
          </div>
        </div>

        {/* ESTATÍSTICAS */}
        <div className="sobre-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-number">
                {counts[index]}
                {stat.suffix}
              </h3>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
