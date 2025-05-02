import './../WeatherCard.css';
const WeatherCard = ({ data }) => {
  return (
    <div className='container-card'>
      <h2 className='location'>{data.location.name}</h2>
      <img className='time-icon' src={data.current.condition.icon} alt={data.current.condition.text} />
      <p>{data.current.temp_c}°C</p>
      <p>{data.current.condition.text}</p>
    </div>
  );
};

export default WeatherCard;