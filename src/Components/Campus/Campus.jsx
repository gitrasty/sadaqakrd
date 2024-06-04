import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery_1.jpg'
import gallery2 from '../../assets/gallery_2.jpg'
import gallery3 from '../../assets/gallery_3.jpg'
import gallery4 from '../../assets/gallery_4.jpg'
import gallery5 from '../../assets/gallery_5.jpg'
import white_arrow from '../../assets/right-arrow.png'

import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'


import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";


const Campus = () => {

  const slider = React.useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 15;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className='campus'>

      {/* <FaArrowLeftLong className='back-btn' onClick={slideBackward} />

      <FaArrowRight className='next-btn' onClick={slideForward} />




      <div className="slider">

        <ul ref={slider}>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={gallery1} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={gallery2} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={gallery3} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={gallery4} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={gallery5} alt="" />

              </div>
            </div>
          </li> */}

          {/*  */}

          {/* <li>
            <div className="slide">
              <div className="user-info">
              <img src={program_1} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={program_2} alt="" />

              </div>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
              <img src={program_3} alt="" />

              </div>
            </div>
          </li> */}

<div className="gallery">

          <img src={gallery2} alt="" />
          <img src={gallery3} alt="" />
          <img src={gallery4} alt="" />
          <img src={gallery5} alt="" />
       

        {/* </ul> */}



      </div>


      <button className='btn dark-btn'>وێنەی زیاتر
        <FaArrowRight className='icon-right' />
        {/* <img className='img-btn' src={white_arrow} alt="" /> */}
      </button>
    </div>
  )
}

export default Campus
