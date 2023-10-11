import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Card from '../Card/Card'
import example from '../../startingData'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Card city={example[0].location.name} region={example[0].location.region} temperature={example[0].current.temparature} pressure={example[0].current.pressure}/>
    </div>
  )
}

export default App;
