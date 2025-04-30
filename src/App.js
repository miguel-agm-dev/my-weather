import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    
    // Load saved locations from localStorage when loading the app
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    // Save favorite locations to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (city) => {
    if (favorites.length < 3) {
      setFavorites([...favorites, city]);
    } else {
      alert('Solo se permite guardar 3 localidades.');
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((favorite) => favorite !== city));
  };

  return (
    <div>
      <h1>My Weather</h1>
      <SearchBar addFavorite={addFavorite} setWeatherData={setWeatherData} />
      <div>
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
      <div>
        <h2>Localidades Favoritas</h2>
        {favorites.map((city) => (
          <div key={city}>
            <span>{city}</span>
            <button onClick={() => removeFavorite(city)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
