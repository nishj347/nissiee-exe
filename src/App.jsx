import { useCallback, useState } from "react";
import Cursor from "./components/Cursor";
import GrainOverlay from "./components/GrainOverlay";
import BootSequence from "./components/BootSequence";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EasterEgg from "./components/EasterEgg";
import SudoHireToast from "./components/SudoHireToast";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import ContentCommunity from "./sections/ContentCommunity";
import Contact from "./sections/Contact";
import useKonamiCode from "./hooks/useKonamiCode";
import useSudoHire from "./hooks/useSudoHire";

export default function App() {
  const [booting, setBooting] = useState(true);
  const [konamiOpen, setKonamiOpen] = useKonamiCode();
  const [sudoOpen, setSudoOpen] = useSudoHire();

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  return (
    <>
      <GrainOverlay />
      <Cursor />

      {booting && <BootSequence onComplete={handleBootComplete} />}

      <EasterEgg open={konamiOpen} onClose={() => setKonamiOpen(false)} />
      <SudoHireToast open={sudoOpen} onClose={() => setSudoOpen(false)} />

      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <Services />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <Stack />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <ContentCommunity />
        <div className="h-px bg-gradient-to-r from-transparent via-border-2 to-transparent mx-[4vw]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
