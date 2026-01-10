import { useEffect, useRef } from 'react'
import './ElementModal.css'

function ElementModal({ element, onClose }) {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const getCategoryColor = (category) => {
    const colors = {
      'noble gas': '#ff6b9d',
      'alkali metal':  '#c084fc',
      'alkaline earth metal': '#60a5fa',
      'transition metal': '#34d399',
      'post-transition metal': '#fbbf24',
      'metalloid': '#f97316',
      'nonmetal': '#8b5cf6',
      'halogen': '#ec4899',
      'lanthanide': '#06b6d4',
      'actinide': '#10b981',
    }
    return colors[category] || '#64748b'
  }

  const formatTemperature = (kelvin) => {
    if (! kelvin) return 'N/A'
    const celsius = (kelvin - 273.15).toFixed(2)
    return `${celsius}°C (${kelvin.toFixed(2)}K)`
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        ref={modalRef}
        className="modal-content" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-glow"></div>
        
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div 
          className="modal-header"
          style={{ 
            background: `linear-gradient(135deg, ${getCategoryColor(element.category)}, ${getCategoryColor(element. category)}dd)` 
          }}
        >
          <div className="modal-particles"></div>
          <div className="modal-symbol">{element.symbol}</div>
          <div className="modal-name">{element.name}</div>
          <div className="modal-number">Atomic Number: {element.number}</div>
        </div>
        
        <div className="modal-body">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Atomic Mass</span>
              <span className="info-value">{element.mass}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Category</span>
              <span className="info-value">{element. category}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phase</span>
              <span className="info-value">{element. phase}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Density</span>
              <span className="info-value">
                {element.density ? `${element.density} g/cm³` : 'N/A'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Melting Point</span>
              <span className="info-value">
                {formatTemperature(element.meltingPoint)}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Boiling Point</span>
              <span className="info-value">
                {formatTemperature(element.boilingPoint)}
              </span>
            </div>
            {element.electronegativity && (
              <div className="info-item">
                <span className="info-label">Electronegativity</span>
                <span className="info-value">{element.electronegativity}</span>
              </div>
            )}
            {element.ionizationEnergy && (
              <div className="info-item">
                <span className="info-label">Ionization Energy</span>
                <span className="info-value">{element.ionizationEnergy} kJ/mol</span>
              </div>
            )}
          </div>

          <div className="electron-config">
            <h3>Electron Configuration</h3>
            <p className="config-value">{element.electronConfiguration}</p>
          </div>
          
          {element.description && (
            <div className="description">
              <h3>About</h3>
              <p>{element.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ElementModal