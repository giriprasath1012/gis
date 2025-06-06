import React from 'react';
import '../styles/Home.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image4.jpg';

import Services from './Services';
import Feedback from './Feedback';
import Contact from './Contact';
import About from './About';
import Offers from './Offers';

import AnimatedOnScroll from './AnimatedOnScroll';  // import wrapper

const Home = () => (
  <div className="home" >
    <AnimatedOnScroll>
      <h1>Welcome to Gowtham Insurance Services</h1>
      <p>Your trusted partner in insurance solutions</p>
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div className="carousel-container">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showThumbs={false} 
          showStatus={false}
          interval={3000}
          transitionTime={800}
        >
          <div className="carousel-slide">
              <div className="blur-bg" style={{ backgroundImage: `url(${image1})` }}></div>
              <img src={image1} alt="Insurance 1" />
          </div>
          <div className="carousel-slide">
              <div className="blur-bg" style={{ backgroundImage: `url(${image2})` }}></div>
              <img src={image2} alt="Insurance 2" />
          </div>
          <div className="carousel-slide">
              <div className="blur-bg" style={{ backgroundImage: `url(${image3})` }}></div>
              <img src={image3} alt="Insurance 3" />
          </div>
        </Carousel>
      </div>
    </AnimatedOnScroll>

    <br /><br />

    <AnimatedOnScroll>
      <Offers />
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div id="about">
        <About />
      </div>
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div id="services">
        <Services />
      </div>
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div id="feedback">
        <Feedback />
      </div>
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div id="contact">
        <Contact />
      </div>
    </AnimatedOnScroll>

    <AnimatedOnScroll>
      <div className="map-container" style={{ marginTop: '2rem', width: '100%', height: '400px' }}>
        <iframe
          title="Gowtham Insurance Services Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.2568268162713!2d77.35961177369276!3d10.559064563168139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cf419db25595%3A0xeed2ecf5aab1fc2e!2sGowtham%20Insurance%20Services!5e0!3m2!1sen!2sin!4v1749195203849!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </AnimatedOnScroll>
  </div>
);

export default Home;
