import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Company Logo</div>
      <div
        className={`menu-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" onClick={toggleMenu}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" onClick={toggleMenu}>
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HamburgerMenu;
