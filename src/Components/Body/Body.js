import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../startingData'

const Body = () => {

    const [info, setInfo] = useState({})

    const getData = (city) => {
        const base = `http://api.weatherstack.com/current
        ? access_key= 1f0b4e209bdfa457de8f9f202e38d92a
        & query = New York`
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test&appid=574c152960d1d19cafbfb4462369cf51')
            .then(response => {
                return response.json()
                // const apiResponse = response.data
                // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`)
            })
            .then(data => setInfo(data))
            .catch(error => {
                console.log(error)
      })
      }

      useEffect(() => {
        getData('New York')
        console.log(info)
        console.log('hi')
      }, []);

  return (
    <div className='Body'>
        {example.map((datum) => {
            return (
                <Card 
                city={datum.location.name}
                region={datum.location.region}
                temperature={datum.current.temparature}
                pressure={datum.current.pressure}
                />
            );
        })}
    </div>
  )
}

export default Body;