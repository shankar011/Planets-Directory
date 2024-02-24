import React, { useEffect, useState } from 'react';
import { getPlants, getResidents } from './api';
import PlanetCard from './component/PlanetCard';
import ResidentList from './component/ResidentList';
import Pagination from './component/Pagination';
import "./App.css";

const App = () => {
  const [planents, setPlanets] = useState([]);
  const [currentPlanet, setCurrentPlanet] = useState(null);
  const [currentpage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    const data = await getPlants(`https://swapi.dev/api/planets/?page=${currentpage}&format=json`);
    setPlanets(data.results);
  };

  const handlePlanetClick = async (planet) => {
    const residentsData = await getResidents(planet.residents);
    setCurrentPlanet({ ...planet, residents: residentsData });
  };

  const handleNextPage = () => setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  useEffect(() => {
    fetchData();
  }, [currentpage]);

  return (
    <div className='App'>
      <h1>Planets Directory</h1>
      <div className='planets-container'>
        {planents.map((planet) => (
          <div key={planet.url} className='planet-container' onClick={() => handlePlanetClick(planet)}>
            <PlanetCard planet={planet} />
          </div>
        ))}
      </div>
      <Pagination onNextPage={handleNextPage} onPrevPage={handlePrevPage} hasPrev={currentpage > 1} hasNext={true} />
      {currentPlanet && (
        <div className='current-planet'>
          <PlanetCard planet={currentPlanet} />
          <ResidentList residents={currentPlanet.residents} />
        </div>
      )}
    </div>
  );
};

export default App;
