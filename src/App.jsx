import { useState, useMemo } from 'react'
import PeriodicTable from './components/PeriodicTable'
import ElementModal from './components/ElementModal'
import ParticlesBackground from './components/ParticlesBackground'
import AnimatedTitle from './components/AnimatedTitle'
import { mapElements } from './utils/elementMapper'
import './App.css'

function App() {
  const [selectedElement, setSelectedElement] = useState(null)
  
  // Load elements from npm package
  const elements = useMemo(() => mapElements(), [])

  return (
    <div className="app">
      <ParticlesBackground />
      
      <header className="header">
        <AnimatedTitle />
        <p className="subtitle">Click on any element to explore its properties</p>
        <p className="data-source">Data powered by periodic-table npm package 📦</p>
      </header>
      
      <PeriodicTable elements={elements} onElementClick={setSelectedElement} />
      
      {selectedElement && (
        <ElementModal 
          element={selectedElement} 
          onClose={() => setSelectedElement(null)} 
        />
      )}
      
      <footer className="footer">
        <p>Built with React ⚛️ | Data from periodic-table package 🧪 | Deployed on Vercel ▲</p>
      </footer>
    </div>
  )
}

export default App