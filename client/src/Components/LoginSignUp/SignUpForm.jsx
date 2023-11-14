
import React, { useState } from "react";
import { Navigate, redirect, useNavigate } from 'react-router-dom';
import newUser from "../../Utils/createNewUser";


function SignUpForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const navigate = useNavigate();
    
    function validateForm() {
      return email.length > 0 && password.length > 0;
  
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      let userProcess = await newUser(firstName, secondName, email, password);
      if(userProcess){
       
        // save user id to local
        localStorage.setItem("userId", JSON.stringify(userProcess.userId));

        return navigate("/dashboard");
      }
      else{
        console.log("error creating new account")
      }

    }


  return (
    <div className='login-form'>
      <form onSubmit={handleSubmit}>
      <div className="form-field">
  <label>First Name</label>
  <input
    autoFocus
    type="text"
    value={firstName}
    onChange={(e) => setFirstName(e.target.value)}
  />
</div>

<div className="form-field">
  <label>Last Name</label>
  <input
    autoFocus
    type="text"
    value={secondName}
    onChange={(e) => setSecondName(e.target.value)}
  />
</div>

<div className="form-field">
  <label>Email</label>
  <input
    autoFocus
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</div>
<div className="form-field">
  <label>Password</label>
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>


<button className="form-button" type="submit" 
disabled={!validateForm()}
>Create Account
</button>

</form>
    </div>
  )
}

export default SignUpForm





   


