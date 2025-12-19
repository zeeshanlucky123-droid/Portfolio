import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skillCategories = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      skills: ['React', 'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']
    },
    {
      icon: <FaServer />,
      title: 'Backend & Cloud',
      skills: ['Java', 'Python', 'AWS (Lambda, S3, DynamoDB)', 'REST APIs', 'Firebase', 'Node.js']
    },
    {
      icon: <FaDatabase />,
      title: 'WordPress & Tools',
      skills: ['WordPress', 'WooCommerce', 'Elementor', 'PHP', 'MySQL', 'Git', 'PostgreSQL']
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Development',
      skills: ['React Native', 'Cross-Platform Apps', 'Mobile UI/UX', 'Firebase Integration']
    }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <div className="section-header-content">
            <span className="section-number">02</span>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="title-underline"></div>
        </div>
        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ category, index, isInView }) => {
  return (
    <motion.div
      className="skill-category"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="skill-icon">{category.icon}</div>
      <h3 className="skill-title">{category.title}</h3>
      <div className="skill-items">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="skill-tag"
            whileHover={{ scale: 1.1, y: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

