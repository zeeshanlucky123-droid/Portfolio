import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCard, setActiveCard] = useState(0);

  const experiences = [
    {
      date: 'Jun 2022 - Present',
      title: 'Software Engineer',
      company: 'Freelance',
      location: 'St John\'s, NL, Canada · Remote',
      description: 'Delivering custom software solutions for diverse clients, specializing in full-stack development, React Native mobile apps, and WordPress websites. Working with AWS services (Lambda, S3, DynamoDB), Java, and modern web technologies.',
      highlights: [
        'Full Stack Development',
        'AWS Services',
        '40+ Skills'
      ],
      color: '#667eea'
    },
    {
      date: 'Jun 2019 - Apr 2022',
      title: 'React Native Developer',
      company: 'KEN Solutions',
      location: 'Rawalpindi, Punjab, Pakistan · On-site',
      description: 'Developed and maintained cross-platform mobile applications using React Native. Built high-quality, performant mobile apps with focus on user experience, Web Applications, SMTP integration, and scalability.',
      highlights: [
        'React Native',
        'Mobile Development',
        '40+ Skills'
      ],
      color: '#764ba2'
    },
    {
      date: 'Mar 2017 - Dec 2021',
      title: 'WordPress Developer',
      company: 'Freelance',
      location: 'Pakistan · Remote',
      description: 'Developed and maintained 30+ WordPress websites, focusing on speed, responsiveness, and SEO optimization. Specialized in WooCommerce integration, payment gateways, shipping modules, multilingual support, and custom themes/plugins using PHP, HTML/CSS, and Elementor.',
      highlights: [
        '30+ Websites',
        'WooCommerce',
        'Elementor, WPBakery'
      ],
      color: '#f093fb'
    },
    {
      date: 'Apr 2018 - May 2019',
      title: 'WordPress Developer',
      company: 'Adzhut',
      location: 'Rawalpindi, Punjab, Pakistan · On-site',
      description: 'Contract full-time WordPress developer role, working on-site to deliver custom web solutions and maintain client websites.',
      highlights: [
        'WordPress',
        'HTML5',
        'Client Projects'
      ],
      color: '#4facfe'
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">04</span>
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="experience-grid" ref={ref}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              experience={exp}
              index={index}
              isInView={isInView}
              isActive={activeCard === index}
              onHover={() => setActiveCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index, isInView, isActive, onHover }) => {
  return (
    <motion.div
      className={`experience-card ${isActive ? 'active' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onMouseEnter={onHover}
      style={{ '--card-color': experience.color }}
    >
      <div className="card-header">
        <div className="card-icon">
          <FaBriefcase />
        </div>
        <div className="card-date-location">
          <span className="card-date">
            <FaCalendarAlt /> {experience.date}
          </span>
          <span className="card-location">
            <FaMapMarkerAlt /> {experience.location}
          </span>
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{experience.title}</h3>
        <h4 className="card-company">{experience.company}</h4>
        <p className="card-description">{experience.description}</p>
        <div className="card-highlights">
          {experience.highlights.map((highlight, idx) => (
            <span key={idx} className="highlight-tag">{highlight}</span>
          ))}
        </div>
      </div>
      <div className="card-footer">
        <div className="card-progress" style={{ width: `${(index + 1) * 25}%` }}></div>
      </div>
    </motion.div>
  );
};

export default Experience;

