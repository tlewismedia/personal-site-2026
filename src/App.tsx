import { useState } from 'react'
import { TopSection } from './sections/TopSection'
import { ArtDesignSection } from './sections/ArtDesignSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopSection /> 
      <ArtDesignSection />
    </>
  )
}

export default App
