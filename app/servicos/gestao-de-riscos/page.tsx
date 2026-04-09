import HeroRiscos from "./components/HeroRiscos";
import RiscosDetalhes from "./components/RiscosDetalhes";
import RiscosFinal from "./components/RiscosFinal";
export const metadata = {
  title: "Gestão de Riscos Ocupacionais NR-01 em BH | Inventário de Riscos",
  description:
    "Identificação e controle de riscos ocupacionais conforme NR-01 em Belo Horizonte. Evite multas e processos.",
  keywords: [
    "gestão de riscos ocupacionais BH",
    "NR 01 empresa",
    "inventário de riscos",
  ],
  alternates: {
    canonical: "https://i9seg.com.br/servicos/gestao-de-riscos",
  },
};
export default function GestaoDeRiscos() {
  return (
    <>
      <HeroRiscos />
      <RiscosDetalhes />
      <RiscosFinal />
    </>
  );
}
