import React, { useState, useEffect } from 'react';
import { productsData } from '../data/productsData';
import { 
  Download, 
  Monitor, 
  Search, 
  Sun, 
  Moon, 
  CheckCircle, 
  ArrowRight, 
  BookOpen, 
  Music, 
  Cpu, 
  FileText, 
  ShieldCheck, 
  Terminal, 
  Sparkles, 
  ExternalLink,
  Copy,
  Check,
  Layers,
  HardDrive
} from 'lucide-react';

// FUTURISTIC & HIGH-PERFORMANCE DOWNLOADS HUB
export const Downloads = () => {
  const [selectedOS, setSelectedOS] = useState('All');
  const [search, setSearch] = useState('');
  const [copiedCmd, setCopiedCmd] = useState(false);

  const filteredProducts = productsData.filter(prod => {
    const matchesSearch = prod.name.toLowerCase().includes(search.toLowerCase()) || 
                          prod.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
                          prod.category.toLowerCase().includes(search.toLowerCase());
    
    if (selectedOS === 'All') return matchesSearch;
    if (selectedOS === 'Windows') {
      return matchesSearch && prod.downloads.some(d => d.name.toLowerCase().includes('windows'));
    }
    if (selectedOS === 'macOS') {
      return matchesSearch && prod.downloads.some(d => d.name.toLowerCase().includes('macos'));
    }
    if (selectedOS === 'Linux') {
      return matchesSearch && prod.downloads.some(d => d.name.toLowerCase().includes('linux'));
    }
    return matchesSearch;
  });

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('iwr -useb https://nfyniq.com/install.ps1 | iex');
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="page-container dl-page-wrapper">
      {/* Top Breadcrumb */}
      <div className="page-top-nav-bar">
        <button 
          className="inpage-back-btn" 
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'home' }))}
        >
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span>NfyniQ</span> / <span className="active-crumb">Downloads Hub</span>
        </div>
      </div>

      {/* Hero Header */}
      <div className="page-header-block" style={{ margin: '0 auto 2.5rem' }}>
        <div className="section-badge" style={{ background: 'rgba(3, 105, 161, 0.1)', color: 'var(--teal)', borderColor: 'rgba(3, 105, 161, 0.25)' }}>
          Verified Binary Hub
        </div>
        <h1 className="page-title">Software Releases & Binaries</h1>
        <p className="page-subtitle">
          Download self-contained standalone installers, portable runtimes, and deployment packages for Windows, macOS, and Linux.
        </p>
      </div>

      {/* Interactive Filter & Search Controls */}
      <div className="dl-controls-bar">
        <div className="dl-os-pills">
          {['All', 'Windows', 'macOS', 'Linux'].map((os) => (
            <button
              key={os}
              className={`dl-os-pill-btn ${selectedOS === os ? 'active' : ''}`}
              onClick={() => setSelectedOS(os)}
            >
              <span>{os === 'All' ? 'All Platforms' : os}</span>
            </button>
          ))}
        </div>

        <div className="dl-search-box-wrap">
          <Search size={15} className="dl-search-ico" />
          <input
            type="text"
            className="dl-search-field"
            placeholder="Search software or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Modern Downloads Grid */}
      <div className="dl-cards-grid">
        {filteredProducts.map((prod) => (
          <div key={prod.id} className="dl-software-card">
            {/* Card Media Header */}
            <div className="dl-card-banner">
              <img src={prod.image} alt={prod.name} className="dl-banner-img" />
              <div className="dl-banner-overlay"></div>
              <div className="dl-banner-badges">
                <span className="dl-badge-category">{prod.category}</span>
                <span className="dl-badge-version">{prod.version}</span>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="dl-card-content">
              <div className="dl-card-header-row">
                <h3 className="dl-software-title">{prod.name}</h3>
                <span className="dl-clean-badge">
                  <ShieldCheck size={13} style={{ color: '#10b981' }} />
                  <span>SHA-256 Signed</span>
                </span>
              </div>

              <p className="dl-software-desc">{prod.shortDesc}</p>

              {/* Security & Build Specs */}
              <div className="dl-specs-tags-row">
                <span className="dl-spec-tag">64-bit Native</span>
                <span className="dl-spec-tag">Standalone Portable</span>
                <span className="dl-spec-tag">Offline Ready</span>
              </div>

              {/* Direct Platform Download Buttons */}
              <div className="dl-platform-list">
                <span className="dl-section-label">Compiled Packages</span>
                {prod.downloads.map((dl, idx) => (
                  <a
                    key={idx}
                    href={dl.path}
                    download={dl.file}
                    className="dl-direct-package-btn"
                  >
                    <div className="dl-pkg-info">
                      <Download size={15} className="dl-pkg-ico" />
                      <div className="dl-pkg-names">
                        <span className="dl-pkg-platform">{dl.name}</span>
                        <span className="dl-pkg-filename">{dl.file}</span>
                      </div>
                    </div>
                    <span className="dl-pkg-size">{dl.size}</span>
                  </a>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="dl-card-bottom-actions">
                <button
                  className="dl-doc-link-btn"
                  onClick={() => {
                    sessionStorage.setItem('active-doc-topic', prod.docId);
                    window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'documentation' }));
                  }}
                >
                  <BookOpen size={14} />
                  <span>Read User Manual</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Terminal CLI Installation Banner */}
      <div className="dl-cli-terminal-banner">
        <div className="dl-cli-header">
          <div className="dl-cli-title-group">
            <Terminal size={18} className="dl-cli-ico" />
            <div>
              <h4 className="dl-cli-title">Automated PowerShell / Terminal Quick-Fetch</h4>
              <p className="dl-cli-desc">Install or update any NfyniQ standalone toolchain via command line.</p>
            </div>
          </div>
          <button className="dl-cli-copy-btn" onClick={handleCopyCmd}>
            {copiedCmd ? <Check size={14} style={{ color: '#10b981' }} /> : <Copy size={14} />}
            <span>{copiedCmd ? 'Copied to Clipboard!' : 'Copy Script'}</span>
          </button>
        </div>

        <pre className="dl-cli-code-block">
          <code>iwr -useb https://github.com/Jerfynn/NfyniQ/releases/download/v1.0.0/install.ps1 | iex</code>
        </pre>
      </div>
    </div>
  );
};

