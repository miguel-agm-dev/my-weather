import { useState } from 'react';
import { getWeather } from './../request';

import './../SearchBar.css';

const SearchBar = ({ addFavorite, setWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {

    if (!city.trim()) {
      alert('Por favor, ingresa una ciudad.');
      return;
    }

    const weather = await getWeather(city);
    if (weather) {
      setWeatherData(weather);
    } else {
        alert('No se pudo obtener el clima para esta ciudad.');
    }
  };

  return (
    <div className='browser'>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Buscar localidad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
        <div className='button-search'>
          <button onClick={handleSearch}>
            <img src='search-solid-24.png' alt='Search' />
          </button>
        </div>
        <div className='button-fav'>
          <button onClick={() => addFavorite(city)}>
          <img src='star-solid-24.png' alt='Favorite' />
          </button>
        </div>
    </div>
  );
};

export default SearchBar;
