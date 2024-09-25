import React, { useState } from "react";
import "./Footer.css";
// import React, { useState } from 'react';

export default function Footer() {
    
    const [email, setEmail] = useState("");

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handleSubscribe = async () => {
      if (!email) {
        alert("Please enter an email address");
        return;
      }

      // Define the API endpoint
      const apiEndpoint = "http://13.215.228.42:4001/api/add_email"; // Replace with your API URL

      // Perform the API request
      try {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }), // Sending the email in the body
        });

        if (response.ok) {
          // Success handling
          alert("Subscribed successfully!");
          setEmail(""); // Clear the input field
        } else {
          // Error handling
          alert("Failed to subscribe. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
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
  };
