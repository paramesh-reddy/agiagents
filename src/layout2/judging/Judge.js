import React from "react";
import "./Judge.css";
import img1 from "../../Assets/Judge1.jpeg";
import img2 from "../../Assets/Judge2.jpeg";

const judge = () => {
  return (
    <div className="judge-container" name='Judging'>
      <h1>Our judging criteria</h1>
      <div className="Judge">
        <div>
          <img className="image" src={img1} alt="img" />
          <h4>Application of Technology</h4>
          <p> How effectively Lyzr is integrated into the solution</p>
        </div>
        <div>
          <img className="image" src={img2} alt="img" />
          <h4>Presentation</h4>
          <p>The clarity and effectiveness of the project Presentation</p>
        </div>
        <div>
          <img className="image" src={img1} alt="img" />
          <h4>Impact</h4>
          <p> The potentio]al impact and practical value of the solution </p>
        </div>
      </div>
    </div>
  );
};

export default judge;
