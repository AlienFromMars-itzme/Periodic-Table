import { useRef, useState } from 'react'
import './Element.css'

function Element({ element, onClick }) {
  const elementRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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

  const handleMouseMove = (e) => {
    if (!elementRef.current) return
    const rect = elementRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const style = {
    gridColumn: element.column,
    gridRow: element.row,
    background: `linear-gradient(135deg, ${getCategoryColor(element.category)}, ${getCategoryColor(element.category)}dd)`,
  }

  return (
    <div 
      ref={elementRef}
      className="element" 
      style={style}
      onClick={onClick}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="element-spotlight"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), transparent 60%)`,
        }}
      />
      <div className="element-border"></div>
      <div className="element-content">
        <div className="atomic-number">{element.number}</div>
        <div className="symbol">{element.symbol}</div>
        <div className="name">{element.name}</div>
        <div className="mass">{element.mass}</div>
      </div>
    </div>
  )
}

export default Element