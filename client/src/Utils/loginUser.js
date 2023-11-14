export default async function validateLogin (email, password){
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      };
 try {
       let response = await fetch(`/userCredentials/login`, options);
       if (response.ok) {
         return await response.json();

       }
     } catch (err) {
       console.log(`Network error: ${err.message}`);
     }
   };