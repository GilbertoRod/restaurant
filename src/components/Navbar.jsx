import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/tacoymas.png'

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} className='company-logo' alt='Company Logo'/></div>
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
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            MENU
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={toggleMenu}>
            ABOUT
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default HamburgerMenu;
