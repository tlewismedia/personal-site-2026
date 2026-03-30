import { TopSection } from '@/components/sections/TopSection';
import { PrincicplesSection } from '@/components/sections/PrincicplesSection';
import { HowHelpSection } from '@/components/sections/HowHelpSection';
import { ArtDesignSection } from '@/components/sections/ArtDesignSection';
import { FreelanceSection } from '@/components/sections/FreelanceSection';
import { RicochetSection } from '@/components/sections/RicochetSection';
import { DigitalHarborSection } from '@/components/sections/DigitalHarborSection';
import { ProjectExplorerSection } from '@/components/ProjectExplorerSection';
import { ScrollReveal } from '@/components/ScrollReveal';
import { getAllProjects } from '@/lib/projects';

export default function HomePage() {
  const projects = getAllProjects();

  return (
    <>
      <TopSection />
      <ScrollReveal>
        <PrincicplesSection />
        <HowHelpSection />
        <ArtDesignSection />
        <FreelanceSection />
        <RicochetSection />
        <DigitalHarborSection />
        <ProjectExplorerSection projects={projects} />
      </ScrollReveal>
    </>
  );
}
