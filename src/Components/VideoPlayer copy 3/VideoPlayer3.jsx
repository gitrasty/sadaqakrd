import React, { useRef } from 'react'
import './VideoPlayer3.css'

import eat from '../../assets/eat.mp4'

const VideoPlayer3 = ({playState,setPlayState}) => {

    const player=useRef(null);

    const closePlayer=(e)=>{

        if(e.target===player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
        <video src={eat} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer3
