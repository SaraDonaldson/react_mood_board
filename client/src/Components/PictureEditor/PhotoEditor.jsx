import "./PhotoEditor.css";
import { useState, useEffect } from "react";
import Slider from "./Slider";

export default function PhotoEditor({selectedImage, children}) {
    let [brightnessIsActive, setBrightnessIsActive] =useState(false);
    let [hueIsActive, setHueIsActive] =useState(false);
    let [saturationIsActive, setSaturationIsActive] =useState(false);
    let [contrastIsActive, setContrastIsActive] =useState(false);
    let [rotateIsActive, setRotateIsActive] =useState(false);
    let [frameIsActive, setFrameIsActive] =useState(false);
    let [imageToEdit, setImageToEdit] = useState(children[1]);

    useEffect(() => {
        setImageToEdit(children[1])
      }, [children[1]])

    function resetMenu(){
        setBrightnessIsActive(false);
        setHueIsActive(false);
        setSaturationIsActive(false);
        setContrastIsActive(false);
        setRotateIsActive(false);
    }

    function handlePhEdMenu(editType){
        resetMenu();
        if(editType === "brightness"){
            setBrightnessIsActive(true);
        
        
        }else if(editType === "hue"){
            setHueIsActive(true);
      
        
         }else if(editType === "saturation"){
            setSaturationIsActive(true);
    
       
        }else if (editType === "contrast") {
            setContrastIsActive(true);
       
        }else if (editType === "rotate") {
        setRotateIsActive(true);
   
    } else if (editType === "frame") {
        setFrameIsActive(true);
   
    }
    }
    
    function handlePhEdSave (){

    }

    return (
        <div className="ph-ed-container">
            <div className="main-image"> 
             <img src = {imageToEdit} alt=""/>
            </div>
                <div className="ph-ed-sidebar">
                <button className= {`${brightnessIsActive ? 'active': " "}`} onClick={() => {handlePhEdMenu("brightness")}}>Brightness</button>
                <button className={`${hueIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("hue")}}>Hue</button>
                <button className= {`${saturationIsActive ? 'active': " "}`} onClick={() => {handlePhEdMenu("saturation")}}>Saturation</button>
                <button  className={`${contrastIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("contrast")}}>Contrast</button>
                <button  className={`${rotateIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("rotate")}}>Rotate</button>
                <button  className={`${frameIsActive ? 'active': " "}`}  onClick={() => {handlePhEdMenu("frame")}}>Frames</button>
                <button  className="save-btn" type="button" onClick={() => {handlePhEdSave()}}>Save</button> 
                </div>

                <Slider/>
        </div>
    )
}