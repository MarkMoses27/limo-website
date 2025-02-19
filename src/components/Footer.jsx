import { motion } from "framer-motion";
import "./Footer.css";
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaTiktok
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="footer-container">
        {/* Contact Details */}
        <motion.div 
          className="footer-contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-contact-item">
            <FaPhone className="footer-icon phone-icon" />
            <span>+254704844176</span>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope className="footer-icon" />
            <span>info@limorecruitmentagency.org</span>
          </div>
          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Social Media Links (All in One Row) */}
        <motion.div 
          className="footer-social"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a 
            href="https://www.facebook.com/share/14ZTwPNUhM/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaFacebookF />
          </motion.a>
          <motion.a 
            href="https://twitter.com/limorecruitmentandstudyabroadagency" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/limorecruitmentandstudyabroadagency/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/abednego-kipkogei-585720351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedinIn />
          </motion.a>
          <motion.a 
            href="https://www.tiktok.com/@limo.recruitments?_t=ZM-8u1gGYpSeM2&_r=1" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
          >
            <FaTiktok />
          </motion.a>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          className="footer-bottom"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Limo Recruitment &amp; Study Abroad Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
