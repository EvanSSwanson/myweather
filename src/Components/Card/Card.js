import './Card.css';
import React from 'react'
import { useCollapse } from 'react-collapsed';
import { giveDate, giveDewPoint, giveDirection } from '../../resources/funcs'

const Card = ({current, forecast, units, marker, speed}) => {

  function Collapsible() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className='collapse-header' {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="collapse-content">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
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
          {/* <button className='button' id='forecast-button'>forecast</button> */}
          <Collapsible/>
        </div>
    </div>
  )
}

export default Card;