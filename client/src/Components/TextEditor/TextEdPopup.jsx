import "./textEdPopup.css"
import React from 'react'
import TextEdComponent from "./TextEdComponent";

export default function TextEdPopup({
    setTrigger,
    trigger,
    selectedText,
    children,
    textPreviewStylecb
  }) 
  {

  
function closeTextEd (){
  setTrigger(false);
  
}

    return (trigger) ? (
        <div className='Overlay' onClick={()=> setTrigger(false)}>
        <div className='text-ed-popup'>
          <div className='text-ed-popup-inner'onClick={(e)=> {e.stopPropagation()}}>
            <button className='close-btn'onClick={()=> setTrigger(false)}>x</button>
            {children}
            <TextEdComponent
            textPreviewStylecb={textPreviewStylecb}
            selectedText={selectedText}
            ></TextEdComponent>
        
          </div>
        </div>
        </div>
      ) : "";
    }


    