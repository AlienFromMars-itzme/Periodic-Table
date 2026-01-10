import { useEffect, useRef } from 'react'
import './AnimatedTitle.css'

function AnimatedTitle() {
  const titleRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    if (! title) return

    const text = title.textContent
    title.textContent = ''
    
    const chars = text.split('')
    chars.forEach((char, index) => {
      const span = document. createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.className = 'char'
      span.style.animationDelay = `${index * 0.05}s`
      title.appendChild(span)
    })
  }, [])

  return (
    <div className="animated-title-container">
      <h1 ref={titleRef} className="animated-title">
        Interactive Periodic Table
      </h1>
      <div className="title-glow"></div>
    </div>
  )
}

export default AnimatedTitle