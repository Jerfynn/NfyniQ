import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

const searchDatabase = [
  // Nav paths
  { title: 'Home Page', desc: 'Sonar Viewer live sweep and signal calibration simulator.', tab: 'hub', category: 'Portal Navigation' },
  { title: 'Professional Services', desc: 'Calibrations, seabed surveys, and custom embedded systems.', tab: 'services', category: 'Portal Navigation' },
  { title: 'Downloads Hub', desc: 'Installer releases for Windows, macOS, and Linux.', tab: 'downloads', category: 'Portal Navigation' },
  { title: 'Documentation Deck', desc: 'Installation logs, transducer configs, and API guides.', tab: 'documentation', category: 'Portal Navigation' },
  { title: 'About NfyniQ', desc: 'Acoustics timeline and company chronology history.', tab: 'about', category: 'Portal Navigation' },
  { title: 'Contact Tunnel', desc: 'Glassmorphism communication details and location server map.', tab: 'contact', category: 'Portal Navigation' },

  // Docs
  { title: 'Core Installation (Docs)', desc: 'Configure global nfyniq-sonar package CLI client.', tab: 'documentation', docTopic: 'install', category: 'Documentation articles' },
  { title: 'Ping360 Sonar Setup (Docs)', desc: 'Connect arrays via Ethernet or USB-to-serial links.', tab: 'documentation', docTopic: 'transducer', category: 'Documentation articles' },
  { title: 'Telemetry Logs CSV (Docs)', desc: 'Examine timestamps, angles, obstacles, and echo columns.', tab: 'documentation', docTopic: 'telemetry', category: 'Documentation articles' },
  { title: 'Offline Playback & Replays (Docs)', desc: 'Replay saved scans offline without active transceivers.', tab: 'documentation', docTopic: 'playback', category: 'Documentation articles' },

  // Downloads platforms
  { title: 'Windows Setup Installer (Download)', desc: 'SonarViewer_Setup.exe Windows build package.', tab: 'downloads', category: 'Platform Releases' },
  { title: 'macOS Apple Silicon (Download)', desc: 'sonarviewer-macos-app.zip macOS build package.', tab: 'downloads', category: 'Platform Releases' },
  { title: 'Linux Deb Bundle (Download)', desc: 'sonarviewer-linux-deb.zip Linux build package.', tab: 'downloads', category: 'Platform Releases' },

  // Services
  { title: 'Custom Software Development (Services)', desc: 'Engineering low-latency firmware, dashboards, and web controllers.', tab: 'services', category: 'Services & Robotics' },
  { title: 'Autonomous Underwater Vehicles / AUVs (Services)', desc: 'Full-stack AUV navigation payloads, thruster controllers, and sonar software packages.', tab: 'services', category: 'Services & Robotics' },
  { title: 'Land Rovers & Robot Dogs (Services)', desc: 'Kinematic motion control and navigation scripts for land rovers and quadruped robot dogs.', tab: 'services', category: 'Services & Robotics' },
  { title: 'Integrated Software & Robot Packages (Services)', desc: 'Physical robotic hardware pre-configured and bundled directly with control software.', tab: 'services', category: 'Services & Robotics' },
];

const SearchModal = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery('');
    }
  }, [isOpen]);

  // Handle keyboard ESC close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Filter items by query
  const filtered = query.trim() === ''
    ? searchDatabase.slice(0, 5) // Show top 5 navigation links by default
    : searchDatabase.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  // Group results by category
  const categories = filtered.reduce((groups, item) => {
    if (!groups[item.category]) {
      groups[item.category] = [];
    }
    groups[item.category].push(item);
    return groups;
  }, {});

  const handleSelect = (item) => {
    onNavigate(item.tab);
    if (item.docTopic) {
      // Dispatches custom event to set the active doc topic
      window.dispatchEvent(new CustomEvent('set-doc-topic', { detail: item.docTopic }));
    }
    onClose();
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div className="search-modal-body" onClick={(e) => e.stopPropagation()}>
        
        {/* Input area */}
        <div className="search-modal-input-wrapper">
          <Search size={18} style={{ color: 'var(--teal)' }} />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search docs, downloads, services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Results list */}
        <div className="search-results-container">
          {Object.keys(categories).length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              No matches found for "{query}"
            </div>
          ) : (
            Object.keys(categories).map((catName) => (
              <div key={catName}>
                <div className="search-result-category">{catName}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' }}>
                  {categories[catName].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="search-result-item" 
                      onClick={() => handleSelect(item)}
                    >
                      <span className="search-item-title">{item.title}</span>
                      <span className="search-item-desc">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

export default SearchModal;
