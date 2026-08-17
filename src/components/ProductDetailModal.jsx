import React, { useState } from 'react';
import { X, CheckCircle, Download, BookOpen, Layers, Cpu, ExternalLink, ArrowRight, ShieldCheck, HardDrive } from 'lucide-react';

const ProductDetailModal = ({ product, onClose, onNavigateTab }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  return (
    <div className="product-modal-backdrop" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="product-modal-header">
          <div className="product-modal-badge-group">
            <span className="product-category-badge">{product.category}</span>
            <span className="product-version-badge">{product.version}</span>
            <span className="product-status-badge">{product.badge}</span>
          </div>
          <button className="product-modal-close" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="product-modal-body">
          {/* Hero Banner & Gallery Section */}
          <div className="product-modal-media-col">
            <div className="product-modal-main-image-container">
              <img 
                src={product.gallery[activeImageIndex] || product.image} 
                alt={`${product.name} Screenshot`}
                className="product-modal-main-image"
              />
              <div className="product-modal-image-overlay">
                <span className="product-modal-image-title">{product.name} Interface</span>
              </div>
            </div>

            {product.gallery && product.gallery.length > 1 && (
              <div className="product-modal-gallery-thumbs">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    className={`gallery-thumb-btn ${activeImageIndex === idx ? 'active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                  >
                    <img src={img} alt={`View ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}

            {/* Quick Actions Card */}
            <div className="product-quick-actions-card">
              <h4 className="quick-actions-title">Deploy & Install</h4>
              <div className="modal-downloads-list">
                {product.downloads.map((dl, i) => (
                  <a
                    key={i}
                    href={dl.path}
                    download={dl.file}
                    className="modal-download-link"
                  >
                    <div className="modal-dl-info">
                      <Download size={15} />
                      <span>{dl.name}</span>
                    </div>
                    <span className="modal-dl-size">{dl.size}</span>
                  </a>
                ))}
              </div>

              <div className="modal-action-buttons">
                <button
                  className="modal-docs-btn"
                  onClick={() => {
                    onClose();
                    sessionStorage.setItem('active-doc-topic', product.docId);
                    onNavigateTab('documentation');
                  }}
                >
                  <BookOpen size={14} /> View Documentation
                </button>
                <button
                  className="modal-enquiry-btn"
                  onClick={() => {
                    onClose();
                    onNavigateTab('contact');
                  }}
                >
                  Request Custom Build <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Information Details Col */}
          <div className="product-modal-info-col">
            <h2 className="product-modal-title">{product.name}</h2>
            <p className="product-modal-tagline">{product.tagline}</p>

            {/* Overview */}
            <div className="modal-section-block">
              <h3 className="modal-section-heading">Overview</h3>
              <p className="modal-description-text">{product.overview}</p>
            </div>

            {/* Key Capabilities */}
            <div className="modal-section-block">
              <h3 className="modal-section-heading">Key Features & Architecture</h3>
              <ul className="modal-features-list">
                {product.features.map((feat, i) => (
                  <li key={i}>
                    <CheckCircle size={15} className="feature-icon" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="modal-section-block">
              <h3 className="modal-section-heading">Target Applications & Operations</h3>
              <div className="modal-app-chips">
                {product.applications.map((app, i) => (
                  <div key={i} className="modal-app-chip">
                    <span className="chip-dot"></span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="modal-section-block">
              <h3 className="modal-section-heading">Technical Specifications</h3>
              <div className="specs-table-wrapper">
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.techSpecs).map(([key, val], i) => (
                      <tr key={i}>
                        <td className="spec-label">{key}</td>
                        <td className="spec-value">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
