import React from 'react'
import './Hero.css'
import banner_one from '../Assets/banner_one.jpg'

const Hero = () => {
  return (
    <div className = 'hero'>
        <div className = "hero-latest-btn">
            <div>Shop Now</div>
        </div>
        <div className ="hero-right">
            <img src={banner_one} className ="hero-right2" alt = ""/>
      </div>
    </div>
  )
}

export default Hero
