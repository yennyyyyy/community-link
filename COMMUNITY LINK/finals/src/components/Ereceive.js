import React from 'react';
import { useNavigate } from "react-router-dom";


const Ereceive = () => {

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

        navigate("/feed");
    }

    const toProfile =()=>{

        navigate("/feed");
    }

    const toRep =()=>{

        navigate("/report");
    }


  return (
    <div class="container">
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



      <div class="Report">
        <div class="textt">Reports</div>
        <div class="dot">·····················································································</div>

        <div class="e-icon">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
          <div className="info">
          <div className="name">Camille Castro</div>
          <div className="email">camscastro@gmail.com</div>
        </div>
        </div>

        <div class="e-icon">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
          <div className="info">
          <div className="name">Cristensen Balestramon</div>
          <div className="email">tenbalestramon@gmail.com</div>
        </div>
        </div>
        
        <div class="e-icon">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
          <div className="info">
          <div className="name">Julliene Osias</div>
          <div className="email">osiasjulliene@gmail.com</div>
        </div>
        </div>

        <div class="e-icon">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
          <div className="info">
          <div className="name">Tyron Oliveros</div>
          <div className="email">jayoliveros@gmail.com</div>
        </div>
        </div>

      </div>

      <div class="e-report"> 
      <div class="e-icon">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
          <div className="info">
          <div className="name">Camille Castro</div>
          <div className="email">Block 7 Lot 10, Gemini Street</div>
          <div class="chatbg"> 
            <div class="chat">I worry about my safety because a man has been seen multiple times wandering about our neighborhood.</div>
          </div>

        </div>
        </div>
      
      </div>
      
    </div>
  );
};

export default Ereceive;
