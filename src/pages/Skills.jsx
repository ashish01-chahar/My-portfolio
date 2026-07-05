import React, { useState } from 'react';
import { Search, Code2, Cpu, Database, Layout, Settings } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Skills' },
    { id: 'Languages', label: 'Languages' },
    { id: 'Backend', label: 'Backend & Auth' },
    { id: 'Databases', label: 'Databases' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'Tools', label: 'Tools & Core' }
  ];

  const skillData = [
    {
      category: 'Languages',
      icon: <Code2 className="category-icon" size={24} />,
      skills: [
        { name: 'Java', level: 90, levelText: 'Advanced' },
        { name: 'Python', level: 85, levelText: 'Proficient' },
        { name: 'C', level: 75, levelText: 'Intermediate' }
      ]
    },
    {
      category: 'Backend',
      icon: <Cpu className="category-icon" size={24} />,
      skills: [
        { name: 'Node.js', level: 85, levelText: 'Proficient' },
        { name: 'Spring Boot', level: 80, levelText: 'Proficient' },
        { name: 'REST APIs', level: 90, levelText: 'Advanced' },
        { name: 'JSON Web Token (JWT)', level: 85, levelText: 'Proficient' }
      ]
    },
    {
      category: 'Databases',
      icon: <Database className="category-icon" size={24} />,
      skills: [
        { name: 'MySQL', level: 85, levelText: 'Proficient' },
        { name: 'SQL', level: 85, levelText: 'Proficient' },
        { name: 'MongoDB (Mongoose)', level: 80, levelText: 'Proficient' }
      ]
    },
    {
      category: 'Frontend',
      icon: <Layout className="category-icon" size={24} />,
      skills: [
        { name: 'HTML5', level: 90, levelText: 'Advanced' },
        { name: 'JavaScript', level: 85, levelText: 'Proficient' },
        { name: 'CSS3 / Animations', level: 80, levelText: 'Proficient' }
      ]
    },
    {
      category: 'Tools',
      icon: <Settings className="category-icon" size={24} />,
      skills: [
        { name: 'Data Structures & Algorithms', level: 88, levelText: 'Advanced' },
        { name: 'Object-Oriented Programming (OOP)', level: 90, levelText: 'Advanced' },
        { name: 'DBMS Concepts', level: 85, levelText: 'Proficient' },
        { name: 'Git & GitHub', level: 85, levelText: 'Proficient' },
        { name: 'VS Code & IntelliJ IDEA', level: 90, levelText: 'Advanced' }
      ]
    }
  ];

  // Filter skills based on Category and Search Query
  const filteredSkillData = skillData
    .map(group => {
      // Check category match
      const matchesCategory = activeCategory === 'All' || group.category === activeCategory;
      
      // Filter individual skills by search term
      const matchedSkills = group.skills.filter(skill =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return {
        ...group,
        matchesCategory,
        skills: matchedSkills
      };
    })
    // Keep category groups that match category filter and have skills matching search queries
    .filter(group => group.matchesCategory && group.skills.length > 0);

  return (
    <div className="container page-container">
      <div className="skills-header-block">
        <h1 className="section-title" style={{ left: 'auto', transform: 'none' }}>Technical Skills</h1>
        <p className="section-desc">My technical core stacks, databases, frameworks, and tools structured by category.</p>
      </div>

      <div className="search-filter-controls">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="skills-search-input"
            placeholder="Search skills (e.g. Java, SQL, OOP)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={18} />
        </div>

        <div className="skills-filter-tabs">
          {categories.map(tab => (
            <button
              key={tab.id}
              className={`skills-filter-btn ${activeCategory === tab.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filteredSkillData.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '40px 0', color: 'var(--text-secondary)' }}>
          No skills found matching "{searchQuery}"
        </div>
      ) : (
        <div className="skills-categories-grid">
          {filteredSkillData.map((group, groupIdx) => (
            <div key={groupIdx} className="glass-card skill-category-card">
              <div className="category-title-wrapper">
                {group.icon}
                <h3 className="category-title">{group.category}</h3>
              </div>
              <div className="skills-list">
                {group.skills.map((skill, skillIdx) => {
                  const isQueryMatched = searchQuery !== '' && skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <div
                      key={skillIdx}
                      className={`skill-item-container ${isQueryMatched ? 'matched' : ''}`}
                    >
                      <div className="skill-info-row">
                        <span className="skill-name-tag">{skill.name}</span>
                        <span className="skill-level-text">{skill.levelText}</span>
                      </div>
                      <div className="skill-progress-bar-bg">
                        <div
                          className="skill-progress-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
