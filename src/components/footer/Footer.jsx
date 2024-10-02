import React, { useState } from "react";
import "./Footer.css";
import axios from 'axios'; // Import Axios
// import React, { useState } from 'react';

export default function Footer() {
 
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async () => {
    try {
      // Make the POST request using axios
      const response = await axios.post(
        `http://13.215.228.42:4001/api/add_email`,
        { email }
      );

      // Check if the request was successful
      if (response.status === 200) {
        setMessage("Subscription successful!");
     alert('succefully ')
      } else {
        setMessage("Failed to subscribe. Please try again.");
        
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };
  return (
    <div className="footer">
      <div>
        <h3>AI Agents Hub</h3>
        <p> Enter To World of Collected List Of 100+ Ai Agents</p>
      </div>
      <div>
        <div className="input-group mb-4">
          <input
            className="Email"
            type="text"
            id="Email"
            placeholder="Enter Your Email"
            aria-label="Enter Your Email"
            aria-describedby="basic-addon2"
            value={email} // Controlled input field
            onChange={handleEmailChange} // Update state on change
          />
          <span className="button" onClick={handleSubscribe}>
            Subscribe
          </span>
        </div>
      </div>
    </div>
  );
}
