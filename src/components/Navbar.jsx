import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// Import your SVG logo (adjust the path as needed)
import Logo from "../assets/limo.svg";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo - using the imported SVG */}
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="LIMO Recruitment & Study Abroad" />
        </Link>
        {/* Desktop Navigation Menu */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/jobs" className="navbar-link">Jobs</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Us</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <Link onClick={toggleMobileMenu} to="/" className="mobile-menu-link">Home</Link>
            </li>
            <li className="mobile-menu-item">
              <Link onClick={toggleMobileMenu} to="/jobs" className="mobile-menu-link">Jobs</Link>
            </li>
            <li className="mobile-menu-item">
              <Link onClick={toggleMobileMenu} to="/about" className="mobile-menu-link">About Us</Link>
            </li>
            <li className="mobile-menu-item">
              <Link onClick={toggleMobileMenu} to="/services" className="mobile-menu-link">Services</Link>
            </li>
            <li className="mobile-menu-item">
              <Link onClick={toggleMobileMenu} to="/contact" className="mobile-menu-link">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
