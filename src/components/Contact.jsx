import  { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    // Replace these values with your EmailJS service details
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setError("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <section className="contact">
      <div className="contact-container container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Have a question or want to work with us? Get in touch!
        </p>
        {success ? (
          <p className="success-message">
            Your message has been sent successfully! Thank you for contacting Limo Recruitment &amp; Study Abroad.
          </p>
        ) : (
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            {/* Hidden input to set recipient email */}
            <input
              type="hidden"
              name="to_email"
              value="info@limorecruitmentagency.org"
            />
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
