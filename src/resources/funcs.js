
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

  export { giveDate, giveDewPoint }