
const WeatherCard = ({ data }) => {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.icon}</p>
      <p>Temperatura media: {data.avgtemp_c}°C</p>
      <p>Condición: {data.text}</p>
    </div>
  );
};

export default WeatherCard;