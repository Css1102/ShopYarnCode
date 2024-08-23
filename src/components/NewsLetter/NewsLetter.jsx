import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className="newsletter">
    <h1>SUBSCRIBE TO OUR NEWSLETTER WITH YOUR EMAIL</h1>
    <p>Stay updated with the recent fashion trends and outfits!!</p>
    <input type="email" placeholder='Enter your email'/>
    <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter