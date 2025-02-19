import { motion } from "framer-motion";
import "./JobsLayout.css";

// WhatsApp link: replace with your phone number in international format
const WHATSAPP_URL = "https://wa.me/254704844176?text=Hello%20I%20am%20interested%20in%20the%20global%20job%20opportunities!";

// Data for each region
const jobData = [
  {
    country: "Canada",
    positions: [
      { title: "Construction Workers", salary: "2,500 CAD" },
      { title: "Waiters, Nurses, Caregivers, Farm Workers" },
    ],
  },
  {
    country: "United Kingdom (UK)",
    positions: [
      { title: "Doctors, Nurses, Teachers, Caregivers, Factory Workers" },
    ],
    notes: ["3 months processing", "Commission applies"],
  },
  {
    country: "Germany",
    positions: [{ title: "Caregivers & Factory Workers" }],
    notes: ["3 months processing", "Commission applies"],
  },
  {
    country: "Qatar, Dubai & Kuwait",
    positions: [
      { title: "Security, Cleaning, Waiters, Waitresses", salary: "70K" },
    ],
    notes: ["Commission applies"],
  },
  {
    country: "Oman",
    positions: [{ title: "House Maids" }],
    notes: ["Commission applies"],
  },
  {
    country: "Netherlands & Hungary",
    positions: [{ title: "Factory Jobs" }],
    notes: ["Commission applies"],
  },
];

// Requirements & Application Process
const requirements = [
  "Valid Passport",
  "Updated CV",
  "Recent Full-Size Photo",
  "Certificate of Good Conduct",
  "Kenyan Passport",
];

const applicationProcess = [
  "Choose your preferred job (Full-time roles only)",
  "Submit your documents",
  "Processing typically 3 months",
  "Begin your job abroad",
];

const JobsLayout = () => {
  return (
    <section className="jobs-layout">
      <div className="jobs-layout-container container">
        {/* Heading & Subtitle */}
        <motion.div
          className="jobs-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="jobs-title">Exciting Job Opportunities Abroad – Apply Now!</h1>
          <p className="jobs-subtitle">
            Full-time positions available in Canada, the UK, Germany, Qatar, Dubai, Kuwait, Oman, the Netherlands, and Hungary.
          </p>
        </motion.div>

        {/* Region Cards */}
        <div className="job-countries">
          {jobData.map((region, index) => (
            <motion.div
              key={index}
              className="country-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="country-name">{region.country}</h2>
              <ul className="positions-list">
                {region.positions.map((pos, i) => (
                  <li key={i} className="position-item">
                    <span className="position-title">{pos.title}</span>{" "}
                    <span className="job-type">[Full-time]</span>
                    {pos.salary && (
                      <span className="salary-info"> – {pos.salary}</span>
                    )}
                  </li>
                ))}
              </ul>
              {region.notes && (
                <ul className="notes-list">
                  {region.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Requirements */}
        <motion.div
          className="requirements-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Requirements</h2>
          <ul className="requirements-list">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </motion.div>

        {/* Application Process */}
        <motion.div
          className="application-process-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="section-heading">Application Process</h2>
          <ol className="application-process-list">
            {applicationProcess.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="cta-text">
            Ready to start your journey? Contact us or click below to apply via WhatsApp.
          </p>
          <a
            href={WHATSAPP_URL}
            className="cta-apply-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
          {/* Additional contact info */}
          <div className="contact-info">
            <p><strong>Phone:</strong> +254704844176</p>
            <p><strong>Email:</strong> limorecruitmentandstudyabroad@gmail.com</p>
            <p><strong>Address:</strong> P.O. Box. 1960, Westlands, Vision Plaza, 10th Floor, Suite 17</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsLayout;
