import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const education = [
    {
      degree: 'Master\'s in Applied Computer Engineering',
      field: 'Computer Engineering',
      university: 'Memorial University, Newfoundland and Labrador',
      location: 'St John\'s, Newfoundland and Labrador, Canada',
      period: 'Sep 2022 - Jan 2024',
      grade: 'A+',
      skills: ['AJAX', 'REST APIs', 'Computer Engineering', '+29 skills'],
      color: '#667eea'
    },
    {
      degree: 'Bachelor\'s degree',
      field: 'Computer Science',
      university: 'Arid Agriculture University',
      location: 'Pakistan',
      period: 'Feb 2017 - Feb 2021',
      grade: null,
      skills: ['AJAX', 'REST APIs', 'Computer Science', '+23 skills'],
      color: '#764ba2'
    }
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">05</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="education-grid" ref={ref}>
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              education={edu}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({ education, index, isInView }) => {
  return (
    <motion.div
      className="education-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10, scale: 1.02 }}
      style={{ '--card-color': education.color }}
    >
      <div className="education-header">
        <div className="education-icon">
          <FaGraduationCap />
        </div>
        {education.grade && (
          <div className="education-grade">
            <FaAward />
            <span>Grade: {education.grade}</span>
          </div>
        )}
      </div>
      <div className="education-body">
        <h3 className="education-degree">{education.degree}</h3>
        <h4 className="education-field">{education.field}</h4>
        <p className="education-university">{education.university}</p>
        <p className="education-location">{education.location}</p>
        <span className="education-period">{education.period}</span>
        <div className="education-skills">
          {education.skills.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>
      <div className="education-footer">
        <div className="education-progress" style={{ width: `${(index + 1) * 50}%` }}></div>
      </div>
    </motion.div>
  );
};

export default Education;

