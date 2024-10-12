import { useState } from "react";
import App from "../App"
import { useNavigate } from "react-router-dom";
import Ereceive from "./Ereceive";



const Ereport = () => {

    const [showEreceive, setShowEreceive] = useState(false);


  const handleSubmit = () => {
    setShowEreceive(true);
};

    const navigate = useNavigate();

    const toHome =()=>{

        navigate("/homepage");
    }

    const toAbout =()=>{

        navigate("/about");
    }

    const toFeed =()=>{

        navigate("/feed");
    }

    const toMp =()=>{

        navigate("/market");
    }

    const toProfile =()=>{

      navigate("/profile");
  }

    const toRep =()=>{

        navigate("/report");
    }
    const toErep =()=>{

        navigate("/ereceive");
    }


    return(
        <>
        <div class="container">  
        <div class="purple">

          
            <div class="texts"> 

            <img onClick={()=>{toHome()}} class="plogo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Your Image" />


            <div onClick={()=>{toHome()}} class="texths"> Home </div>
            <div onClick={()=>{toRep()}} class="textmp"> E-Report </div>
            <div onClick={()=>{toFeed()}} class="text"> Feed </div>
            <div onClick={()=>{toMp()}} class="text"> Marketplace </div>
            <div onClick={()=>{toAbout()}} class="text"> About Us </div>
            <img onClick={()=>{toProfile()}} class="profile" src={process.env.PUBLIC_URL + '/profile icon.png'} alt="Your Image" />

            </div>
            </div>

        </div>
        <div class="whitecontainer">
                 
        <div class="reportbg">
        <div class="report">REPORT</div>
      </div>
      <input
        type="text"
        class="reportcon"
        placeholder="Input your concerns here..."
      ></input>
      <div>
        <button onClick={toErep} className="subtn">Submit</button>
    </div>
    </div>
    {showEreceive && <Ereceive />}
            
            
        </>
    )
       
}
export default Ereport;