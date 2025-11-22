import './Videoplayer.css'
import video from '../../assets/college-video.mp4'
import { useRef } from 'react';

const Videoplayer = ({playState,setPlaystate}) => {

    const player = useRef(null);

    const closeplayer = (e)=>{  // this feature close the window when the video is  
    // on when clicking anywhere in div

        if(e.target === player.current){
            setPlaystate(false);
        }

       

    }

  return (
    
    <div className={`video-player ${playState ? '' : 'video-player hide'} `} 
        ref={player} onClick={closeplayer}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer