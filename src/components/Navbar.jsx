import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close menu when clicking a nav link (optional for better UX)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <span>Gowtham Insurance Services</span>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" exact="true" onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <a href="/#about" onClick={closeMenu}>About Us</a>
          </li>
          <li>
            <a href="/#services" onClick={closeMenu}>Services</a>
          </li>

          <li>
            <a href="/gallary" onClick={closeMenu}>Gallary</a>
          </li>
          <li>
            <a href="/#feedback" onClick={closeMenu}>Feedback</a>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu}>Contact</a>
          </li>

          
          
        </ul>

        {/* Hamburger button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
