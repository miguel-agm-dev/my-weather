import axios from 'axios';

// Function to get the weather
export const getWeather = async (city) => {
  const apiKey = 'ac3e959add0b4bd5b11112137253004';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=es`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el tiempo', error);
    alert('Error al obtener el clima. Verifica el nombre de la ciudad.');
    return null;
  }
};