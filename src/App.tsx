import { useCallback } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { Services } from './components/Services';
import { Solutions } from './components/Solutions';
import { Trading } from './components/Trading';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const handleNavigate = useCallback((targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Partners />
        <About />
        <Services />
        <Solutions />
        <Trading />
        <Contact onNavigate={handleNavigate} />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
