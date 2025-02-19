import { motion } from "framer-motion";
import { 
  FaUserCheck, 
  FaFileAlt, 
  FaChalkboardTeacher, 
  FaHandshake, 
  FaRocket 
} from "react-icons/fa";
import "./ProcessSteps.css";

const processSteps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Discuss your career aspirations and global opportunities.",
    icon: <FaUserCheck />,
  },
  {
    id: 2,
    title: "Profile Assessment",
    description: "Evaluate your skills and qualifications for the right fit.",
    icon: <FaFileAlt />,
  },
  {
    id: 3,
    title: "Application Assistance",
    description: "Get expert help in preparing your documents and applications.",
    icon: <FaChalkboardTeacher />,
  },
  {
    id: 4,
    title: "Interview Preparation",
    description: "Receive coaching and tips for successful interviews.",
    icon: <FaHandshake />,
  },
  {
    id: 5,
    title: "Placement & Support",
    description: "Secure your job placement and enjoy ongoing support.",
    icon: <FaRocket />,
  },
];

const OurProcess = () => {
  return (
    <section className="our-process" id="process">
      <div className="process-container container">
        <motion.h2
          className="process-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Process
        </motion.h2>
        <motion.p
          className="process-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A streamlined approach to launch your global career.
        </motion.p>
        <div className="process-steps">
          {processSteps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="process-step"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
