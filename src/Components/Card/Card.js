import './Card.css';
import React from 'react'
import { useCollapse } from 'react-collapsed';
import { giveDate, giveDewPoint, giveDirection, dealForecasts } from '../../resources/funcs'
import downArrow from '../../resources/arrow_down.png'
import upArrow from '../../resources/arrow_up.png'
import sunIcon from '../../resources/sun_icon.png'

const Card = ({current, forecast, units, marker, speed}) => {

  function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className='collapse-header' {...getToggleProps()}>
            {isExpanded ? <p className='header-hide'><img src={upArrow} className= 'up-arrow'/>hide</p> : <p className='header-forecast'><img src={downArrow} className= 'down-arrow'/>forecast</p>}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
              {dealForecasts(current, forecast, marker, units, speed)}
            </div>
        </div>
    </div>
    );
}

  return (
    <div className='Card' id={current.name}> 
        <div className='panel-top'>
          <div className='panel-top-name'>
            <h3 className='city-name'>{current.name}</h3>
            <h3 className='region-name'>{current.sys.country}</h3>
          </div>
          <div className='panel-top-sun'>
            <img className='sun-icon' src={sunIcon}/>
            <div className='sun-times'>
              <h3 className='sunrise'>{giveDate(current.sys.sunrise, current.timezone)}</h3>
              <h3 className='sunrise'>{giveDate(current.sys.sunset, current.timezone)}</h3>
            </div>
          </div>
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
            <h3 className='dew-point'>dew point: {giveDewPoint(current.main.temp, current.main.humidity, units)}{marker}</h3>
            <h3 className='humidity'>humidity: {current.main.humidity}%</h3>
            <h3 className='pressure'>pressure: {current.main.pressure} mb</h3>
            <h3 className='wind'>wind: {Math.round(current.wind.speed)}{speed} {giveDirection(current.wind.deg)}</h3>
          </div>
        </div>
        <div className='panel-bottom'>
          <Collapsible/>
        </div>
    </div>
  )
}

export default Card;