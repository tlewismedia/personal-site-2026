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
  return (
    <>
      <TopSection />
      <HowHelpSection />
      <PrincicplesSection />
      <ArtDesignSection />
      <FreelanceSection />
      <RicochetSection />
      <DigitalHarborSection />
      <ProjectExplorerSection />
    </>
  )
}

export default App
