import './Header.css'
import React from 'react'
import githubImage from '../../resources/github_image_1.png'

const Header = ({setUnits}) => {

  const makeF = () => {
    setUnits('imperial')
  }

  const makeC = () => {
    setUnits('metric')
  }

  return (
    <div className="Header">
        <div className='header-left'>
            <h1 className='title'>Temp<span className='title-sub'>es</span>t</h1>
            <button onClick={makeF} className='unit-button' id='fahrenheit-button'>°F</button>
            <button onClick={makeC} className='unit-button' id='celcius-button'>°C</button>
        </div>
        <div className='header-right'>
          <a className= 'github-link' target='_blank' rel='noopener noreferrer' href="https://github.com/EvanSSwanson/myweather">
              <img src={githubImage} className= 'github-image'/>
          </a>
        </div>
    </div>
  )
}


export default Header;