import React, { useState, useEffect } from 'react';
import { Sun, Moon, Code2, Mail, ExternalLink, GraduationCap, Briefcase, Award } from 'lucide-react';
import CanvasBackground from './components/CanvasBackground';
import ContactDrawer from './components/ContactDrawer';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'skills':
        return <Skills />;
      case 'certifications':
        return <Certifications />;
      case 'projects':
        return <Projects />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-wrapper">
      {/* Interactive Floating Connection Background */}
      <CanvasBackground />

      {/* Glass Navigation Header */}
      <header className="header-nav">
        <div className="container nav-container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); setActiveTab('home'); }}>
            <span className="nav-logo-tag">&lt;</span>
            <span>Ashish.C</span>
            <span className="nav-logo-tag">/&gt;</span>
          </a>

          <div className="nav-right">
            <nav className="nav-links-wrapper">
              <button
                className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => setActiveTab('home')}
              >
                Home
              </button>
              <button
                className={`nav-link ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button
                className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                Projects
              </button>
              <button
                className={`nav-link ${activeTab === 'certifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('certifications')}
              >
                Certifications
              </button>
            </nav>

            <button
              className="nav-btn-icon"
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="nav-hire-btn"
              onClick={() => setIsContactOpen(true)}
            >
              Contact Me
            </button>
          </div>
        </div>
      </header>

      {/* Main Pages Render */}
      <main>
        {renderActivePage()}
      </main>

      {/* Glass shared Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-text">
            © {new Date().getFullYear()} Ashish Chahar. All SDE rights reserved.
          </div>
          
          <div className="status-dot-wrapper">
            <div className="status-dot"></div>
            <span>Available for SDE Internships (B.Tech 2027)</span>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/ashish01-chahar"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="GitHub Profile"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a
              href="https://leetcode.com/Ashish01234"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              title="LeetCode Profile"
            >
              <Code2 size={20} />
            </a>
            <button
              onClick={() => setIsContactOpen(true)}
              className="footer-social-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              title="Send Message"
            >
              <Mail size={20} />
            </button>
          </div>
        </div>
      </footer>

      {/* Contact Drawer Widget */}
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
