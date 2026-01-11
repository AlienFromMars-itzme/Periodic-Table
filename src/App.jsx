import { useState } from 'react'
import PeriodicTable from './components/PeriodicTable'
import ElementModal from './components/ElementModal'
import ParticlesBackground from './components/ParticlesBackground'
import AnimatedTitle from './components/AnimatedTitle'
import { elements } from './data/elementsData'
import './App.css'

function App() {
  const [selectedElement, setSelectedElement] = useState(null)

  return (
    <div className="app">
      <ParticlesBackground />
      
      <header className="header">
        <AnimatedTitle />
        <p className="subtitle">Click on any element to explore its properties</p>
      </header>
      
      <PeriodicTable elements={elements} onElementClick={setSelectedElement} />
      
      {selectedElement && (
        <ElementModal 
          element={selectedElement} 
          onClose={() => setSelectedElement(null)} 
        />
      )}
      
      <footer className="footer">
        <p>Built with React ⚛️ | Animated with ReactBits Style ✨ | Deployed on Vercel ▲</p>
      </footer>
    </div>
  )
}

export default App
