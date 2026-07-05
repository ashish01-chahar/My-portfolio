import React from 'react';
import { GraduationCap, Award, CheckCircle, ShieldCheck } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const educationTimeline = [
    {
      date: '2023 - 2027 (Expected)',
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Hindustan College of Science and Technology',
      location: 'Farah, Mathura',
      description: 'Acquiring deep foundational and practical knowledge in software engineering, object-oriented systems, database optimization, algorithms, and web integrations. Maintained excellent coursework records.'
    },
    {
      date: '2021 - 2023',
      title: 'Senior Secondary (Class XII)',
      institution: 'Shanti Niketan Public School',
      location: 'Agra, Uttar Pradesh',
      description: 'Graduated with strong concentrations in Science, Mathematics, and Computer Science concepts, building programming foundations.'
    }
  ];

  const certificationsList = [
    {
      title: 'Python Programming Language',
      provider: 'Mind Luster',
      date: '2026',
      badge: 'Certified Professional'
    },
    {
      title: 'Generative AI Developer Course',
      provider: 'Simplilearn SkillUp',
      date: '2025',
      badge: 'Specialist Certificate'
    }
  ];

  const keyHighlights = [
    'Strong analytical foundation in Data Structures and Algorithms with consistent problem-solving practice.',
    'Built and maintained three comprehensive full-stack projects, successfully deploying features on GitHub.',
    'Fast learner, specialized in designing secure API frameworks using Node.js and Spring Boot.',
    'Self-motivated SDE candidate actively looking for competitive developer internships and entry-level roles.'
  ];

  return (
    <div className="container page-container">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="section-title" style={{ left: 'auto', transform: 'none' }}>Education & Certifications</h1>
        <p className="section-desc">My academic background, specialized training programs, and professional highlights.</p>
      </div>

      <div className="edu-cert-container">
        {/* Education Timeline */}
        <div>
          <h2 className="timeline-section-title">
            <GraduationCap size={24} />
            <span>Academic History</span>
          </h2>
          <div className="timeline-wrapper">
            {educationTimeline.map((edu, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-date">{edu.date}</div>
                <h3 className="timeline-title">{edu.title}</h3>
                <div className="timeline-institution">{edu.institution} | <span style={{fontSize: '0.85rem', fontWeight: 400}}>{edu.location}</span></div>
                <p className="timeline-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Training */}
        <div>
          <h2 className="timeline-section-title">
            <Award size={24} />
            <span>Professional Credentials</span>
          </h2>
          <div className="certs-list">
            {certificationsList.map((cert, idx) => (
              <div key={idx} className="glass-card cert-item-card">
                <div className="cert-icon-wrapper">
                  <Award size={22} />
                </div>
                <div className="cert-details">
                  <h3 className="cert-title">{cert.title}</h3>
                  <div className="cert-provider">{cert.provider} • <span className="cert-date">{cert.date}</span></div>
                </div>
                <div className="badge" style={{fontSize: '0.75rem'}}>
                  {cert.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDE Key Highlights Block */}
      <div className="glass-card highlights-block">
        <h3 className="highlights-title">Core Competency Highlights</h3>
        <div className="highlights-grid">
          {keyHighlights.map((highlight, idx) => (
            <div key={idx} className="highlight-item">
              <CheckCircle className="highlight-bullet" size={18} />
              <p className="highlight-text">{highlight}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
