import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JobListings from "./components/JobListings";
import AdvancedAbout from "./components/AdvancedAbout";
import ProcessSteps from "./components/ProcessSteps";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";


// Import additional components
import About from "./components/About";
import Contact from "./components/Contact";
import JobsLayout from './components/JobsLayout';

// Import outlet components
import GulfJobs from './components/GulfJobs';
import GermanyJobs from './components/GermanyJobs';
import ServicesLayout from './components/ServicesLayout';

// Home component combines the landing page sections
function Home() {
  return (
    <>
      <Hero />
      <JobListings />
      <AdvancedAbout />
      <ProcessSteps />
      <Testimonials />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<JobsLayout />} />
          <Route path="gulf" element={<GulfJobs />} />
          <Route path="germany" element={<GermanyJobs />} />
          <Route path="/services" element={<ServicesLayout />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add additional routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
