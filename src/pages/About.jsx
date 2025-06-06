import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/gowtham.jpg';
import logo from '../assets/logo.png';

import happyClients from '../assets/aboutimage1.png';
import insuranceClaims from '../assets/aboutimage2.png';
import rating from '../assets/aboutimage3.png';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h2>Welcome to Gowtham Insurance Services</h2>
          <p>
            Founded by <strong style={{ color: "white" }}>Gowtham M</strong>, a government certified insurance consultant with <strong style={{ color: "white" }}>8+ years </strong>of experience in general and life insurance. 
            Our expertise spans across Tamil Nadu, providing tailored insurance solutions for corporate and individual clients.
          </p>
          <p>
            We specialize in <strong style={{ color: "white" }}>Life, Health, Motor and Non-Motor insurance</strong> covering Individuals and corporate needs like Group personal accident, workmen compensation, Fire insurance, Travel Insurance, engineering and marine insurance.
           
          </p>
          <p>
            With a deep understanding of investment strategies and a commitment to excellence, <strong style={{ color: "white" }}>GIS</strong> is your trusted partner in securing your future.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="stat-card">
          <img src={happyClients} alt="Happy Clients" />
          <h3>10,000+</h3>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="stat-card">
          <img src={insuranceClaims} alt="Insurance Claims" />
          <h3>1000+</h3>
          <p>INSURANCE CLAIMS</p>
        </div>
        <div className="stat-card">
          <img src={rating} alt="Rating" />
          <h3>5/5</h3>
          <p>RATING RECEIVED</p>
        </div>
      </div>

      {/* Mission Box */}
      <div className="mission-box">
        <div className="mission-text">
          <h3>Our Vission</h3>
          <p>
            Stay at the forefront of industry innovation.<br></br> Achieve professional excellence and integrity.
          </p>

          <h3>Our Mission</h3>
          <p>
           Protecting client's financial well being.<br></br>Building Trust and maintains long term Relationship by providing Good customer service.
          </p>
        </div>
        <div className="mission-logo">
          <img src={logo} alt="Mission Logo" />
        </div>
      </div>

      {/* Core Values Section */}
<div className="core-values-section">
  <h2 className="core-title">Our Core Values</h2>
  <div className="core-values">
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>RESILLIENCE</h3>
        </div>
        <div className="flip-card-back">
          <p>We adapt and thrive in the face of challenges, ensuring steadfast support for our customers during difficult times.</p>
        </div>
      </div>
    </div>

    
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>RELIABLE</h3>
        </div>
        <div className="flip-card-back">
          <p>We consistently deliver dependable and trustworthy service, ensuring our customers can count on us when they need it most.</p>
        </div>
      </div>
    </div>

    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>RESPONSIBILITY</h3>
        </div>
        <div className="flip-card-back">
          <p>We uphold a strong commitment to accountability, ensuring our actions benefit our customers, employees, and communities responsibly.</p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default About;