// MODERN DOCUMENTATION PAGE (Supports multiple software products)
export const Documentation = () => {
  const [search, setSearch] = useState('');
  const [activeTopic, setActiveTopic] = useState('sonar-manual');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTopic = sessionStorage.getItem('active-doc-topic');
    if (savedTopic) {
      setActiveTopic(savedTopic);
      sessionStorage.removeItem('active-doc-topic');
    }
  }, []);

  const docTopics = [
    // Sonar Viewer / Ping Viewer
    { id: 'sonar-manual', label: 'Ping Viewer User Manual', category: 'Sonar Viewer' },
    { id: 'sonar-transducer', label: 'Transducer Calibration', category: 'Sonar Viewer' },
    { id: 'sonar-api', label: 'Hydrophone Ping API', category: 'Sonar Viewer' },
    { id: 'sonar-filters', label: 'Acoustic Filters CLI', category: 'Sonar Viewer' },

    // AI Embedded Studio
    { id: 'ai-studio-intro', label: 'Studio Overview', category: 'AI Embedded Studio' },
    { id: 'ai-studio-quant', label: 'Model Quantization', category: 'AI Embedded Studio' },
    { id: 'ai-studio-deploy', label: 'Board Deployment', category: 'AI Embedded Studio' },

    // NfynDown
    { id: 'nfyndown-manual', label: 'NfynDown User Manual', category: 'NfynDown' },
    { id: 'nfyndown-pipeline', label: 'Parallel Pipelines', category: 'NfynDown' },

    // NfyniQ Music
    { id: 'youtify-manual', label: 'NfyniQ Music User Manual', category: 'NfyniQ Music' }
  ];

  const filteredTopics = docTopics.filter(t => 
    t.label.toLowerCase().includes(search.toLowerCase()) || 
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const renderDocContent = () => {
    switch (activeTopic) {
      // ==========================================
      // SONAR VIEWER / PING VIEWER MANUALS
      // ==========================================
      case 'sonar-manual':
        return (
          <>
            <h3 className="doc-section-title">Ping Viewer Sonar Application — User Manual</h3>
            <p>A modern desktop workstation built with <strong>Qt for Python (PySide6)</strong> and the <strong>Blue Robotics brping library</strong> designed for real-time acoustic visualization, transducer control, obstacle detection, and CSV data logging from scanning sonars (such as the Blue Robotics Ping360).</p>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>1. System Requirements & Launch</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Operating System:</strong> Windows 10/11 (or Linux / macOS with Qt6 support)</li>
              <li><strong>Python Runtime:</strong> Python 3.10 or higher (recommended: Python 3.13)</li>
              <li><strong>Core Dependencies:</strong> <code>PySide6</code>, <code>brping</code></li>
            </ul>
            <p><strong>Starting the Application:</strong></p>
            <pre className="doc-code-block">
              {`# Launch via terminal or PowerShell in PingViewer directory:
$ python main.py`}
            </pre>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>2. Device Discovery & Connection</h4>
            <p>Upon launching, the <strong>Discovery Dashboard</strong> appears:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Discovered Devices:</strong> Devices discovered via UDP network broadcast appear as clickable cards. Click <strong>Connect</strong> on any card.</li>
              <li><strong>Manual IP Connection:</strong> Enter your Sonar's IP address (e.g. <code>169.254.106.152</code>) and UDP Port (default: <code>12345</code>), then click <strong>Connect Manually</strong>.</li>
              <li><strong>Rescan:</strong> Click <strong>Refresh Scan</strong> to broadcast discovery packets across the local subnet.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>3. Radar Canvas & Viewport Navigation</h4>
            <p>Once connected, the screen transitions to the high-resolution polar radar visualizer:</p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>360° Polar Display:</strong> Centered radar grid with concentric range rings showing acoustic distance in meters.</li>
              <li><strong>Cyan Sweep Needle:</strong> Bright indicator line displaying the exact real-time orientation of the sonar transducer.</li>
              <li><strong>Compass Markings:</strong> Outer cardinal (0°, 90°, 180°, 270°) and ordinal reference points.</li>
            </ul>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(3,105,161,0.08)', textAlign: 'left' }}>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Action</th>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Gesture</th>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Zoom In / Out</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Mouse Scroll Wheel</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Zooms towards cursor location (0.5x to 5.0x).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Pan View</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Left-Click + Drag</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Shifts the radar center across the canvas.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Reset View</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Reset Zoom/Pan</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Resets zoom to 1.0x and re-centers the display.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Clear Buffer</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Clear Scan Buffer</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Wipes historical echoes and restarts fresh scan accumulation.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>4. Sidebar Controls & Palettes</h4>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Receiver Gain (0% – 100%):</strong> Adjusts acoustic sensitivity. Use lower gain in confined water tanks; higher in open ocean.</li>
              <li><strong>Scan Range (2.0m – 30.0m):</strong> Sets maximum listening radius. Shorter ranges allow faster sweeps because acoustic transit times decrease.</li>
              <li><strong>Color Palettes:</strong> 5 color LUTs: <em>Amber (Classic gold), Viridis (Scientific gradient), Copper (Warm bronze), Flame (Thermal contrast), Grayscale (Monochrome)</em>.</li>
              <li><strong>Angular Resolution:</strong> Adjust step sizes: <code>0.9° (Fine/400 steps)</code>, <code>1.8° (Default/200 steps)</code>, <code>3.6° (Fast/100 steps)</code>, <code>7.2° (Max Speed/50 steps)</code>.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>5. Sector Sweep Configuration</h4>
            <p>Constrain the transducer to scan back and forth within a target angular window:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Enter <strong>Start Angle</strong> (e.g. <code>45°</code>) and <strong>End Angle</strong> (e.g. <code>225°</code>).</li>
              <li>Click <strong>Set Sector</strong>. The motor will sweep between these limits, auto-reversing at boundaries.</li>
              <li><em>Reset to 360°:</em> Enter Start: <code>0°</code>, End: <code>360°</code>, and click Set Sector.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>6. Obstacle Detection & Telemetry Tracking</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Ringdown Rejection:</strong> Automatically filters out the first 8% of returns to reject transducer self-pulse ringdown.</li>
              <li><strong>Target Computation:</strong> When return density ≥ 80 (out of 255):<br />
                <code>Obstacle Distance = (Peak Sample Index / Total Samples) * Scan Range (m)</code>
              </li>
              <li><strong>Status Indicator:</strong> Displays live readings such as <code>Obstacle: 4.25m | Density: 185</code> or <code>Obstacle: Clear</code>.</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>7. CSV Recording & Screenshots</h4>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Click <strong>🔴 Record Data</strong>. The app creates a timestamped file in <code>recordings/sonar_scan_YYYYMMDD_HHMMSS.csv</code> logging Timestamp, Heading Angle, Range, Gain, Target Distance, and 400 raw acoustic return samples.</li>
              <li>Compatible directly with Pandas, NumPy, MATLAB, Excel, and R.</li>
              <li>Click <strong>📷 Take Screenshot</strong> to export high-resolution PNG imagery of the active radar screen.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>8. Offline Simulator Mode</h4>
            <p>Click <strong>Start Mock Sonar Simulator</strong> on the discovery screen to generate a virtual simulated sonar on <code>127.0.0.1:51244</code> for testing without physical underwater hardware.</p>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>9. Troubleshooting & FAQ</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Connection Timeout:</strong> Ensure your Ethernet adapter is set to DHCP or configured with a Link-Local IP (e.g. <code>169.254.106.100</code>, Subnet <code>255.255.0.0</code>).</li>
              <li><strong>Slow Sweep Rate:</strong> Lower the scan range from 30m to 10m, or increase angular resolution to 3.6° or 7.2°.</li>
            </ul>
          </>
        );

      case 'sonar-transducer':
        return (
          <>
            <h3 className="doc-section-title">Transducer Hardware & Frequency Setup</h3>
            <p>Connect your sub-sea transducer arrays to the receiver node via serial USB or Ethernet interfaces.</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --device /dev/ttyUSB0 --baud 115200 --frequency 33khz`}
            </pre>
            <p style={{ marginTop: '1rem' }}>Verify sensor streams using the verification ping command:</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --ping-test`}
            </pre>
          </>
        );

      case 'sonar-api':
        return (
          <>
            <h3 className="doc-section-title">Hydrophone WebSocket Ping API</h3>
            <p>Sonar Viewer exposes a local WebSocket server streaming transducer echo pulses in real-time for external tracking software.</p>
            <pre className="doc-code-block">
              {`const socket = new WebSocket('ws://localhost:8080/sonar');
socket.onmessage = (event) => {
  const ping = JSON.parse(event.data);
  console.log('Heading Angle: ', ping.angle);
  console.log('Target Distance (m): ', ping.distance);
  console.log('Echo Intensity: ', ping.intensity);
};`}
            </pre>
          </>
        );

      case 'sonar-filters':
        return (
          <>
            <h3 className="doc-section-title">Acoustic Filters CLI</h3>
            <p>Apply noise filters to cancel out surface waves, marine thermoclines, and biological echoes.</p>
            <pre className="doc-code-block">
              {`$ agy-sonar --filter thermocline --gain 70
$ agy-sonar --clear-clutter --smooth 3`}
            </pre>
          </>
        );

      // ==========================================
      // AI EMBEDDED STUDIO MANUALS
      // ==========================================
      case 'ai-studio-intro':
        return (
          <>
            <h3 className="doc-section-title">AI Embedded Studio Overview</h3>
            <p>AI Embedded Studio is a professional IDE designed to train, compile, and optimize deep neural network models (TFLite, ONNX) for deployment directly onto resource-constrained edge microcontrollers (Cortex-M, ESP32, STM32) and custom hardware accelerators.</p>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Compile Model for Embedded Targets</h4>
            <pre className="doc-code-block">
              {`$ ai-studio compile --model model.tflite --target stm32f4 --optimize speed`}
            </pre>
          </>
        );

      case 'ai-studio-quant':
        return (
          <>
            <h3 className="doc-section-title">Model Quantization</h3>
            <p>Shrink your model footprint and improve inference speed on edge microcontrollers by quantizing weights from floating-point FP32 down to INT8 precision.</p>
            <pre className="doc-code-block">
              {`$ ai-studio quantize --input model.tflite --precision int8 --output model_quant.tflite`}
            </pre>
          </>
        );

      case 'ai-studio-deploy':
        return (
          <>
            <h3 className="doc-section-title">Microcontroller Deployment</h3>
            <p>Flash the optimized, compiled binary directly onto your connected edge board over COM/serial interface.</p>
            <pre className="doc-code-block">
              {`$ ai-studio deploy --binary build/model.bin --port COM3 --flash`}
            </pre>
          </>
        );

      // ==========================================
      // NFYNDOWN MANUALS
      // ==========================================
      case 'nfyndown-manual':
        return (
          <>
            <h3 className="doc-section-title">NfynDown — User Manual</h3>
            <p>NfynDown is a lightweight desktop application for downloading media from popular platforms such as <strong>YouTube, Instagram, TikTok, Twitter/X, and Facebook</strong>. It provides a simple graphical interface built with pywebview and utilizes yt-dlp under the hood.</p>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Installation & First Launch</h4>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Download the installer (or standalone executable) from the Downloads page.</li>
              <li>Run the application — it will automatically detect and configure bundled FFmpeg/FFprobe binaries.</li>
              <li>The first launch takes a few seconds while verifying dependencies and local configurations.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Main Interface Elements</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(3,105,161,0.08)', textAlign: 'left' }}>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Section</th>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>URL Input (Top)</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Paste a video/post URL you wish to download.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Analyze Button</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Retrieves video title, duration, available resolutions, and thumbnail.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Format Selector</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Choose Video (MP4), Audio (MP3), or Image.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Resolution Selector</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Pick desired quality (e.g. 1080p, 720p, 480p).</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)', fontWeight: '600' }}>Settings (⚙️)</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Import cookies, select custom download directories, and configure themes.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Step-by-Step Workflows</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>1. Download a YouTube Video</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Copy the YouTube video or playlist URL.</li>
              <li>Paste into URL field and click <strong>Analyze Link</strong>.</li>
              <li>Choose <strong>Video (MP4)</strong> and desired resolution, then click <strong>Download</strong>.</li>
              <li>Files save automatically to <code>%USERPROFILE%\Downloads\NfynDown</code>.</li>
            </ol>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>2. Download an Instagram Reel / Post</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Copy the Instagram Reel or Post link.</li>
              <li>If authentication fails, export your cookies using a browser extension (like <em>Get cookies.txt LOCALLY</em>) to <code>%LOCALAPPDATA%\NfynDown\cookies.txt</code>.</li>
              <li>Click <strong>Analyze</strong> and download.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>Keyboard Shortcut Cheat-Sheet</h4>
            <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ background: 'rgba(3,105,161,0.08)', textAlign: 'left' }}>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Action</th>
                    <th style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Keyboard Shortcut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Focus URL Box</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}><code>Ctrl + L</code></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Analyze URL</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}><code>Enter</code> (in URL box)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Start Download</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}><code>Ctrl + D</code></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Open Settings</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}><code>Ctrl + S</code></td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}>Cancel Download</td>
                    <td style={{ padding: '8px 12px', border: '1px solid rgba(13,27,42,0.1)' }}><code>Esc</code></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        );

      case 'nfyndown-pipeline':
        return (
          <>
            <h3 className="doc-section-title">Parallel Pipelines & Chunk Tuning</h3>
            <p>Fine-tune download pipelines by tweaking thread count, chunk segment sizes, and retry limits for low-bandwidth environments.</p>
            <pre className="doc-code-block">
              {`$ nfyndown --url https://data.niot.res.in/bathymetry.db --threads 16 --chunk-size 4M --retries 5`}
            </pre>
          </>
        );

      // ==========================================
      // NFYNIQ MUSIC (YOUTIFY) MANUALS
      // ==========================================
      case 'youtify-manual':
        return (
          <>
            <h3 className="doc-section-title">NfyniQ Music Streaming Software — User Manual</h3>
            <p>Welcome to <strong>NfyniQ</strong>, your high-performance, futuristic music streaming application designed for rich sound quality, real-time synchronized lyrics, smart recommendations, and full audio customization.</p>
            
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>1. Getting Started & First-Time Setup</h4>
            <p>When you open <strong>NfyniQ</strong> for the first time, you will be guided through a quick 2-step setup:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Select Music Languages:</strong> Tap one or more language chips (e.g., <em>Tamil, English, Hindi, Telugu, Malayalam, Punjabi, Korean, Spanish</em>). Your Home screen and recommendations will automatically tailor themselves to your chosen languages!</li>
              <li><strong>Choose a Username:</strong> Type your desired username and tap <strong>"Get Started"</strong> to enter the app.</li>
            </ol>
            <div style={{ borderLeft: '4px solid var(--teal)', background: 'rgba(13,148,136,0.04)', padding: '10px 15px', borderRadius: '4px', fontStyle: 'italic', marginBottom: '1rem' }}>
              <strong>TIP:</strong> You can update your language preferences or change your username anytime by tapping the <strong>Settings (⚙️)</strong> icon in the top right corner of the Home screen.
            </div>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>2. Main Navigation</h4>
            <p>NfyniQ features 3 primary navigation sections accessible from the bottom bar (on mobile/tablets) or sidebar (on laptops/desktops):</p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>🏠 Home:</strong> Your personalized hub with Quick Play tracks, language-based Top Artists & Composers, and tailored song recommendations.</li>
              <li><strong>🔍 Search:</strong> Instant search engine with live suggestions and your <strong>Recently Played</strong> listening history.</li>
              <li><strong>📚 Library:</strong> Your music collection, including <strong>Favorites</strong>, custom playlists, and <strong>Downloaded Tracks</strong> for offline playback.</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>3. Music Playback & Now Playing Screen</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>3.1 Mini Player (Bottom Bar)</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Play / Pause:</strong> Tap the center Play/Pause icon.</li>
              <li><strong>Like (♥):</strong> Tap the heart icon to immediately add or remove the song from your <strong>Favorites</strong>.</li>
              <li><strong>Open Fullscreen:</strong> Tap anywhere on the track title or album cover to expand the <strong>Fullscreen Player</strong>.</li>
            </ul>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>3.2 Fullscreen Player Controls</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Scrubbing Slider:</strong> Drag the progress slider to jump to any point in the track.</li>
              <li><strong>Previous / Next:</strong> Tap <strong>⏮</strong> to restart or go to the previous song; tap <strong>⏭</strong> to skip to the next track.</li>
              <li><strong>🔀 Shuffle Queue (Top-Left Button):</strong> Randomizes the order of songs in your current queue.</li>
              <li><strong>🔁 Repeat Track (Top-Right Button):</strong> Continuously repeats the current song.</li>
              <li><strong>🎚️ Equalizer & FX (Bottom-Left Button):</strong> Opens the 10-band Equalizer and Bass Boost panel.</li>
              <li><strong>≡ Up Next Queue (Bottom-Right Button):</strong> Opens a sheet showing upcoming queued songs. Tap any song to jump straight to it.</li>
              <li><strong>⋮ More Options:</strong> Opens the song options menu (Add to Playlist, Download, View Artist, etc.).</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>4. 🎤 Live Synchronized Lyrics (Karaoke Mode)</h4>
            <p>Sing along with real-time lyrics that scroll in sync with the song:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open the <strong>Fullscreen Player</strong>.</li>
              <li>Tap the <strong>Microphone (🎤)</strong> icon in the top-right header.</li>
              <li>The album art will smoothly transition to <strong>Karaoke Mode</strong>:
                <ul style={{ paddingLeft: '1.25rem', marginTop: '0.25rem' }}>
                  <li>The current singing line glows in <strong>vibrant orange</strong> with larger text.</li>
                  <li>The lyrics view auto-scrolls to keep the singing line centered.</li>
                </ul>
              </li>
              <li><strong>Tap-to-Seek:</strong> Tap <em>any</em> lyric line in the list to jump playback directly to that exact second of the song!</li>
              <li>Tap the <strong>🎤</strong> icon again to switch back to the Album Cover view.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>5. 🎚️ 10-Band Graphic Equalizer & Bass Boost</h4>
            <p>Customize your sound profile to match your headphones or speakers:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>Equalizer</strong> via the <strong>(⚙️) Settings</strong> menu on Home or the <strong>(🎚️)</strong> icon on the Fullscreen Player.</li>
              <li><strong>Master Switch:</strong> Toggle the Equalizer ON or OFF in the top right.</li>
              <li><strong>Sound Presets:</strong> Choose from 7 built-in presets: <em>Flat, Bass Booster, Vocal Boost, Rock, Pop, Jazz, Electronic</em>.</li>
              <li><strong>Bass Boost & 3D Virtualizer:</strong> Adjust the rotary sliders to add deep punchy bass and spatial 3D surround sound.</li>
              <li><strong>10-Band Sliders:</strong> Scroll horizontally across the 10 frequency bands (<em>31Hz, 62Hz, 125Hz, 250Hz, 500Hz, 1kHz, 2kHz, 4kHz, 8kHz, 16kHz</em>) to fine-tune each frequency level from <strong>-10 dB to +10 dB</strong>.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>6. 🎛️ Audio Crossfade & Gapless Playback</h4>
            <p>Enjoy DJ-style smooth transitions between tracks:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Audio Crossfade"</strong>.</li>
              <li><strong>Crossfade Duration:</strong> Drag the slider from <strong>1.0s to 12.0s</strong> (default is 4.0s). The ending track will smoothly fade out while the next track blends in!</li>
              <li><strong>Gapless Playback:</strong> Toggle Gapless Playback ON to eliminate pauses between continuous live concert or concept album tracks.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>7. 📁 Playlist Management System</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.1 ❤️ Favorites Playlist</h5>
            <p>Built-in permanent playlist that automatically collects every song you tap <strong>Like (♥)</strong> on. It cannot be accidentally deleted.</p>
            
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.2 ➕ Creating Custom Playlists</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Go to the <strong>📚 Library</strong> tab.</li>
              <li>Tap the <strong>➕ (Add)</strong> button in the top header.</li>
              <li>Enter a Playlist Name (e.g., <em>Workout Energy, Late Night Chill, Tamil Hits</em>) and optional description.</li>
              <li>Tap <strong>"Create"</strong>.</li>
            </ol>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.3 Adding Songs to Playlists</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Tap the <strong>⋮ (Three Dots)</strong> menu on any track anywhere in the app.</li>
              <li>Select <strong>"Add to Playlist"</strong> and pick the target playlist (or create a new one on the spot!).</li>
            </ul>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>7.4 Managing Playlists</h5>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open any playlist in your Library to <strong>Play All</strong>, <strong>Shuffle Play</strong>, or use the in-playlist <strong>Search Bar</strong> to filter songs.</li>
              <li>Custom playlists can be renamed or deleted via the top-right menu.</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>8. 📥 Offline Music Downloads</h4>
            <p>Listen to your favorite songs without an internet connection:</p>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Tap the <strong>⋮ (Three Dots)</strong> menu on any song.</li>
              <li>Tap <strong>"Download Track"</strong>.</li>
              <li>The track will be downloaded directly to your device storage.</li>
              <li>Go to <strong>📚 Library</strong> and tap <strong>"Downloaded Tracks"</strong> to view and play all your offline music!</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>9. 😴 Sleep Timer & Listening Insights</h4>
            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>9.1 Sleep Timer</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Sleep Timer"</strong>.</li>
              <li>Select your desired duration: <em>15 Minutes, 30 Minutes, 45 Minutes, 60 Minutes, or End of Track</em>.</li>
              <li>Music will smoothly stop when the timer finishes!</li>
            </ol>

            <h5 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>9.2 Listening Insights (NfyniQ Wrapped)</h5>
            <ol style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>Open <strong>(⚙️) Settings</strong> on the Home screen.</li>
              <li>Tap <strong>"Listening Insights"</strong>.</li>
              <li>View your personalized music dashboard: Total Minutes Listened, Top 5 Most Played Artists, and Top 5 Most Played Songs.</li>
            </ol>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>10. 👤 Artist Profile Pages</h4>
            <p>Explore all popular hits from your favorite composers and singers:</p>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li>On the <strong>Home screen</strong>, scroll horizontally through the <strong>"Top Artists & Composers"</strong> cards (customized to your languages like <em>Anirudh, A. R. Rahman, Taylor Swift, Arijit Singh</em>, etc.).</li>
              <li>Tap any artist card to open their <strong>Artist Profile Page</strong>.</li>
              <li>View verified artist badge, tap <strong>Follow</strong>, and stream their top hit songs!</li>
            </ul>

            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem', color: 'var(--teal)', fontWeight: '700' }}>11. 💡 Pro Tips & Shortcuts</h4>
            <ul style={{ paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.6' }}>
              <li><strong>Background Audio:</strong> NfyniQ continues streaming music when minimized or when working in other desktop applications.</li>
              <li><strong>Adaptive Ambient Glow:</strong> The player screen background and mini-player progress bar automatically change colors to match the mood and cover art of the current song!</li>
              <li><strong>Auto Recommendations:</strong> When your current queue finishes, NfyniQ automatically recommends and queues similar tracks based on artist, language, and genre so the music never stops.</li>
            </ul>
          </>
        );

      default:
        return (
          <>
            <h3 className="doc-section-title">Ping Viewer Sonar Application — User Manual</h3>
            <p>Select a topic from the sidebar to inspect user manuals, setup guides, and technical references for NfyniQ products.</p>
          </>
        );
    }
  };

  const docThemeStyle = darkMode
    ? {
        background: '#090d16',
        color: '#f8fafc',
        '--border-muted': 'rgba(255,255,255,0.08)',
        '--text-primary': '#f8fafc',
        '--text-secondary': '#94a3b8',
        '--bg-tertiary': '#0d1527',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.1)'
      }
    : {
        background: '#ffffff',
        color: '#0f172a',
        borderRadius: '16px',
        overflow: 'hidden',
        border: '1px solid rgba(15, 23, 42, 0.06)'
      };

  const categories = [...new Set(docTopics.map(t => t.category))];

  return (
    <div className="page-container doc-page-container">
      {/* Top Breadcrumb */}
      <div className="page-top-nav-bar">
        <button 
          className="inpage-back-btn" 
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'home' }))}
        >
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span style={{ color: '#94a3b8' }}>NfyniQ</span> / <span className="active-crumb" style={{ color: '#38bdf8' }}>Documentation Deck</span>
        </div>
      </div>

      {/* Header */}
      <div className="doc-deck-header">
        <div>
          <div className="section-badge" style={{ background: 'rgba(3, 105, 161, 0.2)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.3)' }}>Technical Knowledge Base</div>
          <h1 className="page-title" style={{ color: '#f8fafc', margin: '0.25rem 0' }}>Documentation Deck</h1>
          <p className="page-subtitle" style={{ color: '#94a3b8', margin: 0 }}>
            Official user manuals, operational workflows, API references, and CLI specifications.
          </p>
        </div>
      </div>

      {/* Permanently Dark Parallel Documentation Frame */}
      <div className="doc-parallel-frame">
        {/* Left Fixed Sidebar */}
        <aside className="doc-sidebar-pane">
          <div className="doc-search-box">
            <Search size={14} className="doc-search-icon" />
            <input
              type="text"
              className="doc-search-input"
              placeholder="Search topics & commands..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="doc-topics-tree">
            {categories.map(cat => {
              const topics = filteredTopics.filter(t => t.category === cat);
              if (topics.length === 0) return null;
              return (
                <div key={cat} className="doc-category-group">
                  <span className="doc-cat-label">
                    {cat}
                  </span>
                  <div className="doc-cat-items">
                    {topics.map(topic => (
                      <button
                        key={topic.id}
                        className={`doc-nav-item-btn ${activeTopic === topic.id ? 'active' : ''}`}
                        onClick={() => {
                          setActiveTopic(topic.id);
                          const contentPane = document.getElementById('doc-content-pane');
                          if (contentPane) contentPane.scrollTop = 0;
                        }}
                      >
                        <span className="doc-item-indicator"></span>
                        <span className="doc-item-text">{topic.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Right Parallel Content Pane */}
        <section id="doc-content-pane" className="doc-content-pane">
          <div className="doc-content-article">
            {renderDocContent()}
          </div>
        </section>
      </div>
    </div>
  );
};

