"use client";

import Link from "next/link";
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
            <Link
              href="https://wa.me/553186191591"
              target="_blank"
              className="btn-primary"
            >
              WhatsApp
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

            <button type="submit" className="btn-primary">
              Receber Proposta{" "}
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
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
