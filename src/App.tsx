import { useEffect } from 'react'
import { TopSection } from './sections/TopSection'
import { ArtDesignSection } from './sections/ArtDesignSection'
import { DigitalHarborSection } from './sections/DigitalHarborSection'
import { ProjectExplorerSection } from './sections/ProjectExplorerSection'
import { RicochetSection } from './sections/RicochetSection'
import { PrincicplesSection } from './sections/PrincicplesSection'
import { HowHelpSection } from './sections/HowHelpSection'
import { FreelanceSection } from './sections/FreelanceSection'
import './App.css'

function App() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section'));
    const scrollBlocks = sections
      .slice(1)
      .flatMap((section) => Array.from(section.children));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    );

    scrollBlocks.forEach((block) => {
      block.classList.add('reveal-on-scroll');
      observer.observe(block);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <TopSection />
      <PrincicplesSection />
      <HowHelpSection />
      <ArtDesignSection />
      <FreelanceSection />
      <RicochetSection />
      <DigitalHarborSection />
      <ProjectExplorerSection />
    </>
  )
}

export default App
