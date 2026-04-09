import ConteudoPericulosidade from "./components/ConteudoPericulosidade";
import CtaPericulosidade from "./components/CtaPericulosidade";
import HeroPericulosidade from "./components/HeroPericulosidade";
import ProcessoPericulosidade from "./components/ProcessoPericulosidade";
export const metadata = {
  title: "Laudo de Periculosidade em BH | NR-16",
  description:
    "Laudo técnico de periculosidade em Belo Horizonte conforme NR-16. Evite pagamentos indevidos e processos.",
  keywords: ["laudo periculosidade BH", "NR 16 empresa"],
};
export default function Periculosidade() {
  return (
    <>
      <HeroPericulosidade />
      <ConteudoPericulosidade />
      <ProcessoPericulosidade />
      <CtaPericulosidade />
    </>
  );
}
