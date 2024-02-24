import React from 'react'

const ResidentList = ({residents}) => {
  return (
    <div>
        <h3>Residents:</h3>
        <ul>
            {residents.map((resident)=>(
                <li key={resident.url}>
                        <p>Name:{resident.name}</p>
                        <p>Height:{resident.height}</p>
                        <p>Mass:{resident.mass}</p>
                        <p>Gender:{resident.gender}</p>

                </li>
            ))}
        </ul>
    </div>
  )
}

export default ResidentList