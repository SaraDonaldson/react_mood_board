
export default async function postElement (mbId, ) {
    
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, elements }),
    };
    try {
      let response = await fetch("/moodboards/mbId", options);
      if (response.ok) {
        let mbResponse = await response.json();
        // await getAllMoodboard();
        console.log("element posted");
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };