import React from 'react';
import './index.css'; // Import the CSS file for styling
import img1 from '../../Assets/icon1.png';

const DetailPage = () => {
    const agent = {
        id: 1,
        name: "Phonely AI",
        description: "Automated AI receptionist for businesses.",
        overview: "Phonely AI provides businesses with an AI-powered receptionist that handles phone calls, schedules appointments, and offers customer support. The platform integrates with existing scheduling software and CRM systems, offering real-time analytics and insights after each call. This helps businesses maintain continuous phone support and improves customer satisfaction by ensuring no call is missed.",
        key_features: [
            "Automated Conversational Phone Solutions",
            "AI Analytics and Call Summaries",
            "Real-time Task Execution",
            "CRM Integration",
            "Customizable Voice and Style"
        ],
        use_cases: [
            "Customer Support",
            "Appointment Scheduling",
            "Inquiry Handling",
            "Sales Insights",
            "Task Automation"
        ],
        details: {
            created_by: "Will Bodewes and Nisal Ranasinghe",
            category: "Customer Service",
            industry: "Technology",
            pricing_model: "Freemium",
            access: "Closed Source",
            date_added: "2024-08-04",
        },
        website_url: "http://www.phonelyai.com"
    };

    return (
        <div className="detail-container">
            <button className="back-button">← Back to Directory</button>

            <div className="detail-header section-border">
                <img src={img1} alt={agent.name} className="agent-logo" />
                <div className="header-content">
                    <h1>{agent.name}</h1>
                    <p className="agent-tagline">{agent.description}</p>
                    <div className="tags">
                        <span className="tag category">Customer Service</span>
                        <span className="tag industry">Technology</span>
                        <span className="tag pricing">Freemium</span>
                        <span className="tag accessory">Closed Source</span>
                    </div>
                    <button className="visit-website-button">
                        <a href={agent.website_url} target="_blank" rel="noopener noreferrer">
                            Visit Website
                        </a>
                    </button>
                </div>
            </div>

            {/* Overview Section */}
            <div className="detail-section section-border">
                <h2>Overview: {agent.name}</h2>
                <p>{agent.overview}</p>
            </div>

            {/* Key Features Section */}
            <div className="detail-section section-border">
                <h2>Key Features</h2>
                <ul>
                    {agent.key_features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            {/* Use Cases Section */}
            <div className="detail-section section-border">
                <h2>Use Cases</h2>
                <ul>
                    {agent.use_cases.map((useCase, index) => (
                        <li key={index}>{useCase}</li>
                    ))}
                </ul>
            </div>

            {/* AI Agent Details Section */}
            <div className="detail-section section-border">
                <h2>AI Agent Details</h2>
                <div className="agent-details">
                    <p><strong>Created by:</strong> {agent.details.created_by}</p>
                    <p><strong>Category:</strong> {agent.details.category}</p>
                    <p><strong>Industry:</strong> {agent.details.industry}</p>
                    <p><strong>Pricing Model:</strong> {agent.details.pricing_model}</p>
                    <p><strong>Access:</strong> {agent.details.access}</p>
                    <p><strong>Date Added:</strong> {new Date(agent.details.date_added).toLocaleDateString()}</p>
                </div>
            </div>

            {/* Preview Section */}
            <div className="detail-section section-border">
                <h2>Preview</h2>
                <img 
                    src="https://via.placeholder.com/800x400" 
                    alt="Phonely AI Preview" 
                    className="preview-image"
                />
            </div>

            {/* Demo Video Section */}
            <div className="detail-section section-border">
                <h2>Demo Video</h2>
                <iframe
                    className="demo-video"
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with the actual video link
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
