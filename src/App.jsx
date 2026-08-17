import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import SonarViewer from './components/SonarViewer';
import Contact from './components/Contact';
import { Downloads, Documentation, Showcase, Blog, About, Services } from './components/SubPages';
import { Terminal, ShieldCheck, Heart, Menu, X, CheckCircle, Info, FileText, Download } from 'lucide-react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('hub'); // 'hub', 'services', 'downloads', 'documentation', 'about', 'contact'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleNav = (e) => {
      navigateTo(e.detail);
    };
    window.addEventListener('nav-to-tab', handleNav);
    return () => window.removeEventListener('nav-to-tab', handleNav);
  }, []);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <Services />;
      case 'downloads':
        return <Downloads />;
      case 'documentation':
        return <Documentation />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'hub':
      default:
        return (
          <div className="showcase-container">
            {/* Hero Section */}
            <section className="hero-section" style={{ padding: '2rem 1rem 1.5rem' }}>
              <div className="badge" style={{ background: 'rgba(13, 148, 136, 0.06)', border: '1px solid rgba(13, 148, 136, 0.15)', color: 'var(--teal)' }}>
                <span className="badge-dot" style={{ background: 'var(--teal)', boxShadow: '0 0 8px var(--teal)' }}></span>
                <span>Sonar Suite Release v1.2.3</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
                NfyniQ <span className="accent-text" style={{ background: 'linear-gradient(135deg, var(--teal) 20%, var(--cyan) 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sonar Viewer</span>
              </h1>
              <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
                Professional hydro-acoustic bathymetric scanning, sub-sea pipe mapping, and real-time transducer tracking software compiled for multi-architecture endpoints.
              </p>
            </section>

            {/* DEDICATED HERO MOCKUP SCREEN */}
            <div className="glass" style={{ padding: '4px', borderRadius: '16px', background: 'rgba(15,23,42,0.02)', border: '1px solid rgba(15,23,42,0.06)' }}>
              {/* App Frame Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#ffffff', borderRadius: '12px 12px 0 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', background: '#ef4444', borderRadius: '50%' }}></span>
                  <span style={{ width: '10px', height: '10px', background: '#eab308', borderRadius: '50%' }}></span>
                  <span style={{ width: '10px', height: '10px', background: '#22c55e', borderRadius: '50%' }}></span>
                </div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: '600', color: 'var(--text-secondary)' }}>
                  NfyniQ_Sonar_Viewer_Suite.app
                </span>
                <div style={{ width: '30px' }}></div>
              </div>

              {/* Embedded Live Simulator */}
              <div style={{ padding: '1.25rem', background: 'var(--bg-primary)', borderRadius: '0 0 12px 12px' }}>
                <SonarViewer />
              </div>
            </div>

            {/* TECHNICAL DETAILS GRID */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              
              {/* Key Features */}
              <div className="glass" style={{ padding: '1.75rem' }}>
                <h3 className="panel-title" style={{ '--panel-accent': 'var(--teal)' }}>
                  <CheckCircle size={16} /> Key Features
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '1.25rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li>Circular 360° hydro-acoustic echo scan scopes.</li>
                  <li>Receiver gain & pulse frequency calibrations.</li>
                  <li>Spatial distance measurement overlays (100m-1000m).</li>
                  <li>Live digital wave filters to cancel sea ripples.</li>
                </ul>
              </div>

              {/* System Requirements */}
              <div className="glass" style={{ padding: '1.75rem' }}>
                <h3 className="panel-title" style={{ '--panel-accent': 'var(--teal)' }}>
                  <Info size={16} /> Requirements
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <div><strong>OS Compatibility:</strong> Windows 10/11, macOS 12+, Linux Debian/RedHat</div>
                  <div><strong>Transducer:</strong> Serial USB hydropone module interface</div>
                  <div><strong>Processor:</strong> Dual-Core 2.0 GHz minimum</div>
                  <div><strong>RAM Size:</strong> 4 GB RAM (8 GB recommended)</div>
                </div>
              </div>

              {/* Release Notes */}
              <div className="glass" style={{ padding: '1.75rem' }}>
                <h3 className="panel-title" style={{ '--panel-accent': 'var(--teal)' }}>
                  <FileText size={16} /> Release Notes (v1.2.3)
                </h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '1.25rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <li>Configure digital noise filters to filter sea surface clutter.</li>
                  <li>Support variable distance layout concentric grids.</li>
                  <li>Optimize target echo fade persistence canvas loops.</li>
                </ul>
              </div>

              {/* Quick Docs Uplink */}
              <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 className="panel-title" style={{ '--panel-accent': 'var(--teal)' }}>
                  Deploy Interface
                </h3>
                <button className="download-btn" style={{ width: '100%', background: 'var(--teal)' }} onClick={() => navigateTo('downloads')}>
                  <Download size={14} /> Download Platform Package
                </button>
                
                <div style={{ background: 'var(--bg-tertiary)', padding: '10px', borderRadius: '8px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', border: '1px solid rgba(0,0,0,0.05)', color: 'var(--text-primary)' }}>
                  $ npm install -g @nfyniq/sonar-cli
                </div>
              </div>

            </div>

            {/* Showcase Section */}
            <div style={{ marginTop: '2.5rem' }}>
              <Services />
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <CanvasBackground />

      <div className="app-container">
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="nav-brand-area">
            <div className="nav-logo" onClick={() => navigateTo('hub')}>
              <Terminal className="nav-logo-icon" style={{ stroke: 'var(--teal)' }} />
              <span>NfyniQ</span>
            </div>
          </div>

          <nav className="nav-links">
            <span
              className={`nav-link ${activeTab === 'hub' ? 'active' : ''}`}
              onClick={() => navigateTo('hub')}
            >
              Home
            </span>

            <span
              className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => navigateTo('services')}
            >
              Services
            </span>

            <span
              className={`nav-link ${activeTab === 'downloads' ? 'active' : ''}`}
              onClick={() => navigateTo('downloads')}
            >
              Downloads
            </span>

            <span
              className={`nav-link ${activeTab === 'documentation' ? 'active' : ''}`}
              onClick={() => navigateTo('documentation')}
            >
              Documentation
            </span>

            <span
              className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
              onClick={() => navigateTo('about')}
            >
              About
            </span>

            <span
              className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
              onClick={() => navigateTo('contact')}
            >
              Contact
            </span>
          </nav>

          <button className="cta-button" style={{ color: 'var(--teal)', borderColor: 'rgba(13,148,136,0.2)', background: 'rgba(13,148,136,0.08)' }} onClick={() => navigateTo('contact')}>
            <ShieldCheck size={16} />
            <span>Secure Tunnel</span>
          </button>

          {/* Mobile menu trigger */}
          <button className="mobile-nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </header>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <span className="nav-link" onClick={() => navigateTo('hub')}>Home</span>
          <span className="nav-link" onClick={() => navigateTo('services')}>Services</span>
          <span className="nav-link" onClick={() => navigateTo('downloads')}>Downloads</span>
          <span className="nav-link" onClick={() => navigateTo('documentation')}>Documentation</span>
          <span className="nav-link" onClick={() => navigateTo('about')}>About</span>
          <span className="nav-link" onClick={() => navigateTo('contact')}>Contact</span>
        </div>

        {/* Main Content Area */}
        <main className="main-content">
          {renderContent()}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <span className="footer-brand">NfyniQ Sonar Ecosystem</span>
            <div className="footer-links">
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('services'); }}>Services</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('documentation'); }}>Documentation</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact Link</a>
              <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                Made with <Heart size={12} style={{ fill: 'var(--teal)', stroke: 'none' }} /> for marine nodes
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
