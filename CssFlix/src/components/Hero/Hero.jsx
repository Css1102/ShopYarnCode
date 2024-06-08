import React from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-left">
    <h2>NEW ARRIVALS ONLY</h2>
     <div>
    <div className='hero-hand-icon'>
    <p>EXCLUSIVE</p>
    <img src={hand_icon} alt="haath kaat diye bc" />
    </div>
    <p>COLLECTIONS</p>
    <p>FOR EVERYONE</p>
     </div>
     <div className="hero-latest-btn">
   <div>
   <button>Latest Collection</button>
   </div>
    <img src={arrow_icon} alt="" />
     </div>
    </div>
    <div className="hero-right">
    <img src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero