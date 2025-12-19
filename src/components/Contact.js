import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">06</span>
            <h2 className="section-title">Get In Touch</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="contact-content" ref={ref}>
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>St John's, Newfoundland and Labrador, Canada</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:zeeshanlucky123@gmail.com">zeeshanlucky123@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaLinkedin />
                </div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/zeeshan-ahmed-576822215/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div className="contact-text">
                  <h4>GitHub</h4>
                  <a
                    href="https://github.com/zeeshanlucky123-droid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View my repositories
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <a
                href="https://www.linkedin.com/in/zeeshan-ahmed-576822215/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:zeeshanlucky123@gmail.com"
                className="social-btn"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/zeeshanlucky123-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary btn-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

