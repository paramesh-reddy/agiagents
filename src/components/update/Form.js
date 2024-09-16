import React, { useEffect, useState } from "react";
import "./Form.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
export default function UpdatePage() {
  const [formData, setFormData] = useState({
     tagline: "",
    likes: "",
     overview: "",
    key_features: "",
    use_cases: "",
    created_by: "",
    access: "",
    tags: "",
    preview_image: "",
    demo_video: "",
    email: "",
    logo: "",
    pricing: "",
    category: "",
    industry: "",
    description: "",
    name: "",
    website_url: "",
  });

  const navigate = useNavigate();
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreate = async (e) => {
    console.log("heyuu");
    e.preventDefault();

    const formBody = new FormData();
    Object.keys(formData).forEach((key) => {
      formBody.append(key, formData[key]);
    });

    try {
      const agentId = getAgentIdFromURL();
      const response = await axios.post(
        `http://18.143.174.1/api/agent/${agentId}/modify/`,
        formBody,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data);

      // if (response.data === "Success") {
      //   localStorage.setItem("user-email", formData.email);
      //   window.open("index3.html");
      // } else {
      //   alert("Please enter the correct data!");

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while Updating the form.");
    }
  };
  const getAgentIdFromURL = () => {
    const url = window.location.href;

    const id = url.split("/"); // Split the URL at the '?' and get the part after it
    console.log(id[4]);
    return id[4]; // Return the ID directly
  };

  useEffect(() => {
    const fetchAgentDetails = async () => {
      const agentId = getAgentIdFromURL();
      try {
        const response = await fetch(
          `http://18.143.174.1/api/agents_detail/${agentId}`
        );
        const data = await response.json();
        const finalData = {
          ...data?.agent,
          access: data?.details?.access,

          category: data?.agent?.details?.category,
          created_by: data?.agent?.details?.created_by,
          industry: data?.agent?.details?.industry,
          pricing: data?.agent?.details?.pricing,
        };
        setFormData(finalData);
      } catch (error) {
        console.error("Error fetching agent update:", error);
      }
    };

    fetchAgentDetails();
  }, []);
  console.log(formData);

  return (
    <div className="card" class="card" name="UpdatePage">
      <div>
        <div className="main-container">
          <div className="Submit">
            <h1>Update AI agent </h1>
            <p>
              {" "}
              Free submition Reivew and approval with 24 hours.
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
              type="text"
              class="form-control"
              name="name"
              value={formData?.name}
              id="floatingInputGrid"
              placeholder="Enter AI Agent Name"
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              Created By*
            </label>

            <input
              className="container"
              type="text"
              class="form-control"
              name="created_by"
              value={formData?.created_by}
              id="floatingInputGrid"
              onChange={handleChange}
              placeholder="Enter Creater name"
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
              type="text"
              class="form-control"
              value={formData?.website_url}
              name="website_url"
              onChange={handleChange}
              id="floatingInputGrid"
              placeholder="Enter Website URL or github Url"
            />
          </div>
          <div style={{ width: "50%" }}>
            <label className="hi" for="Ai Agent">
              Contact Email
            </label>
            <input
              className="container"
              type="email"
              value={formData?.email}
              onChange={handleChange}
              name="email"
              class="form-control"
              id="floatingInputGrid"
              placeholder="Enter Email"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="check-box1">
          <div>
            <label className="hi" htmlFor="accessModel">
              Access Model*
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="access"
                id="flexRadioDefault1"
                value="openSource"
                checked={formData?.access === "openSource"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Open Source
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="access"
                id="flexRadioDefault2"
                value="closedSource"
                checked={formData?.access === "closedSource"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Closed Source
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="access"
                id="flexRadioDefault3"
                value="api"
                checked={formData?.access === "api"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                API
              </label>
            </div>
          </div>
          <br />
          <div>
            <label className="hi" htmlFor="pricingModel">
              Pricing Model*
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pricing"
                id="flexRadioDefault4"
                value="free"
                checked={formData?.pricing === "free"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Free
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pricing"
                id="flexRadioDefault5"
                value="freemium"
                checked={formData?.pricing === "freemium"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Freemium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="pricing"
                id="flexRadioDefault6"
                value="paid"
                checked={formData?.pricing === "paid"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault6">
                Paid
              </label>
            </div>
          </div>
        </div>

        <div className="check-box2">
          <div>
            <label className="hi" htmlFor="category">
              Category*
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault7"
                value="personalAssistant"
                checked={formData?.category === "personalAssistant"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault7">
                Personal Assistant
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault8"
                value="dataAnalysis"
                checked={formData?.category === "dataAnalysis"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault8">
                Data Analysis
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault9"
                value="research"
                checked={formData?.category === "research"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault9">
                Research
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault10"
                value="digitalWorkers"
                checked={formData?.category === "digitalWorkers"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault10">
                Digital Workers
              </label>
            </div>
          </div>
          <br />
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault11"
                value="productivity"
                checked={formData?.category === "productivity"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault11">
                Productivity
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault12"
                value="customerService"
                checked={formData?.category === "customerService"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault12">
                Customer Service
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault13"
                value="transition"
                checked={formData?.category === "transition"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault13">
                Transition
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault14"
                value="aiAgentsBuilder"
                checked={formData?.category === "aiAgentsBuilder"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault14">
                AI Agents Builder
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault15"
                value="contentCreation"
                checked={formData?.category === "contentCreation"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault15">
                Content Creation
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault16"
                value="coding"
                checked={formData?.category === "coding"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault16">
                Coding
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault17"
                value="workFlow"
                checked={formData.category === "workFlow"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault17">
                WorkFlow
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="flexRadioDefault18"
                value="other"
                checked={formData?.category === "other"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault18">
                Other
              </label>
            </div>
          </div>
        </div>

        <div className="check-box3">
          <div>
            <label className="hi" htmlFor="industry">
              Industry*
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault19"
                value="fintech"
                checked={formData?.industry === "fintech"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault19">
                Fintech
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault20"
                value="healthcare"
                checked={formData?.industry === "healthcare"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault20">
                Healthcare
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault21"
                value="retail"
                checked={formData?.industry === "retail"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault21">
                Retail
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault22"
                value="education"
                checked={formData?.industry === "education"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault22">
                Education
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault23"
                value="transportation"
                checked={formData?.industry === "transportation"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault23">
                Transportation
              </label>
            </div>
          </div>
          <br />
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault24"
                value="government"
                checked={formData?.industry === "government"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault24">
                Government
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault25"
                value="Agriculture"
                checked={formData?.industry === "Agriculture"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault25">
                Agriculture
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault26"
                value="media"
                checked={formData?.industry === "media"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault26">
                Media
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault27"
                value="E-commerce"
                checked={formData?.industry === "E-commerce"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault27">
                E-commerce
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="industry"
                id="flexRadioDefault27"
                value="Legal"
                checked={formData?.industry === "Legal"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault27">
                Legal
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="tagline">
        <p>
          <label className="hi">Tagline*</label>
        </p>
        <textarea
          id="tagline"
          placeholder="This is used on your AI Agent card."
          rows="3"
          onChange={handleChange}
          name="tagline"
          value={formData?.tagline}
        ></textarea>
      </div>

      <div>
        <label className="hi">Description*</label>
        <textarea
          id="discription"
          placeholder="Briefly describe your AI Agent, the description is used on your AI Agent page ."
          name="description"
          rows="7"
          cols="90"
          onChange={handleChange}
          value={formData?.description}
        ></textarea>
      </div>

      <div>
        <label className="hi">Key Features</label>
        <textarea
          id="tagline"
          placeholder="Eneter 5 comma-seperated features of your AI Agent"
          name="key_features"
          rows="5"
          cols="90"
          onChange={handleChange}
          value={formData?.key_features}
        ></textarea>
      </div>

      {/* <div>
        <label className="hi">Use Cases</label>
        <textarea id="tagline" placeholder="Enter 5 comma-seperated use cases for your AI Agent " rows="4" cols="90" name="use_cases" onChange={handleChange}
        >
        </textarea>
      </div> */}

      <div className="input-container">
        <div style={{ width: "100%" }}>
          <label className="hi" for="Ai Agent">
            Tags
          </label>

          <textarea
            rows={3}
            className="container"
            type="email"
            name="tags"
            class="form-control"
            id="tagline"
            value={formData?.tags}
            placeholder="Enter comma-seperated tags."
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-container">
        <div style={{ width: "20%" }}>
          <label className="hi" for="Ai Agent">
            AI Agent Logo(URL)
          </label>

          <input
            className="container"
            type="text"
            value={formData?.logo}
            class="form-control"
            id="select image"
            placeholder="SelectFile"
            name="logo"
            onChange={handleChange}
          />
        </div>
        <div style={{ width: "20%" }}>
          <label className="hi" for="Ai Agent">
            {" "}
            AI Agent Screenshot(URl)
          </label>

          <input
            className="container"
            type="text"
            class="form-control"
            id="select image"
            value={formData?.preview_image}
            placeholder="Preview Image"
            name="preview_image"
            onChange={handleChange}
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
            name="demo_video"
            value={formData?.demo_video}
            placeholder="Enter a YouTube or Video URL."
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="Onclick" onClick={(e) => handleCreate(e)}>
        {" "}
        Update AI Agent
      </button>
    </div>
  );
}
