
import {useState,useRef} from "react";
 

export const useVideo = ()=>{
    const [startVideo,setStartVideo] = useState(false);
    const videoRef = useRef();


    const handlePlayVideo =()=>{
        if(startVideo===false){
            setStartVideo(true)
           videoRef.current.play()
        }else{
             setStartVideo(false)
             videoRef.current.pause()
        }
    }
    
    
    return{
            startVideo,
            handlePlayVideo,
            videoRef
    }
}