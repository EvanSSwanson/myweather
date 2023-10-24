import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../resources/startingData'
import cities from '../../resources/cities'

const Body = () => {

    const [counter, setCounter] = useState(0)
    const [info, setInfo] = useState([])
    const [voila, setVoila] = useState([])
    // const [info, setInfo] = useState([
    //     {'Roscoe': {'weather': undefined, 'forecast': undefined}},
    //     {'Chicago': {'weather': undefined, 'forecast': undefined}},
    //     {'Rock%20Island': {'weather': undefined, 'forecast': undefined}},
    //     {'Escanaba': {'weather': undefined, 'forecast': undefined}},
    //     {'Montreal': {'weather': undefined, 'forecast': undefined}},
    //     {'Longmont': {'weather': undefined, 'forecast': undefined}},
    //     {'Liverpool': {'weather': undefined, 'forecast': undefined}},
    //     {'Buenos%20Aires': {'weather': undefined, 'forecast': undefined}},
    //     {'Tokyo': {'weather': undefined, 'forecast': undefined}},
    //     {'Melbourne,AU': {'weather': undefined, 'forecast': undefined}}
    // ])

    const getData = (city, keyword, i) => {
        fetch(`https://api.openweathermap.org/data/2.5/${keyword}?q=${city}&appid=574c152960d1d19cafbfb4462369cf51&units=imperial`)
            .then(response => {
                return response.json()
            })
            // .then(data => setInfo(info => [...info, data]))
            .then(data => {
                data.checker = i
                setInfo(info => [...info, data])
            })
            .catch(error => {
                console.log(error)
      })
      }

      const cleanData = (input) => {
        let grail = []
        for (let i = 0; i < cities.length; i++) {
            const piece = input.find(datum => datum.checker === i)
            grail.push(piece)
        }
        return grail
      }

      useEffect(() => {
        for (let i = 0; i < cities.length + 1; i++) {
            if (i < cities.length) {
                getData(cities[i], 'weather', i)
            } 
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