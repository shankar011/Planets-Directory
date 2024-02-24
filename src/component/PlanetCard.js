import React from 'react'

const PlanetCard = ({planet}) => {
  return (
    <div className='planet-card'>
        <h2>{planet.name}</h2>
        <p>Climate:{planet.climate}</p>
        <p>Population :{planet.population}</p>
        <p>Terrain:{planet.terrain}</p>
    </div>
  )
}

export default PlanetCard