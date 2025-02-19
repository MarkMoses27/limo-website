import  { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    quote: "Limo Recruitment and Study Abroad transformed my career. They helped me land my dream job overseas!",
    name: "Alice Mwangi",
    position: "Candidate",
  },
  {
    id: 2,
    quote: "Their personalized approach made the entire process smooth. I highly recommend their services.",
    name: "John Otieno",
    position: "Candidate",
  },
  {
    id: 3,
    quote: "Professional, supportive, and innovative. They truly care about your future.",
    name: "Grace Wambui",
    position: "Candidate",
  },
];

const Testimonials = () => {
  // State to track which testimonial is active (null means show all)
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (id) => {
    // If the same testimonial is clicked again, reset to show all
    // Otherwise, show only that testimonial
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container container">
        <motion.h2
          className="testimonials-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => {
            // If activeId is null, show all
            // If activeId is not null, show only the one with that ID
            if (activeId !== null && activeId !== testimonial.id) {
              return null;
            }

            return (
              <motion.div 
                key={testimonial.id} 
                className="testimonial-card"
                onClick={() => handleCardClick(testimonial.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <p className="testimonial-author">
                  <strong>{testimonial.name}</strong>, {testimonial.position}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
