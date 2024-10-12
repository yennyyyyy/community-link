import React, { useState } from 'react';
import App from "../App"


const Reset = () => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
    return(
        <>

    <div class="mn1">

        <div class="pa">
            <div class="lg">
                <img class="rstlg" src={process.env.PUBLIC_URL + '/Reset Logo.png'} alt=" " />
            </div>
        </div>

        <div>
            <div class="nnn">

                <h1 class="res">Reset Password</h1>
                
                <div class="passcontainer2">
                    <i class="fa-solid fa-lock" aria-hidden="true"></i>
                    <input class="pswd2" type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div class="passcontainer3">
                    <i class="fa-solid fa-lock" aria-hidden="true"></i>
                    <input class="pswd3" type="text" placeholder="Confirm Password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                </div>

                <input type="submit" class="respas" value="Reset Password" />
    
                <div>
                    <a class="backLog" href="/reset-password">Back to Log In</a>
                </div>
                
            </div>
        </div>

    </div>
    </>

    );
};

export default Reset;