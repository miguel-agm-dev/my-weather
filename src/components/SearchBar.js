import { useState } from 'react';
import { getWeather } from './weatherApi';

const SearchBar = ({ addFavorite, setWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    const weather = await getWeather(city);
    if (weather) {
      setWeatherData(weather);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar localidad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={() => addFavorite(city)}>Guardar localidad</button>
    </div>
  );
};

export default SearchBar;
