import './Card.css';

const Card = ({city, region, temperature, feelslike, description, pressure, time, dewpoint, humidity, direction, windspeed, windgust, icon}) => {
  return (
    <div className='Card' id={city}> 
        <div className='panel-top'>
            <h3 className='city-name'>{city}</h3>
          <p className='region-name'>{region}</p>
          <p>{time}</p>
        </div>
        <div className='main-panel-container'>
          <div className='panel-left'>
            <img className='icon' src={icon} />
            <h2>{description}</h2>
          </div>
          <div className='panel-center'>
            <h1 className='temperature'>{temperature}</h1>
            <h2>feels like {feelslike}</h2>
          </div>
          <div className='panel-right'>
            <p className='dew-point'>dew point: {dewpoint}</p>
            <p className='humidity'>humidity: {humidity}</p>
            <p className='direction'>wind: {direction}</p>
            <p className='windspeed'>speed: {windspeed}</p>
            <p className='gust'>gust: {windgust}</p>
          </div>
        </div>
        <div className='panel-bottom'>
          <button className='button' id='forecast-button'>forecast</button>
        </div>
    </div>
  )
}

export default Card;