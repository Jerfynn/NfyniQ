import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Monitor, 
  Cpu, 
  CheckCircle, 
  ArrowRight, 
  Code2, 
  Database, 
  Terminal, 
  Radio, 
  Layers, 
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';

const ServicesPage = ({ onNavigateTab }) => {
  const serviceOfferings = [
    {
      id: 'web-dev',
      category: 'Web Engineering',
      title: 'Web Application Development',
      icon: <Globe size={28} className="service-pillar-icon" />,
      tagline: 'Modern, high-performance web platforms and real-time operational portals.',
      description: 'We design and construct scalable, enterprise-grade web applications utilizing modern component frameworks and robust backend services. From complex analytics dashboards to customer-facing platforms, our web solutions are fast, secure, and responsive across every device breakpoint.',
      capabilities: [
        'Modern Responsive Websites & Dynamic Single Page Applications (SPAs)',
        'Component-Driven React & TypeScript Architectures',
        'Scalable Node.js, Express & Python Backend Systems',
        'High-Throughput RESTful & WebSocket Real-Time APIs',
        'Relational (PostgreSQL, MySQL) & NoSQL Database Integration',
        'Interactive Telemetry & Mission-Control Dashboard Development'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Vite', 'REST / WebSockets', 'PostgreSQL / SQLite']
    },
    {
      id: 'mobile-dev',
      category: 'Mobile Engineering',
      title: 'Mobile Application Development',
      icon: <Smartphone size={28} className="service-pillar-icon" />,
      tagline: 'Native and cross-platform mobile solutions for smartphones and tablets.',
      description: 'We engineer intuitive mobile apps for iOS and Android that deliver native responsiveness and fluid touch interactions. Our mobile team specializes in hardware companion applications, field engineering tools, and IoT device controllers that communicate seamlessly over Bluetooth Low Energy, USB, and Wi-Fi.',
      capabilities: [
        'Native Android Application Development (Kotlin / Java)',
        'Native iOS Application Development (Swift / SwiftUI)',
        'High-Performance Cross-Platform Solutions (Flutter & React Native)',
        'Hardware & Sensor Companion Mobile Applications',
        'IoT & Smart Device Remote Control & Telemetry Interfaces',
        'Offline-First Local Data Caching & Synchronization'
      ],
      techStack: ['Flutter', 'Android / Kotlin', 'iOS / Swift', 'React Native', 'BLE / Wi-Fi Sockets']
    },
    {
      id: 'desktop-dev',
      category: 'Desktop Systems',
      title: 'Desktop Software Development',
      icon: <Monitor size={28} className="service-pillar-icon" />,
      tagline: 'High-compute standalone desktop suites built for heavy data processing.',
      description: 'We develop robust native desktop applications designed to operate reliably in low-latency and resource-constrained environments. By leveraging industry-standard GUI frameworks such as Qt and native C++/Python runtimes, our desktop software delivers raw compute throughput with polished, modern user interfaces.',
      capabilities: [
        'Native Cross-Platform Desktop Applications (Windows, macOS, Linux)',
        'Professional Qt, QtPy, PySide, and PyQt Framework Solutions',
        'High-Performance C / C++ Engine & Mathematical Processing',
        'Python Automation, Scientific Computing & Scripting Bridges',
        'Modern React & Electron Desktop Interfaces for Complex Workflows',
        'Self-Contained Standalone Executable Packaging & Inno Setup Installers'
      ],
      techStack: ['Qt Framework', 'PySide / PyQt', 'C / C++', 'Python', 'Electron / React', 'Inno Setup']
    },
    {
      id: 'custom-software',
      category: 'Custom Engineering',
      title: 'Custom Software & Hardware-Software Integration',
      icon: <Cpu size={28} className="service-pillar-icon" />,
      tagline: 'Bridging the physical and digital with tailored embedded and telemetry software.',
      description: 'When standard off-the-shelf software cannot meet your operational specifications, our engineering team designs bespoke solutions tailored directly to your hardware sensors, communication buses, and workflow pipelines.',
      capabilities: [
        'Custom Enterprise Software Tailored to Specific Operational Workflows',
        'Real-Time Sensor Monitoring, Telemetry Acquisition & Plotting Applications',
        'Device Configuration Software & Automated Calibration Utilities',
        'Industrial Machine & Robotic Actuator Control Applications',
        'Hardware-Software Integration across Serial, UART, RS-232/485, I2C & SPI',
        'Automated Test Benches, QA Verification Suites & Flashing Utilities'
      ],
      techStack: ['Embedded C', 'Microcontroller UART', 'TCP/IP Sockets', 'Sensor DAQ', 'Industrial I/O']
    }
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header-block">
        <div className="section-badge">Capabilities & Services</div>
        <h1 className="page-title">Engineering & Technical Services</h1>
        <p className="page-subtitle">
          Comprehensive software development and hardware integration services designed around real-world performance, security, and scalability.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="services-detailed-list">
        {serviceOfferings.map((service, index) => (
          <div key={service.id} className="service-detailed-card">
            <div className="service-card-top-row">
              <div className="service-header-left">
                <div className="service-icon-container">{service.icon}</div>
                <div>
                  <span className="service-category-tag">{service.category}</span>
                  <h2 className="service-main-title">{service.title}</h2>
                  <p className="service-tagline-text">{service.tagline}</p>
                </div>
              </div>
              <div className="service-index-number">0{index + 1}</div>
            </div>

            <p className="service-full-description">{service.description}</p>

            <div className="service-details-grid">
              {/* Capabilities */}
              <div className="service-capabilities-box">
                <h3 className="service-box-title">Key Capabilities</h3>
                <ul className="service-caps-list">
                  {service.capabilities.map((cap, cIdx) => (
                    <li key={cIdx}>
                      <CheckCircle size={15} className="service-cap-check" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies & CTA */}
              <div className="service-tech-box">
                <h3 className="service-box-title">Core Technologies</h3>
                <div className="service-tech-pills">
                  {service.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="service-tech-pill">{tech}</span>
                  ))}
                </div>

                <div className="service-box-cta-wrapper">
                  <button
                    className="btn-primary-accent"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={() => onNavigateTab('contact')}
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final Service CTA */}
      <div className="service-bottom-cta-banner">
        <div className="service-bottom-cta-content">
          <h3 className="bottom-cta-heading">Ready to Engineer Your Solution?</h3>
          <p className="bottom-cta-subtext">
            Whether you need a full standalone desktop tool, a custom mobile companion app, or deep sensor telemetry integration, we are here to build it.
          </p>
          <button 
            className="btn-cta-primary"
            onClick={() => onNavigateTab('contact')}
          >
            <span>Start a Project Discussion</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
