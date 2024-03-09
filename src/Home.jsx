import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="image_container">
        <img className="content_pic" src="./images/content_pic.png" alt="" />
        <span className="about">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          quaerat natus corrupti in doloremque labore fugiat dignissimos, sunt
          sed esse.
        </span>
        <div className="button">
          <button
            onClick={(e) => navigate('/UploadImages')}
            className="get_started_button"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
