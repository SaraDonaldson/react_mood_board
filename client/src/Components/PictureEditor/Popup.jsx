import React from 'react';
import PhotoEditor from './PhotoEditor';
import "./popup.css";

export default function Popup({
  setTrigger,
  trigger,
  selectedImage,
  children
}) {
  return (trigger) ? (
    <div className='Overlay' onClick={()=> setTrigger(false)}>
    <div className='popup'>
      <div className='popup-inner'onClick={(e)=> {e.stopPropagation()}}>
        <button className='close-btn'onClick={()=> setTrigger(false)}>x</button>
        {children}
        <PhotoEditor>
        selectedImage={selectedImage}
        </PhotoEditor>
      </div>
    </div>
    </div>
  ) : "";
}
