import './Card.css';

const Card = ({city, region, temperature, pressure}) => {
  return (
    <div className='Card' id={city}> 
        <div className='panel-one'>
            <h3 className='city-name'>{city}</h3>
          <p className='region-name'>{region}</p>
        </div> 
          <p>{temperature}</p>
          <p>{pressure}</p>
    </div>
  )
}

export default Card;