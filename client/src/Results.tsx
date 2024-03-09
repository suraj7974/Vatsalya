import "./Results.css";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  return (
    <>
      <div className="back-btn-div">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M20 11H7.414l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L7.414 13H20a1 1 0 0 0 0-2z" />
        </svg>
        <button
          onClick={() => {
            navigate("/UploadImages");
          }}
          className="back-btn"
        >
          Go Back
        </button></div>
      <div className="head">Results</div>
      <div className="Results">
        <div className="top">
          <div className="left">
            <img src="./images/anno.png" alt="" />
            <button onClick={() => { navigate('../MoreResults') }} className="see-more-button">See More</button>
          </div>
          <div className="right"><img src="./images/graph.png" alt="" /></div>
        </div>
        <div className="bottom">
          <span className="suggestion-box">Congo!! baby is about to born</span>
          <span className="suggestion-box">Eat More Vegetables</span>
          <span className="suggestion-box">sleep at least 8 hours</span>
        </div>
      </div>
    </>
  );
}

export default Results;
