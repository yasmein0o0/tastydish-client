// components/Header/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthCheck } from "../utils/useAuthCheck";
import logo from "../assets/Foodieland..png";
import "../style/header.scss";
import img1 from "../assets/001-facebook.png";
import img2 from "../assets/004-instagram.png";
import img3 from "../assets/003-twitter.png";
import { Autocomplete } from "./searchbar";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { hasToken } = useAuthCheck();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when route changes
  useEffect(() => {
    console.log(hasToken);
    closeMenu();
  }, [location, hasToken]);

  return (
    <header id="header">
      <div className="container">
        <Link to="/" id="logo" onClick={closeMenu}>
          <img src={logo} alt="Foodieland" />
        </Link>

        {/* <Autocomplete /> */}

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/recipes"
            className={`nav-link ${
              location.pathname === "/recipes" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Recipes
          </Link>

          <Link
            to="/blog"
            className={`nav-link ${
              location.pathname === "/blog" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onClick={closeMenu}
          >
            Contact
          </Link>

          {hasToken ? (
            <Link
              to="/account"
              className={`nav-link ${
                location.pathname === "/account" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Account
            </Link>
          ) : (
            <Link
              to="/login"
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Login
            </Link>
          )}
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

        {/* Mobile menu toggle */}
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};
