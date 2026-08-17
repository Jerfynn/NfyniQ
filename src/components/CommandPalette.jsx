import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Command, 
  X, 
  ArrowRight, 
  BookOpen, 
  Download, 
  Layers, 
  Cpu, 
  Monitor, 
  Mail, 
  FileText, 
  Sparkles, 
  ExternalLink,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { productsData } from '../data/productsData';

const CommandPalette = ({ isOpen, onClose, onNavigateTab, onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  // Search indexing
  const searchableItems = [
    // Pages & Navigation
    { id: 'page-home', title: 'Home Page', category: 'Navigation', type: 'page', tab: 'home', icon: <Compass size={16} /> },
    { id: 'page-products', title: 'Products Portfolio', category: 'Navigation', type: 'page', tab: 'products', icon: <Layers size={16} /> },
    { id: 'page-services', title: 'Engineering & Services', category: 'Navigation', type: 'page', tab: 'services', icon: <Cpu size={16} /> },
    { id: 'page-solutions', title: 'Domain Solutions', category: 'Navigation', type: 'page', tab: 'solutions', icon: <Sparkles size={16} /> },
    { id: 'page-downloads', title: 'Downloads Hub', category: 'Navigation', type: 'page', tab: 'downloads', icon: <Download size={16} /> },
    { id: 'page-docs', title: 'Documentation & Manuals', category: 'Navigation', type: 'page', tab: 'documentation', icon: <BookOpen size={16} /> },
    { id: 'page-about', title: 'About NfyniQ Technologies', category: 'Navigation', type: 'page', tab: 'about', icon: <ShieldCheck size={16} /> },
    { id: 'page-contact', title: 'Contact & Quote Request', category: 'Navigation', type: 'page', tab: 'contact', icon: <Mail size={16} /> },

    // Products
    ...productsData.map(p => ({
      id: `prod-${p.id}`,
      title: `${p.name} — ${p.tagline}`,
      category: 'Software Suite',
      type: 'product',
      product: p,
      icon: <Monitor size={16} />
    })),

    // Documentation Manuals
    { id: 'doc-sonar', title: 'Sonar Viewer / Ping Viewer User Manual', category: 'Documentation', type: 'doc', docId: 'sonar-manual', icon: <BookOpen size={16} /> },
    { id: 'doc-ai', title: 'AI Embedded Studio — Quantization & Flashing', category: 'Documentation', type: 'doc', docId: 'ai-studio-intro', icon: <BookOpen size={16} /> },
    { id: 'doc-nfyndown', title: 'NfynDown — Fast Multi-Threaded Client Manual', category: 'Documentation', type: 'doc', docId: 'nfyndown-manual', icon: <BookOpen size={16} /> },
    { id: 'doc-music', title: 'NfyniQ Music — DSP EQ, Lyrics & DJ Crossfade', category: 'Documentation', type: 'doc', docId: 'youtify-manual', icon: <BookOpen size={16} /> },

    // Direct Downloads
    ...productsData.flatMap(p => p.downloads.map((d, idx) => ({
      id: `dl-${p.id}-${idx}`,
      title: `Download ${p.name} (${d.name})`,
      category: 'Downloads',
      type: 'download',
      url: d.path,
      icon: <Download size={16} />
    })))
  ];

  const filteredItems = searchableItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          executeItem(filteredItems[selectedIndex]);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  const executeItem = (item) => {
    onClose();
    if (item.type === 'page') {
      onNavigateTab(item.tab);
    } else if (item.type === 'product') {
      onSelectProduct(item.product);
    } else if (item.type === 'doc') {
      sessionStorage.setItem('active-doc-topic', item.docId);
      onNavigateTab('documentation');
    } else if (item.type === 'download') {
      window.open(item.url, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="command-palette-backdrop" onClick={onClose}>
      <div className="command-palette-modal" onClick={e => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="command-input-wrapper">
          <Search size={18} className="command-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="command-search-input"
            placeholder="Search software, manuals, downloads, services... (Press Esc to close)"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="command-close-btn" onClick={onClose} aria-label="Close command palette">
            <span className="command-esc-badge">ESC</span>
          </button>
        </div>

        {/* Results List */}
        <div className="command-results-list">
          {filteredItems.length === 0 ? (
            <div className="command-no-results">
              <span>No matching software, documentation, or downloads found for "{query}".</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className={`command-result-item ${selectedIndex === idx ? 'active' : ''}`}
                onClick={() => executeItem(item)}
                onMouseEnter={() => setSelectedIndex(idx)}
              >
                <div className="command-item-left">
                  <div className="command-item-icon">{item.icon}</div>
                  <div className="command-item-text">
                    <span className="command-item-title">{item.title}</span>
                    <span className="command-item-cat">{item.category}</span>
                  </div>
                </div>
                <div className="command-item-action">
                  <span className="command-action-hint">
                    {item.type === 'download' ? 'Download' : item.type === 'doc' ? 'Read Manual' : 'Jump to'}
                  </span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="command-palette-footer">
          <div className="command-footer-hints">
            <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
            <span><kbd>↵</kbd> Select</span>
            <span><kbd>ESC</kbd> Close</span>
          </div>
          <span className="command-footer-brand">NfyniQ Spotlight</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
