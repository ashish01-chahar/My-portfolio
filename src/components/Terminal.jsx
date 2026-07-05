import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'welcome', text: 'Welcome to Ashish Chahar\'s Interactive Resume Terminal.' },
    { type: 'welcome', text: 'Type "help" to see a list of available SDE commands.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when history changes
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmedCmd) {
      case 'help':
        response = [
          { type: 'output', text: 'Available commands:' },
          { type: 'help', list: [
            { cmd: 'about', desc: 'Read Ashish\'s professional summary' },
            { cmd: 'skills', desc: 'View complete technical skill stack' },
            { cmd: 'projects', desc: 'Display key project details and repositories' },
            { cmd: 'education', desc: 'View academic and certification details' },
            { cmd: 'socials', desc: 'Show Github, LeetCode, and LinkedIn links' },
            { cmd: 'clear', desc: 'Clear the terminal output screen' }
          ]}
        ];
        break;
      case 'about':
        response = [
          { type: 'output', text: 'Ashish Chahar — B.Tech Computer Science & Engineering Undergraduate (Expected 2027)' },
          { type: 'output', text: 'Results-driven developer with hands-on experience building production-style full-stack applications. Strong foundation in Data Structures, Algorithms, and Object-Oriented programming.' }
        ];
        break;
      case 'skills':
        response = [
          { type: 'output', text: '=== TECHNICAL SKILLS ===' },
          { type: 'output', text: '• Languages:       Java, Python, C' },
          { type: 'output', text: '• Frontend:        HTML5, JavaScript, CSS' },
          { type: 'output', text: '• Backend:         Node.js, Spring Boot, REST APIs' },
          { type: 'output', text: '• Databases:       MySQL, SQL, MongoDB (Mongoose)' },
          { type: 'output', text: '• Auth & Security: JSON Web Token (JWT)' },
          { type: 'output', text: '• Core Concepts:   Data Structures & Algorithms, DBMS, OOP' },
          { type: 'output', text: '• Tools:           Git, GitHub, VS Code, IntelliJ IDEA' }
        ];
        break;
      case 'projects':
        response = [
          { type: 'output', text: '=== PROJECT PORTFOLIO ===' },
          { type: 'output', text: '1. Client Lead Management System (Mini CRM) [Node.js, MongoDB, Mongoose, JWT]' },
          { type: 'output', text: '   -> Repo: https://github.com/ashish01-chahar/CollegeProject' },
          { type: 'output', text: '   -> Features: Streamlined tracking, lead management status workflow, JWT secure admin auth.' },
          { type: 'output', text: '' },
          { type: 'output', text: '2. AI Resume Parser [Spring Boot, MySQL, REST API]' },
          { type: 'output', text: '   -> Repo: https://github.com/ashish01-chahar/Resume-Parser' },
          { type: 'output', text: '   -> Features: Automates extraction of details from resumes, Spring Boot REST API backend.' },
          { type: 'output', text: '' },
          { type: 'output', text: '3. Student Management System [Java, JDBC, MySQL]' },
          { type: 'output', text: '   -> Repo: https://github.com/ashish01-chahar/StudentManagementSystem' },
          { type: 'output', text: '   -> Features: CRUD-based app, optimized SQL queries, core OOP principles.' }
        ];
        break;
      case 'education':
        response = [
          { type: 'output', text: '=== ACADEMICS & CREDENTIALS ===' },
          { type: 'output', text: '• B.Tech in Computer Science & Engineering (Expected 2027)' },
          { type: 'output', text: '  Hindustan College of Science and Technology, Farah, Mathura' },
          { type: 'output', text: '• Senior Secondary (Class XII)' },
          { type: 'output', text: '  Shanti Niketan Public School, Agra' },
          { type: 'output', text: '• Certifications:' },
          { type: 'output', text: '  - Python Programming Language — Mind Luster (2026)' },
          { type: 'output', text: '  - Generative AI — Simplilearn SkillUp (2025)' }
        ];
        break;
      case 'socials':
        response = [
          { type: 'output', text: '=== SOCIAL PROFILES ===' },
          { type: 'output', text: '• GitHub:   https://github.com/ashish01-chahar' },
          { type: 'output', text: '• LeetCode: https://leetcode.com/Ashish01234' },
          { type: 'output', text: '• LinkedIn: https://linkedin.com (Verify link in header)' },
          { type: 'output', text: '• Email:    chaharashish121@gmail.com' },
          { type: 'output', text: '• Phone:    +91 8267055192' }
        ];
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        break;
      default:
        response = [
          { type: 'output', text: `shell: command not found: "${trimmedCmd}". Type "help" for a list of SDE commands.` }
        ];
    }

    setHistory(prev => [
      ...prev,
      { type: 'input', text: cmd },
      ...response
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div className="terminal-container" onClick={handleTerminalClick}>
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-btn red"></div>
          <div className="terminal-btn yellow"></div>
          <div className="terminal-btn green"></div>
        </div>
        <div className="terminal-title">ashish-chahar@sde-workstation: ~</div>
        <div style={{ width: 50 }}></div>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {history.map((line, idx) => {
          if (line.type === 'welcome') {
            return (
              <div key={idx} className="terminal-welcome">
                {line.text}
              </div>
            );
          } else if (line.type === 'input') {
            return (
              <div key={idx} className="terminal-input-line">
                <span className="terminal-prompt">guest@portfolio:~$</span>
                <span>{line.text}</span>
              </div>
            );
          } else if (line.type === 'help') {
            return (
              <div key={idx} style={{ margin: '4px 0 12px 12px' }}>
                {line.list.map((item, keyIdx) => (
                  <div key={keyIdx} className="terminal-help-grid">
                    <span className="terminal-help-cmd">{item.cmd}</span>
                    <span className="terminal-help-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <div key={idx} className="terminal-output-line">
                {line.text}
              </div>
            );
          }
        })}
        <div className="terminal-input-line">
          <span className="terminal-prompt">guest@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
}
