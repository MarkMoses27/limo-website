import { motion } from "framer-motion";
import "./About.css";
import ABOUT from "../assets/about.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container container">
        {/* Text Section */}
        <div className="about-text">
          <motion.h1 
            className="about-title"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            About Limo Recruitment &amp; Study Abroad
          </motion.h1>
          <motion.p 
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We are a dedicated agency committed to connecting talented individuals with global job opportunities and study abroad programs. Our experienced team is here to guide you every step of the way.
          </motion.p>
        </div>
        {/* Image Section */}
        <div className="about-image">
          <motion.img 
            src={ABOUT}  
            alt="About Us"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </div>
      </div>

      {/* Mission, Vision, Core Values Section */}
      <div className="mv-container container">
        <motion.h2
          className="mv-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Mission, Vision &amp; Core Values
        </motion.h2>
        <div className="mv-cards">
          <motion.div 
            className="mv-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mv-card-title">Mission</h3>
            <p className="mv-card-description">
              Our mission is to connect talented individuals with global opportunities and provide exceptional guidance to help them achieve their career and academic goals.
            </p>
          </motion.div>
          <motion.div 
            className="mv-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="mv-card-title">Vision</h3>
            <p className="mv-card-description">
              Our vision is to be the leading global agency that transforms lives through education and career opportunities abroad.
            </p>
          </motion.div>
          <motion.div 
            className="mv-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="mv-card-title">Core Values</h3>
            <p className="mv-card-description">
              Integrity, Excellence, Innovation, and Commitment are at the heart of everything we do.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
