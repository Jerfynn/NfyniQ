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
                  className="modal-datasheet-btn"
                  onClick={() => {
                    const printWindow = window.open('', '_blank');
                    if (printWindow) {
                      printWindow.document.write(`
                        <!DOCTYPE html>
                        <html>
                          <head>
                            <title>${product.name} — Technical Datasheet | NfyniQ Technologies</title>
                            <style>
                              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #0f172a; line-height: 1.5; }
                              .header { border-bottom: 2px solid #0369a1; padding-bottom: 20px; margin-bottom: 30px; display: flex; justify-content: space-between; align-items: flex-end; }
                              .brand-name { font-size: 24px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.5px; }
                              .brand-sub { font-size: 12px; font-weight: 700; color: #0369a1; text-transform: uppercase; }
                              .doc-title { font-size: 28px; font-weight: 800; margin: 10px 0 4px; color: #0f172a; }
                              .tagline { font-size: 15px; color: #0369a1; font-weight: 600; margin-bottom: 20px; }
                              .section-h { font-size: 16px; font-weight: 700; text-transform: uppercase; color: #0369a1; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px; margin: 25px 0 12px; }
                              .overview-p { font-size: 14px; color: #334155; line-height: 1.6; }
                              table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 13px; }
                              th, td { border: 1px solid #cbd5e1; padding: 8px 12px; text-align: left; }
                              th { background: #f8fafc; font-weight: 700; width: 35%; color: #0f172a; }
                              ul { padding-left: 20px; font-size: 14px; color: #334155; }
                              li { margin-bottom: 6px; }
                              .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; display: flex; justify-content: space-between; }
                            </style>
                          </head>
                          <body>
                            <div class="header">
                              <div>
                                <div class="brand-name">NfyniQ Technologies</div>
                                <div class="brand-sub">Universal Technology & Engineering Solutions</div>
                              </div>
                              <div style="text-align: right; font-size: 12px; color: #64748b;">
                                <div>Document Ref: DS-${product.id.toUpperCase()}</div>
                                <div>Version: ${product.version} Stable</div>
                              </div>
                            </div>

                            <div class="doc-title">${product.name}</div>
                            <div class="tagline">${product.tagline}</div>

                            <div class="section-h">System Overview</div>
                            <p class="overview-p">${product.overview}</p>

                            <div class="section-h">Key Features & Architecture</div>
                            <ul>
                              ${product.features.map(f => `<li>${f}</li>`).join('')}
                            </ul>

                            <div class="section-h">Technical Specifications</div>
                            <table>
                              <tbody>
                                ${Object.entries(product.techSpecs).map(([k, v]) => `
                                  <tr>
                                    <th>${k}</th>
                                    <td>${v}</td>
                                  </tr>
                                `).join('')}
                              </tbody>
                            </table>

                            <div class="section-h">Operational Applications</div>
                            <ul>
                              ${product.applications.map(a => `<li>${a}</li>`).join('')}
                            </ul>

                            <div class="footer">
                              <div>Confidential & Proprietary • NfyniQ Technologies (nfyniq@gmail.com)</div>
                              <div>Generated from https://nfyniq.com</div>
                            </div>
                            <script>
                              window.onload = function() { window.print(); }
                            </script>
                          </body>
                        </html>
                      `);
                      printWindow.document.close();
                    }
                  }}
                >
                  <FileText size={14} /> Export Technical Datasheet (PDF)
                </button>

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
