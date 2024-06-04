import React, { useRef } from 'react'
import './VideoPlayer1.css'

import hawkar from '../../assets/hawkar.mp4'

const VideoPlayer1 = ({playState,setPlayState}) => {

    const player=useRef(null);

    const closePlayer=(e)=>{

        if(e.target===player.current){
            setPlayState(false)
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
        <video src={hawkar} autoPlay muted controls></video>
      
    </div>
  )
}

export default VideoPlayer1
