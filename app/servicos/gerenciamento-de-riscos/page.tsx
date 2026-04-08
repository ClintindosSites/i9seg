import HeroPGR from "./components/HeroPGR";
import PGRAlerta from "./components/PGRAlerta";
import PGRConteudo from "./components/PGRConteudo";
import PGRCTA from "./components/PGRCta";
import PGRPublico from "./components/PGRPublico";

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
