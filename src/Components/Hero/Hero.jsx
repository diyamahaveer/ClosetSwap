import React from 'react'
import './Hero.css'
import banner_two from '../Assets/banner_two.png'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className = "hero-latest-btn">
            <div></div>
        </div>
        <div className ="hero-right">
            <img src={banner_two} className ="hero-right2" alt = ""/>
      </div>
    </div>
  )
}

export default Hero
