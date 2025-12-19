import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaGithub, FaArrowDown } from 'react-icons/fa';
import Particles from './Particles';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <Particles />
      <div className="hero-background">
        <div className="floating-shapes">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              className={`shape shape-${i}`}
              animate={{
                y: [0, 30, -30, 0],
                x: [0, 20, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </div>
        <div className="gradient-orbs">
          <motion.div
            className="orb orb-1"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="orb orb-2"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title" variants={itemVariants}>
              <span className="greeting">Hello, I'm</span>
              <span className="name">Zeeshan Ahmed</span>
              <span className="title">Software Developer | React Native | Java | WordPress</span>
            </motion.h1>
            <motion.p className="hero-description" variants={itemVariants}>
              Full-Stack Developer specializing in React Native, WordPress, and AWS. 
              Building scalable, user-focused applications with 5+ years of experience.
            </motion.p>
            <motion.div className="hero-buttons" variants={itemVariants}>
              <button className="btn btn-primary" onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}>
                Get In Touch
              </button>
            </motion.div>
            <motion.div className="social-links" variants={itemVariants}>
              <a
                href="https://www.linkedin.com/in/zeeshan-ahmed-576822215/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:zeeshanlucky123@gmail.com"
                className="social-link"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/zeeshanlucky123-droid"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="hero-image" variants={itemVariants}>
            <div className="image-wrapper">
              <motion.div
                className="glow-effect"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <InteractiveCodeDemo />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleScroll}
        style={{ cursor: 'pointer' }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="mouse">
          <motion.div
            className="mouse-wheel"
            animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        <motion.div
          className="scroll-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll Down
          <FaArrowDown style={{ marginLeft: '8px' }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const InteractiveCodeDemo = () => {
  return (
    <div className="code-snippet">
      <div className="code-header">
        <div className="code-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="code-filename">developer.js</span>
      </div>
      <div className="code-content">
        <div className="code-line">
          <span className="code-comment">// Full-Stack Developer</span>
        </div>
        <div className="code-line">
          <span className="code-keyword">const</span>
          <span className="code-variable"> developer</span>
          <span className="code-operator"> =</span>
          <span className="code-string"> 'Zeeshan Ahmed';</span>
        </div>
        <div className="code-line">
          <span className="code-keyword">let</span>
          <span className="code-variable"> skills</span>
          <span className="code-operator"> = [</span>
          <span className="code-string">'React Native'</span>
          <span className="code-operator">, </span>
          <span className="code-string">'WordPress'</span>
          <span className="code-operator">, </span>
          <span className="code-string">'AWS'</span>
          <span className="code-operator">];</span>
        </div>
      </div>
      <div className="code-footer">
        <div className="code-stats">
          <span>⚡ React Native</span>
          <span>🌐 WordPress</span>
          <span>☁️ AWS</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;

