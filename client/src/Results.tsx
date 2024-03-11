import "./Results.css";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  return (
    <div className="Results">
      <svg
        onClick={() => {
          navigate("/UploadImages");
        }}
        className="result_back_btn"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M20 11H7.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L7.414 13H20a1 1 0 0 0 0-2z" />
      </svg>
      <div className="result_head">Process & Analysis</div>
      <div className="Result_container">
        <div className="result_top">
          <div className="result_left">
            <img src="./images/img11.jpg" alt="" />
            <button
              onClick={() => {
                navigate("../MoreResults");
              }}
              className="result_see-more-button"
            >
              See More
            </button>
          </div>
          <div className="result_right">
            <img src="./images/img12.jpg" alt="" />
          </div>
        </div>
        <div className="result_bottom">
          <span className="result_suggestion-box">Congo!! baby is about to born</span>
          <span className="result_suggestion-box">Eat More Vegetables</span>
          <span className="result_suggestion-box">sleep at least 8 hours</span>
        </div>
      </div>
    </div>
  );
}

export default Results;
