import React from 'react'
import './Navbar.css' ;
import {Link} from 'react-scroll';

export default function Navbar() {
  return (
<div className="main-container">
    <div className="container">
 
                 
        
                <h2 className="heading">AI Agents Directory</h2>
        <div className="menu">
         
        <Link to="About" smooth={true} duration={500}>AI Agents News </Link>
            <Link to="Skills" smooth={true} duration={500}>Submit Ai Agent</Link>
        </div>
    </div>
</div>
  )
}
