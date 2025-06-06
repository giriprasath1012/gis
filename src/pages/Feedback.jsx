import React, { useEffect, useRef, useState } from 'react';
import '../styles/Feedback.css';

const feedbacks = [
  {
    name: 'Saravana Kumar',
    comment:
      "So grateful for the LIC agent's patient guidance and crystal-clear policy explanation! A truly positive experience. 😇 ",
  },
  {
    name: 'Gandhi Mathi',
    comment:
      "Very loyal genuine service provider.. Gowtham has a innate thirst to service humanity.. I personally appreciate his dedication and humbleness.Very trustworthy person... May God bless him for his abundance development...",
  },
  {
    name: 'Gopi Nath',
    comment:
      "Gowtham - i really appreciate your hardwork and dedication.clients are very impressed . You have been consistently exceeding expectations in your role .",
  },
  {
    name: 'Santha Kumar',
    comment:
      "To demonstrate deep knowledge of different insurance products and tailored recommendations based on my personal needs. I appreciated their honesty about what the policy covered and the potential limitations. No pressure tactics were used. They followed up regularly and helped me with the claims process when I needed it the most.",
  },
  {
    name: 'Sai Ram P',
    comment:
      "When we are asking for insurance related doubts, he explains the service clearly in the way that we able to understand."
  },
  {
    name: 'Loganathan Durai',
    comment:
      "Having gud knowledge in LIC policy... Best service provider at madathukulam areas..... I suggest"
  },
];

const Feedback = () => {
  const scrollRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  // Automatically scroll every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % feedbacks.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to selected card
  useEffect(() => {
    const container = scrollRef.current;
    const card = container?.children[centerIndex];
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

      window.scrollTo({ top: window.scrollY, behavior: 'instant' });
    }
  }, [centerIndex]);

  return (
    <div className="feedback-wrapper">
      <h1>CLIENT REVIEW & FEEDBACK</h1>
      <div className="feedback-scroll-container" ref={scrollRef}>
        {feedbacks.map((item, index) => (
          <div
            key={index}
            className={`feedback-card ${index === centerIndex ? 'highlighted' : ''}`}
          >
            <p>{item.comment}</p>
            <h4>{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
