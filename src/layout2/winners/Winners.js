import React from "react";
import "./Winners.css";
const Winners = () => {
  return (
    <div className="container2" name='prizes'>
      <header className="header1">
        <p>What Do Winners Get?</p>
        <h1>Top 3 most voted Projects.</h1>
      </header>

      <div className="steps span">
        <div className="step1 ">
          <h2>2nd place</h2>

          <p>80000</p>
        </div>

        <div className="step1 ">
          <h2>1st place</h2>

          <p>100000</p>
        </div>

        <div className="step1  ">
          <h2>3rd place</h2>

          <p>50000</p>
        </div>
      </div>
    </div>
  );
};

export default Winners;
