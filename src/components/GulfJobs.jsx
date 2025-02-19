import "./GulfJobs.css";

const gulfJobData = [
  { id: 1, title: "Security Officer", salary: "70K", location: "Dubai, UAE" },
  { id: 2, title: "Waiter/Waitress", salary: "70K", location: "Dubai, UAE" },
  { id: 3, title: "Cleaner", salary: "45K", location: "Dubai, UAE" },
  { id: 4, title: "Warehouse Staff", salary: "55K", location: "Dubai, UAE" },
  { id: 5, title: "Housemaid", salary: "42K", location: "Dubai, UAE" },
];

const requirements = [
  "Valid Passport",
  "Updated CV",
  "Recent Full-Size Photo",
  "Certificate of Good Conduct",
  "Kenyan Passport"
];

const whyWorkInUAE = [
  "Competitive salaries & benefits",
  "Career growth opportunities",
  "A safe & professional work environment"
];

const WHATSAPP_URL = "https://wa.me/254704844176?text=Hello%20I'm%20interested%20in%20the%20UAE%20job%20opportunities!";

const GulfJobs = () => {
  return (
    <section className="gulf-jobs">
      <div className="gulf-jobs-container container">
        <h1 className="jobs-title">UAE (Dubai) Job Opportunities – Apply Now!</h1>

        {/* Job Listings */}
        <div className="jobs-grid">
          {gulfJobData.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-salary">
                <strong>Salary:</strong> {job.salary}
              </p>
              <p className="job-location">{job.location}</p>
              <a
                href={WHATSAPP_URL}
                className="apply-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>

        {/* Requirements */}
        <div className="requirements-section">
          <h2 className="section-heading">Requirements</h2>
          <ul className="requirements-list">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        {/* Why Work in UAE */}
        <div className="why-uae-section">
          <h2 className="section-heading">Why Work in UAE?</h2>
          <ul className="why-uae-list">
            {whyWorkInUAE.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="cta-container">
          <a
            href={WHATSAPP_URL}
            className="cta-apply-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GulfJobs;
