import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate("/homepage");
  }

  const toAbout = () => {
    navigate("/about");
  }

  const toFeed = () => {
    navigate("/feed");
  }

  const toMp = () => {
    navigate("/market");
  }

  const toProfile = () => {
    navigate("/profile");
  }

  const toRep = () => {
    navigate("/report");
  }

  const [productName, setProductName] = useState('');
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState([]);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    const newPost = {
      productName,
      comment,
    };

    setPosts([...posts, newPost]);
    setProductName('');
    setComment('');
  };

  return (
    <>
      <div class="container">  
        <div class="purple">

          
            <div class="texts"> 

            <img onClick={()=>{toHome()}} class="plogo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Your Image" />


            <div onClick={()=>{toHome()}} class="texths"> Home </div>
            <div onClick={()=>{toRep()}} class="text"> E-Report </div>
            <div onClick={()=>{toFeed()}} class="text"> Feed </div>
            <div onClick={()=>{toMp()}} class="textmp"> Marketplace </div>
            <div onClick={()=>{toAbout()}} class="text"> About Us </div>
            <img onClick={()=>{toProfile()}} class="profile" src={process.env.PUBLIC_URL + '/profile icon.png'} alt="Your Image" />

            </div>
            </div>

        </div>

        <div class="bodycontainer1">
          <div class="icon">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
            <div class="productbg">
              <input
                class="product"
                type="text"
                placeholder="Sell a product..."
                value={productName}
                onChange={handleProductNameChange}
              />
            </div>
          </div>

          <div class="icon2">
            <i class="fas fa-user-circle" aria-hidden="true"></i>
            <h1 class="maria">Maria Amelia F. Garcia</h1>
          </div>

          <div class="itembg">
            <div class="item">Selling this pre-loved clothing for only 300 pesos. Comment if interested.</div>
            <img src="/preloved.png" alt="Logo" className="image" />
          </div>

          <div class="commentbg">
            <input
              class="comment"
              type="text"
              placeholder="Leave a comment..."
              value={comment}
              onChange={handleCommentChange}
            />
          </div>
        </div>
      
    </>
  );
}

export default Marketplace;
