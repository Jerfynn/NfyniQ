import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Code2, 
  Smartphone, 
  Monitor, 
  Settings, 
  Globe, 
  Terminal, 
  Database, 
  Radio, 
  Waves, 
  FileCode, 
  ShieldCheck, 
  ChevronRight,
  Download,
  Sparkles,
  Zap,
  Activity
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

  const techCategories = [
    {
      category: 'Frontend & UI',
      skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Vite', 'Canvas & WebGL']
    },
    {
      category: 'Backend & APIs',
      skills: ['Node.js', 'Express', 'Python', 'RESTful APIs', 'WebSockets', 'Database Integration']
    },
    {
      category: 'Desktop Engineering',
      skills: ['Qt Framework', 'QtPy / PySide / PyQt', 'C / C++', 'Python Desktop', 'Inno Setup', 'Electron']
    },
    {
      category: 'Mobile Ecosystem',
      skills: ['Android (Kotlin/Java)', 'iOS (Swift)', 'Flutter', 'Cross-Platform App Dev', 'BLE & USB Links']
    },
    {
      category: 'Embedded & IoT',
      skills: ['ARM Cortex-M', 'STM32 / ESP32', 'Sensor Telemetry', 'Serial / UART / I2C / SPI', 'Firmware Tools']
    }
  ];

  const industries = [
    {
      title: 'Marine & Acoustic Systems',
      desc: 'Bathymetric sub-sea surveys, hydrophone acoustic calibration, and underwater sensor telemetry.',
      icon: <Waves size={22} />
    },
    {
      title: 'Robotics & Control Systems',
      desc: 'Thruster control, multi-axis kinematics simulation, real-time command uplinks, and actuators.',
      icon: <Activity size={22} />
    },
    {
      title: 'Industrial Automation & IoT',
      desc: 'Edge sensor monitoring, distributed telemetry acquisition, and automated hardware test rigs.',
      icon: <Cpu size={22} />
    },
    {
      title: 'Media & Streaming Technologies',
      desc: 'Parallel multi-threaded download pipelines, low-latency audio processing, and transcoders.',
      icon: <Zap size={22} />
    },
    {
      title: 'Research & Development Labs',
      desc: 'Bespoke scientific instrumentation software, data visualization suites, and prototype testing.',
      icon: <Radio size={22} />
    },
    {
      title: 'Smart Devices & Edge AI',
      desc: 'Neural network weight quantization, embedded microcontroller runtimes, and smart nodes.',
      icon: <Sparkles size={22} />
    }
  ];

  const whyChooseUs = [
    {
      number: '01',
      title: 'Product Development',
      desc: 'We engineer complete technology products from initial architectural design to production deployment and release packaging.'
    },
    {
      number: '02',
      title: 'Software Engineering',
      desc: 'Custom software architectures designed specifically around real-world performance, speed, and operational requirements.'
    },
    {
      number: '03',
      title: 'Hardware + Software',
      desc: 'Deep domain expertise bridging physical sensors, microcontrollers, and communication protocols with intuitive software interfaces.'
    },
    {
      number: '04',
      title: 'Cross-Platform Mastery',
      desc: 'Unified product experiences deployed seamlessly across Windows, macOS, Linux, Android, iOS, and responsive web platforms.'
    },
    {
      number: '05',
      title: 'Custom Engineering Solutions',
      desc: 'Tailored technology development crafted to solve specific client challenges where off-the-shelf software falls short.'
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
              Engineering Technology.<br />
              <span className="gradient-accent-text">Building Solutions.</span>
            </h1>

            <p className="hero-subtext">
              Innovative products, intelligent software, and custom engineering solutions built for real-world applications across desktop, mobile, web, and embedded systems.
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
                <span className="metric-value">6+</span>
                <span className="metric-label">Engineering Domains</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-value">100%</span>
                <span className="metric-label">In-House Built</span>
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
            Explore our suite of software engineered in-house — from offline team messaging and smart reminders to hydro-acoustics, embedded AI and media.
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
              From web platforms and native mobile apps to low-level desktop architectures and embedded IoT control systems.
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

      {/* 4. TECHNOLOGY ECOSYSTEM SECTION */}
      <section className="section-container tech-stack-section-block">
        <div className="section-header-centered">
          <div className="section-badge">Technology Stack</div>
          <h2 className="section-title">Universal Technology Ecosystem</h2>
          <p className="section-subtitle">
            We leverage a disciplined, modern software stack across desktop, mobile, web, and microcontrollers.
          </p>
        </div>

        <div className="tech-categories-grid">
          {techCategories.map((cat, idx) => (
            <div key={idx} className="tech-cat-card">
              <div className="tech-cat-header">
                <Code2 size={18} className="tech-cat-icon" />
                <h4 className="tech-cat-title">{cat.category}</h4>
              </div>
              <div className="tech-pill-container">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES & APPLICATIONS SECTION */}
      <section className="section-container industries-section-block">
        <div className="section-header-centered">
          <div className="section-badge">Application Domains</div>
          <h2 className="section-title">Industries & Operational Environments</h2>
          <p className="section-subtitle">
            Our products and custom software solutions are deployed across demanding technical and research sectors.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, idx) => (
            <div key={idx} className="industry-card">
              <div className="industry-icon-wrapper">{ind.icon}</div>
              <div className="industry-text-content">
                <h4 className="industry-title">{ind.title}</h4>
                <p className="industry-desc">{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. WHY CHOOSE US SECTION */}
      <section className="section-container why-us-section-block">
        <div className="section-header-centered">
          <div className="section-badge">Our Strengths</div>
          <h2 className="section-title">Why Engineering Teams Choose Us</h2>
          <p className="section-subtitle">
            Combining rigorous product development discipline with deep technical agility.
          </p>
        </div>

        <div className="why-us-grid">
          {whyChooseUs.map((pillar, idx) => (
            <div key={idx} className="why-card">
              <span className="why-card-number">{pillar.number}</span>
              <h3 className="why-card-title">{pillar.title}</h3>
              <p className="why-card-desc">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. ABOUT COMPANY STRIP */}
      <section className="section-container about-company-strip">
        <div className="about-strip-card">
          <div className="about-strip-text">
            <div className="section-badge">About Company</div>
            <h2 className="strip-heading">Engineering the Future of Software & Hardware</h2>
            <p className="strip-para">
              NfyniQ is a modern technology and engineering company dedicated to developing high-performance standalone products, custom cross-platform software, and embedded hardware-software integration solutions. 
            </p>
            <p className="strip-para">
              We engineer tools that empower oceanographers, firmware developers, and enterprise teams with robust, dependable technology built around real-world requirements.
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
                <p className="highlight-desc">From hardware telemetry protocols to slick desktop GUIs and web dashboards.</p>
              </div>
            </div>

            <div className="strip-highlight-box">
              <Terminal size={26} className="highlight-icon" />
              <div>
                <h4 className="highlight-title">Native Performance</h4>
                <p className="highlight-desc">High-throughput C++, Qt, Python, and Flutter engines optimized for efficiency.</p>
              </div>
            </div>

            <div className="strip-highlight-box">
              <Globe size={26} className="highlight-icon" />
              <div>
                <h4 className="highlight-title">Cross-Platform Reach</h4>
                <p className="highlight-desc">Seamless deployments across Windows, macOS, Linux, Android, iOS, and Web.</p>
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
