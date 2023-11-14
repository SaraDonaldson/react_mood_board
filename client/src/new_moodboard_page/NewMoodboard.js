import React, { useState,useEffect } from "react";
import AddElement from "./AddElement";
import SelectedMoodboard from "../all_moodboard_page/SelectedMoodboard";
import { randomIntFromInterval } from "../Utils/utils";
import { Link } from "react-router-dom";
import "./NewMoodboard.css";

const NewMoodboard = (props) => {
  let [elements, setElements] = useState([]);
  let [boardName, setBoardName] = useState("");
  let [selectedImage, setSelectedImage] = useState();
  let [selectedText, setSelectedText] = useState();
  let [updateText,  setUpdateText] = useState(false);
  let [textStyles, setTextStyles]= useState()
 
  const handleAddElements = (value, type, top, left) => {
    setElements([...elements, { type, value, top, left }]);
  };

  const randomizePosition = () => {
    const changedElements = elements.map((element) => {
      element.top = randomIntFromInterval(0, 75);
      element.left = randomIntFromInterval(0, 75);
      return element;
    });
    setElements(changedElements);
  };

  // useEffect(() => {
  //   if(updateText){
  //   ResetTextStyle(textStyles)
  //   }
  // }, [updateText,textStyles])
  

    // function ResetTextStyle(obj){
    //   let newObj={}
    //   if(obj.color){
    //     newObj.color=obj.color
    //     elements[obj.key].color=obj.color
    //   }
    //   if(obj.fontFamily){
    //     newObj.fontFamily=obj.fontFamily
    //     elements[obj.key].fontFamily=obj.fontFamily
    //   }
    // }

  function textPreviewStylecb(styles, key){
    setUpdateText(true);
    let obj={}
    if(styles.color){
      obj.color=styles.color
      elements[key].color=styles.color
    }
    if(styles.fontFamily){
      obj.fontFamily=styles.fontFamily
      elements[key].fontFamily=styles.fontFamily
    }
    // console.log("NewMoodboard callback define. Obj:", obj, "styles: ", styles);
    // setTextPreviewStyle(obj);
  }

  // function textPreviewStylecb(styles, key){
  //   setUpdateText(true);
  //   let obj = styles;
  //   obj.key=key;
  //   setTextStyles(obj);
    
  //   // console.log("NewMoodboard callback define. Obj:", obj, "styles: ", styles);
  //   // setTextPreviewStyle(obj);
  // }


  const handleSubmit = () => {
    props.addMoodboardCb(boardName, elements);
    setElements([]);
    setBoardName("");
  };

  const handleChangeBoardName = (event) => {
    setBoardName(event.target.value);
  };

  function handleSelectedImage(imageUrl){
    setSelectedImage(imageUrl);
  }
  function handleSelectedText(textToEdObj){
    setSelectedText(textToEdObj);
  }


  

  return (
    <div>
      <nav className="navbar">
        <Link className="navButton" to="/">
          Home
        </Link>
      </nav>

      <div className="container text-center">
        <h3>New Moodboard</h3>
        <div className="row">
          <div className="col-9">
            <SelectedMoodboard 
            board1={elements} 
            handleSelectedImage={handleSelectedImage}
            handleSelectedText={handleSelectedText}
            // textPreviewStyle ={textPreviewStyle}
            />
          </div>
          <div className="col-3">
            <AddElement 
            addElements={handleAddElements}
            selectedImage={selectedImage}
            selectedText={selectedText}
            textPreviewStylecb={textPreviewStylecb}
  
             />
            <div>
              <button
                className="changeButton"
                type="button"
                onClick={randomizePosition}
              >
               🧸
              </button>
            </div>
            <label className="formlabel3">
              <input
                className="inputStyle"
                placeholder="Moodboard name"
                type="text"
                value={boardName}
                onChange={handleChangeBoardName}
              ></input>
            </label>
            <button className="saveButton" type="button" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMoodboard;
