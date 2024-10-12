import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Forgotpassword() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendClick = () => {
    console.log('Sending password reset email to:', email);
  };

  return (
    <div class="forgot-password-container">
        <div class="forpaspurple">
            <div class="forlogo">
                <img class="forpaslogo" src="/logo1.png" alt="Logo"/>  
            </div>
        </div>

        <div className="forgot-password-form">
            <h1 class="fll">Forgot Password?</h1>  
         <div class="email2"> 
         <i class="fa-solid fa-envelope" aria-hidden="true"></i>
         <input class="email1" type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange}/>
          </div>   
        
        <p><button onClick={handleSendClick} class="btnfp">Send</button></p>
        <div className="login-signup-links">
        <p><Link class="lsu" to="/comlink/create">Sign up</Link>    |    <Link class="lli" to="/comlink/login">Log in</Link></p>
        </div>
        </div>
    </div>
    
  );
}

export default Forgotpassword;