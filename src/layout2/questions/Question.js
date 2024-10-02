import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div>
      <h1 className="FAQ">FAQ's and key insights</h1>
      <div className="innercontainer7" name="Question">
        <div
          class="card"
          style={{
            borderRadius: "20px",
            borderBlockColor: "blue",
            boxShadow: " 0 4px 8px rgba(30, 27, 229, 0.351)",
            padding: "30px",
            width: "700px",
          }}
        >
          <div className="huhu">
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is the AI Agent Championship?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    It’s a global competition where developers are tasked with
                    building unique AI agents using Lyzr’s Agent API. Compete
                    for exciting prizes and showcase your innovation.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Who can participate?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    The AI Agent Championship is open to developers, software
                    engineers, AI enthusiasts, or anyone interested in building
                    AI projects, from all over the world.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What's the prize pool?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    1st Place wins an iPad pro 11 (M4), 2nd place gets a Bose
                    QuietComfort Ultra and 3rd Logitech MX Master 3S
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    How do I register?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Click the Register for AI Agent Championship button above to
                    sign up, and make sure to join our Discord for important
                    updates.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What do I need to build?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFIve"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    You’ll need to use Lyzr’s Agent API to build an AI agent.
                    The more creative and impactful your agent is, the better
                    your chances of winning.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How do I submit my project?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Submit your project via a GitHub repository link and share a
                    post on X (Twitter), tagging @Lyzr with a description of
                    your project.
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingEight">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="true"
                    aria-controls="collapseEight"
                  >
                    Can I work with a team?
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingEight"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    Yes, team participation is encouraged. Gather your friends
                    or coworkers, but make sure your team has no more than four
                    members.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingNine">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    When does the AI Agent Championship start?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    The challenge begins on 20th September 2024, so make sure to
                    register before then!
                  </div>
                </div>
              </div>
              {/* <div class="accordion-item">
                <h2 class="accordion-header" id="headingTen">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample1"
                >
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div> */}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="footers">
        <h1>Build something extraordinary! </h1>
        <p>
          Don't miss your chance to showcase your skills, win amazing prizes,
          and become a part of the AI <br />
          revolution.
        </p>
        <div className="buttonss">
          <a href="#submit" className="submit-btn2">
            Submit your project <i className="fas fa-arrow-right"></i>
          </a>
          <a href="#register" className="register-btn2">
            Register on GogleDoc <i className="fas fa-arrow-right"></i>
          </a>
        </div>

        <h4>
          Lyzr helps you build custom AI agents, from AI SDRs to AI Marketers,
          enabling powerful applications like chatbots, knowledge search &<br />{" "}
          workflow automation.
        </h4>
      </div>
    </div>
  );
};

export default Question;
