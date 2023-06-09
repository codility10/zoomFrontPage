import React from 'react'
import { AiOutlineAudioMuted } from 'react-icons/ai';
import './Videocam.css'
function VideoCam({img,name}) {
  return (
    
        <div className="image-container">
    <img src={img} alt="age" className="h-48 w-full object-cover md:h-full md:w-48" />
    <div className="overlay">
    <span className="text ">{name}</span>
      <AiOutlineAudioMuted className="icon bg-red-400"  />
      
    </div>
  
    </div>
  )
}

export default VideoCam 