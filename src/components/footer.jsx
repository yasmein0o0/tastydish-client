import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Foodieland..png";
import img1 from "../assets/001-facebook.png";
import img2 from "../assets/004-instagram.png";
import img3 from "../assets/003-twitter.png";
import "../style/footer.scss";

export const Footer = () => {
  const location = useLocation();

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="Foodieland" />
            </Link>
            <p className="footer-description">
              Delicious recipes for every occasion. Discover new dishes and
              improve your cooking skills with our easy-to-follow guides.
            </p>
          </div>

          <nav className="footer-nav">
            <Link
              to="/"
              className={`footer-nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className={`footer-nav-link ${
                location.pathname === "/recipes" ? "active" : ""
              }`}
            >
              Recipes
            </Link>
            <Link
              to="/categories"
              className={`footer-nav-link ${
                location.pathname === "/categories" ? "active" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className={`footer-nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`footer-nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © 2023 Foodieland. All rights reserved
          </div>

          <div className="footer-social-media">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={img1} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={img3} alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <img src={img2} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
