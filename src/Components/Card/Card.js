import './Card.css';

const Card = ({city, region, temperature, pressure}) => {
  return (
    <div className='card' id={city}>  
          <h3>{city}</h3>
          <p>{region}</p>
          <p>{temperature}</p>
          <p>{pressure}</p>
    </div>
  )
}

export default Card;