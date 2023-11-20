import './App.css'
import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Body from '../Body/Body'

const App = () => {

  const [units, setUnits] = useState('imperial')
  
  return (
    <div className="App">
      <Header setUnits={setUnits}/>
      <Body units={units}/>
    </div>
  )
}

export default App;
