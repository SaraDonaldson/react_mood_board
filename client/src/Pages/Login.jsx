import { React, useState } from 'react';
import LoginForm from '../Components/LoginSignUp/LoginForm.jsx'
import SignUpForm from '../Components/LoginSignUp/SignUpForm.jsx';
import "../Styles/Login.css";





function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [showCreateAccount, setShowCreateAccount]= useState(false);


  function handleNewAccount(){
    setShowLogin(false)
    setShowCreateAccount(true)
  }
  function handleShowLogin(){
    setShowLogin(true)
    setShowCreateAccount(false)
  }

  return (
    <div className='login-sign-up'>
  

        <div className='form-container'>
            
     <div className='login-form-toggle-container'>
   
   <button className={`login-toggle-btn ${showLogin && "active-toggle"} `} onClick= {()=> handleShowLogin()} >Login</button>
    
   <button className={`login-toggle-btn ${showCreateAccount && "active-toggle"} `} onClick= {()=> handleNewAccount()}>Create Account</button>

   
    </div> 
            { showLogin && 
          ( <div><LoginForm />  </div>)} 

          { showCreateAccount && 
          ( <div> <SignUpForm /> </div> )}
           
        </div>
       
    </div>
  )
}

export default Login