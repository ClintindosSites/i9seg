import ConsultoriaSections from "./components/ConsultoriaSections";
import HeroConsultoria from "./components/HeroConsultoria";
import SecaoBeneficiosConsultoria from "./components/SecaoBeneficiosConsultoria";
import SecaoConsultoriaIntro from "./components/SecaoConsultoria";
import SecaoServicosConsultoria from "./components/SecaoServicoConsultoria";
export const metadata = {
  title: "Consultoria em Segurança do Trabalho em BH | Adequação às NRs",
  description:
    "Consultoria completa em Segurança do Trabalho em Belo Horizonte. Adequação às NRs, prevenção de acidentes e redução de passivos.",
  keywords: [
    "consultoria SST BH",
    "NRs empresa",
    "segurança do trabalho consultoria",
  ],
  alternates: {
    canonical: "https://i9seg.com.br/servicos/consultoria",
  },
};
export default function Consultoria() {
  return (
    <>
      <HeroConsultoria />
      <SecaoConsultoriaIntro />
      <SecaoServicosConsultoria />
      <SecaoBeneficiosConsultoria />
      <ConsultoriaSections />
    </>
  );
}
