import './Header.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
        <h1 className='title'>Tempestas<span className="title-sub">Mea</span></h1>
        <a target='_blank' rel='noopener noreferrer' href="https://github.com/EvanSSwanson/myweather">Github</a>
    </div>
  )
}


export default Header;