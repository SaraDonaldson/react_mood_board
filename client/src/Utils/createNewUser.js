export default async function newUser (firstName, secondName, email, password) {
    
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({firstName, secondName, email, password}),
    };
    try {
      let response = await fetch("/userCredentials", options);
      if (response.ok) {
        return response.json();
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };
