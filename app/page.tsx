import About from "./components/About";
import Contact from "./components/Contact";

import Differentials from "./components/Differentials";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";
import Services from "./components/Servicos";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />

      <Differentials />
      <FAQ />
      <Contact />
    </>
  );
}
