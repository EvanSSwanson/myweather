import './Card.css';
import React from 'react'
import { useCollapse } from 'react-collapsed';
import { giveDate, giveDewPoint, giveDirection } from '../../resources/funcs'
import downArrow from '../../resources/arrow_down.png'
import upArrow from '../../resources/arrow_up.png'

const Card = ({current, forecast, units, marker, speed}) => {
  

  const dealForecasts = () => {
    const yeah = [0, 1, 2, 3, 4, 5]
    return yeah.map(fc => 
        <div className='forecast-card'>
          <div className='card-header'>
            <p className='forecast-time'>{giveDate(forecast.list[fc].dt, current.timezone)}</p>
          </div>
      </div>
    )
  }

  function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className='collapse-header' {...getToggleProps()}>
            {isExpanded ? <p className='header-hide'><img src={upArrow} className= 'up-arrow'/>hide</p> : <p className='header-forecast'><img src={downArrow} className= 'down-arrow'/>forecast</p>}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
              {dealForecasts()}
            </div>
        </div>
    </div>
    );
}

  return (
    <div className='Card' id={current.name}> 
        <div className='panel-top'>
            <h3 className='city-name'>{current.name}</h3>
          <p className='region-name'>{current.sys.country}</p>
          <p>{giveDate(current.dt, current.timezone)}</p>
        </div>
        <div className='main-panel-container'>
          <div className='panel-left'>
            <img className='icon' src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
            <h2 className='description'>{current.weather[0].description}</h2>
          </div>
          <div className='panel-center'>
            <h1 className='temperature'>{Math.round(current.main.temp)}{marker}</h1>
            <h2 className='feelslike'>feels like {Math.round(current.main.feels_like)}{marker}</h2>
          </div>
          <div className='panel-right'>
            <p className='dew-point'>dew point: {giveDewPoint(current.main.temp, current.main.humidity, units)}{marker}</p>
            <p className='humidity'>humidity: {current.main.humidity}%</p>
            <p className='pressure'>pressure: {current.main.pressure} mb</p>
            <p className='wind'>wind: {Math.round(current.wind.speed)}{speed} {giveDirection(current.wind.deg)}</p>
          </div>
        </div>
        <div className='panel-bottom'>
          <Collapsible/>
        </div>
    </div>
  )
}

export default Card;