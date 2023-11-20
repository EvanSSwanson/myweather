
const giveDate = (stamp, zone) => {
    const date = new Date((stamp + zone + 18000) * 1000)
    let ampm, hours
    if (date.getHours() >= 12) {
        ampm = ' PM'
    } else {
        ampm = ' AM'
    }
    if (date.getHours() > 12) {
        hours = date.getHours() - 12 
      } else {
        hours = date.getHours()
      }
    const minutes = "0" + date.getMinutes()
    return (hours + 1) + ':' + minutes.substr(-2) + ampm
  }

  const giveDewPoint = (temp, rh, units) => {
    if (units === 'metric') {
        return Math.round(temp - ((100.01 - rh)/5))
    } else if (units === 'imperial') {
        return Math.round(temp - ((9/25) * (100.01 - rh)))
    }
  }

  const giveDirection = (num) => {
    const val = Math.floor((num / 22.5) + 0.5)
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    return arr[(val % 16)]
  }

  const dealForecasts = (current, forecast, marker, units, speed) => {
    const cardCount = [0, 1, 2, 3, 4, 5]
    return cardCount.map(fc => 
        <div className='forecast-card'>
          <div className='card-header'>
            <h2 className='card-time'>{giveDate(forecast.list[fc].dt, current.timezone)}</h2>
          </div>
          <div className='card-main'>
            <div className='card-main-left'>
              <div className='card-icon-container'>
                <img className='card-icon' src={`https://openweathermap.org/img/wn/${forecast.list[fc].weather[0].icon}@2x.png`} />
              </div>
              <h3 className='card-description'>{forecast.list[fc].weather[0].description}</h3>
            </div>
            <div className='card-main-right'>
              <h2 className='card-temperature'>{Math.round(forecast.list[fc].main.temp)}{marker}</h2>
              <h3 className='card-feelslike'>feels like {Math.round(forecast.list[fc].main.feels_like)}{marker}</h3>
            </div>
          </div>
          <div className='card-bottom'>
            <div className='card-bottom-third'>
              <h3 className='card-info-title'>dew point:</h3>
              <h2 className='card-info-content'>{giveDewPoint(forecast.list[fc].main.temp, forecast.list[fc].main.humidity, units)}{marker}</h2>
            </div>
            <div className='card-bottom-third'>
              <h3 className='card-info-title'>humidity:</h3>
              <h2 className='card-info-content'>{forecast.list[fc].main.humidity}%</h2>
            </div>
            <div className='card-bottom-third'>
              <h3 className='card-info-title'>wind:</h3>
              <h2 className='card-info-content' id='card-info-wind'>{Math.round(forecast.list[fc].wind.speed)}{speed}</h2>
            </div>
          </div>
      </div>
    )
  }

  export { giveDate, giveDewPoint, giveDirection, dealForecasts }