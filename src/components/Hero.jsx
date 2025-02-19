import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import HERO from "../assets/hero.png";

// Subtle zoom in/out animation for the background image
const bgVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Container variants to fade and slide in hero content
const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

// Child variants for each text/search element
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  // Handle the Search button click
  const handleSearch = () => {
    // Construct query parameters
    const queryParams = new URLSearchParams();
    if (searchTerm) queryParams.set("search", searchTerm);
    if (category) queryParams.set("category", category);
    if (location) queryParams.set("location", location);

    // Navigate to /jobs with query string, e.g. /jobs?search=...&category=...&location=...
    navigate(`/jobs?${queryParams.toString()}`);
  };

  return (
    <section className="hero">
      {/* Animated Background Image */}
      <motion.div className="hero-image" variants={bgVariants} animate="animate">
        <img src={HERO} alt="Global Opportunities" />
      </motion.div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={childVariants}>
          Discover your new job
        </motion.h1>
        <motion.p className="hero-subtitle" variants={childVariants}>
          Find the perfect job for your skills
        </motion.p>

        {/* Search Bar */}
        <motion.div className="search-bar" variants={childVariants}>
          <input
            type="text"
            placeholder="What job are you looking for?"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="search-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Categories</option>
            <option value="it">IT</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
            <option value="education">Education</option>
            {/* Add more categories if needed */}
          </select>
          <input
            type="text"
            placeholder="Location"
            className="search-input"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
