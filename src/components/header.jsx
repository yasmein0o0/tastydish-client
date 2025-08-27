import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Foodieland..png";
import "../style/header.scss";
import img1 from "../assets/001-facebook.png";
import img2 from "../assets/004-instagram.png";
import img3 from "../assets/003-twitter.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header id="header">
      <div className="container">
        <Link to="/" id="logo">
          <img src={logo} alt="" />
        </Link>

        <div id="search-container">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search for a dish..."
          />
          <button type="submit">search</button>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            home
          </Link>
          <Link
            to="/recipes"
            className={`nav-link ${
              location.pathname === "/recipes" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            recipes
          </Link>
          <Link
            to="/categories"
            className={`nav-link ${
              location.pathname === "/categories" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            blog
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            about
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            contact
          </Link>
        </nav>

        <div className="social-media-container">
          <a
            href="https://facebook.com"
            target="_blank"
            className="social-media"
          >
            <img src={img1} alt="" />
          </a>
          <a href="https://x.com" target="_blank" className="social-media">
            <img src={img3} alt="" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="social-media"
          >
            <img src={img2} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};
