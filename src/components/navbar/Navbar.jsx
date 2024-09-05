import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-heading">Ai  Agents Hub</h2>
        <div className="navbar-menu">
          <Link to="About" smooth={true} duration={500}>AI Agents News</Link>
          <Link to="Skills" smooth={true} duration={500}>Submit AI Agent</Link>
        </div>
      </div>
    </div>
  );
}
