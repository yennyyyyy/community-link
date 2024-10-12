import { useNavigate } from "react-router-dom";
import App from "../App"



const Homepage = () => {

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


            <div onClick={()=>{toHome()}} class="texth"> Home </div>
            <div onClick={()=>{toRep()}} class="text"> E-Report </div>
            <div onClick={()=>{toFeed()}} class="text"> Feed </div>
            <div onClick={()=>{toMp()}} class="text"> Marketplace </div>
            <div onClick={()=>{toAbout()}} class="text"> About Us </div>
            <img onClick={()=>{toProfile()}} class="profile" src={process.env.PUBLIC_URL + '/profile icon.png'} alt="Your Image" />

            </div>
            
        </div>

        <div class="first">
        <img  class="h11" src={process.env.PUBLIC_URL + '/h1.png'} alt="Your Image" />
        </div>

        <div class="sec">
        <img  class="h2" src={process.env.PUBLIC_URL + '/h2.png'} alt="Your Image" />
        <img  class="h3" src={process.env.PUBLIC_URL + '/h3.png'} alt="Your Image" />
        <img  class="h4" src={process.env.PUBLIC_URL + '/h4.png'} alt="Your Image" />

       
        </div>
        

        </div>
        
        
        
        </>

    )
    
}

export default Homepage;