import React, { useState, useEffect } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export default function BgColorPicker({handleBgColPick}) {
  const [color, setColor] = useColor()
  const [newCol, setNewCol]= useState('')

  useEffect(() => {
    handleNewCol(color);
  }, [color])
  
  function handleNewCol(color){
    let colR= color.rgb.r;
    let colG = color.rgb.g;
    let colB = color.rgb.b;
    setNewCol(`rgb(${colR}, ${colG}, ${colB})`) ;
    console.log(newCol)
    handleBgColPick(newCol);
  }

  return (
    <div>
       <h3>Choose background Colour</h3>
       <div className='color-picker'
            style={{backgroundColor: newCol }}>
        <ColorPicker
                   width={360} 
                   height={190} 
                   color={color} 
                   onChange={setColor} hideHSV hideHEX />
        </div>
    </div>
  )
}
