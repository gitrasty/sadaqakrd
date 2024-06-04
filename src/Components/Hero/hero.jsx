import React from 'react'
import './hero.css'

import right_arrow from '../../assets/right-arrow.png'

const hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
<h1>ئەنجامدانی خێر و حەوتم لە ئەفریقا</h1>
<p>خێر و حەوتمەکانتان بە ئێمە بسپێرن بە نرخێکی کەم و بە شێوازی شەرعی بۆتان ئەنجام ئەدەین لەئەفریقا </p>
<button className='btn'>زیاتر <img className='img-btn' src={right_arrow}/></button>
      </div>
    </div>
  )
}

export default hero
