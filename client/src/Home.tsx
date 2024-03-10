import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="image_container">
        <img className="content_pic" src="./images/bg.png" alt="" />
        <div className="button">
        <button
          onClick={() => navigate("/UploadImages")}
          className="get_started_button"
        >
          Discover More
        </button>
      </div>
      </div>
      
    </div>
  );
}

export default Home;
