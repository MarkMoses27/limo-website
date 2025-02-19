import { motion } from "framer-motion";
import "./AdvancedAbout.css";

import ABOUT from "../assets/about.png";

const AdvancedAbout = () => {
  return (
    <section className="about-us" id="about">
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
            We are a dedicated agency committed to providing unparalleled recruitment and study abroad services.
            With years of experience and a global network, we empower individuals to achieve their dreams.
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
    </section>
  );
};

export default AdvancedAbout;
