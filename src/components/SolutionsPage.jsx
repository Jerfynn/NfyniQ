import React from 'react';
import { Waves, Cpu, Zap, Activity, Radio, Sparkles, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import ScopeEstimator from './ScopeEstimator';

const SolutionsPage = ({ onNavigateTab, onSelectProductById }) => {
  const solutionsList = [
    {
      id: 'marine-acoustics',
      title: 'Marine Technology & Hydro-Acoustic Systems',
      icon: <Waves size={26} className="solution-head-icon" />,
      desc: 'Sub-sea pipeline inspections, bathymetric seabed mapping, hydrophone array sensor calibrations, and autonomous underwater vehicle (AUV) telemetry tracking.',
      features: [
        '360° Real-time hydro-acoustic polar sweep algorithms',
        'Thermocline layer & surface wave noise cancellation',
        'Direct serial/TCP NMEA transducer communications',
        'Bathymetry survey logging & raw echo playback'
      ],
      associatedProduct: 'Sonar Viewer',
      productId: 'sonar-viewer'
    },
    {
      id: 'embedded-ai',
      title: 'Embedded Systems & Microcontroller Edge AI',
      icon: <Cpu size={26} className="solution-head-icon" />,
      desc: 'Bridging high-level neural networks to low-power edge microcontrollers (ARM Cortex-M, ESP32, STM32) with automatic quantization and peripheral firmware libraries.',
      features: [
        'FP32 to INT8/INT4 weight quantization pipelines',
        'Hardware I2C/SPI sensor discovery & bus scanning',
        'AUV thruster, barometer & magnetic sensor library management',
        'Direct COM/Serial port flashing with zero external dependencies'
      ],
      associatedProduct: 'AI Embedded Studio',
      productId: 'ai-embedded-studio'
    },
    {
      id: 'media-streaming',
      title: 'High-Throughput Media, Audio & Data Pipelines',
      icon: <Zap size={26} className="solution-head-icon" />,
      desc: 'High-speed multi-threaded segmented network download engines, low-latency audio DSP pipelines, bit-perfect gapless crossfades, and real-time synchronized karaoke lyrics.',
      features: [
        'Segmented multi-thread chunk download pipelines',
        'Built-in FFmpeg transcoding & audio/video muxing',
        '10-Band Graphic Equalizer with 32-bit floating DSP',
        'Sub-second real-time timed karaoke lyrics synchronization'
      ],
      associatedProduct: 'NfynDown & NfyniQ Music',
      productId: 'nfyndown'
    },
    {
      id: 'custom-dev',
      title: 'Universal Custom Software & Sensor Integration',
      icon: <Radio size={26} className="solution-head-icon" />,
      desc: 'Full-stack engineering across cross-platform native desktop utilities, mobile companion applications (iOS & Android), industrial sensor drivers, and web analytics dashboards.',
      features: [
        'Multi-platform desktop software (Windows, macOS, Linux)',
        'Native Android and iOS mobile app engineering',
        'Microcontroller firmware and sensor abstraction layers',
        'High-concurrency web portals and WebSocket live telemetry'
      ],
      associatedProduct: null,
      productId: null
    }
  ];

  return (
    <div className="page-container">
      {/* Top Breadcrumb & In-Page Back Button */}
      <div className="page-top-nav-bar">
        <button 
          className="inpage-back-btn" 
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'home' }))}
        >
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span>NfyniQ</span> / <span className="active-crumb">Domain Solutions</span>
        </div>
      </div>

      {/* Header */}
      <div className="page-header-block">
        <div className="section-badge">Domain Applications</div>
        <h1 className="page-title">Specialized Engineering Solutions</h1>
        <p className="page-subtitle">
          Proven domain architectures tailored for hydro-acoustic oceanography, edge AI inferencing, media streaming, and bespoke telemetry systems.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="solutions-detailed-grid">
        {solutionsList.map(sol => (
          <div key={sol.id} className="solution-detailed-card">
            <div className="sol-card-header">
              <div className="sol-icon-box">{sol.icon}</div>
              <h3 className="sol-card-title">{sol.title}</h3>
            </div>
            
            <p className="sol-card-desc">{sol.desc}</p>
            
            <div className="sol-features-block">
              <span className="sol-features-title">Key Architectural Capabilities</span>
              <ul className="sol-features-list">
                {sol.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle size={13} className="sol-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sol-card-footer">
              {sol.productId ? (
                <button 
                  className="sol-prod-btn"
                  onClick={() => onSelectProductById(sol.productId)}
                >
                  <span>Explore {sol.associatedProduct}</span>
                  <ArrowRight size={14} />
                </button>
              ) : (
                <button 
                  className="sol-prod-btn"
                  onClick={() => onNavigateTab('contact')}
                >
                  <span>Discuss Custom Solution</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Scope Estimator Widget */}
      <div style={{ marginTop: '4rem', marginBottom: '3rem' }}>
        <ScopeEstimator onNavigateTab={onNavigateTab} />
      </div>

      {/* Solutions Banner */}
      <div className="service-bottom-cta-banner">
        <div className="service-bottom-cta-content">
          <h3 className="bottom-cta-heading">Require a Custom Domain Architecture?</h3>
          <p className="bottom-cta-subtext">
            Our engineering team can design specialized control software, custom communication drivers, or native analytics applications to match your exact hardware requirements.
          </p>
          <button 
            className="btn-cta-primary"
            onClick={() => onNavigateTab('contact')}
          >
            <span>Request Engineering Consultation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
