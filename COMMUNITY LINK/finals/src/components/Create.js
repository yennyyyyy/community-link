import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"; 

const Create = () => {
  const navigate = useNavigate();


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [village, setVillage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
    const handleSubmit = (e) => {
      e.preventDefault();

      
        const nAcc ={
            p_fname: firstName,
            p_lname: lastName,
            p_email: email,
            p_village: village,
            p_pass: password,
            p_cpass: confirmPassword
      
      
        }
        
      
     if (password !== confirmPassword) {
       return window.alert("The password doesn't match!");
     }else{    

     axios.post("http://localhost:8000/comlink/create", nAcc)
        .then((response)=>{
            console.log(response.data);
            alert("Successfully created an acoount");
            navigate("/comlink/login");
      
        })
        .catch((err)=>{
            console.log(err);
        })
      
   }
 }; 

 
    



    return (

        <>
        <div class="ccc">  
        <div class="purpleca">
          <img class="llogo" src={process.env.PUBLIC_URL + '/flogo.png'} alt="Your Image" />
        </div>

        <div class="create"> 
        <form onSubmit={handleSubmit}>
        <h1 class="creacc">Create Account</h1>
        <p>

        <div class="A"> 
        <div class="ww">
        <input 
          class="fn"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
         </div>
    
        <input
          class="ln"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        </div>



        </p>
        <div class="ABC"><p>
        <input
          class="el"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </p>
        <div class="C2"> <p>

        <div class="subvil">  
              <select class="vilsub" value={village} onChange={(e) => setVillage(e.target.value)} required>
                <optgroup label="Village/Subdivision">
                  <option hidden class="fp"> Village/Subdivision </option>
                  <option value="option1"> Camella Homes </option>
                  <option value="option2"> Ayala Land Inc. </option>
                  <option value="option3"> DMCI Homes </option>
                </optgroup>
              </select>
          </div>

        </p> </div> </div>
        
        <div class="A"> 
        <div class="ww">
        <p>
        <input
          class="pssw"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        </p>
        </div>
        <p>
        
        <input
          class="pssw2"
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        </p>
        </div>
       
        <button onClick={handleSubmit} type="submit" class="btn" >Create Account</button>
        <p class="linkli">Already have an account? <Link to="/comlink/login"> Log in</Link>
        </p>
       </form>
       </div> 
       </div>
        <div class="A">
        </div>
        </>
    )
}

export default Create;