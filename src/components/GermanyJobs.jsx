import "./GermanyJobs.css";

const GermanyJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Berlin Tech Solutions",
      location: "Berlin, Germany",
      description: "Develop innovative software solutions in a vibrant tech scene.",
    },
    {
      id: 2,
      title: "Financial Analyst",
      company: "Frankfurt Finance Group",
      location: "Frankfurt, Germany",
      description: "Analyze financial data to guide strategic investments.",
    },
    // Add more sample jobs as needed
  ];

  return (
    <section className="germany-jobs">
      <div className="germany-jobs-container container">
        <h1 className="jobs-title">Jobs in Germany</h1>
        <div className="jobs-grid">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <h2 className="job-title">{job.title}</h2>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <p className="job-description">{job.description}</p>
              {/* You could add a "View Details" button/link here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GermanyJobs;
