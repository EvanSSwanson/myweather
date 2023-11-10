import './Card.css';
import React from 'react'
import { useCollapse } from 'react-collapsed';

const Card = ({city, region, temperature, feelslike, description, pressure, time, dewpoint, humidity, direction, windspeed, icon}) => {

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
    <div className='Card' id={city}> 
        <div className='panel-top'>
            <h3 className='city-name'>{city}</h3>
          <p className='region-name'>{region}</p>
          <p>{time}</p>
        </div>
        <div className='main-panel-container'>
          <div className='panel-left'>
            <img className='icon' src={icon} />
            <h2 className='description'>{description}</h2>
          </div>
          <div className='panel-center'>
            <h1 className='temperature'>{temperature}</h1>
            <h2 className='feelslike'>feels like {feelslike}</h2>
          </div>
          <div className='panel-right'>
            <p className='dew-point'>dew point: {dewpoint}</p>
            <p className='humidity'>humidity: {humidity}</p>
            <p className='pressure'>pressure: {pressure}</p>
            <p className='wind'>wind: {windspeed} {direction}</p>
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