import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Header from '../Header/Header'
import Body from '../Body/Body'
import example from '../../startingData'

const App = () => {
  
  return (
    <div className="App">
      <Header/>
      <Body/>
    </div>
  )
}

export default App;
