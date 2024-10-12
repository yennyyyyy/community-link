import { useNavigate } from "react-router-dom";
import App from "../App";

const Profile = () => {
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

    const toRep =()=>{

        navigate("/report");
    }
    const toProfile =()=>{
        navigate("/profile");
    }
    
    return (
        <>
            <div class="maincontainer">
            <div class="purple">

          
            <div class="texts"> 

            <img onClick={()=>{toHome()}} class="plogo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Your Image" />


            <div onClick={()=>{toHome()}} class="texths"> Home </div>
            <div onClick={()=>{toRep()}} class="text"> E-Report </div>
            <div onClick={()=>{toFeed()}} class="textmp"> Feed </div>
            <div onClick={()=>{toMp()}} class="text"> Marketplace </div>
            <div onClick={()=>{toAbout()}} class="text"> About Us </div>
            <img onClick={()=>{toProfile()}} class="profile" src={process.env.PUBLIC_URL + '/profile icon.png'} alt="Your Image" />

            </div>
            </div>

        
        <div class="div1"> 
        <img class="prologoblck" src="/prologoblck.png" alt="Logo"></img>
          <div class="info">
          <div className="name2">Camille Castro</div>
          <div className="address">Block 7 Lot 10, Kineme Street</div>
          </div>
        </div>
            <div class="bodycon">
                        <div class="report1">About this person</div>
                        <div class="report1">Emergency Contact:</div>
                        <div class="report1">Family:</div>
                </div>
        


            </div>
        </>
    )
}

export default Profile;