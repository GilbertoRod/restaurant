import React, { useState,useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import logo from '../assets/tacoymas.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
      setIsOpen((prev) => !prev);

  };

  return (
    <nav className="navbar">
      <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
      <Link to={'/'}>
        <div className="logo">
          <img src={logo} className='company-logo' alt='Company Logo'/>
        </div>
      </Link>
      <a href='tel:+16822344610'>
        <button className="nav-call-btn">
          <FontAwesomeIcon icon={faPhoneVolume}/> <span style={{marginLeft:"5px"}}>ORDER NOW</span>
        </button>
      </a>
      </div>
      
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links`}>
        <li>
          <NavLink to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu">
            MENU
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            ABOUT
          </NavLink>
        </li>

      </ul>
      <ul className={`nav-links-s ${isOpen ? "active" : ""}`}>
        <li>
          <NavLink to="/" onClick={toggleMenu}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" onClick={toggleMenu}>
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
