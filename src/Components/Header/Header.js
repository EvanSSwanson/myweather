import './Header.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import githubImage from '../../resources/github_image_1.png'

const Header = () => {
  return (
    <div className="Header">
        <div className='header-left'>
            <h1 className='title'>Tempestas<span className="title-sub">Mea</span></h1>
            <button className='fahrenheit-button'>°F</button>
            <button className='celcius-button'>°C</button>
        </div>
        <a target='_blank' rel='noopener noreferrer' href="https://github.com/EvanSSwanson/myweather">
            <img src={githubImage} className= 'github-image'/>
        </a>
    </div>
  )
}


export default Header;