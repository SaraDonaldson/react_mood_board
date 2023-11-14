

export default async function addMoodboard (name, elements) {
    console.log(name, elements)
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, elements }),
    };
    try {
      let response = await fetch("/moodboards", options);
      if (response.ok) {
        let mbResponse = await response.json();
        // await getAllMoodboard();
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };
