"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "O que é o Laudo Técnico de Insalubridade (LI)?",
      answer:
        "É um documento elaborado por profissional habilitado que avalia a exposição dos colaboradores a agentes físicos, químicos ou biológicos acima dos limites legais.",
    },
    {
      question: "Quando a empresa precisa do Laudo de Periculosidade (LP)?",
      answer:
        "Quando há atividades com risco acentuado, como contato com inflamáveis, energia elétrica ou explosivos.",
    },
    {
      question: "O que é Assistência Técnica em Perícia Trabalhista?",
      answer:
        "É o suporte técnico em processos judiciais, acompanhando perícias e elaborando pareceres técnicos.",
    },
    {
      question:
        "Quais empresas precisam de consultoria em Segurança do Trabalho?",
      answer:
        "Toda empresa com colaboradores deve cumprir as Normas Regulamentadoras para evitar multas e riscos.",
    },
    {
      question: "O que são Fatores de Riscos Ocupacionais?",
      answer:
        "São condições do ambiente que podem causar danos à saúde, como ruído, calor, produtos químicos e riscos ergonômicos.",
    },
    {
      question: "Vocês oferecem treinamentos obrigatórios?",
      answer:
        "Sim, conforme as Normas Regulamentadoras, personalizados para cada tipo de empresa.",
    },
    {
      question: "Quais os riscos de não cumprir as normas?",
      answer:
        "Multas, interdições, processos judiciais e aumento do risco de acidentes.",
    },
    {
      question: "Como contratar os serviços da i9 SEG?",
      answer:
        "Entre em contato pelo WhatsApp ou formulário para receber uma proposta personalizada.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        {/* HEADER */}
        <div className="section-header">
          <h2>Perguntas Frequentes</h2>
          <p>
            Esclareça suas dúvidas sobre segurança do trabalho e nossos serviços
          </p>
        </div>

        {/* LISTA */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "−" : "+"}</span>
              </button>

              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
