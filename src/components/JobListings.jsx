import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./JobListings.css";

const jobListings = [
  {
    id: 1,
    title: "Security Officer",
    company: "Various Employers",
    location: "Dubai, UAE",
    description: "Join our team of dedicated security professionals in a safe and dynamic work environment.",
    link: "/jobs",
  },
  {
    id: 2,
    title: "Waiter/Waitress",
    company: "Hospitality Group",
    location: "Dubai, UAE",
    description: "Deliver excellent customer service in a vibrant hospitality environment.",
    link: "/jobs",
  },
  {
    id: 3,
    title: "Cleaner",
    company: "Facilities Management",
    location: "Dubai, UAE",
    description: "Maintain high standards of cleanliness in various commercial establishments.",
    link: "/jobs",
  },
];

const JobListings = () => {
  return (
    <section className="job-listings" id="jobs">
      <div className="job-listings-container container">
        <motion.h2
          className="job-listings-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Latest Job Opportunities
        </motion.h2>
        <div className="job-cards">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              className="job-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              <Link to={job.link} className="job-details-btn">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/jobs" className="view-all-btn">
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;
