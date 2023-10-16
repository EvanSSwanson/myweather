import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../startingData'

const Body = () => {

    const [info, setInfo] = useState({})

    // const getData2 = async () => {
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=574c152960d1d19cafbfb4462369cf51`;
    //     const response = await fetch(url).then(setInfo(data));
    //     if (response.status < 200 && response.status > 299) {
    //       throw response;
    //     }
    //     return response.json();
    //   };

    const getData = async (city) => {
        const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=574c152960d1d19cafbfb4462369cf51&units=imperial')
            .then(response => {
                return response.json()
                // const apiResponse = response.dat
                // console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`)
            })
            .then(data => setInfo(data))
            .catch(error => {
                console.log(error)
        throw resp
        return resp.json()
      })
      }

      useEffect(() => {
        getData()
        setTimeout(() => {console.log(info)}, 2000)
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