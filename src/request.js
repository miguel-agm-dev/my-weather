import axios from 'axios';

// Function to get the weather
const getWeather = async (city) => {
  const apiKey = 'ac3e959add0b4bd5b11112137253004';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},es&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el tiempo', error);
    return null;
  }
};