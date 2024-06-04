import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import Hero from './Components/Hero/hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import VideoPlayer1 from './Components/VideoPlayer copy/VideoPlayer1'
import VideoPlayer2 from './Components/VideoPlayer copy 2/VideoPlayer2'
import VideoPlayer3 from './Components/VideoPlayer copy 3/VideoPlayer3'

const App = () => {

  const [playState, setPlayState] = React.useState(false)

  const [playState1, setPlayState1] = React.useState(false)
  const [playState2, setPlayState2] = React.useState(false)
  const [playState3, setPlayState3] = React.useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title='کارەکانمان' />
        <Programs setPlayState1={setPlayState2} setPlayState2={setPlayState1} setPlayState3={setPlayState3} />
        <About setPlayState={setPlayState} />

        <Title title='وێنەکان' />

        <Campus />

        <Title title='شایەتی کارەکانمان' />

        <Testimonials />

        <Title title='پەیوەندیمان پێوە بکە' />

        <Contact />

        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState}/>


      <VideoPlayer1 playState={playState1} setPlayState={setPlayState1}/>
      <VideoPlayer2 playState={playState2} setPlayState={setPlayState2}/>
      <VideoPlayer3 playState={playState3} setPlayState={setPlayState3}/>

      
    </div>
  )
}

export default App
