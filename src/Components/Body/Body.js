import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../resources/startingData'
import cities from '../../resources/cities'

const Body = () => {

    const [info, setInfo] = useState([
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
        {'weather': example[0], 'forecast': undefined},
    ])

    const getData = (city, keyword, i) => {
        fetch(`https://api.openweathermap.org/data/2.5/${keyword}?q=${city}&appid=574c152960d1d19cafbfb4462369cf51&units=imperial`)
            .then(response => {
                return response.json()
            })
            // .then(data => setInfo(info => [...info, data])
            .then(data => {
                // data.checker = i
                setInfo([...info, info[i].weather = data])
            })
            .catch(error => {
                console.log(error)
      })
      }

      useEffect(() => {
        for (let i = 0; i < cities.length; i++) {
                getData(cities[i], 'weather', i)
            // else {
            //     setTimeout(() => {
            //         setInfo(info.sort((a, b) => a.checker - b.checker))
            //         console.log(info)
            //       }, "1000")
            // }
        }
        // cities.forEach(city => getData(city, 'weather'))
        // cities.forEach(city => getData(city, 'forecast'))
      }, []);

      useEffect(() => {
        console.log(info)
        console.log('hi')
      }, [info]);

  return (
    
    <div className='Body'>
        {info.filter(obj => obj.weather.base === 'stations').map((datum) => {
            return (
                <Card 
                city={datum.weather.name}
                region={datum.weather.sys.country}
                temperature={datum.weather.main.temp}
                pressure={datum.weather.main.pressure}
                />
            );
        })}
    </div>
  )
}

export default Body;