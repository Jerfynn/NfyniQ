import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { ArrowRight, CheckCircle, Download, BookOpen, Search, Layers, Monitor, Cpu, Music, FileText } from 'lucide-react';

const ProductsPage = ({ onSelectProduct, onNavigateTab }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Marine & Acoustic Systems', 'Embedded & Edge AI', 'Desktop Utility Software', 'Audio & Media Streaming'];

  const filteredProducts = productsData.filter(prod => {
    const matchesCat = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="page-container">
      {/* Top Breadcrumb & In-Page Back Button */}
      <div className="page-top-nav-bar">
        <button className="inpage-back-btn" onClick={() => onNavigateTab('home')}>
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span>NfyniQ</span> / <span className="active-crumb">Products</span>
        </div>
      </div>

      {/* Header */}
      <div className="page-header-block" style={{ margin: '0 auto 2.5rem' }}>
        <div className="section-badge">Product Portfolio</div>
        <h1 className="page-title">Specialized Software Products & Platforms</h1>
        <p className="page-subtitle">
          Engineered for mission-critical reliability, native computational performance, and intuitive user experiences.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="products-filter-bar">
        <div className="category-pill-group">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="search-input-wrapper">
          <Search size={16} className="search-icon-inside" />
          <input
            type="text"
            className="filter-search-field"
            placeholder="Search products, capabilities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Products Showcase Catalog */}
      <div className="products-catalog-list">
        {filteredProducts.map((prod, index) => (
          <div key={prod.id} className="product-catalog-card">
            {/* Left Media Area */}
            <div className="catalog-card-media-col">
              <img src={prod.image} alt={prod.name} className="catalog-card-image" />
              <div className="catalog-image-badges">
                <span className="catalog-badge-cat">{prod.category}</span>
                <span className="catalog-badge-ver">{prod.version}</span>
              </div>
            </div>

            {/* Right Information Area */}
            <div className="catalog-card-content-col">
              <div className="catalog-card-header">
                <div>
                  <div className="catalog-prod-num">PRODUCT 0{index + 1}</div>
                  <h2 className="catalog-prod-title">{prod.name}</h2>
                  <p className="catalog-prod-tagline">{prod.tagline}</p>
                </div>
              </div>

              <p className="catalog-prod-overview">{prod.overview}</p>

              {/* Highlights Bullet List */}
              <div className="catalog-features-grid">
                {prod.features.slice(0, 4).map((feat, fIdx) => (
                  <div key={fIdx} className="catalog-feat-item">
                    <CheckCircle size={14} className="feat-check" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="catalog-card-actions">
                <button
                  className="btn-primary-accent"
                  onClick={() => onSelectProduct(prod)}
                >
                  <span>View Full Product Specs</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  className="btn-secondary-outline"
                  onClick={() => {
                    sessionStorage.setItem('active-doc-topic', prod.docId);
                    onNavigateTab('documentation');
                  }}
                >
                  <BookOpen size={14} />
                  <span>Documentation</span>
                </button>

                <button
                  className="btn-secondary-outline"
                  onClick={() => {
                    sessionStorage.setItem('active-doc-topic', prod.docId);
                    onNavigateTab('downloads');
                  }}
                >
                  <Download size={14} />
                  <span>Downloads Hub</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
