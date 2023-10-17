import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../resources/startingData'
import cities from '../../resources/cities'

const Body = () => {

    const [info, setInfo] = useState([])

    const getData = (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=574c152960d1d19cafbfb4462369cf51&units=imperial`)
            .then(response => {
                return response.json()
            })
            .then(data => setInfo(info => [...info, data]))
            .catch(error => {
                console.log(error)
      })
      }

      useEffect(() => {
        cities.forEach(city => getData(city))
      }, []);

      useEffect(() => {
        console.log(info)
        console.log('hi')
      }, [info]);

  return (
    <div className='Body'>
        {info.map((datum) => {
            return (
                <Card 
                city={datum.name}
                region={datum.sys.country}
                temperature={datum.main.temp}
                pressure={datum.main.pressure}
                />
            );
        })}
    </div>
  )
}

export default Body;