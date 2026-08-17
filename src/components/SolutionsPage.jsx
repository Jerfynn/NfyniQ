import React from 'react';
import { Waves, Cpu, Zap, Activity, Radio, Sparkles, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

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
        '10-Band graphic equalizer with biquad DSP frequency filters',
        'Real-time lyric synchronization with microsecond seek indexing',
        'FFmpeg audio/video multiplexing & transcoding automation'
      ],
      associatedProduct: 'NfynDown & NfyniQ Music',
      productId: 'nfyndown'
    },
    {
      id: 'robotics-automation',
      title: 'Robotics, Actuator & Industrial Automation',
      icon: <Activity size={26} className="solution-head-icon" />,
      desc: 'Real-time telemetry acquisition, multi-axis motor controllers, robotic thruster test benches, and industrial device configuration utilities.',
      features: [
        'Hardware telemetry monitoring & live mathematical plotting',
        'RS-232/485 serial bus protocols for rugged industrial devices',
        'Automated factory QA test benches & calibration tools',
        'Sub-millisecond latency command uplinks and safety interlocks'
      ],
      associatedProduct: 'Custom Software Solutions',
      productId: null
    },
    {
      id: 'research-labs',
      title: 'Scientific Research, Defense & Custom Instrumentation',
      icon: <Radio size={26} className="solution-head-icon" />,
      desc: 'Bespoke scientific instrumentation software, sensor DAQ workstations, and hardened mission-control software tailored to strict operational protocols.',
      features: [
        'Custom high-performance desktop GUIs in Qt/PySide and C++',
        'Local WebSocket streaming servers for decoupled analysis',
        'Hardware-accelerated rendering of dense datasets',
        'Strict offline execution capabilities for secure air-gapped nodes'
      ],
      associatedProduct: 'Custom Engineering Services',
      productId: null
    }
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="page-header-block">
        <div className="section-badge">Industry Solutions</div>
        <h1 className="page-title">Solutions Built for Demanding Environments</h1>
        <p className="page-subtitle">
          Discover how our software architectures, standalone products, and engineering services solve operational challenges across specialized domains.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="solutions-detailed-grid">
        {solutionsList.map((sol) => (
          <div key={sol.id} className="solution-detailed-card">
            <div className="sol-card-header">
              <div className="sol-icon-box">{sol.icon}</div>
              <h2 className="sol-card-title">{sol.title}</h2>
            </div>

            <p className="sol-card-desc">{sol.desc}</p>

            <div className="sol-features-block">
              <span className="sol-features-title">Technical Capabilities:</span>
              <ul className="sol-features-list">
                {sol.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <CheckCircle size={14} className="sol-check" />
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

      {/* Solutions Banner */}
      <div className="service-bottom-cta-banner" style={{ marginTop: '3rem' }}>
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
