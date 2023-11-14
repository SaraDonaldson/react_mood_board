import React, { useState, useEffect } from "react";
import { randomIntFromInterval } from "../Utils/utils";
import "./AddElement.css";
import Popup from "../Components/PictureEditor/Popup.jsx";
import BackgroundPopup from "../Components/BackgroundEditor/BackgroundPopup.jsx";
import TextEdPopup from "../Components/TextEditor/TextEdPopup";

const elementTypes = {
  imageUrl: "imageUrl",
  label: "label",
};

const AddElement = ({
 selectedImage,
 selectedText,
 addElements,
 textPreviewStylecb
}) => {
  const [elementValue, setElementValue] = useState("");
  const [selectElementType, setSelect] = useState(elementTypes.imageUrl);
  const [buttonPopup, setButtonPopup]= useState (false)
  const [buttonBackgroundPopup, setButtonBackgroundPopup]= useState (false)
  const [buttonTextPopup, setButtonTextPopup]= useState (false)
  const [textEdIsDisabled, SetTextEdIsDisabled]= useState(true);
  const [phEdIsDisabled, SetPhEdIsDisabled]= useState(true);
  

 useEffect(() => {
  if (selectedText){
    SetTextEdIsDisabled(false)
  }
}, [selectedText])
 
useEffect(() => {
  if (selectedImage){
    SetPhEdIsDisabled(false)
  }
}, [selectedImage])
 




  const handleSelectElemType = (event) => {
    const value = event.target.value;
    setSelect((selectElementType) => value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    const positionTop = randomIntFromInterval(0, 75);
    const positionLeft = randomIntFromInterval(0, 75);
    addElements(
      elementValue,
      selectElementType,
      positionTop,
      positionLeft
    ); 
    console.log("elements", elementValue)
    setElementValue("");
  };

  const handleInput = (event) => {
    const value = event.target.value;
    setElementValue((elementValue) => value);
  };

;

  return (
    <div className="add-element">

      <div className="pop-up-menu">
      <div className="pop-up">
        <button 
            disabled={phEdIsDisabled}
            onClick={()=> setButtonPopup(true)}>Open Editor</button>
            <Popup trigger= {buttonPopup} 
            setTrigger={setButtonPopup}
            selectedImage={selectedImage}
            >
            <h3>photo edit pop up</h3>
            </Popup>
      </div>
     
      <div className="Text-pop-up">
        <button 
            disabled={textEdIsDisabled}  
            onClick={()=> setButtonTextPopup(true)}>Text Styles</button>
            <TextEdPopup trigger= {buttonTextPopup} 
            setTrigger={setButtonTextPopup}
            selectedText={selectedText}
            textPreviewStylecb={textPreviewStylecb}
            >
            <h3>Choose your text styles</h3>
            </TextEdPopup>
      </div>

      <div className="background-pop-up">
        <button onClick={()=> setButtonBackgroundPopup(true)}>Choose Background</button>
            <BackgroundPopup
             trigger= {buttonBackgroundPopup}
              setTrigger={setButtonBackgroundPopup}
              >
            </BackgroundPopup>
      </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="radioButtonAlign">
          <label className="formlabel2">
            <input
              className="radioButton"
              onChange={(event) => handleSelectElemType(event)}
              type="radio"
              checked={selectElementType === elementTypes.imageUrl}
              value={elementTypes.imageUrl}
            ></input>
            Image
          </label>
          <label className="formlabel2">
            <input
              className="radioButton"
              onChange={(event) => handleSelectElemType(event)}
              type="radio"
              checked={selectElementType === elementTypes.label}
              value={elementTypes.label}
            ></input>
            Label
          </label>
        </div>
        <input
          className="inputStyle"
          placeholder="Add element"
          type="text"
          value={elementValue}
          onChange={(event) => handleInput(event)}
        ></input>
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddElement;
