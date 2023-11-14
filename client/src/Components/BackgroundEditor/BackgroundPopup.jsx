import { useState } from 'react';
import BackgroundEditor from './BackgroundEditor';
import "./bgPopup.css";

export default function BackgroundPopup ({
  trigger, 
  setTrigger, 
  children, 
  }) {

    let [backgroundType, setBackgroundType] = useState();
    let [backgroundValue, setBackgroundValue] = useState();
    
    // function handleBgColPick(color){
    //   setBackgroundType("color")
    //   setBackgroundValue(color)
    // }
   

  return (trigger) ? (
    <div className='Overlay' onClick={()=> setTrigger(false)}>
    <div
     className='bg-popup'
   
     >
      <div className='bg-popup-inner'onClick={(e)=> {e.stopPropagation()}}>
        <button className='close-btn'onClick={()=> setTrigger(false)}>x</button>
        {children}
        <BackgroundEditor  
      
        >
       
           </BackgroundEditor>
      </div>
      </div>
    </div>
  ) : "";
}
