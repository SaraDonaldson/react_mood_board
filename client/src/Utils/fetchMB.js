 
 
 export default async function fetchMB (mbId){
       let id = mbId; 
    try {
          let response = await fetch(`/moodboards/${mbId}`);
          if (response.ok) {
            const mbResponse = await response.json();
            return mbResponse
          }
        } catch (err) {
          console.log(`Network error: ${err.message}`);
        }
      };


 