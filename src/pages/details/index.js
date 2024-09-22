import React, { useEffect, useState } from "react";
import "./index.css"; // Import the CSS file for styling
import img1 from "../../Assets/icon1.png";
import { useNavigate } from "react-router-dom";
import PrepLoader from "../../components/prep-loader/loader";
import {
  FaUser,
  FaTag,
  FaIndustry,
  FaDollarSign,
  FaLock,
  FaCalendarAlt,
} from "react-icons/fa"; // Import icons
const DetailPage = () => {
  const [agent, setAgent] = useState(null);
  const navigate = useNavigate();
  // Extract the ID from the URL
  const getAgentIdFromURL = () => {
    const url = window.location.href;
    const id = url.split("?")[1]; // Split the URL at the '?' and get the part after it
    return id; // Return the ID directly
  };

  // Fetch agent details from the API
  useEffect(() => {
    const fetchAgentDetails = async () => {
      const agentId = getAgentIdFromURL();
      try {
        const response = await fetch(
          `http://54.253.162.126:4001/api/agents_detail/${agentId}`
        );
        const data = await response.json();
        setAgent(data?.agent);
      } catch (error) {
        console.error("Error fetching agent details:", error);
      }
    };

    fetchAgentDetails();
  }, []);
  console.log(agent);
  if (!agent) {
    return (
      <div
        style={{
          display: "display",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <PrepLoader />
      </div>
    ); // Show a loading state while fetching data
  }
  return (
    <div className="detail-container">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Directory
      </button>

      <div className="detail-header section-border">
        <img src={agent?.logo} alt={agent.tagline} className="agent-logo" />
        <div className="header-content">
          <h1>{agent?.name}</h1>
          <p className="agent-tagline"> {agent?.tagline}</p>
          <div className="tags">
            <span className="tag ">
              {" "}
              <i class="fas fa-headset"></i>Customer Service
            </span>
            <span className="tag industry">
              <i class="fas fa-laptop-code"></i> Technology
            </span>
            <span className="tag pricing">
              <i class="fas fa-tags"></i> Freemium
            </span>
            <span className="tag accessory">
              <i class="fas fa-lock"></i> Closed Source
            </span>
          </div>
          <button className="visit-website-button">
            <a
              href={agent.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fas fa-external-link-alt"></i>
              Visit Website
            </a>
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="detail-section section-border">
        <h3>
          <span class="description-label">Description:</span>
          <span class="agent-name">{agent?.name}</span>
        </h3>

        <p>{agent?.description}</p>
      </div>
      {/* tags Section
      <div className="detail-section section-border">
        <h2>Tags </h2>
        <p>{agent?.tag}</p>
      </div> */}

      {/* Key Features Section */}
      <div className="detail-section section-border">
        <h2>Key Features</h2>
        <ul className="star-list">
          {agent.key_features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Use Cases Section */}
      {/* <div className="detail-section section-border">
                <h2>Use Cases</h2>
                <ul className='tick-list'>
                    {agent.use_cases.map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                    ))}
                </ul>
            </div> */}
      {/*tagline Section */}
      <div className="detail-section section-border">
        <h2>Tagline </h2>
        <p>{agent.tagline}</p>
      </div>

      {/* AI Agent Details Section */}
      <div className="detail-section section-border">
        <h2>AI Agent Details</h2>
        <div className="agent-details">
          <div>
            <p>
              {" "}
              <FaUser className="icon" />
              <strong className="New">Created by:</strong>{" "}
              {agent?.details?.created_by}
            </p>
            <p>
              <FaTag className="icon" />{" "}
              <strong className="New">Category:</strong>{" "}
              {agent?.details?.category}
            </p>
            <p>
              <FaLock className="icon" />
              <strong className="New">Access:</strong> {agent?.details?.access}
            </p>
          </div>
          <div>
            <p>
              <FaIndustry className="icon" />
              <strong className="New">Industry:</strong>{" "}
              {agent?.details?.industry}
            </p>
            <p>
              {" "}
              <FaDollarSign className="icon" />
              <strong className="New">Pricing Model:</strong>{" "}
              {agent?.details?.pricing}
            </p>

            <p>
              <FaCalendarAlt className="icon" />
              <strong className="New">Date Created:</strong>
              {agent?.details?.date_added}
            </p>
          </div>{" "}
        </div>
      </div>

      {/* Preview Section */}
      {/* <div className="detail-section section-border">
                <h2>Preview</h2>
                <img
                    src={agent?.details?.preview_image || "https://via.placeholder.com/800x400"}
                    alt="Phonely AI Preview"
                    className="preview_image"
                    name="preview_image"
                />
            </div> */}

      {/* Demo Video Section */}
      <div className="detail-section section-border">
        <h2>DemoVideo</h2>
        <iframe
          className="demo"
          width="100%"
          height="500"
          name="demo_video"
          src= {agent?.demo_video || "https://www.youtube.com/embed/dQw4w9WgXcQ"} // Replace with actual video link
          title="Phonely AI Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailPage;
