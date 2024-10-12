import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const Update = (props) => {
  const navigate = useNavigate();

  const [updatePost,setUpdatepost] = useState({});


  const toHome = () => {
    navigate("/homepage");
  };

  const toAbout = () => {
    navigate("/about");
  };

  const toFeed = () => {
    navigate("/feed");
  };

  const toMp = () => {
    navigate("/market");
  };

  const toProfile = () => {
    navigate("/profile");
  };

  const toRep = () => {
    navigate("/report");
  };


 const [pcontent, setPContent] = useState("");
  const [updateContent, setUpdateCosntent] = useState("");
 

console.log("Component Props:", props);

  const { pid } = useParams();
  console.log("ID from useParams:", pid);

  useEffect(() => {
    console.log("ID from useParams in useEffect:", pid);
  
    if (pid) {
      axios.get(`http://localhost:8000/comlink/id/${pid}`)
        .then((res) => {
          console.log("Response Data:", res.data);
          setPContent(res.data.p_content);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [pid]);

  const uPostbtn = () => {
    console.log("ID:", pid);
  
    if (pcontent && typeof pcontent === 'string') {
      if (pcontent.trim() === '') {
        alert("Post content cannot be blank");
        return;
      }
  
      const updatedPost = {
        p_content: pcontent.trim(),
      };
  
      axios.put(`http://localhost:8000/comlink/update/${pid}`, updatedPost)
        .then((response) => {
          alert("Post successfully updated");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Post cannot be blank");
    }
  };
  
const deletePost=(pid)=>{
    const resp = window.confirm("Do you really want to delete?");
    if(resp)
    {
        axios.delete("http://localhost:8000/comlink/posts/delete/"+pid)
        .then((response)=>{
            console.log(response.data);
            alert("Post succesfully deleted");
            navigate("/feed ");
       
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  }
  

   

  return (
    <>
      <div className="container">
        <div className="purple">
          <div className="texts">
            <img
              onClick={toHome}
              className="plogo"
              src={process.env.PUBLIC_URL + "/logo.png"}
              alt="Your Image"
            />
            <div onClick={toHome} className="texths">
              Home
            </div>
            <div onClick={toRep} className="text">
              E-Report
            </div>
            <div onClick={toFeed} className="textmp">
              Feed
            </div>
            <div onClick={toMp} className="text">
              Marketplace
            </div>
            <div onClick={toAbout} className="text">
              About Us
            </div>
            <img
              onClick={toProfile}
              className="profile"
              src={process.env.PUBLIC_URL + "/profile icon.png"}
              alt="Your Image"
            />
          </div>
        </div>

        <div className="feed">
          <img
            className="purplep"
            src={process.env.PUBLIC_URL + "/purplep.png"}
            alt="Your Image"
          />
          <div>
            <label htmlFor="postInput"></label>
            <input
            
      id="postInput"
      className="post"
      type="text"
      placeholder="Edit your post..."
      value={pcontent}
      onChange={(e) => setPContent(e.target.value)}
    />

   
  </div>
  <button className="btnf" onClick={uPostbtn}>Update Post</button>
</div>
<div className="asdfg">
      <div className="abcd">
      <div className="rfeed">
  <div className="purple-box">
    <p className="rpost">{pcontent}</p>
  </div>
  <button onClick={() => deletePost(pid)}>DELETE</button>


        </div>
      </div>
    </div>


      </div>
    </>
  );
};

export default Update;