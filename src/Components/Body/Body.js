import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import cities from '../../resources/cities'

const Body = ({units}) => {

    const [info, setInfo] = useState(cities[1])

    const getData = (city, keyword, i, measures) => {
        fetch(`https://api.openweathermap.org/data/2.5/${keyword}?q=${city}&appid=574c152960d1d19cafbfb4462369cf51&units=${measures}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setInfo([...info, info[i][keyword] = data])
            })
            .catch(error => {
                console.log(error)
        })
      }

      useEffect(() => {
        for (let i = 0; i < cities[0].length; i++) {
                getData(cities[0][i], 'weather', i, 'imperial')
                getData(cities[0][i], 'forecast', i, 'imperial')
        }
      }, []);

      useEffect(() => {
        for (let i = 0; i < cities[0].length; i++) {
            getData(cities[0][i], 'weather', i, units)
            getData(cities[0][i], 'forecast', i, units)
    }
      }, [units])

      useEffect(() => {
        console.log(info)
        console.log('hi')
      }, [info]);

  return (
    
    <div className='Body'>
        <div>

        </div>
        {info.filter(obj => obj.pos < 10).map((datum) => {
            return (
                <Card 
                city={datum.weather.name}
                region={datum.weather.sys.country}
                temperature={datum.weather.main.temp}
                pressure={datum.weather.main.pressure}
                future={datum.forecast.list[0].main.humidity}
                />
            );
        })}
    </div>
  )
}

export default Body;