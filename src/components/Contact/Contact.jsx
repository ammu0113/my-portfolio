import React, { useRef, useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import emailjs from '@emailjs/browser';
import './Contact.scss';


const Contact = () => {
  const { personalInfo } = usePortfolio();
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_y8li52g', // Get this from EmailJS dashboard
      'template_e2b8r82', // Get this from EmailJS dashboard
      form.current,
      'bJ3Dl8eOdCmABgH7t' // Get this from EmailJS dashboard
    )
      .then((result) => {
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email</h3>
              <p>{personalInfo.email}</p>
            </div>
            <div className="contact__info-item">
              <i className="fas fa-phone"></i>
              <h3>Phone</h3>
              <p>{personalInfo.phone}</p>
            </div>
            <div className="contact__info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Location</h3>
              <p>{personalInfo.location}</p>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${status}`}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 
               status === 'success' ? 'Message Sent!' : 
               status === 'error' ? 'Try Again' : 
               'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 