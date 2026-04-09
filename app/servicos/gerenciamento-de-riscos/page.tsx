import HeroPGR from "./components/HeroPGR";
import PGRAlerta from "./components/PGRAlerta";
import PGRConteudo from "./components/PGRConteudo";
import PGRCTA from "./components/PGRCta";
import PGRPublico from "./components/PGRPublico";
export const metadata = {
  title: "PGR NR-01 em BH | Programa de Gerenciamento de Riscos",
  description:
    "Elaboração do PGR conforme NR-01 com inventário de riscos e plano de ação.",
};
export default function PGR() {
  return (
    <>
      <HeroPGR />
      <PGRConteudo />
      <PGRAlerta />
      <PGRPublico />
      <PGRCTA />
    </>
  );
}
