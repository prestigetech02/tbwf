import Hero from '@/components/Hero';
import ElimCentre from '@/components/ElimCentre';
import Pillars from '@/components/Pillars';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Support from '@/components/Support';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ElimCentre />
      <Pillars />
      <About />
      <Projects />
      <Support />
    </>
  );
}
