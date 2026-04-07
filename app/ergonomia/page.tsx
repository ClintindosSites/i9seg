import ConteudoErgonomia from "./components/ConteudoErgonomia";
import CtaErgonomia from "./components/CtaErgonomia";
import GarantiaErgonomia from "./components/GarantiaErgonomia";
import HeroErgonomia from "./components/HeroErgonomia";

export const metadata = {
  title: "Ergonomia Empresarial e AET conforme NR-17",
  description:
    "Realizamos Análise Ergonômica do Trabalho (AET) conforme NR-17, incluindo fatores psicossociais.",
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
