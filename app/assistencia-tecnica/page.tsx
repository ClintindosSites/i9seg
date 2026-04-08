import CtaAssistencia from "./components/CtaAssistencia";
import HeroAssistencia from "./components/HeroAssistencia";
import ImportanciaPericia from "./components/ImportanciaPericia";
import IntroPericia from "./components/IntroPericia";
import SecaoAtuacao from "./components/SecaoAtuacao";
import SecaoDiferencial from "./components/SecaoDiferencial";

export default function AssistenciaTecnica() {
  return (
    <>
      <HeroAssistencia />
      <IntroPericia />
      <ImportanciaPericia />
      <SecaoAtuacao />
      <SecaoDiferencial />
      <CtaAssistencia />
    </>
  );
}
