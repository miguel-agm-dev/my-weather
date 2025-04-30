
const WeatherCard = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>Temperatura: {data.main.temp}°C</p>
      <p>Condición: {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;