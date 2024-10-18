import React from "react";
import "./Join.css";
import { Link } from "react-scroll";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Join = () => {
  const Navigate= useNavigate()
  return (
    <div className="inner" name='Join'>
      <h1 className="challenge">Join the Challenges!</h1>
      <div className="join">
        <div className="submitt2">
          <h3>Register to Participate</h3>
          <p>
            Build your AI agent with Lyzr’s Agent API and create real-world
            solutions for automation, communication, or any creative use case.
          </p>
          <button className="Project1" >
            Register on gogle doc <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="sub-project">
          <h3>Submit before 15th Oct</h3>
          <p>
            Get live updates, connect with other developers, ask questions, and
            stay informed throughout the competition.
          </p>
     <div className="submitt">
     <Link
          to="#"
          onClick={() => Navigate("/form")}
          smooth={true}
          duration={500}
         className="project2"
        >
          Submit your project <i className="fas fa-arrow-right"></i>
        </Link>
     </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
