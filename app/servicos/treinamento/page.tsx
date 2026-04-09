import TreinamentosPage from "./components/TreinamentoPage";
import { TreinamentosSections } from "./components/TreinamentosSections";
export const metadata = {
  title: "Treinamentos NR-10, NR-35, NR-33 em BH | Segurança do Trabalho",
  description:
    "Capacitação obrigatória conforme NRs em Belo Horizonte. Evite multas e acidentes.",
};
export default function Treinamentos() {
  return (
    <>
      <TreinamentosPage />
      <TreinamentosSections />
    </>
  );
}
