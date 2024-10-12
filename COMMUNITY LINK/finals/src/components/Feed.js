import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

const Feed = () => {
  const navigate = useNavigate();

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

  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);


  const handlePost = (event) => {
    event.preventDefault();
    const newPost = {
      p_content: postContent,
    };


    if (postContent.trim() === '') {
      alert('Post content cannot be blank');
      return;
    }
    else{
    axios.post("http://localhost:8000/comlink/feed", newPost)
      .then((response) => {
        console.log(response.data.newPost);
        console.log(response.data.newPost._id);

        alert(response.data.status);

        setPosts([...posts, response.data.newPost]);

        setPostContent('');

      

      })
      .catch((err) => {
        console.error(err);
      });
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



const uP = (_id) => {
  console.log("one" +_id)
  navigate("/comlink/one/"+ _id);
};


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
            placeholder="Create a new post..."
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </div>
        <button className="btnf" onClick={(e) => handlePost(e)}>Post</button>
      </div>

      <div className="asdfg">
        <div className="abcd">
          {posts.map((post, index) => (
            <div key={index} className="rfeed">
              <div className="purple-box">
                <p className="rpost">{post.p_content}</p>
              </div>
              <p>
                <button onClick={() => deletePost(post._id)}>DELETE</button>
                <button onClick={() => uP(post._id)}>UPDATE</button>
              </p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Feed;