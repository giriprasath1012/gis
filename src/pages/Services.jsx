import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'MOTOR INSURANCE',
    description: [
      'Third-party Liability Cover',
      'Own Damage Cover',
      'Personal Accident Cover',
      'Roadside Assistance',
      'Fast Claim Service',
    ],
    image: require('../assets/serviceimg1.png'),
  },
  {
    title: 'NON-MOTOR INSURANCE',
    description: [
      'Property loss coverage',
      'Marine cargo protection',
      'Business interruption insurance',
      'Liability risk management',
      'Specialized industry solutions',
    ],
    image: require('../assets/serviceimage2.png'),
  },
  {
    title: 'HEALTH INSURANCE',
    description: [
      'Hospitalization expense coverage',
      'Cashless treatment options',
      'Annual health check-ups',
      'Critical illness protection',
      'Hospital daily cash allowance',
    ],
    image: require('../assets/serviceimage3.png'),
  },
  {
    title: 'LIFE INSURANCE',
    description: [
      'Financial security for family',
      'Tax-saving benefits',
      'Long-term savings plan',
      'Loan collateral option',
      'Guaranteed maturity benefits',
    ],
    image: require('../assets/serviceimage4.png'),
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      {services.map((service, index) => (
        <div
          className={`service-card ${index % 2 === 1 ? 'reverse' : ''}`}
          key={index}
        >
          <div className="service-image">
            <img src={service.image} alt={service.title} />
          </div>
          <div className="service-content">
            <h3>{service.title}</h3>
            <ul>
              {service.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <a
              href="https://wa.me/919626166642?text=Hi%20Gowtham,%20I%20am%20interested%20in%20your%20insurance%20services.%20Let%20me%20know%20further%20information%20regarding%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="buy-btn"
            >
              Buy Now
            </a>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
