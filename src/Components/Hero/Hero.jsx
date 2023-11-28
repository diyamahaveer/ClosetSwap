import React from 'react'
import './Hero.css'
import banner_one from '../Assets/banner_one.jpg'

const Hero = () => {
  return (
    <div className = 'hero'>
      <div classname ="hero-left">
        <h2>Shop Now</h2>
        <div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className = "hero-latest-btn">
            <div>Latest Collection</div>
        </div>
        </div>
        <div className ="hero-right">
            <img src={banner_one} alt = ""/>
      </div>
    </div>
  )
}

export default Hero
