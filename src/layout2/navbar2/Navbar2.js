import React from "react";
import "./Navbar2.css";
import { Link } from "react-scroll";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate= useNavigate()

  return (
    <header className="Navbar">
      <div className="logo">lyzr</div>
      <nav>
        <ul className="nav-links">
          <Link to="prizes" smooth={true} duration={500}>
            prizes
          </Link>
          <li>
            <Link to="Join" smooth={true} duration={500}>
              challenge
            </Link>
          </li>
          <li>
            <Link to="Judging" smooth={true} duration={500}>
              Judging
            </Link>
          </li>
          <li>
            <Link to="Question" smooth={true} duration={500}>
              FAQ's
            </Link>
          </li>
          {/* <li>
            <a href="#leaderboard">Leaderboard</a>
          </li> */}
        </ul>
      </nav>
      <div className="cta-buttons1">
        <Link
          to="#"
          onClick={() => Navigate("/form")}
          smooth={true}
          duration={500}
          className="submit-btn"
        >
          Submit your project <i className="fas fa-arrow-right"></i>
        </Link>

        {/* <a
          href="#submit"
          className="submit-btn"
          onClick={() => navigate("/form")}
        >
          Submit your project <i className="fas fa-arrow-right"></i>
        </a> */}
        <a href="#register" className="register-btn">
          Register on GogleDoc <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
