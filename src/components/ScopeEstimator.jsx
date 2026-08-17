import React, { useState } from 'react';
import { 
  Cpu, 
  Monitor, 
  Smartphone, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sliders, 
  Layers, 
  Zap, 
  Send 
} from 'lucide-react';

const ScopeEstimator = ({ onApplyEstimate, onNavigateTab }) => {
  const [platform, setPlatform] = useState('Desktop Software (Qt/C++/Python)');
  const [capability, setCapability] = useState('Real-Time Telemetry & Hardware Visualizer');
  const [timeline, setTimeline] = useState('1 - 3 Months (Standard Release)');

  const platforms = [
    { id: 'desktop', name: 'Desktop Software', sub: 'Qt / C++ / Python / Standalone', icon: <Monitor size={18} /> },
    { id: 'mobile', name: 'Mobile App', sub: 'iOS & Android Native', icon: <Smartphone size={18} /> },
    { id: 'embedded', name: 'Embedded & Edge AI', sub: 'STM32 / ESP32 / ARM MCU', icon: <Cpu size={18} /> },
    { id: 'web', name: 'Web Platform & Cloud', sub: 'React / FastAPI / WebSocket', icon: <Globe size={18} /> }
  ];

  const capabilities = [
    { name: 'Real-Time Telemetry & Hardware Visualizer', desc: 'High-speed swept sensor rendering, RS-232/TCP parsers, and live charts.' },
    { name: 'Neural Model Quantization & Edge Inferencing', desc: 'FP32 to INT8 model optimization for low-power microcontroller deployment.' },
    { name: 'Custom Hardware Driver & Bus Pipeline', desc: 'Zero-latency I2C/SPI/CAN bus protocol handlers and USB-UART interfaces.' },
    { name: 'High-Throughput Media & Stream Processing', desc: 'Parallel segmented chunk downloads, transcoding, and synced LRC lyrics.' },
    { name: 'Full-Lifecycle Turnkey Product Solution', desc: 'End-to-end hardware casing, firmware development, companion UI, and docs.' }
  ];

  const timelines = [
    { label: '< 1 Month', desc: 'Fast-Track Rapid MVP / Proof-of-Concept' },
    { label: '1 - 3 Months', desc: 'Full Commercial Specification & Production Build' },
    { label: '3+ Months', desc: 'Multi-Phase Custom Enterprise Architecture' }
  ];

  const handleGenerateAndTransfer = () => {
    const generatedScope = {
      requirement: platform.includes('Mobile') ? 'Mobile App Development' : 
                   platform.includes('Embedded') ? 'Hardware / IoT Integration' : 
                   platform.includes('Web') ? 'Web Platform / Dashboard' : 'Desktop Software Engineering',
      productOrService: 'Full-Lifecycle Engineering Services',
      message: `[PROJECT SCOPE ESTIMATE]\n• Target Platform: ${platform}\n• Core Capability: ${capability}\n• Desired Timeline: ${timeline}\n\nProject Notes / Custom Requirements:\n`
    };

    if (onApplyEstimate) {
      onApplyEstimate(generatedScope);
    } else {
      sessionStorage.setItem('prefilled-quote', JSON.stringify(generatedScope));
      if (onNavigateTab) {
        onNavigateTab('contact');
      } else {
        window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'contact' }));
      }
    }
  };

  return (
    <div className="estimator-widget-card">
      <div className="estimator-header">
        <div className="estimator-badge">
          <Sliders size={13} />
          <span>Interactive Scope Configurator</span>
        </div>
        <h3 className="estimator-title">Project & Solution Scope Estimator</h3>
        <p className="estimator-desc">
          Configure your technical requirements to generate an instant project architecture profile and send it straight to our lab.
        </p>
      </div>

      <div className="estimator-steps-grid">
        {/* Step 1: Select Platform */}
        <div className="estimator-step-col">
          <span className="estimator-step-num">Step 01</span>
          <h4 className="estimator-step-title">Target Platform</h4>
          <div className="estimator-options-list">
            {platforms.map(p => (
              <div 
                key={p.id}
                className={`estimator-pill-option ${platform.includes(p.name) ? 'selected' : ''}`}
                onClick={() => setPlatform(`${p.name} (${p.sub})`)}
              >
                <div className="option-icon-box">{p.icon}</div>
                <div className="option-text-group">
                  <span className="option-name">{p.name}</span>
                  <span className="option-sub">{p.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Select Capability */}
        <div className="estimator-step-col">
          <span className="estimator-step-num">Step 02</span>
          <h4 className="estimator-step-title">Core Capability</h4>
          <div className="estimator-options-list">
            {capabilities.map((c, idx) => (
              <div 
                key={idx}
                className={`estimator-pill-option ${capability === c.name ? 'selected' : ''}`}
                onClick={() => setCapability(c.name)}
              >
                <div className="option-text-group">
                  <span className="option-name" style={{ fontSize: '0.84rem' }}>{c.name}</span>
                  <span className="option-sub">{c.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Select Timeline */}
        <div className="estimator-step-col">
          <span className="estimator-step-num">Step 03</span>
          <h4 className="estimator-step-title">Target Timeline</h4>
          <div className="estimator-options-list">
            {timelines.map((t, idx) => (
              <div 
                key={idx}
                className={`estimator-pill-option ${timeline.includes(t.label) ? 'selected' : ''}`}
                onClick={() => setTimeline(`${t.label} (${t.desc})`)}
              >
                <div className="option-icon-box"><Clock size={16} /></div>
                <div className="option-text-group">
                  <span className="option-name">{t.label}</span>
                  <span className="option-sub">{t.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estimator Summary Bar & Action */}
      <div className="estimator-summary-bar">
        <div className="estimator-summary-details">
          <span className="summary-label">Configured Architecture Blueprint:</span>
          <div className="summary-tags-row">
            <span className="summary-tag-pill">{platform.split('(')[0]}</span>
            <span className="summary-tag-pill">{capability}</span>
            <span className="summary-tag-pill">{timeline.split('(')[0]}</span>
          </div>
        </div>

        <button className="estimator-submit-btn" onClick={handleGenerateAndTransfer}>
          <span>Transfer Scope to Formal Quote</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default ScopeEstimator;
