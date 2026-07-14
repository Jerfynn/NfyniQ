import React, { useState } from 'react';
import { Download, Monitor, Search, Sun, Moon, CheckCircle, ArrowRight, Shield, Activity, Settings } from 'lucide-react';

// DOWNLOADS PAGE — Premium OS Card Layout
export const Downloads = () => {
  const [securingId, setSecuringId] = useState(null);

  const handleDownload = (id, url, file) => {
    if (securingId !== null) return;
    setSecuringId(id);
    setTimeout(() => {
      setSecuringId(null);
      const link = document.createElement('a');
      link.href = url;
      link.download = file;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const version = 'v1.0.0';
  const releaseDate = 'January 2026';
  const changelog = [
    'Real-time 360° PPI polar sweep rendering',
    'Obstacle detection with main-bang ringdown exclusion',
    'CSV telemetry logging with timestamped session files',
    'Offline replay mode with play/pause/scrub controls',
    'Amber, Grayscale & Copper colormap LUTs',
    'Built-in sonar simulator — no hardware required',
  ];

  const platforms = [
    {
      os: 'Windows',
      label: 'Windows 10 / 11',
      file: 'SonarViewer_Setup.exe',
      size: '45.4 MB',
      type: 'Setup Installer (Inno Setup)',
      url: '/SonarViewer/SonarViewer_Setup.exe',
      color: '#0078d4',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect x="4" y="4" width="15" height="15" rx="2" fill="#0078d4"/>
          <rect x="21" y="4" width="15" height="15" rx="2" fill="#0078d4" opacity="0.7"/>
          <rect x="4" y="21" width="15" height="15" rx="2" fill="#0078d4" opacity="0.7"/>
          <rect x="21" y="21" width="15" height="15" rx="2" fill="#0078d4" opacity="0.5"/>
        </svg>
      ),
      note: 'Run installer → follow wizard → launch from Start Menu',
    },
    {
      os: 'macOS',
      label: 'macOS 12+ (Apple Silicon & Intel)',
      file: 'sonarviewer-macos-app.zip',
      size: '34.4 MB',
      type: 'Application Bundle (.app in ZIP)',
      url: '/SonarViewer/sonarviewer-macos-app.zip',
      color: '#0078d4',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Apple logo body */}
          <path d="M28.5 21.2c-.05-4.1 3.35-6.1 3.5-6.2-1.9-2.8-4.9-3.2-5.95-3.25-2.55-.25-4.95 1.5-6.25 1.5-1.3 0-3.3-1.45-5.4-1.4-2.8.05-5.35 1.6-6.8 4.1-2.9 5.05-.75 12.55 2.1 16.65 1.4 2.05 3.05 4.3 5.2 4.2 2.1-.1 2.9-1.35 5.45-1.35 2.55 0 3.25 1.35 5.5 1.3 2.25-.05 3.7-2.05 5.1-4.1 1.6-2.35 2.25-4.65 2.3-4.75-.05-.03-4.7-1.8-4.75-6.7z" fill="#888"/>
          {/* Apple leaf */}
          <path d="M24.6 8.5c1.15-1.4 1.95-3.35 1.73-5.3-1.68.07-3.7 1.12-4.9 2.5-1.07 1.22-2.02 3.2-1.77 5.1 1.87.14 3.78-.96 4.94-2.3z" fill="#888"/>
        </svg>
      ),
      note: 'Unzip → drag SonarViewer.app to Applications → Open',
    },
    {
      os: 'Linux',
      label: 'Ubuntu / Debian (amd64)',
      file: 'sonarviewer-linux-deb.zip',
      size: '72.7 MB',
      type: 'Debian Package (.deb in ZIP)',
      url: '/SonarViewer/sonarviewer-linux-deb.zip',
      color: '#0078d4',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Tux penguin — Linux mascot */}
          {/* Body */}
          <ellipse cx="20" cy="26" rx="10" ry="11" fill="#e95420"/>
          {/* White belly */}
          <ellipse cx="20" cy="28" rx="6.5" ry="8" fill="#fff" opacity="0.9"/>
          {/* Head */}
          <circle cx="20" cy="13" r="7" fill="#e95420"/>
          {/* Face white patch */}
          <ellipse cx="20" cy="14.5" rx="4" ry="3.5" fill="#fff" opacity="0.9"/>
          {/* Eyes */}
          <circle cx="17.8" cy="12.5" r="1.3" fill="#1a1a1a"/>
          <circle cx="22.2" cy="12.5" r="1.3" fill="#1a1a1a"/>
          {/* Eye shine */}
          <circle cx="18.2" cy="12.1" r="0.45" fill="#fff"/>
          <circle cx="22.6" cy="12.1" r="0.45" fill="#fff"/>
          {/* Beak */}
          <path d="M18.2 15.5 Q20 17.5 21.8 15.5 Q20 14.5 18.2 15.5Z" fill="#f59e0b"/>
          {/* Wings */}
          <ellipse cx="10.5" cy="25" rx="3.5" ry="7" fill="#c74118" transform="rotate(-10 10.5 25)"/>
          <ellipse cx="29.5" cy="25" rx="3.5" ry="7" fill="#c74118" transform="rotate(10 29.5 25)"/>
          {/* Feet */}
          <ellipse cx="16.5" cy="36.5" rx="4" ry="1.5" fill="#f59e0b"/>
          <ellipse cx="23.5" cy="36.5" rx="4" ry="1.5" fill="#f59e0b"/>
        </svg>
      ),
      note: 'Unzip → sudo dpkg -i *.deb → sonarviewer',
    },
  ];

  return (
    <div className="page-container" style={{ maxWidth: '860px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(4,120,87,0.07)', border: '1px solid rgba(4,120,87,0.2)', color: '#047857', padding: '4px 14px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#047857', display: 'inline-block' }} />
          Stable Release · {version}
        </div>
        <h2 className="page-title" style={{ marginBottom: '0.5rem', fontSize: '2.2rem' }}>Download SonarViewer</h2>
        <p className="page-subtitle" style={{ maxWidth: '500px', margin: '0 auto' }}>
          Cross-platform acoustic sonar suite — compiled, standalone, no Python required.
        </p>
      </div>

      {/* Version Strip */}
      <div className="glass" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.5rem', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div style={{ display: 'flex', align: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[['Version', version], ['Released', releaseDate], ['License', 'MIT'], ['Platforms', 'Win / macOS / Linux']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '2px' }}>{k}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--text-primary)' }}>{v}</div>
            </div>
          ))}
        </div>
        <span style={{ fontSize: '0.72rem', fontWeight: '700', background: 'rgba(4,120,87,0.08)', color: '#047857', border: '1px solid rgba(4,120,87,0.2)', padding: '4px 12px', borderRadius: '20px' }}>
          ✓ Stable Build
        </span>
      </div>

      {/* Platform Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
        {platforms.map((plat, i) => (
          <div
            key={i}
            className="glass"
            style={{ padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap', borderLeft: `4px solid ${plat.color}` }}
          >
            {/* Icon */}
            <div style={{ flexShrink: 0 }}>{plat.icon}</div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.05rem', color: 'var(--text-primary)' }}>{plat.os}</span>
                <span style={{ fontSize: '0.7rem', color: plat.color, fontWeight: '600', background: `${plat.color}12`, border: `1px solid ${plat.color}25`, padding: '2px 8px', borderRadius: '4px' }}>{plat.label}</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)', flexWrap: 'wrap', marginBottom: '6px' }}>
                <span style={{ fontFamily: 'var(--font-mono)' }}>{plat.file}</span>
                <span>·</span>
                <span>{plat.size}</span>
                <span>·</span>
                <span>{plat.type}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', background: 'rgba(13,27,42,0.03)', padding: '4px 10px', borderRadius: '4px', display: 'inline-block' }}>
                $ {plat.note}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={() => handleDownload(i, plat.url, plat.file)}
              disabled={securingId !== null}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '10px 22px',
                background: securingId === i 
                  ? 'linear-gradient(135deg, #0d9488, #0f766e)' 
                  : 'linear-gradient(135deg, #1e3a8a, #0369a1)',
                color: '#ffffff', borderRadius: '8px', border: 'none',
                fontWeight: '700', fontSize: '0.85rem', flexShrink: 0,
                boxShadow: securingId === i 
                  ? '0 4px 14px rgba(13,148,136,0.3)' 
                  : '0 4px 14px rgba(30,58,138,0.25)',
                cursor: securingId !== null ? 'not-allowed' : 'pointer',
                transition: 'all 0.15s, transform 0.15s, box-shadow 0.15s',
              }}
              onMouseOver={e => {
                if (securingId === null) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(30,58,138,0.35)';
                }
              }}
              onMouseOut={e => {
                if (securingId === null) {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(30,58,138,0.25)';
                }
              }}
            >
              {securingId === i ? (
                <>
                  <Shield size={15} style={{ animation: 'pulse-glow 1.5s infinite' }} />
                  <span>Securing Tunnel...</span>
                </>
              ) : (
                <>
                  <Download size={15} />
                  <span>Download</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Changelog */}
      <div className="glass" style={{ padding: '1.75rem 2rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#047857', display: 'inline-block' }} />
          What's in {version}
        </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: 0, listStyle: 'none' }}>
          {changelog.map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <CheckCircle size={14} style={{ color: '#047857', flexShrink: 0, marginTop: '2px' }} />
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

// SERVICES & SOLUTIONS PAGE — Bento Grid with Category Tabs
export const Services = () => {
  const [activeTab, setActiveTab] = React.useState('all');
  const [hovered, setHovered] = React.useState(null);

  const services = [
    {
      id: 'web',
      category: 'software',
      tag: 'Software',
      title: 'Web Development',
      subtitle: 'Full-stack web engineering',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="2" y="6" width="32" height="22" rx="3" stroke="#1e3a8a" strokeWidth="2" fill="rgba(30,58,138,0.07)"/>
          <path d="M2 11h32" stroke="#1e3a8a" strokeWidth="1.5"/>
          <circle cx="7" cy="8.5" r="1" fill="#1e3a8a"/>
          <circle cx="11" cy="8.5" r="1" fill="#0369a1"/>
          <circle cx="15" cy="8.5" r="1" fill="#047857"/>
          <path d="M8 17l4 3.5L8 24" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 24h10" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 33h10" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 33h18" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: '#1e3a8a',
      bg: 'rgba(30,58,138,0.05)',
      border: 'rgba(30,58,138,0.15)',
      desc: 'Modern, responsive web applications and dashboards built from the ground up — custom UI/UX, REST APIs, real-time data feeds, and device control interfaces.',
      features: ['Custom UI/UX Design', 'REST & WebSocket APIs', 'Real-time Dashboard', 'Device Control Panels', 'Cross-browser Compatible'],
      size: 'large',
    },
    {
      id: 'software',
      category: 'software',
      tag: 'Software',
      title: 'Software Development',
      subtitle: 'System & application software',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="3" y="3" width="30" height="30" rx="4" stroke="#0369a1" strokeWidth="2" fill="rgba(3,105,161,0.07)"/>
          <path d="M10 13l-4 5 4 5" stroke="#0369a1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 13l4 5-4 5" stroke="#0369a1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 10l-6 16" stroke="#1e3a8a" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      ),
      color: '#0369a1',
      bg: 'rgba(3,105,161,0.05)',
      border: 'rgba(3,105,161,0.15)',
      desc: 'Low-latency firmware, embedded software, desktop applications, telemetry ingest layers, and custom SDK development for specialized hardware.',
      features: ['Firmware Engineering', 'Desktop Applications', 'Telemetry SDKs', 'Embedded Systems', 'Python / C++ / Rust'],
      size: 'small',
    },
    {
      id: 'robotics-sw',
      category: 'software',
      tag: 'Robotics Software',
      title: 'Robotics Software',
      subtitle: 'Control & navigation stacks',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="10" y="2" width="16" height="12" rx="3" stroke="#047857" strokeWidth="2" fill="rgba(4,120,87,0.07)"/>
          <circle cx="18" cy="8" r="2.5" stroke="#047857" strokeWidth="1.5"/>
          <rect x="6" y="14" width="24" height="16" rx="3" stroke="#047857" strokeWidth="2" fill="rgba(4,120,87,0.05)"/>
          <path d="M2 20h4M30 20h4" stroke="#047857" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="12" cy="22" r="2" fill="#047857"/>
          <circle cx="24" cy="22" r="2" fill="#047857"/>
          <path d="M12 26h12" stroke="#047857" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: '#047857',
      bg: 'rgba(4,120,87,0.05)',
      border: 'rgba(4,120,87,0.15)',
      desc: 'Full control stacks for autonomous robots — navigation algorithms, sensor fusion pipelines, motor controllers, and real-time telemetry dashboards.',
      features: ['ROS / Custom Stacks', 'Sensor Fusion', 'Navigation Algorithms', 'Motor Control', 'Live Telemetry UI'],
      size: 'small',
    },
    {
      id: 'rover',
      category: 'robotics',
      tag: 'Hardware + Software',
      title: 'Land Rover',
      subtitle: 'Autonomous ground vehicle',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="4" y="10" width="28" height="14" rx="3" stroke="#b45309" strokeWidth="2" fill="rgba(180,83,9,0.07)"/>
          <circle cx="9" cy="26" r="4" stroke="#b45309" strokeWidth="2" fill="rgba(180,83,9,0.1)"/>
          <circle cx="27" cy="26" r="4" stroke="#b45309" strokeWidth="2" fill="rgba(180,83,9,0.1)"/>
          <circle cx="9" cy="26" r="1.5" fill="#b45309"/>
          <circle cx="27" cy="26" r="1.5" fill="#b45309"/>
          <path d="M4 17h5l3-5h12l3 5" stroke="#b45309" strokeWidth="1.5"/>
          <rect x="20" y="12" width="6" height="4" rx="1" fill="rgba(180,83,9,0.2)" stroke="#b45309" strokeWidth="1"/>
        </svg>
      ),
      color: '#b45309',
      bg: 'rgba(180,83,9,0.05)',
      border: 'rgba(180,83,9,0.15)',
      desc: 'Rugged autonomous land rovers engineered for terrain navigation, payload delivery, and remote sensing missions with custom sensor mounts and control software.',
      features: ['Terrain Navigation', 'Custom Sensor Mounts', 'Remote Control UI', 'GPS Waypointing', 'Obstacle Avoidance'],
      size: 'small',
    },
    {
      id: 'asv',
      category: 'robotics',
      tag: 'Hardware + Software',
      title: 'ASV — Autonomous Surface Vessel',
      subtitle: 'Unmanned surface vehicle',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4 22 Q18 14 32 22" stroke="#1e3a8a" strokeWidth="2" fill="rgba(30,58,138,0.07)"/>
          <path d="M4 22 Q18 30 32 22" stroke="#0369a1" strokeWidth="1.5" strokeDasharray="3 2"/>
          <rect x="14" y="10" width="8" height="10" rx="2" stroke="#1e3a8a" strokeWidth="1.5" fill="rgba(30,58,138,0.1)"/>
          <path d="M18 4v6" stroke="#1e3a8a" strokeWidth="2" strokeLinecap="round"/>
          <path d="M18 4l6 4" stroke="#0369a1" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M2 26 Q18 32 34 26" stroke="#0369a1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      color: '#1e3a8a',
      bg: 'rgba(30,58,138,0.05)',
      border: 'rgba(30,58,138,0.15)',
      desc: 'Autonomous surface vessels for hydrographic surveys, oceanographic data collection, and water quality monitoring. Integrated with sonar, GPS, and real-time data links.',
      features: ['Hydrographic Survey', 'Sonar Integration', 'GPS Autopilot', 'Real-time Data Link', 'Weatherproof Design'],
      size: 'large',
    },
    {
      id: 'dogbot',
      category: 'robotics',
      tag: 'Hardware + Software',
      title: 'Quadruped Robot Dog',
      subtitle: 'Legged autonomous platform',
      icon: (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="10" y="8" width="16" height="10" rx="3" stroke="#6366f1" strokeWidth="2" fill="rgba(99,102,241,0.07)"/>
          <rect x="22" y="4" width="8" height="6" rx="2" stroke="#6366f1" strokeWidth="1.5" fill="rgba(99,102,241,0.07)"/>
          <circle cx="25" cy="7" r="1" fill="#6366f1"/>
          <path d="M10 18v6M26 18v6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 24l-3 5M10 24l3 5" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M26 24l-3 5M26 24l3 5" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="14" cy="12" r="1.5" fill="#6366f1"/>
        </svg>
      ),
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.05)',
      border: 'rgba(99,102,241,0.15)',
      desc: 'Four-legged autonomous robots with kinematic locomotion control, terrain adaptation, and integrated vision/sensor suites — shipped with full control dashboards.',
      features: ['Kinematic Locomotion', 'Terrain Adaptation', 'Vision & LiDAR', 'Custom Payloads', 'Control Dashboard'],
      size: 'small',
    },
  ];

  const tabs = [
    { id: 'all',      label: 'All Services' },
    { id: 'software', label: 'Software' },
    { id: 'robotics', label: 'Robotics' },
  ];

  const filtered = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  return (
    <div className="page-container" style={{ maxWidth: '960px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(30,58,138,0.06)', border: '1px solid rgba(30,58,138,0.15)', color: '#1e3a8a', padding: '4px 14px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          What We Build
        </div>
        <h2 className="page-title" style={{ marginBottom: '0.75rem', fontSize: '2.2rem' }}>Services & Solutions</h2>
        <p className="page-subtitle" style={{ maxWidth: '560px', margin: '0 auto' }}>
          From full-stack web applications to autonomous robots — we engineer complete hardware-software systems for real-world deployments.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '7px 20px',
              borderRadius: '6px',
              fontSize: '0.82rem',
              fontWeight: '700',
              cursor: 'pointer',
              border: '1px solid',
              transition: 'all 0.18s',
              borderColor: activeTab === tab.id ? '#1e3a8a' : 'rgba(13,27,42,0.1)',
              background: activeTab === tab.id ? 'linear-gradient(135deg, #1e3a8a, #0369a1)' : '#ffffff',
              color: activeTab === tab.id ? '#ffffff' : '#6b7280',
              boxShadow: activeTab === tab.id ? '0 4px 14px rgba(30,58,138,0.25)' : 'none',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', gridAutoRows: 'auto' }}>
        {filtered.map((svc, idx) => {
          const isLarge = svc.size === 'large';
          const isHovered = hovered === svc.id;
          return (
            <div
              key={svc.id}
              style={{
                gridColumn: isLarge ? 'span 2' : 'span 1',
                background: isHovered ? svc.bg : '#ffffff',
                border: `1px solid ${isHovered ? svc.border : 'rgba(13,27,42,0.08)'}`,
                borderRadius: '14px',
                padding: '1.75rem',
                cursor: 'default',
                transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                transform: isHovered ? 'translateY(-4px)' : 'none',
                boxShadow: isHovered ? `0 12px 40px ${svc.color}18` : '0 1px 4px rgba(13,27,42,0.04)',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setHovered(svc.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Subtle top accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${svc.color}, ${svc.color}88)`, opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s' }} />

              {/* Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em', color: svc.color, background: `${svc.color}10`, border: `1px solid ${svc.color}25`, padding: '3px 9px', borderRadius: '4px' }}>
                  {svc.tag}
                </span>
                <div style={{ opacity: isHovered ? 1 : 0.6, transition: 'opacity 0.2s' }}>
                  {svc.icon}
                </div>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: isLarge ? '1.4rem' : '1.1rem', color: '#0d1b2a', lineHeight: '1.2', marginBottom: '0.3rem' }}>
                {svc.title}
              </h3>
              <p style={{ fontSize: '0.75rem', color: svc.color, fontWeight: '600', marginBottom: '0.9rem', letterSpacing: '0.02em' }}>
                {svc.subtitle}
              </p>

              {/* Description */}
              <p style={{ fontSize: '0.85rem', color: '#4b5563', lineHeight: '1.65', marginBottom: '1.25rem' }}>
                {svc.desc}
              </p>

              {/* Feature list */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {svc.features.map((f, fi) => (
                  <span key={fi} style={{ fontSize: '0.72rem', fontWeight: '600', color: isHovered ? svc.color : '#6b7280', background: isHovered ? `${svc.color}08` : 'rgba(13,27,42,0.04)', border: `1px solid ${isHovered ? svc.color + '22' : 'rgba(13,27,42,0.07)'}`, padding: '3px 9px', borderRadius: '20px', transition: 'all 0.2s' }}>
                    {f}
                  </span>
                ))}
              </div>

              {/* Large card watermark icon */}
              {isLarge && (
                <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', opacity: 0.04, pointerEvents: 'none', transform: 'scale(3.5)', transformOrigin: 'bottom right' }}>
                  {svc.icon}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* CTA Strip */}
      <div style={{ marginTop: '3rem', padding: '2.25rem', borderRadius: '14px', background: 'linear-gradient(135deg, #0d1b2a 0%, #1e3a8a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.25rem' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.35rem' }}>Need a Custom System?</h3>
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: '480px', lineHeight: '1.5' }}>
            We scope, design, and build from scratch — software, hardware, or the complete integrated stack. Let's talk.
          </p>
        </div>
        <button
          style={{ padding: '0.7rem 1.75rem', background: '#ffffff', color: '#1e3a8a', border: 'none', borderRadius: '8px', fontWeight: '800', fontSize: '0.88rem', cursor: 'pointer', whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(0,0,0,0.2)', transition: 'transform 0.15s' }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'contact' }))}
        >
          Get in Touch →
        </button>
      </div>
    </div>
  );
};



// MODERN DOCUMENTATION PAGE (Sourced from actual PingViewer codebase)
export const Documentation = () => {
  const [search, setSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState('overview');
  const [darkMode, setDarkMode] = useState(false);

  React.useEffect(() => {
    const handleSetTopic = (e) => { setActiveTopic(e.detail); };
    window.addEventListener('set-doc-topic', handleSetTopic);
    return () => window.removeEventListener('set-doc-topic', handleSetTopic);
  }, []);

  const docTopics = [
    { id: 'overview',    label: 'Overview',               category: 'Getting Started' },
    { id: 'install',     label: 'Installation',           category: 'Getting Started' },
    { id: 'quickstart',  label: 'Quick Start',            category: 'Getting Started' },
    { id: 'transducer',  label: 'Ping360 Hardware Setup', category: 'Hardware' },
    { id: 'network',     label: 'Network & Discovery',    category: 'Hardware' },
    { id: 'protocol',    label: 'Ping Protocol (Binary)', category: 'Developer Reference' },
    { id: 'renderer',    label: 'Sonar Renderer',         category: 'Developer Reference' },
    { id: 'telemetry',   label: 'Telemetry CSV Logging',  category: 'Developer Reference' },
    { id: 'playback',    label: 'Offline Replay Mode',    category: 'Developer Reference' },
  ];

  const filteredTopics = docTopics.filter(t =>
    t.label.toLowerCase().includes(search.toLowerCase())
  );

  const dm = darkMode;
  const C = {
    code:      dm ? { background: '#0d1627', border: '1px solid rgba(255,255,255,0.08)', color: '#e2e8f0' }
                  : { background: '#f1f5f9', border: '1px solid rgba(13,27,42,0.08)', color: '#0d1b2a' },
    badge:     dm ? { background: 'rgba(3,105,161,0.2)', color: '#7dd3fc', border: '1px solid rgba(3,105,161,0.35)' }
                  : { background: 'rgba(30,58,138,0.06)', color: '#1e3a8a', border: '1px solid rgba(30,58,138,0.18)' },
    warn:      dm ? { background: 'rgba(180,83,9,0.15)', border: '1px solid rgba(180,83,9,0.3)', color: '#fdba74' }
                  : { background: 'rgba(255,237,213,0.8)', border: '1px solid rgba(180,83,9,0.2)', color: '#92400e' },
    tip:       dm ? { background: 'rgba(4,120,87,0.15)', border: '1px solid rgba(4,120,87,0.3)', color: '#6ee7b7' }
                  : { background: 'rgba(209,250,229,0.6)', border: '1px solid rgba(4,120,87,0.2)', color: '#065f46' },
    table:     dm ? { background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }
                  : { background: '#ffffff', border: '1px solid rgba(13,27,42,0.08)' },
    tableHead: dm ? { background: '#1e2d45', color: '#93c5fd' } : { background: '#f8fafc', color: '#1e3a8a' },
    tableRow:  dm ? 'rgba(255,255,255,0.03)' : 'rgba(13,27,42,0.02)',
    h3:        dm ? '#f1f5f9' : '#0d1b2a',
    h4:        dm ? '#94a3b8' : '#374151',
    p:         dm ? '#cbd5e1' : '#374151',
    accent:    dm ? '#7dd3fc' : '#1d4ed8',
  };

  const Pre = ({ children }) => (
    <pre style={{ ...C.code, padding: '1rem 1.25rem', borderRadius: '8px', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem', overflowX: 'auto', lineHeight: '1.7', margin: '0.75rem 0', whiteSpace: 'pre' }}>
      {children}
    </pre>
  );
  const Badge = ({ children }) => (
    <span style={{ ...C.badge, padding: '2px 8px', borderRadius: '4px', fontSize: '0.72rem', fontWeight: '700', letterSpacing: '0.04em', display: 'inline-block', marginBottom: '4px' }}>
      {children}
    </span>
  );
  const Note = ({ type = 'tip', children }) => (
    <div style={{ ...(type === 'warn' ? C.warn : C.tip), padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.85rem', lineHeight: '1.5', margin: '0.75rem 0' }}>
      {children}
    </div>
  );
  const Table = ({ headers, rows }) => (
    <div style={{ overflowX: 'auto', margin: '0.75rem 0', borderRadius: '8px', border: C.table.border }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{ ...C.tableHead, padding: '8px 12px', textAlign: 'left', fontWeight: '700', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 1 ? C.tableRow : 'transparent' }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: '8px 12px', color: C.p, borderTop: `1px solid ${dm ? 'rgba(255,255,255,0.05)' : 'rgba(13,27,42,0.06)'}` }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderDocContent = () => {
    const h3 = (t) => <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: '700', fontSize: '1.5rem', marginBottom: '0.5rem', color: C.h3 }}>{t}</h3>;
    const h4 = (t) => <h4 style={{ fontWeight: '700', fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.4rem', color: C.accent }}>{t}</h4>;
    const p  = (t) => <p  style={{ color: C.p, lineHeight: '1.7', marginBottom: '0.5rem', fontSize: '0.9rem' }}>{t}</p>;

    switch (activeTopic) {

      case 'overview': return (<>
        {h3('SonarViewer – Technical Overview')}
        {p('SonarViewer is a high-performance desktop sonar application that interfaces directly with the Blue Robotics Ping360 mechanical scanning sonar. It provides real-time polar sweep visualization, echo profile charting, obstacle tracking, CSV telemetry logging, and offline replay capability.')}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', margin: '1.25rem 0' }}>
          {[
            { label: 'UI Architecture', value: 'Qt 6 Engine' },
            { label: 'Sonar Target',    value: 'Blue Robotics Ping360' },
            { label: 'Protocol',        value: 'Binary Ping Protocol (UDP)' },
            { label: 'Telemetry Log',   value: 'CSV (recordings/)' },
          ].map((item, i) => (
            <div key={i} style={{ background: dm ? 'rgba(255,255,255,0.04)' : 'rgba(13,27,42,0.03)', border: `1px solid ${dm ? 'rgba(255,255,255,0.07)' : 'rgba(13,27,42,0.07)'}`, borderRadius: '8px', padding: '0.75rem 1rem' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.06em', color: C.accent, marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontSize: '0.88rem', fontWeight: '600', color: C.h3 }}>{item.value}</div>
            </div>
          ))}
        </div>
        {h4('Coordinate System')}
        {p('SonarViewer uses a marine-standard orientation on the polar display:')}
        <Pre>{`0°   = DOWN (South)    — vessel bow forward
90°  = RIGHT (East)
180° = UP (North)
270° = LEFT (West)

Angular unit: Gradian (400 grad = 360°)
Conversion:   angle_deg = angle_grad × 0.9`}</Pre>
      </>);

      case 'install': return (<>
        {h3('Installation Guide')}
        {h4('System Requirements')}
        <Table
          headers={['Requirement', 'Minimum', 'Recommended']}
          rows={[
            ['OS',        'Windows 10 / macOS 12 / Ubuntu 20.04', 'Windows 11 / macOS 14 / Ubuntu 22.04'],
            ['RAM',       '4 GB',                                  '8 GB'],
            ['CPU',       'Dual-Core 2.0 GHz',                     'Quad-Core 3.0 GHz'],
            ['Network',   'Ethernet adapter',                      'Gigabit Ethernet (for live sonar)'],
          ]}
        />
        {h4('Setup Instructions')}
        {p('Grab the pre-built standalone binary package from the Downloads page (no external runtimes or Python installation required):')}
        <Pre>{`Windows : SonarViewer_Setup.exe       → Run installer wizard (installs to program files)
macOS   : sonarviewer-macos-app.zip   → Unzip → Drag SonarViewer.app to Applications
Linux   : sonarviewer-linux-deb.zip   → Unzip → Install deb package (sudo dpkg -i *.deb)`}</Pre>
        <Note type="tip">All releases are pre-compiled and bundled with their required runtime libraries. Simply run the installer or launch the standalone executable directly.</Note>
      </>);

      case 'quickstart': return (<>
        {h3('Quick Start')}
        {p('Follow these steps to get a live sonar feed running in under 2 minutes.')}
        {[
          { step: '01', title: 'Connect the Ping360', body: 'Plug the Ping360 into your machine via Ethernet or USB-to-serial adapter. The default link-local IP is 169.254.106.152 on port 12345.' },
          { step: '02', title: 'Launch SonarViewer', body: 'Open the compiled executable. The application auto-starts in Discovery Mode, broadcasting UDP handshakes on port 12345.' },
          { step: '03', title: 'Wait for Discovery', body: 'Within 3 seconds the device list populates. Click the discovered device to connect. The status bar shows Connecting → Connected.' },
          { step: '04', title: 'Adjust Settings', body: 'Use the sidebar sliders to set Gain (0–255), Range (meters), and Step Size (0.9°–7.2°). The polar display updates live.' },
          { step: '05', title: 'Record a Session', body: 'Click the Record button. Scans are saved to the recordings/ folder as timestamped CSV files, one scan line per row.' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', margin: '1rem 0' }}>
            <div style={{ minWidth: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e3a8a, #0369a1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '800', fontSize: '0.75rem', flexShrink: 0 }}>{item.step}</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '0.95rem', color: C.h3, marginBottom: '3px' }}>{item.title}</div>
              <div style={{ fontSize: '0.86rem', color: C.p, lineHeight: '1.5' }}>{item.body}</div>
            </div>
          </div>
        ))}
        <Note type="tip">If the device is not auto-discovered, try manually entering IP <code>169.254.106.152</code> and port <code>12345</code> in the manual connect dialog.</Note>
        {h4('Simulator Mode (No Hardware)')}
        {p('SonarViewer includes a built-in software simulator that mimics the Ping360 response protocol over localhost. It operates in offline mode when no hardware is present:')}
        <Pre>{`Network Simulation Interface:
  Host Address   : 127.0.0.1 (Local loopback)
  Discovery Port : 12345 (UDP Discovery listener)
  Data Port      : 51244 (Simulated Transducer port)

Target Simulation:
  Generates a moving acoustic target profile (e.g. rotating fish)
  at a default range of 3.0 meters.`}</Pre>
        <button 
          className="download-btn" 
          style={{ marginTop: '1rem', background: 'var(--teal)', border: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
          onClick={() => {
            window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'hub' }));
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('configure-simulator', { detail: { action: 'set-ping', value: true } }));
            }, 100);
          }}
        >
          <Activity size={14} /> <span>Launch Live Scope Simulator</span>
        </button>
      </>);

      case 'transducer': return (<>
        {h3('Ping360 Hardware Setup')}
        {p('The Blue Robotics Ping360 is a mechanical 360° scanning sonar that operates by rotating an acoustic transducer to fire directional pulses and measure echo returns.')}
        {h4('Physical Connection')}
        <Table
          headers={['Method', 'Interface', 'Default IP', 'Port']}
          rows={[
            ['Ethernet',        'RJ-45 LAN / Link-Local', '169.254.106.152', '12345'],
            ['USB-Serial Bridge','UART adapter',           '127.0.0.1',       '12345'],
          ]}
        />
        {h4('Operational Parameters')}
        <Pre>{`Gain Settings (hardware):
  0 = Low     (gain < 85 in UI 0–255 scale)
  1 = Medium  (85 ≤ gain < 170)
  2 = High    (gain ≥ 170)

Step Size (gradian units):
  1 grad  = 0.9°  → maximum angular resolution
  2 grad  = 1.8°  → default balanced mode
  8 grad  = 7.2°  → fast wide-sweep mode
  Full revolution = 400 gradians

Sector Sweep (custom arc scanning):
  scan_start_grad : 0–399
  scan_end_grad   : 0–399
  Mode: continuous back-and-forth within sector

  Example — forward hemisphere only:
    start = 50 grad  (45°)
    end   = 250 grad (225°)`}</Pre>
        {h4('Sample Period & Range Formula')}
        {p('Range is controlled by configuring the sample_period register (in 25 ns steps):')}
        <Pre>{`# Range → Sample Period
sample_period = int(range_m × 133.3)   # 25ns steps

# Range back-calculation from device response
range_m = 1500.0 × (num_samples × sample_period × 25e-9) / 2.0

# Speed of sound assumed: 1500 m/s (sea water)
# num_samples: typically 400
# sample_period: 25 ns resolution`}</Pre>
        <Note type="tip">The default transmit frequency is <strong>750 kHz</strong> with a 32 µs pulse duration. These are fixed in the firmware and cannot be changed via software.</Note>
        <Note type="warn">The first 8% of each scan line is the <em>main bang</em> (self-reflection ringdown). SonarViewer automatically ignores this region during obstacle detection to prevent false positives.</Note>
        <div style={{ display: 'flex', gap: '8px', marginTop: '1rem', flexWrap: 'wrap' }}>
          <button 
            className="download-btn" 
            style={{ background: 'var(--teal)', border: 'none', cursor: 'pointer', flex: 1, minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'hub' }));
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('configure-simulator', { detail: { action: 'set-gain', value: 90 } }));
              }, 100);
            }}
          >
            <Settings size={13} /> Apply High Gain (90%)
          </button>
          <button 
            className="download-btn" 
            style={{ background: 'var(--teal)', border: 'none', cursor: 'pointer', flex: 1, minWidth: '160px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            onClick={() => {
              window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'hub' }));
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('configure-simulator', { detail: { action: 'set-range', value: 100 } }));
              }, 100);
            }}
          >
            <Settings size={13} /> Set Range to 100m
          </button>
        </div>
      </>);

      case 'network': return (<>
        {h3('Network Worker & Device Discovery')}
        {p('The NetworkWorker class runs as a background QThread and manages two operating modes: Discovery and Connection.')}
        {h4('Discovery Mode')}
        {p('On startup, the worker broadcasts MSG_DEVICE_ID (0x08FC) packets to both the local subnet and 255.255.255.255 every 3 seconds. Responding devices send back a JSON payload with their connection details:')}
        <Pre>{`broadcast_addr = ("255.255.255.255", 12345)
local_addr     = ("127.0.0.1", 12345)

# Discovery response payload (JSON):
{
  "name" : "Ping360",
  "ip"   : "169.254.106.152",
  "port" : 12345,
  "type" : "Ping360"
}`}</Pre>
        {h4('Connection Mode')}
        {p('Once connected, the worker enters a high-frequency polling loop targeting the Ping360 via the official brping library:')}
        <Pre>{`sonar = Ping360()
sonar.connect_udp(ip, port)
sonar.initialize()

# Per-step polling loop:
sonar.set_gain_setting(gain_setting)        # 0/1/2
sonar.set_sample_period(sample_period)      # 25ns units
sonar.set_number_of_samples(400)
response = sonar.transmitAngle(angle_grad)  # Fire + receive`}</Pre>
        {h4('Thread-Safe Control Commands')}
        <Table
          headers={['cmd_id', 'Parameter', 'Range', 'Unit']}
          rows={[
            ['1', 'Gain',             '0–255',   'UI scale (mapped to 0/1/2 hardware)'],
            ['2', 'Range',            'in cm',   'Converted: range_m = value / 100.0'],
            ['3', 'Scan active',      '0 or 1',  '1 = scanning, 0 = paused'],
            ['4', 'Step size',        'gradians', '1 = 0.9°, 2 = 1.8°, 8 = 7.2°'],
            ['5', 'Scan start angle', '0–399',   'gradians'],
            ['6', 'Scan end angle',   '0–399',   'gradians'],
          ]}
        />
        {h4('Timeout & Reconnect')}
        <Pre>{`timeout_limit = 5.0  # seconds

# If no response received within 5s:
connection_status_changed.emit("Error", "Connection timed out.")
connection_lost.emit()
# Worker drops back to Discovery mode automatically`}</Pre>
      </>);

      case 'protocol': return (<>
        {h3('Ping Protocol (Binary Wire Format)')}
        {p('SonarViewer implements the official Blue Robotics Ping binary protocol for all communication with the Ping360 hardware.')}
        {h4('Packet Structure')}
        <Pre>{`┌──────────┬────────────────────────────────────┬─────────────┐
│ Header   │ Payload                            │ Checksum    │
│ 'B' 'R'  │ len(2B) | msg_id(2B) | src | dst  │ 16-bit sum  │
│ 2 bytes  │ 6 bytes + N payload bytes          │ 2 bytes     │
└──────────┴────────────────────────────────────┴─────────────┘

Total minimum packet size = 10 bytes
Byte order: Little-Endian (<)

Checksum = sum of all bytes from index 2 to end-of-payload (mod 65536)
Start characters 'B', 'R' are excluded from checksum calculation`}</Pre>
        {h4('Message IDs')}
        <Table
          headers={['Constant', 'ID (dec)', 'Direction', 'Description']}
          rows={[
            ['MSG_DEVICE_ID',       '2300', 'Bidirectional', 'Device discovery handshake / metadata'],
            ['MSG_PING360_CMD',     '2606', 'Host → Sonar',  'Transducer motor control + pulse fire command'],
            ['MSG_PING360_PROFILE', '2607', 'Sonar → Host',  'Acoustic echo return profile data'],
          ]}
        />
        {h4('MSG_PING360_CMD Payload (ID 2606)')}
        <Pre>{`struct format: '<BBHHHHHb'  (little-endian)

Offset  Size  Field                 Value
0       1B    mode                  1 (scanning mode)
1       1B    gain_setting          0=Low / 1=Med / 2=High
2       2B    angle_grad            0–399 (target angle)
4       2B    transmit_duration     32 (µs, default)
6       2B    sample_period         int(range_m × 133.3)
8       2B    transmit_frequency    750 (kHz, fixed)
10      2B    number_of_samples     400 (default)
12      1B    transmit              1 (fire pulse)`}</Pre>
        {h4('MSG_PING360_PROFILE Payload (ID 2607)')}
        <Pre>{`struct format: '<BBHHHHIHb' + N sample bytes

Offset  Size  Field
0       1B    device_id
1       1B    device_type
2       2B    number_of_samples
4       2B    transmit_frequency
6       2B    transmit_duration
8       2B    sample_period
10      4B    gain_setting
14      2B    angle_grad
16      NB    samples[0..N-1]   (intensity, uint8 per sample)`}</Pre>
        <Note type="tip">Each sample value is a <strong>uint8 (0–255)</strong> representing the acoustic intensity return at that distance bin. Higher values = stronger echo reflection.</Note>
      </>);

      case 'renderer': return (<>
        {h3('Sonar Renderer (PPI Display)')}
        {p('The SonarRenderer is a custom QWidget implementing a Plan Position Indicator (PPI) polar display — the classic circular "radar" visualization familiar in marine electronics.')}
        {h4('Rendering Architecture')}
        {p('The renderer uses a double-buffered approach: scan data is painted into a fixed 1000×1000 offscreen QImage buffer, which is then scaled and composited onto the visible widget area each frame.')}
        <Pre>{`buffer_size = 1000   # Fixed resolution offscreen buffer
scan_buffer = QImage(1000, 1000, QImage.Format_ARGB32_Premultiplied)

# Each incoming sonar sweep line:
# 1. Convert angle_grad → angle_deg (× 0.9)
# 2. Map sample intensity (0–255) to colormap LUT
# 3. Draw radial line into scan_buffer
# 4. QWidget.update() triggers paintEvent → blit buffer to screen`}</Pre>
        {h4('Available Colormaps (LUT)')}
        <Table
          headers={['Colormap', 'Description', 'Best Use']}
          rows={[
            ['Amber',     'Classic sonar amber-orange palette (r×1.5, g×1.0, b×0.2)',   'General scanning, high contrast'],
            ['Grayscale', 'Linear white-to-black intensity (r=g=b=i)',                   'Target analysis, clean output'],
            ['Copper',    'Warm copper tone (r×1.25, g×0.78, b×0.5)',                    'Geological surveys'],
          ]}
        />
        {h4('Zoom & Pan Controls')}
        <Pre>{`zoom_factor   : 1.0 (default) — range: 0.5× to 10.0×
pan_offset    : QPointF(0, 0)

Mouse scroll  → zoom in/out
Mouse drag    → pan the polar display
Double-click  → reset zoom and pan to default`}</Pre>
        {h4('FPS Tracking')}
        <Pre>{`# FPS is recalculated every second from frame_count:
fps_updated signal → emitted to status bar

# Typical rates:
# Step size 2 grad (1.8°) → ~12–15 FPS sweep completion
# Step size 1 grad (0.9°) → ~6–8 FPS (higher resolution)`}</Pre>
      </>);

      case 'telemetry': return (<>
        {h3('Telemetry CSV Logging')}
        {p('When recording is active, SonarViewer automatically writes every received sonar sweep profile to a CSV file inside the recordings/ directory. Files are named by session timestamp.')}
        {h4('CSV File Format')}
        <Pre>{`recordings/
  └── sonar_2024-01-15_143022.csv
  └── sonar_2024-01-15_151804.csv

Column structure (header row + one row per angular step):
Timestamp, Angle_Degrees, Range_Meters, Gain, Obstacle_Distance_m, Echo_Density, Sample_0 ... Sample_N`}</Pre>
        {h4('Column Definitions')}
        <Table
          headers={['Column', 'Type', 'Description']}
          rows={[
            ['Timestamp',           'ISO 8601 string',  'Wall-clock time of the scan step'],
            ['Angle_Degrees',       'float (0–359.1)',  'Transducer angle (angle_grad × 0.9)'],
            ['Range_Meters',        'float',            'Maximum range of this scan window in meters'],
            ['Gain',                'int (0/1/2)',       'Hardware gain setting (Low/Med/High)'],
            ['Obstacle_Distance_m', 'float or null',    'Nearest detected target above threshold (meters)'],
            ['Echo_Density',        'float 0.0–1.0',    'Ratio of above-threshold samples in the scan line'],
            ['Sample_0..N',         'uint8 (0–255)',     'Raw acoustic intensity returns (400 samples typical)'],
          ]}
        />
        {h4('Obstacle Detection Logic')}
        <Pre>{`# Main-bang exclusion (self-reflection ringdown):
RINGDOWN_SKIP = int(num_samples * 0.08)  # First 8% ignored

# Threshold-based detection (per scan line):
for i in range(RINGDOWN_SKIP, len(samples)):
    if samples[i] > intensity_threshold:
        obstacle_distance_m = range_m * (i / len(samples))
        break  # Record nearest obstacle only`}</Pre>
        <Note type="warn">The <code>Echo_Density</code> field is the fraction of samples (after ringdown zone) that exceed the configured intensity threshold. Values above 0.3 typically indicate a solid object or structure.</Note>
      </>);

      case 'playback': return (<>
        {h3('Offline Replay Mode')}
        {p('SonarViewer can replay any previously recorded CSV session without requiring a physical Ping360 connection. This is useful for post-mission analysis, debugging, and demonstration.')}
        {h4('How to Start Replay')}
        <Pre>{`1. Click the green "Replay Recorded Scan" button on the home panel.
2. A file picker opens — navigate to the recordings/ directory.
3. Select any .csv file recorded by SonarViewer.
4. The PPI display begins rendering the replay frame-by-frame.`}</Pre>
        {h4('Playback Controls')}
        <Table
          headers={['Control', 'Action']}
          rows={[
            ['▶ Play',       'Start or resume playback from current position'],
            ['⏸ Pause',      'Freeze the current frame — display remains visible'],
            ['⏹ Stop',       'End replay and return to live / idle mode'],
            ['Speed slider', 'Adjust playback speed (0.25× to 4× of recorded rate)'],
            ['Scrub bar',    'Jump to any point in the recorded session timeline'],
          ]}
        />
        {h4('Replay Data Pipeline')}
        <Pre>{`CSV row → parse Angle_Degrees, samples[]
        → feed into SonarRenderer.update_scan(angle, samples, range_m)
        → renderer draws onto PPI buffer (same pipeline as live data)
        → QTimer controls inter-frame delay (matches original frame rate)`}</Pre>
        <Note type="tip">You can load replays from any machine — no sonar hardware needed. Share <code>.csv</code> files from field missions for lab review.</Note>
        <button 
          className="download-btn" 
          style={{ marginTop: '1rem', background: 'var(--teal)', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          onClick={() => {
            window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'hub' }));
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('configure-simulator', { detail: { action: 'set-ping', value: false } }));
            }, 100);
          }}
        >
          <Activity size={14} /> <span>Simulate Frame Hold (Pause Sweep)</span>
        </button>
      </>);



      default: return null;
    }
  };

  const categories = [...new Set(docTopics.map(t => t.category))];

  const docThemeStyle = dm
    ? { background: '#090d16', color: '#f8fafc', '--border-muted': 'rgba(255,255,255,0.08)', '--text-primary': '#f8fafc', '--text-secondary': '#94a3b8', '--bg-tertiary': '#0d1527', boxShadow: '0 10px 40px rgba(0,0,0,0.5)', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }
    : { background: '#ffffff', color: '#0d1b2a', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(13,27,42,0.08)', boxShadow: '0 2px 16px rgba(13,27,42,0.06)' };

  return (
    <div className="page-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <h2 className="page-title" style={{ marginBottom: '0.25rem' }}>Documentation Deck</h2>
          <p className="showcase-tagline" style={{ margin: 0 }}>Complete technical reference for SonarViewer — sourced from the actual codebase.</p>
        </div>
        <button
          className="back-button"
          onClick={() => setDarkMode(!darkMode)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: dm ? '#1e293b' : '#ffffff', color: dm ? '#ffffff' : 'var(--text-primary)' }}
        >
          {dm ? <Sun size={14} style={{ stroke: '#fbbf24' }} /> : <Moon size={14} />}
          <span>{dm ? 'Light Docs' : 'Dark Docs'}</span>
        </button>
      </div>

      <div style={docThemeStyle}>
        <div className="doc-layout" style={{ gridTemplateColumns: '240px 1fr', gap: 0 }}>

          {/* Sidebar */}
          <div className="doc-sidebar" style={{ borderRight: `1px solid ${dm ? 'rgba(255,255,255,0.07)' : 'rgba(13,27,42,0.07)'}`, padding: '1.25rem', background: dm ? '#0e172a' : '#f8fafc', minHeight: '560px' }}>
            <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
              <Search size={13} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="contact-input"
                style={{ width: '100%', paddingLeft: '2rem', paddingTop: '6px', paddingBottom: '6px', fontSize: '0.8rem', background: dm ? '#1e293b' : '#ffffff', color: dm ? '#ffffff' : '#0d1b2a', border: dm ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(13,27,42,0.1)', borderRadius: '6px' }}
                placeholder="Search docs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {categories.map(cat => {
              const topics = filteredTopics.filter(t => t.category === cat);
              if (topics.length === 0) return null;
              return (
                <div key={cat} style={{ marginBottom: '1.25rem' }}>
                  <span style={{ display: 'block', fontSize: '0.66rem', fontWeight: '800', letterSpacing: '0.08em', textTransform: 'uppercase', color: dm ? '#475569' : '#9ca3af', marginBottom: '0.4rem', paddingLeft: '0.5rem' }}>{cat}</span>
                  {topics.map(topic => (
                    <span
                      key={topic.id}
                      className={`doc-sidebar-link ${activeTopic === topic.id ? 'active' : ''}`}
                      style={{ display: 'block', fontSize: '0.84rem', padding: '0.38rem 0.6rem', borderRadius: '6px', cursor: 'pointer', fontWeight: activeTopic === topic.id ? '700' : '500', color: activeTopic === topic.id ? (dm ? '#7dd3fc' : '#1e3a8a') : (dm ? '#94a3b8' : '#4b5563'), background: activeTopic === topic.id ? (dm ? 'rgba(3,105,161,0.15)' : 'rgba(30,58,138,0.07)') : 'transparent', marginBottom: '1px', transition: 'all 0.15s' }}
                      onClick={() => setActiveTopic(topic.id)}
                    >
                      {topic.label}
                    </span>
                  ))}
                </div>
              );
            })}
          </div>

          {/* Content */}
          <div className="doc-content" style={{ padding: '2rem 2.5rem', background: dm ? '#090d16' : '#ffffff', minHeight: '560px', overflowY: 'auto' }}>
            {renderDocContent()}
          </div>

        </div>
      </div>
    </div>
  );
};


