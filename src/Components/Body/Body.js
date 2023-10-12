import './Body.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Card from '../Card/Card'
import example from '../../startingData'

const Body = () => {
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