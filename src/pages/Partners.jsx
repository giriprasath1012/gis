import React from 'react';
import '../styles/Partners.css';

import gen1 from '../assets/partners/gen1.png';
import gen2 from '../assets/partners/gen2.png';
import gen3 from '../assets/partners/gen3.png';
import gen4 from '../assets/partners/gen4.png';
import gen5 from '../assets/partners/gen5.png';
import gen6 from '../assets/partners/gen6.png';

import health1 from '../assets/partners/health1.png';
import health2 from '../assets/partners/health2.png';
import health3 from '../assets/partners/health3.png';
import health4 from '../assets/partners/health4.png';
import health5 from '../assets/partners/gen6.png';
import health6 from '../assets/partners/gen4.png';

import life1 from '../assets/partners/life1.png';
import life2 from '../assets/partners/life2.png';
import life3 from '../assets/partners/life3.png';
import life4 from '../assets/partners/life4.png';
import life5 from '../assets/partners/life5.png';
import life6 from '../assets/partners/life6.png';

const Partners = () => {
  return (
    <div className="partners-container">
      <h2 className="category-title">GENERAL INSURANCE</h2>
      <div className="logo-grid">
        {[gen1, gen2, gen3, gen4, gen5, gen6].map((img, idx) => (
          <div className="logo-card" key={idx}>
            <img src={img} alt={`General ${idx + 1}`} />
          </div>
        ))}
      </div>

      <h2 className="category-title">HEALTH INSURANCE</h2>
      <div className="logo-grid">
        {[health1, health2, health3, health4, health5, health6].map((img, idx) => (
          <div className="logo-card" key={idx}>
            <img src={img} alt={`Health ${idx + 1}`} />
          </div>
        ))}
      </div>

      <h2 className="category-title">LIFE INSURANCE</h2>
      <div className="logo-grid">
        {[life1, life2, life3, life4, life5, life6].map((img, idx) => (
          <div className="logo-card" key={idx}>
            <img src={img} alt={`Life ${idx + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
