import React, { useState, useEffect } from 'react';
import CanvasBackground from './components/CanvasBackground';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ServicesPage from './components/ServicesPage';
import SolutionsPage from './components/SolutionsPage';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import ProductDetailModal from './components/ProductDetailModal';
import { Downloads, Documentation } from './components/SubPages';
import { productsData } from './data/productsData';
import { 
  Terminal, 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  Mail, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Download, 
  BookOpen, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import './App.css';

function App() {
  // Navigation tabs: 'home', 'products', 'services', 'solutions', 'downloads', 'documentation', 'about', 'contact'
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const initialTab = window.location.hash.replace('#', '');
      if (['home', 'products', 'services', 'solutions', 'downloads', 'documentation', 'about', 'contact'].includes(initialTab)) {
        return initialTab;
      }
    }
    return 'home';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [navProgress, setNavProgress] = useState(0);

  // Trigger smooth loading bar on initial mount
  useEffect(() => {
    setNavProgress(30);
    const t1 = setTimeout(() => setNavProgress(75), 100);
    const t2 = setTimeout(() => setNavProgress(100), 250);
    const t3 = setTimeout(() => setNavProgress(0), 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    const handleNav = (e) => {
      navigateTo(e.detail);
    };

    const handleHashAndPopState = (e) => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const validTabs = ['home', 'products', 'services', 'solutions', 'downloads', 'documentation', 'about', 'contact'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      } else {
        setActiveTab('home');
      }
      setMobileMenuOpen(false);
      if (selectedProduct) {
        setSelectedProduct(null);
      }
    };

    window.addEventListener('nav-to-tab', handleNav);
    window.addEventListener('popstate', handleHashAndPopState);
    window.addEventListener('hashchange', handleHashAndPopState);

    return () => {
      window.removeEventListener('nav-to-tab', handleNav);
      window.removeEventListener('popstate', handleHashAndPopState);
      window.removeEventListener('hashchange', handleHashAndPopState);
    };
  }, [selectedProduct]);

  useEffect(() => {
    if (mobileMenuOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, selectedProduct]);

  const navigateTo = (tab) => {
    if (tab !== activeTab) {
      setNavProgress(35);
      setTimeout(() => setNavProgress(80), 80);
      setTimeout(() => setNavProgress(100), 200);
      setTimeout(() => setNavProgress(0), 450);
    }
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (window.location.hash !== '#' + tab) {
      window.history.pushState({ tab }, '', '#' + tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (prodId) => {
    const found = productsData.find(p => p.id === prodId);
    if (found) {
      setSelectedProduct(found);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return (
          <ProductsPage 
            onSelectProduct={(prod) => setSelectedProduct(prod)} 
            onNavigateTab={navigateTo} 
          />
        );
      case 'services':
        return <ServicesPage onNavigateTab={navigateTo} />;
      case 'solutions':
        return (
          <SolutionsPage 
            onNavigateTab={navigateTo} 
            onSelectProductById={handleSelectProductById} 
          />
        );
      case 'downloads':
        return <Downloads />;
      case 'documentation':
        return <Documentation />;
      case 'about':
        return <AboutPage onNavigateTab={navigateTo} />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <HomePage 
            onNavigateTab={navigateTo} 
            onSelectProduct={(prod) => setSelectedProduct(prod)} 
          />
        );
    }
  };

  return (
    <>
      <CanvasBackground />

      <div className="app-container">
        {/* Futuristic Top Loading / Refreshing Progress Bar */}
        <div 
          className="top-loading-bar" 
          style={{ 
            width: `${navProgress}%`, 
            opacity: navProgress > 0 ? 1 : 0,
            transition: navProgress === 0 ? 'opacity 0.25s ease' : 'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease'
          }} 
        />

        {/* Sticky Modern Navbar */}
        <header className="navbar">
          <div className="nav-brand-area" onClick={() => navigateTo('home')}>
            <div className="nav-logo">
              <div className="nav-logo-icon-box">
                <Terminal className="nav-logo-icon" />
              </div>
              <div className="nav-logo-text-group">
                <span className="brand-name">NfyniQ</span>
                <span className="brand-sub">Technologies</span>
              </div>
            </div>
          </div>

          <nav className="nav-links">
            <span
              className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
              onClick={() => navigateTo('home')}
            >
              Home
            </span>

            <span
              className={`nav-link ${activeTab === 'products' ? 'active' : ''}`}
              onClick={() => navigateTo('products')}
            >
              Products
            </span>

            <span
              className={`nav-link ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => navigateTo('services')}
            >
              Services
            </span>

            <span
              className={`nav-link ${activeTab === 'solutions' ? 'active' : ''}`}
              onClick={() => navigateTo('solutions')}
            >
              Solutions
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

          <div className="nav-right-actions">
            <button className="nav-get-in-touch-btn" onClick={() => navigateTo('contact')}>
              <span>Get in Touch</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile menu trigger button */}
            <button 
              className="mobile-nav-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Drawer & Backdrop */}
        <div 
          className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-drawer-links">
            <span className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => navigateTo('home')}>Home</span>
            <span className={`mobile-nav-item ${activeTab === 'products' ? 'active' : ''}`} onClick={() => navigateTo('products')}>Products</span>
            <span className={`mobile-nav-item ${activeTab === 'services' ? 'active' : ''}`} onClick={() => navigateTo('services')}>Services</span>
            <span className={`mobile-nav-item ${activeTab === 'solutions' ? 'active' : ''}`} onClick={() => navigateTo('solutions')}>Solutions</span>
            <span className={`mobile-nav-item ${activeTab === 'downloads' ? 'active' : ''}`} onClick={() => navigateTo('downloads')}>Downloads</span>
            <span className={`mobile-nav-item ${activeTab === 'documentation' ? 'active' : ''}`} onClick={() => navigateTo('documentation')}>Documentation</span>
            <span className={`mobile-nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => navigateTo('about')}>About</span>
            <span className={`mobile-nav-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => navigateTo('contact')}>Contact</span>
          </div>

          <div className="mobile-drawer-footer">
            <button className="btn-primary-accent" style={{ width: '100%', justifyContent: 'center' }} onClick={() => navigateTo('contact')}>
              <span>Get in Touch</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <main className="main-content">
          <div key={activeTab} className="page-transition-wrapper">
            {renderContent()}
          </div>
        </main>

        {/* Global Reusable Product Detail Modal */}
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onNavigateTab={navigateTo}
          />
        )}

        {/* Corporate Universal Footer */}
        <footer className="footer-corporate">
          <div className="footer-container">
            <div className="footer-top-grid">
              {/* Brand Col */}
              <div className="footer-col footer-col-brand">
                <div className="footer-logo" onClick={() => navigateTo('home')}>
                  <Terminal size={20} className="footer-logo-icon" />
                  <span className="footer-brand-title">NfyniQ</span>
                </div>
                <p className="footer-brand-bio">
                  Engineering technology and building custom solutions across desktop software, native mobile apps, web platforms, and embedded microcontrollers.
                </p>
                <div className="footer-email-badge">
                  <Mail size={13} />
                  <a href="mailto:nfyniq@gmail.com">nfyniq@gmail.com</a>
                </div>
              </div>

              {/* Products Col */}
              <div className="footer-col">
                <h4 className="footer-col-title">Products</h4>
                <ul className="footer-links-list">
                  {productsData.map(prod => (
                    <li key={prod.id}>
                      <button 
                        className="footer-link-btn"
                        onClick={() => setSelectedProduct(prod)}
                      >
                        {prod.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Col */}
              <div className="footer-col">
                <h4 className="footer-col-title">Services</h4>
                <ul className="footer-links-list">
                  <li>
                    <button className="footer-link-btn" onClick={() => navigateTo('services')}>
                      Web Development
                    </button>
                  </li>
                  <li>
                    <button className="footer-link-btn" onClick={() => navigateTo('services')}>
                      Mobile Apps (Android & iOS)
                    </button>
                  </li>
                  <li>
                    <button className="footer-link-btn" onClick={() => navigateTo('services')}>
                      Desktop Software (Qt/C++)
                    </button>
                  </li>
                  <li>
                    <button className="footer-link-btn" onClick={() => navigateTo('services')}>
                      Custom Software & IoT Links
                    </button>
                  </li>
                </ul>
              </div>

              {/* Navigation / Resources Col */}
              <div className="footer-col">
                <h4 className="footer-col-title">Navigation</h4>
                <ul className="footer-links-list">
                  <li><button className="footer-link-btn" onClick={() => navigateTo('solutions')}>Industry Solutions</button></li>
                  <li><button className="footer-link-btn" onClick={() => navigateTo('downloads')}>Downloads Hub</button></li>
                  <li><button className="footer-link-btn" onClick={() => navigateTo('documentation')}>Documentation Deck</button></li>
                  <li><button className="footer-link-btn" onClick={() => navigateTo('about')}>About Company</button></li>
                  <li><button className="footer-link-btn" onClick={() => navigateTo('contact')}>Contact & Quotes</button></li>
                </ul>
              </div>
            </div>

            {/* Bottom Copyright Strip */}
            <div className="footer-bottom-bar">
              <div className="footer-copyright-text">
                © {new Date().getFullYear()} NfyniQ Technologies. All rights reserved. Built for mission-critical reliability.
              </div>
              <div className="footer-bottom-tags">
                <span>Desktop</span>
                <span>•</span>
                <span>Mobile</span>
                <span>•</span>
                <span>Web</span>
                <span>•</span>
                <span>Embedded IoT</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
