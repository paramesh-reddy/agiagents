import React from "react";
import "./Home.css";
import Winners from "../../layout2/winners/Winners";
import Navbar from "../../layout2/navbar2/Navbar2";
import Question from "../../layout2/questions/Question";
import Join from "../../layout2/join/Join";
import Judge from "../../layout2/judging/Judge";
import img1 from "../../Assets/hack1.jpg";
import img2 from "../../Assets/hack2.png";
import img3 from "../../Assets/hack3.png";
import backgroundImage from '../../Assets/buildathon2.webp'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>
          <span className="colored"> AI Agent</span> Championship 2024
        </h1>
        <p>Build AI agents in 5 mins, Sept 20th - Oct 15th</p>
      </header>

      <div
        className="container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        backgroundPositionX:'50%',
        alignItems:'center',
        }}
      >
        <div className="steps">
          <div className="step">
            <h2>01</h2>
            <h3>Build with API Agents</h3>
            <p>Build AI agents with the API after watching the demo.</p>
          </div>

          <div className="step">
            <h2>02</h2>
            <h3>Submit your project</h3>
            <p>Turn your creative AI ideas into reality and win big.</p>
          </div>

          <div className="step">
            <h2>03</h2>
            <h3>Win exciting prizes</h3>
            <p>
              With $2000 in prizes, this is the ultimate challenge for
              developers.
            </p>
          </div>
        </div>
        <div className="partners">
          <h3>Partners</h3>
          <div>
            <img className="pics" src={img1} alt="img" />
            <img className="pics" src={img2} alt="img" />
            <img className="pics" src={img3} alt="img" />
          </div>
          <div className="cta-buttons1">
            <a href="#submit" className="submit-btn1">
              Submit your project <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#register" className="register-btn1">
              Register on GogleDoc <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
      <Winners />
      <Join />
      <Judge />
      <Question />
    </div>
  );
};

export default MainPage;
