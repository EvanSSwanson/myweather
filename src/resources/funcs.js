
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
    return hours + ':' + minutes.substr(-2) + ampm
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

  export { giveDate, giveDewPoint, giveDirection }