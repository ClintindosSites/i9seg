import AutoridadePCMSO from "./components/AutoridadePCMSO";
import ConteudoPCMSO from "./components/ConteudoPCMSO";
import HeroPCMSO from "./components/HeroPCMSO";
export const metadata = {
  title: "PCMSO em BH | Programa de Saúde Ocupacional",
  description:
    "Implantação e gestão do PCMSO conforme NR-07 em Belo Horizonte.",
};
export default function PCMSO() {
  return (
    <>
      <HeroPCMSO />
      <ConteudoPCMSO />
      <AutoridadePCMSO />
    </>
  );
}
