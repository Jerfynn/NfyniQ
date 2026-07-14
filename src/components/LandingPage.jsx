import React from 'react';
import { Orbit, MessageSquare, Cpu, Radio, Shield, Code, ArrowRight, Waves } from 'lucide-react';

const LandingPage = ({ onSelect }) => {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="badge">
          <span className="badge-dot"></span>
          <span>NfyniQ Core Suite v2.4</span>
        </div>
        <h1 className="hero-title">
          Engineering the <br />
          <span className="accent-text">Next Infinity</span> of Software
        </h1>
        <p className="hero-subtitle">
          A premium developer ecosystem building high-performance low-level integration tools, real-time spatial trackers, and secure communications.
        </p>
      </section>

      {/* Product Cards Grid */}
      <div className="product-grid">
        {/* Card 1: Ground Station */}
        <div
          className="glass glass-interactive product-card"
          style={{ '--card-accent': 'var(--cyan)', '--card-icon-bg': 'rgba(2, 132, 199, 0.05)', '--card-icon-border': 'rgba(2, 132, 199, 0.15)' }}
          onClick={() => onSelect('ground-station')}
        >
          <div className="card-icon-container">
            <Orbit className="float-animation" />
          </div>
          <h2 className="card-title">Ground Station</h2>
          <p className="card-description">
            Live telemetry satellite link controller featuring Canvas-based orbital tracking, real-time plotting, and an interactive command uplink terminal.
          </p>

          <div className="card-preview-area">
            <div className="micro-station">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', borderBottom: '1px solid rgba(2,132,199,0.1)', paddingBottom: '4px' }}>
                <span style={{ color: 'var(--text-primary)' }}>[ LEO-SAT-7 ]</span>
                <span className="pulse-border" style={{ padding: '0 4px', border: '1px solid', borderRadius: '3px', fontSize: '0.6rem', color: 'var(--cyan)' }}>CONNECTED</span>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                412.84 km <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>ALT</span>
              </div>
              <div className="micro-grid">
                <div className="micro-item">AZ: 142.4°</div>
                <div className="micro-item">EL: 34.8°</div>
              </div>
            </div>
          </div>

          <div className="card-action">
            <span>Launch Station Console</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 2: Embedded AI Studio */}
        <div
          className="glass glass-interactive product-card"
          style={{ '--card-accent': 'var(--violet)', '--card-icon-bg': 'rgba(79, 70, 229, 0.05)', '--card-icon-border': 'rgba(79, 70, 229, 0.15)' }}
          onClick={() => onSelect('ai-studio')}
        >
          <div className="card-icon-container">
            <Cpu className="float-animation" />
          </div>
          <h2 className="card-title">Embedded AI Studio</h2>
          <p className="card-description">
            Interactive model quantizer for microcontroller code output. Graph inputs, inspect INT8 vs FP32 stats, and generate optimized C/C++ compiler files.
          </p>

          <div className="card-preview-area">
            <div className="micro-ai">
              <div className="micro-node">IN</div>
              <div className="micro-line"></div>
              <div className="micro-node active">AI</div>
              <div className="micro-line"></div>
              <div className="micro-node">MCU</div>
            </div>
          </div>

          <div className="card-action" style={{ color: 'var(--violet)' }}>
            <span>Enter Studio Workspace</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 3: Texting App */}
        <div
          className="glass glass-interactive product-card"
          style={{ '--card-accent': 'var(--magenta)', '--card-icon-bg': 'rgba(219, 39, 119, 0.05)', '--card-icon-border': 'rgba(219, 39, 119, 0.15)' }}
          onClick={() => onSelect('texting')}
        >
          <div className="card-icon-container">
            <MessageSquare className="float-animation" />
          </div>
          <h2 className="card-title">Secure Texting App</h2>
          <p className="card-description">
            Client-side encrypted message client with real-time dynamic key rotations, matrix character decryption effects, and automated responder bots.
          </p>

          <div className="card-preview-area">
            <div className="micro-texting">
              <div className="micro-bubble left">
                <span>αβγδεζ secure link</span>
              </div>
              <div className="micro-bubble right">
                <span>Handshake confirmed.</span>
              </div>
            </div>
          </div>

          <div className="card-action" style={{ color: 'var(--magenta)' }}>
            <span>Open Chat Client</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 4: Sonar Viewer */}
        <div
          className="glass glass-interactive product-card"
          style={{ '--card-accent': 'var(--teal)', '--card-icon-bg': 'rgba(13, 148, 136, 0.05)', '--card-icon-border': 'rgba(13, 148, 136, 0.15)' }}
          onClick={() => onSelect('sonar-viewer')}
        >
          <div className="card-icon-container">
            <Waves className="float-animation" />
          </div>
          <h2 className="card-title">Sonar Viewer</h2>
          <p className="card-description">
            Underwater acoustic scanning visualizer showing distance concentric rings, targeted echoes, and receiver gain calibrations.
          </p>

          <div className="card-preview-area">
            <div className="micro-sonar">
              <div className="sonar-sweep-bar"></div>
            </div>
          </div>

          <div className="card-action" style={{ color: 'var(--teal)' }}>
            <span>Open Sonar Display</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Card 5: Robotics Tools */}
        <div
          className="glass glass-interactive product-card"
          style={{ '--card-accent': 'var(--violet)', '--card-icon-bg': 'rgba(79, 70, 229, 0.05)', '--card-icon-border': 'rgba(79, 70, 229, 0.15)' }}
          onClick={() => onSelect('robotics')}
        >
          <div className="card-icon-container">
            <Cpu className="float-animation" />
          </div>
          <h2 className="card-title">Robotics Tools</h2>
          <p className="card-description">
            Forward Kinematics 3D link platform simulating joint angles, base rotations, end-effector coords, and auto tracking loop behaviors.
          </p>

          <div className="card-preview-area" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '80%' }}>
              <div style={{ width: '12px', height: '40px', background: 'var(--violet)', borderRadius: '4px' }}></div>
              <div style={{ width: '30px', height: '10px', background: 'var(--cyan)', borderRadius: '4px', transform: 'rotate(-45deg)', transformOrigin: 'left bottom' }}></div>
              <div style={{ width: '25px', height: '8px', background: 'var(--magenta)', borderRadius: '4px', transform: 'rotate(30deg)', transformOrigin: 'left bottom' }}></div>
            </div>
          </div>

          <div className="card-action" style={{ color: 'var(--violet)' }}>
            <span>Run Robotics Deck</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
