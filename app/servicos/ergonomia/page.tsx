import ConteudoErgonomia from "./components/ConteudoErgonomia";
import CtaErgonomia from "./components/CtaErgonomia";
import GarantiaErgonomia from "./components/GarantiaErgonomia";
import HeroErgonomia from "./components/HeroErgonomia";

export const metadata = {
  title: "Ergonomia e AET em BH | NR-17",
  description:
    "Análise Ergonômica do Trabalho (AET) para reduzir afastamentos e processos.",
};
export default function Ergonomia() {
  return (
    <>
      <HeroErgonomia />
      <ConteudoErgonomia />
      <GarantiaErgonomia />
      <CtaErgonomia />
    </>
  );
}
