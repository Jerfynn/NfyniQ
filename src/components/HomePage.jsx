import React, { useState } from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Monitor, 
  Globe, 
  Terminal, 
  ShieldCheck, 
  ChevronRight,
  Download
} from 'lucide-react';
import { productsData } from '../data/productsData';
import FAQSection from './FAQSection';
import NewReleases from './NewReleases';

const HomePage = ({ onNavigateTab, onSelectProduct }) => {
  const [activeHeroTab, setActiveHeroTab] = useState(0);

  const heroProducts = productsData;

  const servicesSummary = [
    {
      icon: <Globe size={24} className="service-icon" />,
      title: 'Web Development',
      desc: 'Modern responsive web applications, React architectures, scalable Node.js backend systems, REST/GraphQL APIs, and high-performance monitoring dashboards.',
      tags: ['React', 'Node.js', 'REST APIs', 'Dashboards']
    },
    {
      icon: <Smartphone size={24} className="service-icon" />,
      title: 'Mobile Application Development',
      desc: 'Native Android and iOS mobile apps, high-performance cross-platform Flutter/React Native solutions, hardware companion apps, and IoT device controllers.',
      tags: ['Android', 'iOS', 'Flutter', 'IoT Control']
    },
    {
      icon: <Monitor size={24} className="service-icon" />,
      title: 'Desktop Software Development',
      desc: 'Native high-throughput desktop software developed with Qt, QtPy, PySide, PyQt, Python, C++, and React/Electron for mission-critical operations.',
      tags: ['Qt / PySide', 'C / C++', 'Python', 'Cross-Platform']
    },
    {
      icon: <Cpu size={24} className="service-icon" />,
      title: 'Custom Software & IoT Integration',
      desc: 'Specialized enterprise telemetry, industrial device configuration tools, automated test benches, and deep hardware-software firmware integrations.',
      tags: ['Telemetry', 'Hardware Links', 'Embedded', 'Automation']
    }
  ];

  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <section className="hero-universal">
        <div className="hero-content-wrapper">
          <div className="hero-text-col">
            <div className="hero-pill-badge">
              <span className="hero-pill-dot"></span>
              <span>Products • Software • Engineering Services</span>
            </div>

            <h1 className="hero-headline">
              Software built for<br />
              <span className="gradient-accent-text">real-world work.</span>
            </h1>

            <p className="hero-subtext">
              NfyniQ builds practical software products and custom engineering tools for teams working across desktop, web, mobile, and embedded systems.
            </p>

            <div className="hero-cta-group">
              <button 
                className="btn-primary-accent"
                onClick={() => {
                  const prodSection = document.getElementById('products-section');
                  if (prodSection) prodSection.scrollIntoView({ behavior: 'smooth' });
                  else onNavigateTab('products');
                }}
              >
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>

              <button 
                className="btn-secondary-outline"
                onClick={() => onNavigateTab('services')}
              >
                <span>Our Services</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="hero-metrics-bar">
              <div className="metric-item">
                <span className="metric-value">{productsData.length}</span>
                <span className="metric-label">Software Suites</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-value">4</span>
                <span className="metric-label">Ways to work together</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-value">Custom</span>
                <span className="metric-label">Engineering solutions</span>
              </div>
            </div>
          </div>

          {/* Hero Interactive Technology Ecosystem Showcase */}
          <div className="hero-showcase-col">
            <div className="showcase-window-frame">
              {/* Window Titlebar */}
              <div className="showcase-titlebar">
                <div className="window-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="window-title-text">
                  NfyniQ Ecosystem — {heroProducts[activeHeroTab]?.name}
                </span>
                <span className="window-badge-tag">{heroProducts[activeHeroTab]?.category}</span>
              </div>

              {/* Product Tabs Header */}
              <div className="showcase-tab-bar">
                {heroProducts.map((prod, idx) => (
                  <button
                    key={prod.id}
                    className={`showcase-tab-btn ${activeHeroTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveHeroTab(idx)}
                  >
                    <span>{prod.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Product Preview Screen */}
              <div className="showcase-preview-screen">
                <img 
                  src={heroProducts[activeHeroTab]?.image} 
                  alt={heroProducts[activeHeroTab]?.name} 
                  className="showcase-screenshot-img"
                />
                
                <div className="showcase-floating-caption">
                  <div className="caption-text-area">
                    <span className="caption-title">{heroProducts[activeHeroTab]?.name}</span>
                    <span className="caption-tagline">{heroProducts[activeHeroTab]?.tagline}</span>
                  </div>
                  <button 
                    className="caption-view-btn"
                    onClick={() => onSelectProduct(heroProducts[activeHeroTab])}
                  >
                    <span>Inspect</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1b. JUST RELEASED SPOTLIGHT */}
      <NewReleases onSelectProduct={onSelectProduct} />

      {/* 2. DEDICATED PRODUCTS SECTION (EQUAL 4-PRODUCT GRID) */}
      <section id="products-section" className="section-container products-section-block">
        <div className="section-header-centered">
          <div className="section-badge">Technology Products</div>
          <h2 className="section-title">Engineered Products & Platforms</h2>
          <p className="section-subtitle">
            A focused collection of tools for communication, productivity, media, and technical workflows.
          </p>
        </div>

        <div className="products-grid-four">
          {productsData.map((prod, index) => (
            <div key={prod.id} className="product-card-corporate">
              {/* Product Thumbnail */}
              <div className="prod-card-media-wrap">
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="prod-card-thumb-img"
                />
                <div className="prod-card-badge-row">
                  <span className="prod-badge-category">{prod.category}</span>
                  <span className="prod-badge-version">{prod.version}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="prod-card-body">
                <div className="prod-card-number">PRODUCT 0{index + 1}</div>
                <h3 className="prod-card-title">{prod.name}</h3>
                <p className="prod-card-desc">{prod.shortDesc}</p>

                <div className="prod-card-capability-box">
                  <span className="cap-label">Key Capability:</span>
                  <p className="cap-text">{prod.keyCapability}</p>
                </div>

                <div className="prod-card-footer-actions">
                  <button 
                    className="btn-view-product"
                    onClick={() => onSelectProduct(prod)}
                  >
                    <span>View Product Details</span>
                    <ChevronRight size={15} />
                  </button>

                  <button 
                    className="btn-quick-dl"
                    title="Downloads & Manuals"
                    onClick={() => {
                      sessionStorage.setItem('dl-focus', prod.id);
                      onNavigateTab('downloads');
                    }}
                  >
                    <Download size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW SECTION */}
      <section className="section-container services-section-block">
        <div className="section-header-split">
          <div>
            <div className="section-badge">Engineering Services</div>
            <h2 className="section-title">Full-Lifecycle Technical & Software Services</h2>
            <p className="section-subtitle">
              Work with us to plan, build, and refine software that fits your product and your users.
            </p>
          </div>
          <button 
            className="btn-secondary-outline align-btn-right"
            onClick={() => onNavigateTab('services')}
          >
            <span>Explore All Services</span>
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="services-grid-four">
          {servicesSummary.map((srv, idx) => (
            <div key={idx} className="service-card-corporate">
              <div className="service-icon-box">{srv.icon}</div>
              <h3 className="service-card-title">{srv.title}</h3>
              <p className="service-card-desc">{srv.desc}</p>
              
              <div className="service-tags-list">
                {srv.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="service-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About company */}
      <section className="section-container about-company-strip">
        <div className="about-strip-card">
          <div className="about-strip-text">
            <div className="section-badge">About Company</div>
            <h2 className="strip-heading">Engineering the Future of Software & Hardware</h2>
            <p className="strip-para">
              NfyniQ builds useful software products and custom tools for teams with practical technical needs.
            </p>
            <p className="strip-para">
              From everyday productivity to specialist engineering workflows, our focus is on making complex tasks easier to manage.
            </p>
            <button 
              className="btn-primary-accent"
              style={{ marginTop: '1rem' }}
              onClick={() => onNavigateTab('about')}
            >
              <span>Learn More About Us</span>
              <ArrowRight size={15} />
            </button>
          </div>
          
          <div className="about-strip-highlights">
            <div className="strip-highlight-box">
              <ShieldCheck size={26} className="highlight-icon" />
              <div>
                <h4 className="highlight-title">End-to-End Ownership</h4>
                <p className="highlight-desc">Product thinking, software, and integration are handled as one connected effort.</p>
              </div>
            </div>

            <div className="strip-highlight-box">
              <Terminal size={26} className="highlight-icon" />
              <div>
                <h4 className="highlight-title">Native Performance</h4>
                <p className="highlight-desc">Tools are designed around the needs of the people who use them.</p>
              </div>
            </div>

            <div className="strip-highlight-box">
              <Globe size={26} className="highlight-icon" />
              <div>
                <h4 className="highlight-title">Cross-Platform Reach</h4>
                <p className="highlight-desc">We build for desktop, mobile, web, and embedded environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE FAQ SECTION */}
      <section className="section-container" style={{ marginBottom: '4rem' }}>
        <FAQSection />
      </section>

      {/* 9. STRONG FINAL CTA SECTION */}
      <section className="section-container cta-banner-section">
        <div className="cta-banner-card">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Have a Technology Challenge?</h2>
            <p className="cta-banner-subtitle">
              Let's build the right solution for your application. Connect with our engineering team to discuss your project requirements or request a custom quotation.
            </p>
            <div className="cta-banner-btn-row">
              <button 
                className="btn-cta-primary"
                onClick={() => onNavigateTab('contact')}
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </button>

              <button 
                className="btn-cta-secondary"
                onClick={() => onNavigateTab('contact')}
              >
                <span>Request a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
