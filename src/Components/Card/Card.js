import './Card.css';

const Card = ({city, region, temperature, pressure, future, time, dewpoint}) => {
  return (
    <div className='Card' id={city}> 
        <div className='panel-one'>
            <h3 className='city-name'>{city}</h3>
          <p className='region-name'>{region}</p>
        </div> 
          <p>{temperature}</p>
          <p>{pressure}</p>
          <p>{future}</p>
          <p>{time}</p>
          <p>{dewpoint}</p>
    </div>
  )
}

export default Card;