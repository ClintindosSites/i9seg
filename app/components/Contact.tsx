"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const texto = `Olá, gostaria de solicitar um orçamento:%0A
Nome: ${form.nome}%0A
Email: ${form.email}%0A
Empresa: ${form.empresa}%0A
Mensagem: ${form.mensagem}`;

    const url = `https://wa.me/553186191591?text=${texto}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="contato">
      <div className="overlay"></div>

      <div className="container contato-grid">
        {/* LADO ESQUERDO */}
        <div className="contato-info">
          <h2>Proteja sua Empresa Hoje Mesmo</h2>

          <p>
            Evite multas e riscos trabalhistas. Nossa equipe está pronta para
            ajudar sua empresa.
          </p>

          <div className="beneficios-contato">
            <div>✔ Atendimento rápido e personalizado</div>
            <div>✔ Especialistas certificados</div>
            <div>✔ Conformidade com Normas Regulamentadoras</div>
            <div>✔ Redução de riscos e custos</div>
          </div>

          <div className="contato-redes">
            <a
              href="https://wa.me/553186191591"
              target="_blank"
              className="social-btn whatsapp"
            >
              WhatsApp
            </a>

            <a href="#" className="social-btn instagram">
              Instagram
            </a>

            <a href="#" className="social-btn facebook">
              Facebook
            </a>

            <a href="#" className="social-btn linkedin">
              LinkedIn
            </a>
          </div>
        </div>

        {/* FORMULÁRIO */}
        <div className="contato-form-box">
          <h3>Solicite um Orçamento</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nome"
              placeholder="Seu Nome"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              required
              onChange={handleChange}
            />

            <input
              type="text"
              name="empresa"
              placeholder="Nome da Empresa"
              onChange={handleChange}
            />

            <textarea
              name="mensagem"
              placeholder="Descreva sua necessidade..."
              required
              onChange={handleChange}
            ></textarea>

            <button type="submit">Receber Proposta</button>
          </form>
        </div>
      </div>
    </section>
  );
}
