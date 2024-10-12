import { get } from 'mongoose';
import axios from "axios";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";


const Login = () => {

  const {pemail, pcpass}=useParams();
  const [comLink,setComlink] = useState({});


  const navigate = useNavigate();

  

  const toHome =()=>{

      navigate("/homepage");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remember, setRemember] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRemember = () => {
    setRemember(!remember);
  };

  useEffect(()=>{
    axios.get("http://localhost:8000/comlink/login/"+pemail)
    .then((res)=>{
        console.log(res.data.comLink);
        setComlink(res.data.comLink);
    })
    .catch((err)=>{
        console.log(err)
    })
},[])


  const logIn = (event) => {
    event.preventDefault();
    console.log("pemail:", pemail);
    console.log("pcpass:", pcpass);
  
    axios.get(`http://localhost:8000/comlink/login/` +pemail, "/", +pcpass)
      .then((response) => {
        const comLink = response.data.comLink;
        console.log("Server Response:", comLink);
  
        if (comLink) {
          alert("Successfully logged in");
          navigate("/homepage");
        } else {
          console.log("Login unsuccessful: User not found");
          alert("Login unsuccessful: User not found");
        }
      })
      .catch((err) => {
        console.error("Error during login:", err);
        alert("Error during login. Check the console for details.");
      });
  };
  


  
  
  

  return (
    <div class="mn">
    <div class="pa">

      <div class="login-container">

        <h1 class="welcome">Welcome!</h1>

        <form onSubmit={logIn}>
          
          <div class="usercontainer">
            <i class="fa-solid fa-user" aria-hidden="true"></i>
            <input class="user" type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          
          <div class="passcontainer">
            <i class="fa-solid fa-lock" aria-hidden="true"></i>
            <input class="pswd" type={passwordVisible ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <i class={`fa-solid ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} onClick={togglePasswordVisibility}/>
          </div>

          <div class="subcontainer"> 
            <i class="fa-solid fa-location-dot" aria-hidden="true"></i> 
              <select class="Sub">

                <optgroup label="Village/Subdivision">
                  <option disabled selected hidden> Village/Subdivision </option>
                  <option value="option1"> Camella Homes </option>
                  <option value="option2"> Ayala Land Inc. </option>
                  <option value="option3"> DMCI Homes </option>
                </optgroup>

              </select>
          </div>

              <i class={`cbox`} onClick={toggleRemember}></i>

            <label class="Cb">
              <input type="checkbox" checked={remember} onChange={toggleRemember}/> Remember Password 
            </label>
          <button onClick={logIn} type="submit" class="btnlg" >Log In</button>

        </form>

          <a class="forpass" href="/forgot">Forgot Password?</a>

      </div>

    </div>

    <div class="Logoside">
        <img class="login" src={process.env.PUBLIC_URL + '/Login Logo.png'} alt=" " />
    </div>
    </div>
  );
};

export default Login;