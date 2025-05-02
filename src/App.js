import { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

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
      alert('Solo se permite guardar 3 lugares.');
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((favorite) => favorite !== city));
  };

  return (
    <div className='container'>
      <div>
        <h1>My Weather App</h1>
      </div>
      <div className='container-search'>
        <SearchBar addFavorite={addFavorite} setWeatherData={setWeatherData} />
      </div>
      <div>
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
      <div className='container-fav'>
        <div className='title-fav'>
          <h2 className='saved-sites'>Lugares Guardados</h2>
        </div>
        <div className='container-sites'>
          {favorites.length === 0 ? (
            <p className='saved-sites'>No se ha guardado ningún lugar</p>
            ) : (
              favorites.map((city) => (
                <div key={city}>
                  <span>{city}</span>
                  <div className='button-delete'>
                    <button onClick={() => removeFavorite(city)}>
                      <img src='message-square-minus-solid-24.png' alt='Delete' />
                    </button>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
