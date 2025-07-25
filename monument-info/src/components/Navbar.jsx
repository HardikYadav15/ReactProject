import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-title">  Monument Info</div>
      <div className="ownerinfo"></div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="/explore">Explore</Link> 
        </li>
        <li>
          <Link to="/about">About</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
