import periodicTable from 'periodic-table'

// Map the npm package data to our format
export function mapElements() {
  const elements = periodicTable.all()
  
  // Category mapping
  const getCategoryFromElement = (element) => {
    const name = element.name.toLowerCase()
    const symbol = element.symbol
    
    // Noble gases
    if (['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'].includes(symbol)) {
      return 'noble gas'
    }
    // Alkali metals
    if (['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']. includes(symbol)) {
      return 'alkali metal'
    }
    // Alkaline earth metals
    if (['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'].includes(symbol)) {
      return 'alkaline earth metal'
    }
    // Halogens
    if (['F', 'Cl', 'Br', 'I', 'At', 'Ts']. includes(symbol)) {
      return 'halogen'
    }
    // Lanthanides
    if (element.atomicNumber >= 57 && element.atomicNumber <= 71) {
      return 'lanthanide'
    }
    // Actinides
    if (element.atomicNumber >= 89 && element.atomicNumber <= 103) {
      return 'actinide'
    }
    // Metalloids
    if (['B', 'Si', 'Ge', 'As', 'Sb', 'Te', 'Po'].includes(symbol)) {
      return 'metalloid'
    }
    // Post-transition metals
    if (['Al', 'Ga', 'In', 'Sn', 'Tl', 'Pb', 'Bi', 'Nh', 'Fl', 'Mc', 'Lv']. includes(symbol)) {
      return 'post-transition metal'
    }
    // Transition metals
    if ((element.atomicNumber >= 21 && element.atomicNumber <= 30) ||
        (element.atomicNumber >= 39 && element.atomicNumber <= 48) ||
        (element.atomicNumber >= 72 && element.atomicNumber <= 80) ||
        (element.atomicNumber >= 104 && element.atomicNumber <= 112)) {
      return 'transition metal'
    }
    // Nonmetals (remaining)
    return 'nonmetal'
  }

  // Grid position mapping (standard periodic table layout)
  const getPosition = (atomicNumber) => {
    const positions = {
      1: { row: 1, column: 1 },
      2: { row: 1, column: 18 },
      3: { row: 2, column: 1 },
      4: { row: 2, column: 2 },
      5: { row: 2, column: 13 },
      6: { row: 2, column: 14 },
      7: { row: 2, column: 15 },
      8: { row: 2, column: 16 },
      9: { row: 2, column: 17 },
      10: { row: 2, column: 18 },
      11: { row: 3, column: 1 },
      12: { row: 3, column: 2 },
      13: { row: 3, column: 13 },
      14: { row: 3, column: 14 },
      15: { row: 3, column: 15 },
      16: { row: 3, column: 16 },
      17: { row: 3, column: 17 },
      18: { row: 3, column: 18 },
      19: { row: 4, column: 1 },
      20: { row: 4, column: 2 },
      21: { row: 4, column: 3 },
      22: { row: 4, column: 4 },
      23: { row: 4, column: 5 },
      24: { row: 4, column: 6 },
      25: { row: 4, column: 7 },
      26: { row: 4, column: 8 },
      27: { row: 4, column: 9 },
      28: { row: 4, column: 10 },
      29: { row: 4, column: 11 },
      30: { row: 4, column: 12 },
      31: { row: 4, column: 13 },
      32: { row: 4, column: 14 },
      33: { row: 4, column: 15 },
      34: { row: 4, column: 16 },
      35: { row: 4, column: 17 },
      36: { row: 4, column: 18 },
      37: { row: 5, column: 1 },
      38: { row: 5, column: 2 },
      39: { row: 5, column: 3 },
      40: { row: 5, column: 4 },
      41: { row: 5, column: 5 },
      42: { row: 5, column: 6 },
      43: { row: 5, column: 7 },
      44: { row: 5, column: 8 },
      45: { row: 5, column: 9 },
      46: { row: 5, column: 10 },
      47: { row: 5, column: 11 },
      48: { row: 5, column: 12 },
      49: { row: 5, column: 13 },
      50: { row: 5, column: 14 },
      51: { row: 5, column: 15 },
      52: { row: 5, column: 16 },
      53: { row: 5, column: 17 },
      54: { row: 5, column: 18 },
      55: { row: 6, column: 1 },
      56: { row: 6, column: 2 },
      57: { row: 6, column: 3 },
      72: { row: 6, column: 4 },
      73: { row: 6, column: 5 },
      74: { row: 6, column: 6 },
      75: { row: 6, column: 7 },
      76: { row: 6, column: 8 },
      77: { row: 6, column: 9 },
      78: { row: 6, column: 10 },
      79: { row: 6, column: 11 },
      80: { row: 6, column: 12 },
      81: { row: 6, column: 13 },
      82: { row: 6, column: 14 },
      83: { row: 6, column: 15 },
      84: { row: 6, column: 16 },
      85: { row: 6, column: 17 },
      86: { row: 6, column: 18 },
      87: { row: 7, column: 1 },
      88: { row: 7, column: 2 },
      89: { row: 7, column: 3 },
      104: { row: 7, column: 4 },
      105: { row: 7, column: 5 },
      106: { row: 7, column: 6 },
      107: { row: 7, column: 7 },
      108: { row: 7, column: 8 },
      109: { row: 7, column: 9 },
      110: { row: 7, column: 10 },
      111: { row: 7, column: 11 },
      112: { row: 7, column: 12 },
      113: { row: 7, column: 13 },
      114: { row: 7, column: 14 },
      115: { row: 7, column: 15 },
      116: { row: 7, column: 16 },
      117: { row: 7, column: 17 },
      118: { row: 7, column: 18 },
    }
    return positions[atomicNumber] || { row: 1, column: 1 }
  }

  // Get phase at room temperature
  const getPhase = (element) => {
    const meltingPoint = element.melt
    const boilingPoint = element.boil
    const roomTemp = 298.15 // Kelvin

    if (! meltingPoint) return 'Unknown'
    if (meltingPoint > roomTemp) return 'Solid'
    if (boilingPoint && boilingPoint < roomTemp) return 'Gas'
    return 'Liquid'
  }

  return elements.map(element => {
    const position = getPosition(element.atomicNumber)
    
    return {
      number: element.atomicNumber,
      symbol: element.symbol,
      name: element.name,
      mass: element.atomicMass ?  element.atomicMass. toFixed(3) : 'N/A',
      category: getCategoryFromElement(element),
      row: position.row,
      column: position.column,
      phase: getPhase(element),
      electronConfiguration: element.electronicConfiguration || 'N/A',
      description: `${element.name} is a chemical element with symbol ${element.symbol} and atomic number ${element.atomicNumber}. `,
      // Additional properties from the package
      density: element.density,
      meltingPoint: element.melt,
      boilingPoint: element.boil,
      electronegativity: element.electroneg_pauling,
      ionizationEnergy: element.ionization_energy,
    }
  })
}