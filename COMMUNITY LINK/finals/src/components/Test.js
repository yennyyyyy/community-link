import { useParams,useNavigate } from "react-router-dom";
import App from "../App"



const Test = (props) => {
    const {username} = useParams();
    const navigate = useNavigate();

    const log =()=>{

        navigate("/about");
    }
    



    return (

        <>
        <h1> HI {username} </h1>
        <button onClick={()=>{log()}}> CLICK TO NAVIGATE </button>
        
        
        </>

    )
    
}

export default Test;