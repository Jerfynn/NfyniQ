import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import SonarViewer from './components/SonarViewer';
import Contact from './components/Contact';
import SearchModal from './components/SearchModal';
import { Downloads, Documentation, Showcase, Blog, About, Services } from './components/SubPages';
import { Terminal, ShieldCheck, Menu, X, CheckCircle, Info, FileText, Download, Search } from 'lucide-react';
import nfyniqLogo from './assets/nfyniq_logo_symbol.jpg';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('hub');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
              <div className="badge" style={{ background: 'rgba(30, 58, 138, 0.05)', border: '1px solid rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>
                <span className="badge-dot" style={{ background: '#0369a1' }}></span>
                <span>Sonar Suite Release v1.0.0</span>
              </div>
              <h1 className="hero-title" style={{ fontSize: '3.2rem', marginBottom: '1rem' }}>
                SonarViewer <span className="accent-text" style={{ background: 'linear-gradient(135deg, #1e3a8a 20%, #0369a1 80%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Suite</span>
              </h1>
              <p className="hero-subtitle" style={{ marginBottom: '2rem' }}>
                Professional hydro-acoustic scanning, obstacle tracking, and real-time transducer sweep analysis software for the Blue Robotics Ping360 scanning sonar.
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
                  SonarViewer.app
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
                

              </div>

            </div>

            </div>

        );
    }
  };

  return (
    <>
      <CanvasBackground />

      <div className={`app-container${darkMode ? ' dark-mode' : ''}`}>
        {/* Navigation Bar */}
        <header className="navbar">
          <div className="nav-brand-area">
            <div className="nav-logo" onClick={() => navigateTo('hub')} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src={nfyniqLogo} alt="NfyniQ Logo" style={{ height: '36px', width: 'auto', display: 'block', borderRadius: '6px' }} />
              <span style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: '800' }}>NfyniQ</span>
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

          <button className="nav-search-trigger" onClick={() => setIsSearchOpen(true)}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Search size={14} style={{ stroke: 'var(--teal)' }} />
              <span>Search...</span>
            </div>
            <span className="search-shortcut">⌘K</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              background: darkMode ? 'rgba(30,58,138,0.25)' : 'rgba(13,27,42,0.04)',
              border: `1px solid ${darkMode ? 'rgba(30,58,138,0.4)' : 'rgba(13,27,42,0.1)'}`,
              borderRadius: '20px', padding: '5px 12px 5px 6px',
              cursor: 'pointer', fontSize: '0.78rem', fontWeight: '600',
              color: darkMode ? '#93c5fd' : '#6b7280',
              transition: 'all 0.2s',
            }}
          >
            {/* Toggle pill */}
            <div style={{
              width: '30px', height: '16px', borderRadius: '8px',
              background: darkMode ? 'linear-gradient(135deg,#1e3a8a,#0369a1)' : 'rgba(13,27,42,0.12)',
              position: 'relative', transition: 'background 0.25s', flexShrink: 0,
            }}>
              <div style={{
                position: 'absolute', top: '2px',
                left: darkMode ? '16px' : '2px',
                width: '12px', height: '12px', borderRadius: '50%',
                background: '#ffffff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                transition: 'left 0.22s cubic-bezier(0.34,1.56,0.64,1)',
              }} />
            </div>
            <span>{darkMode ? 'Dark' : 'Light'}</span>
          </button>

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
            <span className="footer-brand">SonarViewer Project</span>
            <div className="footer-links">
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('services'); }}>Services</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('documentation'); }}>Documentation</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('about'); }}>About</a>
              <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}>Contact Link</a>
            </div>
          </div>
        </footer>
      </div>
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={navigateTo} />
    </>
  );
}

export default App;
