import Element from './Element'
import './PeriodicTable.css'

function PeriodicTable({ elements, onElementClick }) {
  return (
    <div className="periodic-table">
      {elements.map((element) => (
        <Element
          key={element.number}
          element={element}
          onClick={() => onElementClick(element)}
        />
      ))}
    </div>
  )
}

export default PeriodicTable