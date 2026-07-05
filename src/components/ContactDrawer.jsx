import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import './ContactDrawer.css';

export default function ContactDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className={`contact-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="contact-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <h2 className="drawer-title">Let's Connect</h2>
          <button className="drawer-close-btn" onClick={onClose} aria-label="Close panel">
            <X size={24} />
          </button>
        </div>

        <div className="drawer-body">
          {/* Quick Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="contact-method-card">
              <Mail size={20} />
              <div className="contact-method-info">
                <div className="contact-method-label">Direct Email</div>
                <a href="mailto:chaharashish121@gmail.com" className="contact-method-value" style={{ textDecoration: 'none' }}>
                  chaharashish121@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method-card">
              <Phone size={20} />
              <div className="contact-method-info">
                <div className="contact-method-label">Phone & WhatsApp</div>
                <a href="tel:+918267055192" className="contact-method-value" style={{ textDecoration: 'none' }}>
                  +91 8267055192
                </a>
              </div>
            </div>

            <div className="contact-method-card">
              <MapPin size={20} />
              <div className="contact-method-info">
                <div className="contact-method-label">Location</div>
                <div className="contact-method-value">Agra, Uttar Pradesh</div>
              </div>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-neon)' }} />

          {/* Form */}
          {isSuccess ? (
            <div className="form-success-message">
              <CheckCircle2 className="form-success-icon" size={48} style={{ margin: '0 auto 12px' }} />
              <h3>Transmission Complete</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: 6 }}>
                Thank you! Your message has been sent successfully. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="I'd love to chat about a potential internship or project..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
                disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
              >
                {isSubmitting ? (
                  <span>Sending Transmission...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
