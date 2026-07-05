import React from 'react';
import { ExternalLink, ShieldCheck, Zap, Database, Server } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projectsList = [
    {
      title: 'Client Lead Management System (Mini CRM)',
      category: 'Backend & Web Integration',
      description: 'A full-stack CRM application engineered to streamline lead tracking and status progression for business teams. Designed API-first with secure authorization filters.',
      features: [
        'Built full-stack CRUD handlers to register, filter, and track leads dynamically.',
        'Structured lead pipeline status transitions (New → Contacted → Converted).',
        'Secured application endpoints using JSON Web Token (JWT) authorization headers.',
        'Utilized MongoDB and Mongoose validation schemas for flexible SDE data modeling.'
      ],
      tags: ['Node.js', 'MongoDB', 'Mongoose', 'JWT', 'REST API', 'JavaScript'],
      githubLink: 'https://github.com/ashish01-chahar/CollegeProject',
      icon: <Server size={18} />
    },
    {
      title: 'AI Resume Parser',
      category: 'Spring Boot Application',
      description: 'An AI-ready full-stack resume parsing system that automates the extraction of key candidate attributes (education, contact metadata, skills) to decrease recruitment workflows.',
      features: [
        'Engineered Java Spring Boot REST controller patterns for seamless PDF data ingestion.',
        'Designed database schemas mapping relationships with Hibernate ORM under MySQL.',
        'Constructed intuitive frontend controls to upload, extract, and check parsed resume assets.',
        'Optimized pipeline architecture to run details parser modules in parallel threads.'
      ],
      tags: ['Spring Boot', 'MySQL', 'REST API', 'JavaScript', 'HTML5', 'CSS3'],
      githubLink: 'https://github.com/ashish01-chahar/Resume-Parser',
      icon: <Zap size={18} />
    },
    {
      title: 'Student Management System',
      category: 'Java Core & Database',
      description: 'A Java desktop application that automates academic management workflows, student registrations, enrollment status queries, and report card updates.',
      features: [
        'Constructed robust local GUI frameworks with reliable record management handlers.',
        'Integrated Java Database Connectivity (JDBC) libraries to query local MySQL engines.',
        'Optimized SQL queries to reduce record query latencies and handle bulk updates.',
        'Enforced robust OOP paradigms (inheritance, abstraction layers) for module design.'
      ],
      tags: ['Java', 'JDBC', 'MySQL', 'Relational DB', 'OOP Architecture'],
      githubLink: 'https://github.com/ashish01-chahar/StudentManagementSystem',
      icon: <Database size={18} />
    }
  ];

  return (
    <div className="container page-container">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 className="section-title" style={{ left: 'auto', transform: 'none' }}>Project Showcase</h1>
        <p className="section-desc">A selection of my production-style SDE projects, showcasing backend, database systems, and full-stack integrations.</p>
      </div>

      <div className="projects-grid">
        {projectsList.map((project, idx) => (
          <div key={idx} className="glass-card project-card">
            <div className="project-meta">
              <span className="project-category">{project.category}</span>
              <div className="project-links">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  title="View GitHub Repository"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <ul className="project-features-list">
              {project.features.map((feat, fidx) => (
                <li key={fidx} className="project-feature-item">
                  <ShieldCheck size={16} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tags.map((tag, tidx) => (
                <span key={tidx} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
