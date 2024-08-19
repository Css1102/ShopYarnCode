import React from 'react'
import { useEffect } from 'react'
import './Hero.css'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_image from '../../assets/hero_image.png'
const Hero = () => {
  function moveLatest(){
  window.scrollY(1200)
 }
  return (
    <div className="hero">
    <div className="hero-left">
    <h2>NEW ARRIVALS ONLY</h2>
     <div>
    <div className='hero-hand-icon'>
    <p>EXCLUSIVE COLLECTIONS FOR EVERYONE</p>
    </div>
     </div>
     <div className="hero-latest-btn">
   <div>
   <button onClick={moveLatest}>Latest Collection</button>
   </div>
    <img src={arrow_icon} height='100px' width='100px' alt="" />
     </div>
    </div>
    <div className="hero-right">
    <img src={hero_image} height='100px' width='20px' alt="" />
    </div>
    </div>
  )
}

export default Hero