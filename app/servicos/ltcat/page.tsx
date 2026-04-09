import AutoridadeLTCAT from "./components/AutoridadeLTCAT";
import ConteudoLTCAT from "./components/ConteudoLTCAT";
import HeroLTCAT from "./components/HeroLTCAT";
export const metadata = {
  title: "LTCAT em Belo Horizonte | Laudo Técnico Previdenciário",
  description:
    "Elaboração de LTCAT conforme INSS e legislação vigente. Proteja sua empresa.",
};
export default function LTCAT() {
  return (
    <>
      <HeroLTCAT />
      <ConteudoLTCAT />
      <AutoridadeLTCAT />
    </>
  );
}
