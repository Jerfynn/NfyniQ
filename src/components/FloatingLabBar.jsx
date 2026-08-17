import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Sparkles, 
  BookOpen, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  Check, 
  Copy,
  Terminal,
  Zap
} from 'lucide-react';

const FloatingLabBar = ({ onNavigateTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText('nfyniq@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleAction = (tab) => {
    setIsOpen(false);
    onNavigateTab(tab);
  };

  return (
    <div className="floating-lab-container">
      {/* Floating Expanded Action Menu */}
      {isOpen && (
        <div className="floating-lab-menu">
          <div className="floating-menu-header">
            <div className="floating-header-left">
              <Terminal size={15} className="floating-header-icon" />
              <span className="floating-header-title">Connect with Engineering Lab</span>
            </div>
            <button className="floating-close-btn" onClick={() => setIsOpen(false)}>
              <X size={15} />
            </button>
          </div>

          <div className="floating-menu-body">
            {/* Direct Email Action */}
            <a 
              href="mailto:nfyniq@gmail.com" 
              className="floating-action-item"
              onClick={() => setIsOpen(false)}
            >
              <div className="floating-item-icon-box mail-ico">
                <Mail size={16} />
              </div>
              <div className="floating-item-text">
                <span className="floating-item-title">Send Direct Email</span>
                <span className="floating-item-sub">nfyniq@gmail.com</span>
              </div>
              <button className="floating-copy-sub-btn" onClick={handleCopyEmail} title="Copy Email">
                {copiedEmail ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
              </button>
            </a>

            {/* Instant Scope Estimator */}
            <div 
              className="floating-action-item"
              onClick={() => handleAction('contact')}
            >
              <div className="floating-item-icon-box quote-ico">
                <Zap size={16} />
              </div>
              <div className="floating-item-text">
                <span className="floating-item-title">Configure Project Scope</span>
                <span className="floating-item-sub">Request formal engineering quote</span>
              </div>
              <ArrowUpRight size={14} className="floating-item-arrow" />
            </div>

            {/* Documentation Hub */}
            <div 
              className="floating-action-item"
              onClick={() => handleAction('documentation')}
            >
              <div className="floating-item-icon-box docs-ico">
                <BookOpen size={16} />
              </div>
              <div className="floating-item-text">
                <span className="floating-item-title">Read Software Manuals</span>
                <span className="floating-item-sub">Technical guides & API specs</span>
              </div>
              <ArrowUpRight size={14} className="floating-item-arrow" />
            </div>
          </div>

          <div className="floating-menu-footer">
            <ShieldCheck size={13} style={{ color: '#10b981' }} />
            <span>24h Response SLA • NDA Protected</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button 
        className={`floating-lab-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Lab Connection Menu"
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <>
            <MessageCircle size={20} />
            <span className="floating-trigger-label">Connect with Lab</span>
          </>
        )}
      </button>
    </div>
  );
};

export default FloatingLabBar;
