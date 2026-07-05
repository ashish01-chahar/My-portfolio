import React, { useState, useEffect } from 'react';
import { ExternalLink, Code2, Terminal as TerminalIcon, FileText, ArrowRight, Award } from 'lucide-react';
import Terminal from '../components/Terminal';
import './Home.css';
import ashishPhoto from '../assets/ashish_photo.jpg';

export default function Home({ setActiveTab }) {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Full-Stack Developer',
    'Java & Python Programmer',
    'DSA Enthusiast',
    'CSE Undergraduate'
  ];

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === activeRole.length) {
      // Pause at the end of typing
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500;
    }

    const timer = setTimeout(() => {
      setText(
        isDeleting
          ? activeRole.substring(0, charIndex - 1)
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="container page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-subtitle">WELCOME TO MY PORTFOLIO</span>
          <h1 className="hero-title">Ashish Chahar</h1>
          <div className="hero-tagline">
            <span>I am a </span>
            <span style={{ color: 'var(--primary-neon)', fontWeight: 600 }}>{text}</span>
            <span className="typing-cursor"></span>
          </div>
          <p className="hero-description">
            B.Tech Computer Science student building robust full-stack applications with Java, Spring Boot, Node.js, and SQL/NoSQL databases. Passionate about software architecture, algorithms, and clean code.
          </p>
          <div className="hero-actions">
            <button onClick={() => setActiveTab('projects')} className="btn-primary">
              View My Work <ArrowRight size={18} />
            </button>
            <a href="mailto:chaharashish121@gmail.com" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="hero-image-wrapper float-element">
            <div className="hero-glow-ring"></div>
            <img
              src={ashishPhoto}
              alt="Ashish Chahar - Software Engineering Student"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section style={{ margin: '60px 0' }}>
        <h2 className="section-title">Coding Profiles</h2>
        <p className="section-desc">Connect with me on Github or follow my problem-solving journey on LeetCode.</p>
        <div className="profiles-grid">
          <a
            href="https://github.com/ashish01-chahar"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card profile-card github"
          >
            <div className="profile-icon-wrapper">
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </div>
            <div className="profile-info">
              <div className="profile-title">GitHub Profile</div>
              <div className="profile-handle">@ashish01-chahar</div>
              <div className="profile-stat">3 Production-Style Projects • Open Source</div>
            </div>
            <ExternalLink size={16} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
          </a>

          <a
            href="https://leetcode.com/Ashish01234"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card profile-card leetcode"
          >
            <div className="profile-icon-wrapper">
              <Code2 size={28} />
            </div>
            <div className="profile-info">
              <div className="profile-title">LeetCode Profile</div>
              <div className="profile-handle">@Ashish01234</div>
              <div className="profile-stat">DSA Problem Solving • Active Coder</div>
            </div>
            <ExternalLink size={16} style={{ marginLeft: 'auto', color: 'var(--text-secondary)' }} />
          </a>
        </div>
      </section>

      {/* Interactive Resume Terminal */}
      <section style={{ margin: '80px 0 40px' }}>
        <h2 className="section-title">Interactive Console</h2>
        <p className="section-desc">
          Are you a developer? Use this terminal workspace to run query commands and fetch my SDE credentials directly.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Terminal />
        </div>
      </section>
    </div>
  );
}
