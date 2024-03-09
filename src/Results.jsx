import React from "react";
import "./Results.css";

function Results() {
  return (
    <>
      <div className="head">Results</div>
      <div className="Results">
        <div className="top">
          <div className="left">
            <img src="./images/anno.png" alt="" />
            <button className="see-more-button">See More</button>
          </div>
          <div className="right"></div>
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
