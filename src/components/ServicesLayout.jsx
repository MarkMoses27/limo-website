import { motion } from "framer-motion";
import "./ServicesLayout.css";

const ServicesLayout = () => {
  return (
    <section className="services-layout" id="services">
      <div className="services-header container">
        <motion.h1
          className="services-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We provide comprehensive recruitment and study abroad solutions.
        </motion.p>
      </div>
      <div className="services-content container">
        <motion.div 
          className="service-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="service-title">Recruitment Services</h2>
          <p className="service-description">
            Our recruitment services help you connect with top employers and find your dream job globally. We provide personalized career counseling, job placement assistance, and ongoing support.
          </p>
        </motion.div>
        <motion.div 
          className="service-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="service-title">Study Abroad Services</h2>
          <p className="service-description">
            Our study abroad services guide you through every step—from university selection and admission to visa processing and pre-departure preparations—ensuring a smooth transition to global education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesLayout;
