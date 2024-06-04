import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'

import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play.png'

import rebaz from '../../assets/rebaz.jpeg'
import hawkar from '../../assets/hawkar.jpeg'
import eat from '../../assets/eat.jpeg'

const Programs = ({ setPlayState1 , setPlayState2 , setPlayState3 }) => {
    return (
        <div className='programs'>
            <div className="programs">


                <div className="video">
                    <img src={rebaz} className="about-img1" alt='' />
                    <img src={play_icon} className="play-icon1" alt='' onClick={() => {
                        setPlayState1(true)
                    }} />
                </div>



                {/* <img src={program_1} alt="" /> */}



            </div>
            <div className="programs">

            <div className="video">
                    <img src={hawkar} className="about-img1" alt='' />
                    <img src={play_icon} className="play-icon1" alt='' onClick={() => {
                        setPlayState2(true)
                    }} />
                </div>
                {/* <img src={program_2} alt="" /> */}

            </div> <div className="programs">

            <div className="video">
                    <img src={eat} className="about-img1" alt='' />
                    <img src={play_icon} className="play-icon1" alt='' onClick={() => {
                        setPlayState3(true)
                    }} />
                </div>
                {/* <img src={program_3} alt="" /> */}

            </div>
        </div>
    )
}

export default Programs
