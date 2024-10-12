import { useNavigate } from "react-router-dom";
import App from "../App"


const About = () => {

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
    
    return (

        <>
        <div class="container">  
        <div class="purple">

          
        <div class="texts"> 

        <img onClick={()=>{toHome()}} class="plogo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Your Image" />


        <div onClick={()=>{toHome()}} class="texths"> Home </div>
        <div onClick={()=>{toRep()}} class="text"> E-Report </div>
        <div onClick={()=>{toFeed()}} class="text"> Feed </div>
        <div onClick={()=>{toMp()}} class="text"> Marketplace </div>
        <div onClick={()=>{toAbout()}} class="textmp"> About Us </div>
        <img onClick={()=>{toProfile()}} class="profile" src={process.env.PUBLIC_URL + '/profile icon.png'} alt="Your Image" />

        </div>
            
        </div>

        <div class="first">
        <img  class="about" src={process.env.PUBLIC_URL + '/aboout.png'} alt="Your Image" />

        </div>
        

        </div>
        
        
        
        </>

    )
    
}

export default About;