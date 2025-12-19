import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    { number: 30, label: 'WordPress Sites' },
    { number: 5, label: 'Years Experience' },
    { number: 50, label: 'Projects Completed' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">01</span>
            <h2 className="section-title">About Me</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="about-content" ref={ref}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="about-description">
              I'm a passionate Full-Stack Developer with 2+ years of experience in React Native building cross-platform mobile apps, 
              and 3+ years as a WordPress Developer delivering custom web solutions. My expertise spans full-stack development, 
              UI/UX design, and IoT innovation.
            </p>
            <p className="about-description">
              Skilled in AWS services (Lambda, S3, DynamoDB), Java, and modern tools like Firebase and REST APIs. I thrive in agile 
              environments, creating scalable solutions that transform ideas into user-focused products.
            </p>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <StatItem key={index} stat={stat} isInView={isInView} delay={index * 0.2} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, isInView, delay }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const increment = stat.number / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current < stat.number) {
          setCount(Math.floor(current));
        } else {
          setCount(stat.number);
          clearInterval(timer);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.number]);

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="stat-number">{count}+</div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};

export default About;

