import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = 'service_6u2xe4q';
    const templateID = 'template_qcmvgjv';
    const publicKey = 'FF-UszptN7Imi9KVm';

    emailjs.send(
      serviceID,
      templateID,
      {
        title:formData.subject,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      publicKey
    )
    .then(() => {
      setStatus('✅ Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('❌ Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us & Query</h2>
      <p>We'd love to hear from you. Fill out the form below and we'll get back to you soon!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
        {status && <div className="form-status">{status}</div>}
      </form>
    </div>
  );
};

export default Contact;
