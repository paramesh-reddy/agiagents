import React from "react";
import "./Join.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Join = () => {
  return (
    <div className="inner" name='Join'>
      <h1 className="challenge">Join the Challenges!</h1>
      <div className="join">
        <div>
          <h3>Register to Participate</h3>
          <p>
            Build your AI agent with Lyzr’s Agent API and create real-world
            solutions for automation, communication, or any creative use case.
          </p>
          <button className="Project1">
            Register on gogle doc <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div>
          <h3>Submit before 15th Oct</h3>
          <p>
            Get live updates, connect with other developers, ask questions, and
            stay informed throughout the competition.
          </p>
          <button className="project2">Submit Your Project </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
