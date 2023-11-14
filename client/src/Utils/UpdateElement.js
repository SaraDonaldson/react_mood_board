
export default async function UpdateElement(boardId, elementId, colToChange, newData){
    let id = boardId;
    let eid = elementId;
    let col = colToChange
    let data= newData
        try { 
          let response=  await fetch(`/moodboards/${id}/${eid}`, {
           method: "PUT",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify(`${col}:${data}`)
         });
         if (response.ok) {
           return true
         }  else {
           console.log(`Server error: ${response.status} ${response.statusText}`);
       }
     } catch (err) {
       console.log(`Server error: ${err.message}`);
     }
      };

    