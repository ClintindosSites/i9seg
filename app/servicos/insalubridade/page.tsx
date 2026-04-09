import ConteudoLI from "./components/ConteudoLI";
import CtaLi from "./components/CtaLi";
import HeroLI from "./components/HeroLI";
import ProcessoLI from "./components/ProcessoLI";
export const metadata = {
  title: "Laudo de Insalubridade em BH | NR-15",
  description:
    "Avaliação de insalubridade com laudo técnico completo em Belo Horizonte.",
  keywords: ["insalubridade BH", "NR 15 empresa"],
};
export default function Insalubridade() {
  return (
    <>
      <HeroLI />
      <ConteudoLI />
      <ProcessoLI />
      <CtaLi />
    </>
  );
}
