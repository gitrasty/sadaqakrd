import React, { useRef } from 'react'
import './VideoPlayer2.css'

import rebaz from '../../assets/rebaz.mp4'

const VideoPlayer2 = ({playState,setPlayState}) => {

    const player=useRef(null);

    const closePlayer=(e)=>{

        if(e.target===player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
        <video src={rebaz} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer2
