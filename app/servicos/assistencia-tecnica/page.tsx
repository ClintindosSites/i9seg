import CtaAssistencia from "./components/CtaAssistencia";
import HeroAssistencia from "./components/HeroAssistencia";
import ImportanciaPericia from "./components/ImportanciaPericia";
import IntroPericia from "./components/IntroPericia";
import SecaoAtuacao from "./components/SecaoAtuacao";
import SecaoDiferencial from "./components/SecaoDiferencial";
export const metadata = {
  title: "Assistência Técnica em Perícia Trabalhista em BH | Defesa Técnica",
  description:
    "Reduza riscos jurídicos com assistência técnica especializada em perícias trabalhistas em Belo Horizonte.",
  keywords: [
    "assistente técnico trabalhista BH",
    "perícia trabalhista empresa",
    "defesa técnica processo",
  ],
  alternates: {
    canonical: "https://i9seg.com.br/servicos/assistencia-tecnica",
  },
};
export default function AssistenciaTecnica() {
  return (
    <>
      <HeroAssistencia />
      <IntroPericia />
      <ImportanciaPericia />
      <SecaoAtuacao />
      <SecaoDiferencial />
      <CtaAssistencia />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Assistência Técnica em Perícia Trabalhista",
            provider: {
              "@type": "LocalBusiness",
              name: "i9SEG Segurança do Trabalho",
            },
            areaServed: "Belo Horizonte",
            description:
              "Defesa técnica em processos trabalhistas com análise de laudos e parecer técnico.",
          }),
        }}
      />
    </>
  );
}
