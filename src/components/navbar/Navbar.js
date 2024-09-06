import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate= useNavigate()
  
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-heading">AI Agents Hub </h2>
        <div className="navbar-menu">
          <Link to="About" smooth={true} duration={500}>AI Agents News</Link>
          <Link to="#" onClick={()=>navigate('/submit')} smooth={true} duration={500}>Submit AI Agent</Link>
        </div>
      </div>
    </div>
  );
}