// SHOWCASE PAGE (Sonar Viewer installations)
export const Showcase = () => {
  const studies = [
    { client: 'Pacific Marine Lab', task: 'Mapped deep ocean trenches down to 1000m using calibrated transducer sonar viewer pings.' },
    { client: 'Oceanic Research Inst', task: 'Filtered out biological wave noise to identify historical shipwreck contours.' },
    { client: 'GeoSurvey Group', task: 'Traced sub-sea telemetry cabling paths with real-time echo-intensity graphs.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Showcase Gallery</h2>
      <p className="page-subtitle">Explore deployed applications of the SonarViewer platform.</p>
      
      <div className="solutions-grid">
        {studies.map((item, index) => (
          <div key={index} className="glass solution-card" style={{ borderLeft: '4px solid var(--teal)', padding: '1.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--teal)' }}>{item.client}</span>
            <p className="solution-text" style={{ marginTop: '0.5rem' }}>{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// BLOG PAGE
export const Blog = () => {
  const posts = [
    { title: 'Calibrating Sub-Sea Sonar Arrays in Real-Time', date: 'July 14, 2026', author: 'SonarViewer Team', excerpt: 'Acoustic scanning grids require noise-cancellation filtering to separate marine biology echoes from wreckage outlines.' },
    { title: 'Filtering Marine Thermoclines in Hydrophone Feeds', date: 'June 30, 2026', author: 'Sonar Labs', excerpt: 'How sudden changes in water temperature distort sound velocity parameters and how to calibrate software filters.' }
  ];

  return (
    <div className="page-container">
      <h2 className="page-title">Marine Tech Blog</h2>
      <p className="page-subtitle">Tech reports and releases from our marine acoustics desk.</p>
      
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div key={index} className="glass blog-card">
            <div className="blog-meta">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            <h3 className="blog-title">{post.title}</h3>
            <p className="blog-excerpt">{post.excerpt}</p>
            <span className="blog-readmore" style={{ color: 'var(--teal)' }}>Read full report <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ABOUT PAGE — Premium Timeline + Mission Design
export const About = () => {
  const [activeNode, setActiveNode] = React.useState(null);

  const timeline = [
    {
      year: 'Early 2025',
      tag: 'Foundation',
      color: '#1e3a8a',
      title: 'Project Inception at NIOT',
      desc: 'NfyniQ was seeded inside the National Institute of Ocean Technology (NIOT) engineering labs. The initial charter: build low-latency acoustic sensor software tightly coupled to edge hardware — no middleware, no abstractions.',
      detail: 'First proof-of-concept: raw UDP socket listener parsing Blue Robotics binary packets at ~1ms latency.'
    },
    {
      year: 'Mid 2025',
      tag: 'Research',
      color: '#0369a1',
      title: 'Ping360 Protocol Reverse Engineering',
      desc: 'Deep-dive into the Blue Robotics Ping protocol binary wire format. Custom serializer/deserializer written from scratch — pack/unpack of MSG_PING360_CMD (2606) and MSG_PING360_PROFILE (2607) message types.',
      detail: 'Achieved sub-millisecond checksum validation and gradian-to-degree coordinate mapping for the 400-sample polar sweep buffer.'
    },
    {
      year: 'Late 2025',
      tag: 'Engineering',
      color: '#0369a1',
      title: 'Sonar Renderer — Double Buffer PPI Engine',
      desc: 'Built the core polar Plan Position Indicator (PPI) canvas using PySide6 QWidget with a 1000×1000 offscreen QImage buffer. Implemented Amber, Grayscale, and Copper colormap LUTs with zoom (0.5×–10×) and pan support.',
      detail: 'FPS tracking loop added — achieves 12–15 sweeps/sec at standard 1.8° step resolution.'
    },
    {
      year: 'Jan 2026',
      tag: 'Release',
      color: '#047857',
      title: 'SonarViewer v1.0.0 — Public Launch',
      desc: 'First stable cross-platform release compiled for Windows (Inno Setup installer), macOS (app bundle), and Linux (Debian .deb package). Ships with real-time PPI display, CSV telemetry logging, obstacle detection, and offline replay.',
      detail: 'PyInstaller single-file .exe — 43.6 MB self-contained. No Python runtime required on target machines.'
    },
    {
      year: 'Mid 2026',
      tag: 'Expansion',
      color: '#1e3a8a',
      title: 'Robotics & Custom Software Division',
      desc: 'NfyniQ expands beyond sonar software into full robotics systems — Autonomous Underwater Vehicles (AUVs), land rovers, and quadruped robot dogs, each shipped with custom control dashboards and telemetry SDKs.',
      detail: 'Integrated software + hardware bundles now available — pre-configured systems ready for immediate field deployment.'
    },
    {
      year: '2026 →',
      tag: 'Roadmap',
      color: '#6366f1',
      title: 'Multi-Array Correlation & Deep Trench Mapping',
      desc: 'Next frontier: multi-hydrophone array beamforming, deep trench bathymetric missions down to 3000m, and acoustic sub-sea communications research in partnership with NIOT field operations.',
      detail: 'Planned: real-time AI-assisted target classification, cloud telemetry sync, and web-based sonar dashboard.'
    },
  ];

  const stats = [
    { value: '360°', label: 'Full-sweep Sonar Coverage' },
    { value: '400', label: 'Samples per Scan Line' },
    { value: '3', label: 'Platforms (Win / Mac / Linux)' },
    { value: '1ms', label: 'Target Packet Latency' },
  ];

  const techStack = [
    'Python 3.10+', 'PySide6 (Qt 6)', 'brping', 'PyInstaller',
    'UDP Sockets', 'QThread', 'QImage Buffer', 'Pillow',
    'InnoSetup', 'Ping360 Protocol', 'CSV Telemetry', 'Gradian Math',
  ];

  const values = [
    { icon: '⚓', title: 'Hardware-First', desc: 'We write software that speaks directly to hardware — no middleware abstractions between our code and the physical sensor.' },
    { icon: '📡', title: 'Real-Time Performance', desc: 'Every system is engineered for low-latency, high-throughput data ingestion. Milliseconds matter in live acoustic scanning.' },
    { icon: '🔬', title: 'Research Rooted', desc: 'Born inside NIOT labs, our tools are validated against real ocean survey conditions, not synthetic benchmarks.' },
    { icon: '🤖', title: 'Full-Stack Robotics', desc: 'From firmware to UI — we design, build, and ship the entire stack. Physical robots, custom software, pre-integrated.' },
  ];

  return (
    <div className="page-container" style={{ maxWidth: '900px', margin: '0 auto' }}>

      {/* ── Hero Mission Block ─────────────────────────────────── */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.8rem', fontWeight: '800', color: 'var(--text-primary)', lineHeight: '1.15', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
          Engineering Software for<br />
          <span style={{ background: 'linear-gradient(135deg, #1e3a8a 20%, #0369a1 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Extreme Environments</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto', lineHeight: '1.7' }}>
          NfyniQ builds high-performance acoustic sensor software and autonomous robotic systems, seeded at the National Institute of Ocean Technology and engineered for real ocean conditions.
        </p>
      </div>

      {/* ── Stat Strip ─────────────────────────────────────────── */}
      <div className="glass" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '4rem', padding: '1.5rem 0', overflow: 'hidden' }}>
        {stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: '0.75rem 1rem', borderRight: i < stats.length - 1 ? '1px solid rgba(13,27,42,0.07)' : 'none' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: '800', color: '#1e3a8a', lineHeight: '1', marginBottom: '4px' }}>{s.value}</div>
            <div style={{ fontSize: '0.72rem', color: '#6b7280', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: '1.3' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Timeline ───────────────────────────────────────────── */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: '#0d1b2a', marginBottom: '0.4rem' }}>Development Chronology</h3>
          <p style={{ color: '#6b7280', fontSize: '0.88rem' }}>From first commit to field deployment</p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Centre vertical spine */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(180deg, #1e3a8a 0%, #0369a1 50%, rgba(30,58,138,0.1) 100%)', transform: 'translateX(-50%)', zIndex: 0 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timeline.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              const isActive = activeNode === idx;
              return (
                <div
                  key={idx}
                  style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'start', position: 'relative', cursor: 'pointer' }}
                  onClick={() => setActiveNode(isActive ? null : idx)}
                >
                  {/* Left slot */}
                  <div style={{ gridColumn: isLeft ? '1' : '3', gridRow: '1', paddingRight: isLeft ? '1.5rem' : 0, paddingLeft: isLeft ? 0 : '1.5rem', textAlign: isLeft ? 'right' : 'left' }}>
                    <div
                      className="glass"
                      style={{
                        padding: '1.25rem 1.5rem',
                        borderRadius: '12px',
                        border: isActive ? `1px solid ${item.color}` : '1px solid rgba(13,27,42,0.08)',
                        boxShadow: isActive ? `0 8px 30px ${item.color}22` : undefined,
                        transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                        transform: isActive ? 'translateY(-2px)' : 'none',
                        textAlign: isLeft ? 'right' : 'left',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', justifyContent: isLeft ? 'flex-end' : 'flex-start', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}30`, padding: '2px 8px', borderRadius: '4px', fontWeight: '700' }}>
                          {item.year}
                        </span>
                        <span style={{ fontSize: '0.65rem', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af' }}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0d1b2a', marginBottom: '0.4rem', lineHeight: '1.3' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                      {isActive && (
                        <div style={{ marginTop: '0.75rem', padding: '0.6rem 0.75rem', background: `${item.color}08`, borderLeft: isLeft ? 'none' : `3px solid ${item.color}`, borderRight: isLeft ? `3px solid ${item.color}` : 'none', borderRadius: '4px', fontSize: '0.78rem', color: item.color, fontWeight: '500', lineHeight: '1.5' }}>
                          {item.detail}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty opposite slot */}
                  <div style={{ gridColumn: isLeft ? '3' : '1', gridRow: '1' }} />

                  {/* Centre dot */}
                  <div style={{ gridColumn: '2', gridRow: '1', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '1.4rem', zIndex: 1 }}>
                    <div style={{
                      width: '18px', height: '18px', borderRadius: '50%',
                      background: isActive ? item.color : '#ffffff',
                      border: `3px solid ${item.color}`,
                      boxShadow: isActive ? `0 0 0 5px ${item.color}22, 0 0 16px ${item.color}55` : `0 0 0 3px ${item.color}15`,
                      transition: 'all 0.25s',
                      flexShrink: 0,
                    }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#9ca3af', marginTop: '2rem' }}>Click any milestone card to expand details</p>
      </div>

      {/* ── Core Values ────────────────────────────────────────── */}
      <div style={{ marginBottom: '4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: '800', color: '#0d1b2a', marginBottom: '0.4rem' }}>Engineering Values</h3>
          <p style={{ color: '#6b7280', fontSize: '0.88rem' }}>What drives every design decision we make</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
          {values.map((v, i) => (
            <div key={i} className="glass" style={{ padding: '1.5rem', borderTop: '3px solid #1e3a8a' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem', lineHeight: '1' }}>{v.icon}</div>
              <h4 style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0d1b2a', marginBottom: '0.4rem' }}>{v.title}</h4>
              <p style={{ fontSize: '0.82rem', color: '#4b5563', lineHeight: '1.6', margin: 0 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tech Stack ─────────────────────────────────────────── */}
      <div className="glass" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.1rem', color: '#0d1b2a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '20px', height: '20px', background: 'linear-gradient(135deg, #1e3a8a, #0369a1)', borderRadius: '4px', display: 'inline-block', flexShrink: 0 }} />
          Technology Stack
        </h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {techStack.map((tech, i) => (
            <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: '600', background: 'rgba(30,58,138,0.05)', border: '1px solid rgba(30,58,138,0.14)', color: '#1e3a8a', padding: '4px 10px', borderRadius: '4px', letterSpacing: '0.02em', transition: 'all 0.15s', cursor: 'default' }}
              onMouseOver={e => { e.currentTarget.style.background = 'rgba(30,58,138,0.1)'; e.currentTarget.style.borderColor = 'rgba(30,58,138,0.3)'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'rgba(30,58,138,0.05)'; e.currentTarget.style.borderColor = 'rgba(30,58,138,0.14)'; }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <div className="glass" style={{ padding: '2.5rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(30,58,138,0.04) 0%, rgba(3,105,161,0.04) 100%)', border: '1px solid rgba(30,58,138,0.12)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: '800', color: '#0d1b2a', marginBottom: '0.5rem' }}>Work With Us</h3>
        <p style={{ fontSize: '0.88rem', color: '#4b5563', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: '1.6' }}>
          Whether you need a custom sonar software stack, an AUV system, or bespoke robotics — let's build it right from the firmware up.
        </p>
        <button
          className="cta-button"
          style={{ margin: '0 auto', cursor: 'pointer', padding: '0.65rem 1.75rem', fontSize: '0.9rem' }}
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'contact' }))}
        >
          Get in Touch →
        </button>
      </div>

    </div>
  );
};

