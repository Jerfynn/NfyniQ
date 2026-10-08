import React, { useState, useEffect } from 'react';
import ScopeEstimator from './ScopeEstimator';
import FAQSection from './FAQSection';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Building2, 
  User, 
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: 'Custom Software Development',
    productOrService: 'Sonar Viewer (Marine Software)',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isQuoteRequest, setIsQuoteRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-fill form if transferred from ScopeEstimator or Product detail
  useEffect(() => {
    const saved = sessionStorage.getItem('prefilled-quote');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setFormData(prev => ({
          ...prev,
          requirement: parsed.requirement || prev.requirement,
          productOrService: parsed.productOrService || prev.productOrService,
          message: parsed.message || prev.message
        }));
        sessionStorage.removeItem('prefilled-quote');
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  const handleApplyEstimate = (est) => {
    setFormData(prev => ({
      ...prev,
      requirement: est.requirement,
      productOrService: est.productOrService,
      message: est.message
    }));
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e, isQuote = false) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsQuoteRequest(isQuote);
    setIsSubmitting(true);
    setErrorMessage('');

    const subject = `${isQuote ? '💼 [Quotation Request]' : '📩 [New Inquiry]'} from ${formData.name} - ${formData.productOrService}`;

    const payload = {
      name: formData.name,
      email: formData.email,
      company: formData.company || 'Not Specified',
      phone: formData.phone || 'Not Specified',
      requirement_type: formData.requirement,
      product_or_service: formData.productOrService,
      message: formData.message,
      inquiry_mode: isQuote ? 'Quotation Request' : 'Direct Inquiry'
    };

    // Only report success when a service actually confirms delivery.
    const sendWeb3Forms = async () => {
      const key = import.meta.env.VITE_WEB3FORMS_KEY;
      if (!key || key.length < 10) return false;
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ access_key: key, subject, from_name: `${formData.name} (NfyniQ Web)`, ...payload })
      });
      const json = await res.json().catch(() => ({}));
      return res.ok && json.success === true;
    };

    const sendFormSubmit = async () => {
      const res = await fetch('https://formsubmit.co/ajax/nfyniq@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'false', ...payload })
      });
      const json = await res.json().catch(() => ({}));
      return res.ok && (json.success === true || json.success === 'true');
    };

    try {
      let delivered = false;
      try { delivered = await sendWeb3Forms(); } catch (err) { console.warn('Web3Forms failed', err); }
      if (!delivered) {
        try { delivered = await sendFormSubmit(); } catch (err) { console.warn('FormSubmit failed', err); }
      }
      if (delivered) {
        setSubmitted(true);
      } else {
        setErrorMessage('Your message could not be sent right now. Please email us directly at nfyniq@gmail.com — use the button below to open it pre-filled.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoHref = `mailto:nfyniq@gmail.com?subject=${encodeURIComponent(`[Inquiry] ${formData.name} - ${formData.productOrService}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nRequirement: ${formData.requirement}\nProduct: ${formData.productOrService}\n\nMessage:\n${formData.message}`)}`;

  return (
    <div className="page-container">
      {/* Top Breadcrumb & In-Page Back Button */}
      <div className="page-top-nav-bar">
        <button 
          className="inpage-back-btn" 
          onClick={() => window.dispatchEvent(new CustomEvent('nav-to-tab', { detail: 'home' }))}
        >
          <ArrowRight size={14} style={{ transform: 'rotate(180deg)' }} />
          <span>Back to Home</span>
        </button>
        <div className="page-nav-crumbs">
          <span>NfyniQ</span> / <span className="active-crumb">Contact & Quotes</span>
        </div>
      </div>

      {/* Header */}
      <div className="page-header-block" style={{ margin: '0 auto 2.5rem' }}>
        <div className="section-badge">Get in Touch</div>
        <h1 className="page-title">Have a Technology Challenge?</h1>
        <p className="page-subtitle">
          Let's build the right solution for your application. Connect directly with our engineering team for technical consultations, software customizations, or formal quotation requests.
        </p>
      </div>

      {/* Interactive Scope & Quote Estimator Widget */}
      <div style={{ marginBottom: '3.5rem' }}>
        <ScopeEstimator onApplyEstimate={handleApplyEstimate} />
      </div>

      <div id="contact-form-section" className="contact-layout-grid">
        {/* Left Side: Contact Information & Direct Channels */}
        <div className="contact-info-col">
          <div className="contact-info-card">
            <h3 className="contact-card-heading">Engineering & Product Support</h3>
            <p className="contact-card-subtext">
              Direct access to our core development lab. We respond to technical inquiries, bespoke requirements, and deployment requests within 24 hours.
            </p>

            <div className="contact-channels-list">
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="channel-label">Direct Email</span>
                  <a href="mailto:nfyniq@gmail.com" className="channel-value">nfyniq@gmail.com</a>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="channel-label">Response Time</span>
                  <span className="channel-value">Within 24 Business Hours</span>
                </div>
              </div>

              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <span className="channel-label">Security & Confidentiality</span>
                  <span className="channel-value">NDA & IP Protection Guaranteed</span>
                </div>
              </div>
            </div>

            {/* What we help with */}
            <div className="contact-capabilities-box">
              <h4 className="cap-box-title">Inquiry Scope</h4>
              <ul className="cap-box-list">
                <li><CheckCircle size={14} className="cap-check" /> Standalone Product Licensing & Deployments</li>
                <li><CheckCircle size={14} className="cap-check" /> Custom Desktop & Mobile App Engineering</li>
                <li><CheckCircle size={14} className="cap-check" /> Embedded Firmware & Sensor Integration</li>
                <li><CheckCircle size={14} className="cap-check" /> Hydro-Acoustic & Telemetry Consulting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Side: Clean Contact & Quote Form */}
        <div className="contact-form-col">
          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-circle">
                  <CheckCircle size={36} />
                </div>
                <h3 className="success-title">
                  {isQuoteRequest ? 'Quote request sent' : 'Message sent'}
                </h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name || 'valued partner'}</strong>. Your message about <strong>{formData.productOrService}</strong> reached <strong>nfyniq@gmail.com</strong>. We’ll reply to <strong>{formData.email}</strong>.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
                  <a
                    href={`mailto:nfyniq@gmail.com?subject=${encodeURIComponent(`${isQuoteRequest ? '[Quote]' : '[Inquiry]'} ${formData.name} - ${formData.productOrService}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nRequirement: ${formData.requirement}\nProduct: ${formData.productOrService}\n\nMessage:\n${formData.message}`)}`}
                    className="btn-secondary-outline"
                    style={{ fontSize: '0.85rem', padding: '10px 18px' }}
                  >
                    <Mail size={14} />
                    <span>Open Copy in Mail App</span>
                  </a>
                  <button
                    className="btn-primary-accent"
                    style={{ fontSize: '0.85rem', padding: '10px 18px' }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        requirement: 'Custom Software Development',
                        productOrService: 'Sonar Viewer (Marine Software)',
                        message: ''
                      });
                    }}
                  >
                    <span>Submit Another Inquiry</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, false)} className="contact-form">
                <h3 className="form-inner-title">Send Technical Request or Inquiry</h3>

                <div className="form-row-two-col">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <User size={15} className="input-inner-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="form-input-field"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="company">
                      Company / Organization
                    </label>
                    <div className="input-with-icon">
                      <Building2 size={15} className="input-inner-icon" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="form-input-field"
                        placeholder="Organization or Institute"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row-two-col">
                  {/* Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Work Email <span className="req-star">*</span>
                    </label>
                    <div className="input-with-icon">
                      <Mail size={15} className="input-inner-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="form-input-field"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                      Phone Number
                    </label>
                    <div className="input-with-icon">
                      <Phone size={15} className="input-inner-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input-field"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row-two-col">
                  {/* Requirement Type */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="requirement">
                      Primary Requirement <span className="req-star">*</span>
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      className="form-select-field"
                      value={formData.requirement}
                      onChange={handleChange}
                    >
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Product Deployment / Licensing">Product Deployment / Licensing</option>
                      <option value="Mobile App Development">Mobile App (Android/iOS)</option>
                      <option value="Desktop Software Engineering">Desktop Software (Qt/C++/Python)</option>
                      <option value="Web Platform / Dashboard">Web Platform & Dashboard</option>
                      <option value="Hardware / IoT Integration">Hardware & Sensor Integration</option>
                      <option value="Technical Support / Consulting">Technical Consulting</option>
                    </select>
                  </div>

                  {/* Product or Service Selection */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="productOrService">
                      Product or Service Focus <span className="req-star">*</span>
                    </label>
                    <select
                      id="productOrService"
                      name="productOrService"
                      className="form-select-field"
                      value={formData.productOrService}
                      onChange={handleChange}
                    >
                      <option value="NfyniQ Chat (Offline Office Messenger)">NfyniQ Chat (Office Messenger)</option>
                      <option value="Smart Reminder Assistant">Smart Reminder Assistant</option>
                      <option value="Sonar Viewer (Marine Software)">Sonar Viewer (Hydro-Acoustic)</option>
                      <option value="AI Embedded Studio (MCU/Edge AI)">AI Embedded Studio (Edge IDE)</option>
                      <option value="NfynDown (Media Downloader)">NfynDown (Media Downloader)</option>
                      <option value="NfyniQ Music (Audio Suite)">NfyniQ Music (Desktop Player)</option>
                      <option value="Full-Lifecycle Engineering Services">Full Engineering Services</option>
                      <option value="Other Bespoke Solution">Other Bespoke Solution</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Project Scope / Message <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="form-textarea-field"
                    placeholder="Briefly describe your application, target platform, operational requirements, or timeline..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Dual Action Buttons: Contact Us / Request a Quote */}
                <div className="form-dual-action-buttons">
                  <button 
                    type="submit" 
                    className="btn-form-submit" 
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Contact Us</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    className="btn-form-quote"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    onClick={(e) => {
                      if (!formData.name || !formData.email || !formData.message) {
                        alert('Please fill in your name, email, and message before requesting a quote.');
                        return;
                      }
                      handleSubmit(e, true);
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Request a Quote</span>
                        <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </div>
                {errorMessage && (
                  <div className="contact-error-banner" role="alert">
                    <p>{errorMessage}</p>
                    <a href={mailtoHref} className="btn-secondary-outline" style={{ fontSize: '0.85rem', padding: '9px 16px' }}>
                      <Mail size={14} />
                      <span>Email nfyniq@gmail.com</span>
                    </a>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Interactive FAQ Section */}
      <div style={{ marginTop: '5rem' }}>
        <FAQSection />
      </div>
    </div>
  );
};

export default Contact;
