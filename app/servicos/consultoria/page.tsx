import ConsultoriaSections from "./components/ConsultoriaSections";
import HeroConsultoria from "./components/HeroConsultoria";
import SecaoBeneficiosConsultoria from "./components/SecaoBeneficiosConsultoria";
import SecaoConsultoriaIntro from "./components/SecaoConsultoria";
import SecaoServicosConsultoria from "./components/SecaoServicoConsultoria";

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
