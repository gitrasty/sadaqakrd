import React from 'react'
import './Testimonials.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'


const Testimonials = () => {

  const slider = React.useRef();
  let tx = 0;
  
  const slideForward = () => {
    if (tx > -50) {
      tx -= 15;
    }
   slider.current.style.transform= `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 15;
    }
   slider.current.style.transform= `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'>
      <FaArrowLeftLong className='back-btn' onClick={slideBackward} />

      <FaArrowRight className='next-btn' onClick={slideForward} />


      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />

              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />


              </div>
            </div>
          </li>   <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />


              </div>
            </div>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Testimonials
