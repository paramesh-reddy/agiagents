import React from "react";
import "./Form.css";
import axios from 'axios'
export default function SubmitPage() {
  const handleCreate = async () => {
    const emailInput = document.getElementById("email");

    const email = emailInput.value;

    try {
      const formData = new FormData();
      formData.append("email", email);

      const response = await axios.post(
        "https://otamat.com/api/Subscribe",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", response.data);
      if (response.data === "Success") {
        localStorage.setItem("user-name", email);

        window.open("index3.html");
      } else {
        alert("Please enter correct username or password!");
        return false;
      }
    } catch (error) {
      console.error("Error:", error);

      throw error;
    }
  };
  return (
    <div className="card" class="card" name="SubmitPage">
      <div>
        <div className="main-container">
          <div className="Submit">
            <h1>Submit AI agent or framework</h1>
            <p>
              {" "}
              free submition Reivew and approval with 24 hours.
              <br />
              Gain visibility,attract new users,and reciew valuable feedback by
              showcasing your AI Agent.
            </p>
            <div></div>
          </div>
        </div>
        <div className="input-container">
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              AI Agent Name*
            </label>

            <input
              className="container"
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Enter AI Agent Name"
              value="Enter AI Agent Name"
            />
          </div>
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              Created By*
            </label>

            <input
              className="container"
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Enter Creater name"
              value="Enter Creater name"
            />
          </div>
        </div>
        <div className="input-container2">
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              Website URL*
            </label>

            <input
              className="container"
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Enter Website URL or github Url"
              value="Enter Website URL or github Url"
            />
          </div>
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              Contact Email
            </label>
            <input
              className="container"
              type="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Enter Email"
              value="Enter Email"
            />
          </div>
        </div>
      </div>
      <div className="check-box1">
        <div>
          <label className="hi" for="Ai Agent">
            Access Model*
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label
              className="hi"
              class="form-check-label"
              for="flexRadioDefault1"
            >
              Open Source
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              className="hi"
              class="form-check-label"
              for="flexRadioDefault2"
            >
              Closed Source
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              className="hi"
              class="form-check-label"
              for="flexRadioDefault2"
            >
              Api
            </label>
          </div>
        </div>
        <br />
        <div>
          <label className="hi" for="Ai Agent">
            Pricing Model*
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Free
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Freemium
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault1"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Paid
            </label>
          </div>
        </div>
      </div>
      <div className="check-box2">
        <div>
          <label className="hi" for="Ai Agent">
            Category*
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Personal Assistant
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Data Analysis
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Research
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Digital Workers
            </label>
          </div>
        </div>
        <br />
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Productivity
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Customer Service
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Transition
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              AI Agents Builder
            </label>
          </div>
        </div>

        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Content Creation
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Coding
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              WorkFlow
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault2"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Other
            </label>
          </div>
        </div>
      </div>
      <div className="check-box3">
        <div>
          <label className="hi" for="Ai Agent">
            Industry*
          </label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Technology
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Education
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault2">
              Entertainment
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Human Resources
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Travel & Hospitality
            </label>
          </div>
        </div>
        <br />
        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Finanace
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              E-commerce
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Manufacturing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Energy & Utilities
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Agriculture
            </label>
          </div>
        </div>

        <div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Healthcare
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault1"
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Marketing
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Legal
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Real Estate
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault3"
              id="flexRadioDefault2"
              checked
            />
            <label class="form-check-label" for="flexRadioDefault3">
              Other
            </label>
          </div>
        </div>
      </div>

      <div className="tagline">
        <p>
          <label className="hi">Tagline*</label>
        </p>
        <textarea id="tagline" name="hi" rows="3" cols="95">
          This is used on your AI Agent card.
        </textarea>
      </div>

      <div>
        <label className="hi">Description*</label>
        <textarea id="discription" name="hi" rows="7" cols="95">
          This is used on your AI Agent card.
        </textarea>
      </div>

      <div>
        <label className="hi">Key Features</label>
        <textarea id="tagline" name="hi" rows="5" cols="95">
          This is used on your AI Agent card.
        </textarea>
      </div>

      <div>
        <label className="hi">Use Cases</label>
        <textarea id="tagline" name="hi" rows="4" cols="95">
          This is used on your AI Agent card.
        </textarea>
      </div>
      <div className="input-container">
        <div style={{ width: "20%" }}>
          <label className="hi" for="Ai Agent">
            AI Agent Logo
          </label>

          <input
            className="container"
            type="email"
            class="form-control"
            id="select image"
            placeholder="SELECT IMAGE"
            value="SELECT IMAGE"
          />
        </div>
        <div style={{ width: "20%" }}>
          <label className="hi" for="Ai Agent">
            {" "}
            AI Agent Screenshot
          </label>

          <input
            className="container"
            type="email"
            class="form-control"
            id="select image"
            placeholder="SELECT IMAGE"
            value="SELECT IMAGE"
          />
        </div>
      </div>
      <div className="input-container">
        <div style={{ width: "100%" }}>
          <label className="hi" for="Ai Agent">
            Video URL
          </label>

          <input
            className="container"
            type="email"
            class="form-control"
            id="Youtube"
            placeholder="Enter a YouTube or Vimeo URL."
            value="Enter a YouTube or Vimeo URL."
          />
        </div>
      </div>
      <button className={() => handleCreate()}>Submit AI Agent</button>
    </div>
  );
}
