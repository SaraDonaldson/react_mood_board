import React, { useState } from "react";
import "./SelectedMoodboard.css";
import { Rnd } from "react-rnd";




const SelectedMoodboard = ({board1,backgroundStyle, handleSelectedImage, handleSelectedText, textPreviewStyle}) => {
  console.log("elements",board1);
  const mystyle = backgroundStyle;
  const [isSelected, setIsSelected]= useState(false);
  const [textIsSelected, setTextIsSelected]= useState(false);
  const [sizeState, setSizeState] = useState({ width: 200,
    height: 200})
 const [elementArray, setElementArray]= useState([])

//  [
//   {
//     elementId: index,
//     styles:{}
//   }
//  ]
  
/* ------- unselect
click new item - select text can be assigned false 
inside of handle select

text is selected assigned index on click otherwise false (useState)

On click off - trigger? overlay excluding items (stopPropogation)
or trigger set to area not including items set to select to false on click?
can't do this because item already has an on click
can I pass multiple functions in an onClick?
  trigger= {textIsSelected} 
  setTrigger={setTextIsSelected}
  e.stopPropogation();
  onClick={()=> setTrigger(false)}
*/

  function handleSelect(imageUrl){
    handleSelectedImage(imageUrl);
    setIsSelected(true);
  }

  function handleSelectText(textToEd, index,e){
    handleSelectedText({text:textToEd, key:index });
    setTextIsSelected(false);
    setTextIsSelected(index);

  
  }

  function handleUnselect(){
    //for onClick div 'display Area'
    // if area contains element
    // then ignore or "return"
    //else set TextSelect & ImgSelect to false
  }

  return (

    

    <div 
    className='displayArea'  
    style={mystyle}
    >

     {board1.map((element, index) => {
        if (element.type === "label") {
          return (

            <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
            key={index}
            onClick={() => {handleSelectText(`${element.value}`,index)}}
            >
   
            <p
              draggable= {false}
              style= {{
                position: "absolute",
                top: `${element.top}%`,
                left: `${element.left}%`,
                zIndex: 5,
                
                color: element.color? element.color : "black",
                fontFamily: element.fontFamily? element.fontFamily : "initial",

              }}
              className={textIsSelected === index ? "selected-text" : ""} 
            >
              {element.value}
            </p>
            </Rnd>
          );
        } else {
          return (
            <Rnd
            default={{
              x: 0,
              y: 0,
              width: 320,
              height: 200,
            }}
            key={index}
          >
              <div 
              className="mb-image" 
              onClick={() => {handleSelect(`${element.value}`)}}
              style={{
                minWidth:'100%',
                minHeight:'100%',
            }}
             >

            <img 
            draggable= {false}
            className={isSelected ? "selected-image" : ""} 
            alt= ""
            style={{
                top: `${element.top}%`,
                left: element.left+'%',
                zIndex: 1,
                minWidth:'100%',
                minHeight:'100%'        
              }}
              src={element.value}/>
              
              </div>
              </Rnd>
          );
        }
      })}
   
    </div>
  );
};

export default SelectedMoodboard;
