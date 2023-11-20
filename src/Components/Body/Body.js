import './Body.css'
import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'
import cities from '../../resources/cities'

const Body = ({units}) => {

    const [info, setInfo] = useState(cities[1])
    const [marker, setMarker] = useState(' °F')
    const [speed, setSpeed] = useState(' mph')
    const getData = (city, keyword, i, measures) => {
        fetch(`https://api.openweathermap.org/data/2.5/${keyword}?q=${city}&appid=574c152960d1d19cafbfb4462369cf51&units=${measures}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfo([...info, info[i][keyword][measures] = data])
            })
            .catch(error => {
                console.log(error)
        })
      }

      useEffect(() => {
        for (let i = 0; i < cities[0].length; i++) {
                getData(cities[0][i], 'weather', i, 'imperial')
                getData(cities[0][i], 'forecast', i, 'imperial')
                getData(cities[0][i], 'weather', i, 'metric')
                getData(cities[0][i], 'forecast', i, 'metric')
        }
      }, []);

      useEffect(() => {
        console.log(info)
        console.log('hi')
        console.log(info[0].weather[units].dt)
      }, [info]);

      useEffect(() => {
        if (units === 'imperial') {
            setMarker('°F')
            setSpeed(' mph')
        } else if (units === 'metric') {
            setMarker('°C')
            setSpeed(' kph')
        }
      }, [units]);

  return (
    
    <div className='Body'>
        <div>

        </div>
        {info.filter(obj => obj.pos < 10).map((datum) => {
            return (
                <Card 
                current={datum.weather[units]}
                forecast={datum.forecast[units]}
                units={units}
                marker={marker}
                speed={speed}
                />
            );
        })}
    </div>
  )
}

export default Body;