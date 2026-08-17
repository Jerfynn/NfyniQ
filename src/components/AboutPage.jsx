import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Globe, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Terminal, 
  Layers, 
  Activity, 
  Smartphone, 
  Monitor, 
  Sparkles,
  Zap
} from 'lucide-react';

const AboutPage = ({ onNavigateTab }) => {
  const pillars = [
    {
      title: 'In-House Product Development',
      desc: 'We ideate, design, compile, and distribute our own standalone software products and specialized engineering suites with zero reliance on bloated third-party dependencies.'
    },
    {
      title: 'Multidisciplinary Software Engineering',
      desc: 'Our engineering stack spans across high-performance C++ desktop runtimes, Python automation tooling, native Flutter & Qt GUIs, and modern React web applications.'
    },
    {
      title: 'Hardware-Software Convergence',
      desc: 'We bridge physical sensors, microcontrollers, communication buses (UART/SPI/I2C/RS-485), and hydrophones directly to interactive digital dashboards.'
    },
    {
      title: 'Bespoke Custom Solutions',
      desc: 'We partner directly with research institutions, marine operations, and technology firms to build mission-critical software tailored to unique specifications.'
    }
  ];

  return (
    <div className="page-container about-page-wrapper">
      {/* Top Breadcrumb & In-Page Back Button */}
      <div className="page-top-nav-bar">
        <button className="inpage-back-btn" onClick={() => onNavigateTab('home')}>
          <ArrowLeft size={15} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span>NfyniQ</span> / <span className="active-crumb">About Company</span>
        </div>
      </div>

      {/* Header */}
      <div className="page-header-block">
        <div className="section-badge">Company Profile</div>
        <h1 className="page-title">Engineering Technology. Building Solutions.</h1>
        <p className="page-subtitle">
          A universal technology and product engineering company developing standalone software, intelligent cross-platform applications, and embedded hardware-software systems.
        </p>
      </div>

      {/* Main Narrative Card with Contrast Styling */}
      <div className="about-narrative-card">
        <div className="about-narrative-grid">
          <div className="about-main-text-col">
            <h2 className="about-section-heading">Our Engineering Philosophy</h2>
            <p className="about-para">
              NfyniQ was established with a singular focus: to engineer reliable, high-performance technology products and custom software solutions designed for demanding, real-world environments.
            </p>
            <p className="about-para">
              We reject bloated, one-size-fits-all templates. Whether developing a 360° hydro-acoustic scanning workstation, an edge AI quantization studio for microcontrollers, a high-throughput parallel downloader, or an ultra-low-latency desktop audio player, our focus remains on raw execution speed, native system integration, and intuitive user ergonomics.
            </p>
            <p className="about-para">
              Beyond our proprietary product line, we provide full-lifecycle engineering services—partnering with teams to build custom web applications, native Android/iOS mobile apps, Qt/C++ desktop software, and embedded device firmware.
            </p>
          </div>

          <div className="about-stats-col">
            <div className="about-stat-box">
              <span className="stat-big-num">4+</span>
              <span className="stat-big-label">Commercial Software Suites</span>
            </div>
            <div className="about-stat-box">
              <span className="stat-big-num">6+</span>
              <span className="stat-big-label">Core Engineering Domains</span>
            </div>
            <div className="about-stat-box">
              <span className="stat-big-num">100%</span>
              <span className="stat-big-label">Proprietary In-House Code</span>
            </div>
          </div>
        </div>
      </div>

      {/* Core Engineering Pillars */}
      <div className="about-pillars-section">
        <h2 className="pillars-section-title">Core Principles of Our Engineering</h2>
        <div className="about-pillars-grid">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="about-pillar-card">
              <div className="pillar-index">0{idx + 1}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Spectrum Strip */}
      <div className="about-tech-spectrum-card">
        <h2 className="spectrum-title">Our Technical Spectrum</h2>
        <p className="spectrum-subtitle">Comprehensive capabilities across all layers of the modern computing stack.</p>
        
        <div className="spectrum-grid">
          <div className="spectrum-item">
            <Globe size={24} className="spectrum-icon" />
            <h4>Web Applications</h4>
            <p>React, TypeScript, Node.js, REST APIs, and responsive real-time cloud dashboards.</p>
          </div>

          <div className="spectrum-item">
            <Smartphone size={24} className="spectrum-icon" />
            <h4>Mobile Systems</h4>
            <p>Native Android (Kotlin), iOS (Swift), and cross-platform Flutter/React Native applications.</p>
          </div>

          <div className="spectrum-item">
            <Monitor size={24} className="spectrum-icon" />
            <h4>Desktop Suites</h4>
            <p>High-compute Qt, QtPy, PySide, C++, and Python native standalone workstations.</p>
          </div>

          <div className="spectrum-item">
            <Cpu size={24} className="spectrum-icon" />
            <h4>Embedded & IoT</h4>
            <p>ARM Cortex-M, STM32, ESP32, sensor telemetry, edge AI INT8 quantization, and hardware bus links.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="service-bottom-cta-banner" style={{ marginTop: '3.5rem' }}>
        <div className="service-bottom-cta-content">
          <h3 className="bottom-cta-heading">Let's Build Together</h3>
          <p className="bottom-cta-subtext">
            Have an engineering challenge or need a custom technology solution developed? Reach out to our team today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              className="btn-cta-primary"
              onClick={() => onNavigateTab('contact')}
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </button>
            <button 
              className="btn-cta-secondary"
              onClick={() => onNavigateTab('products')}
            >
              <span>Explore Products</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
