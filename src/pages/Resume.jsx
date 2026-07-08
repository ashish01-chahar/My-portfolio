import React, { useState } from 'react';
import { FileText, ExternalLink, Download, GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import './Resume.css';

const RESUME_DRIVE_LINK = 'https://docs.google.com/document/d/1NGvsgdsJeUNSPh5E4KFV3uKYrymRMxgD/edit?usp=drive_link&ouid=110773582226323985126&rtpof=true&sd=true';

// Google Docs embed preview URL (converts edit link to embedded preview)
const RESUME_EMBED_URL = 'https://docs.google.com/document/d/1NGvsgdsJeUNSPh5E4KFV3uKYrymRMxgD/preview';

export default function Resume() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="container page-container">
      {/* Hero Section */}
      <section className="resume-hero">
        <h2 className="section-title">My Resume</h2>
        <p className="section-desc">
          A comprehensive overview of my education, skills, projects, and experience.
          View it inline below or open the full document on Google Drive.
        </p>

        <div className="resume-actions">
          <a
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-primary"
            id="resume-view-drive"
          >
            <ExternalLink size={18} />
            Open in Google Drive
          </a>
          <a
            href={RESUME_DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn resume-btn-secondary"
            id="resume-download"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Embedded Resume Viewer */}
      <section className="resume-viewer-section">
        <div className="glass-card resume-viewer-card">
          {/* macOS-style header bar */}
          <div className="resume-viewer-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div className="resume-viewer-dots">
                <span className="resume-viewer-dot red"></span>
                <span className="resume-viewer-dot yellow"></span>
                <span className="resume-viewer-dot green"></span>
              </div>
              <span className="resume-viewer-title">
                <FileText size={16} />
                Ashish_Chahar_Resume.pdf
              </span>
            </div>
            <div className="resume-viewer-badge">
              <span className="resume-viewer-badge-dot"></span>
              Live Preview
            </div>
          </div>

          {/* Iframe with loading state */}
          <div className="resume-iframe-wrapper">
            <div className={`resume-iframe-loading ${iframeLoaded ? 'loaded' : ''}`}>
              <div className="resume-loading-spinner"></div>
              <span className="resume-loading-text">Loading resume...</span>
            </div>
            <iframe
              src={RESUME_EMBED_URL}
              title="Ashish Chahar Resume"
              onLoad={() => setIframeLoaded(true)}
              allow="autoplay"
            />
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="resume-info-grid">
        <div className="glass-card resume-info-card">
          <div className="resume-info-icon">
            <GraduationCap size={24} />
          </div>
          <div className="resume-info-label">Education</div>
          <div className="resume-info-value">B.Tech CSE (2027)</div>
        </div>

        <div className="glass-card resume-info-card">
          <div className="resume-info-icon">
            <Code2 size={24} />
          </div>
          <div className="resume-info-label">Core Skills</div>
          <div className="resume-info-value">Java, Python, React</div>
        </div>

        <div className="glass-card resume-info-card">
          <div className="resume-info-icon">
            <Briefcase size={24} />
          </div>
          <div className="resume-info-label">Focus Area</div>
          <div className="resume-info-value">Full-Stack Dev</div>
        </div>

        <div className="glass-card resume-info-card">
          <div className="resume-info-icon">
            <Award size={24} />
          </div>
          <div className="resume-info-label">Status</div>
          <div className="resume-info-value">Open to SDE Roles</div>
        </div>
      </section>
    </div>
  );
}
