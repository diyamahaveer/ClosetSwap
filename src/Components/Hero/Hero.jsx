import React from 'react'
import './Hero.css'
import banner_three from '../Assets/banner_three.jpeg'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className = "hero-latest-btn">
            <div></div>
        </div>
        <div className ="hero-right">
            <img src={banner_three} className ="hero-right2" alt = ""/>
      </div>
    </div>
  )
}

export default Hero
