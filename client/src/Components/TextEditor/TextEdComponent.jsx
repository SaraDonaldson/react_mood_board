import "./TextEdComponent.css"
import { useState, useEffect } from "react";
import React from 'react'

export default function TextEdComponent({selectedText,textPreviewStylecb}) {
let [changeColor, setChangeColor] = useState();
let [changeFont, setChangeFont] = useState();
let [textToEdit, setTextToEdit] = useState(selectedText.text);

useEffect(() => {
    setTextToEdit(selectedText.text)
  }, [selectedText.text])

  useEffect(() => {
    let preview = {color: changeColor, fontFamily: changeFont};
    console.log("preview",preview);
    textPreviewStylecb(preview, selectedText.key)
  }, [changeColor, changeFont])

// function handleSave(){
//   let newTextStyle= `color: ${changeColor}, font-family ${changeFont}`;
//       handleTextStylecb(newTextStyle);
//   } 


function handleFont(e){
    let target= e.target.value;
    console.log(target);
    setChangeFont(target);
}

function handleColor(e){
    let target= e.target.value;
    console.log(target);
    setChangeColor(target);
}

    return (
        <div className="text-ed-container">
            <div className="preview-text"> 
             <p className="preview-text" style={{
                color: changeColor ? changeColor : 'black',
                fontFamily:  changeFont? changeFont : 'initial',
                }}> 
                {textToEdit ? textToEdit : 'text'}
                </p>
            </div>

                <div className="text-ed-sidebar">
                <label></label>
                <select 
                className="color-select"
                id="color" 
                name="color"
                onChange={(e)=>handleColor(e)}>
                <option className= "black" value="black">Choose colour</option>   
                <option className= "green" value="green">green</option>
                <option className= "red" value="red">red</option>
                <option className= "orange" value="orange">Orange</option>
                <option className= "gold" value="gold">gold</option>
                <option className= "purple" value="purple">purple</option>
                <option className= "blueviolet" value="blueviolet">blue-violet</option>
                <option className= "cornflowerblue" value="cornflowerblue">cornflower blue</option>
                <option className= "darkgoldenrod" value="darkgoldenrod">dark gold</option>
                <option className= "darkblue" value="darkblue">dark blue</option>
                <option className= "deeppink" value="deeppink">deep pink</option>
                <option className= "ghostwhite" value="ghostwhite">white</option>
                <option className= "lightseagreen" value="lightseagreen">seagreen</option>
                <option className= "peachpuff" value="peachpuff">peach puff</option>
                <option className= "saddlebrown" value="saddlebrown">saddle brown</option>
                <option className= "palevioletred" value="palevioletred">pale violet-red</option>
                <option className= "firebrick" value="firebrick">firebrick red</option>
                <option className= "mediumturquoise" value="mediumturquoise">turquoise</option>
                <option className= "plum" value="plum">plum</option>
                </select>

                <label></label>
                <select 
                className="font-selector"
                id="fonts" 
                name="fonts"
                onChange={(e)=>handleFont(e)}>
                <option className= "initial"  value="initial">Choose Font</option>   
                <option className= "monospace" value="monospace">monospace</option>
                <option className= "cursive" value="cursive">cursive</option>
                <option className= "Arial" value="Arial, Helvetica, sans-serif">Arial</option>
                <option className= "Impact" value="Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif">Impact</option>
                </select>
                {/* <button  className="save-btn" type="button" onClick={() => {handleSave()}}>Save</button>  */}
                </div>
               
             
        </div>
    )
}