import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FAQ.css";

const faqData = [
  {
    question: "How do I apply for a job?",
    answer:
      "You can apply for a job by submitting your updated CV and necessary documents through our online application form. Once submitted, our team will review your application and get in touch with you.",
  },
  {
    question: "What documents are required for application?",
    answer:
      "The required documents include a valid passport, updated CV, recent full-size photo, certificate of good conduct, and a copy of your Kenyan passport.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application process usually takes between 2-4 weeks from the time you submit your documents, depending on the role and employer requirements.",
  },
  {
    question: "Do you offer visa assistance and pre-departure support?",
    answer:
      "Yes, we provide comprehensive visa assistance and pre-departure support to ensure that your transition is as smooth as possible.",
  },
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleFAQ}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer-wrapper"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="faq-answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  return (
    <section className="faq-section container" id="faq">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
