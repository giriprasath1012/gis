import React from 'react';
import '../styles/Offers.css';
import Partners from './Partners';

const offersData = [
  {
    title: "MOTOR INSURANCE",
    items: [
      { name: "TWO WHEELER", icon: "🚗" },
      { name: "PRIVATE CAR", icon: "🚙" },
      { name: "PASSENGER CARRIER", icon: "🚌" },
      { name: "GOODS CARRIER", icon: "🚚" },
      { name: "MISCELLANEOUS VEHICLE", icon: "🚛" },
    ]
  },
  {
    title: "NON-MOTOR INSURANCE",
    items: [
      { name: "TRAVEL INSURANCE", icon: "✈️" },
      { name: "FIRE INSURANCE", icon: "🔥" },
      { name: "MARINE INSURANCE", icon: "🚢" },
      { name: "WORKMEN COMPENSATION", icon: "👷" },
      { name: "GROUP PERSONAL ACCIDENT", icon: "🚑" },
    ]
  },
  {
    title: "HEALTH INSURANCE",
    items: [
      { name: "INDIVIDUAL HEALTH", icon: "🧍" },
      { name: "FAMILY FLOATER", icon: "👨‍👩‍👧‍👦" },
      { name: "GROUP HEALTH INSURANCE", icon: "👥" },
      { name: "TOP-UP HEALTH INSURANCE", icon: "⬆️" },
      { name: "CRITICAL ILLNESS CARE COVER", icon: "🏥" },
    ]
  },
  {
    title: "LIFE INSURANCE",
    items: [
      { name: "SAVING PLAN", icon: "💰" },
      { name: "RETIREMENT PLAN", icon: "🧓" },
      { name: "TERM INSURANCE", icon: "📄" },
      { name: "ENDOWMENT PLAN", icon: "📈" },
      { name: "CHILD FUTURE PLAN", icon: "👶" },
    ]
  }
];

const Offers = () => {
  return (
    <div className="offers-page">
      <h2 className="offers-title">WHAT DOES GIS OFFER YOU?</h2>
      <div className="offers-grid">
        {offersData.map((offer, index) => (
          <div key={index} className="offer-card">
            <h3>{offer.title}</h3>
            <ul>
              {offer.items.map((item, idx) => (
                <li key={idx}>
                  <span className="icon">{item.icon}</span> {item.name}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919626166642?text=Hi%20Gowtham,%20I%20am%20interested%20in%20your%20insurance%20services.%20Let%20me%20know%20further%20information%20regarding%20this."
              target="_blank"
              rel="noopener noreferrer"
              className="buy-now-btn"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
      <Partners />
    </div>
  );
};

export default Offers;
