import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Cpu, Code2, Wrench, Download } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Are your software downloads completely self-contained and portable?',
      answer: 'Yes. Every desktop binary in our downloads hub (Sonar Viewer, AI Embedded Studio, NfynDown, and NfyniQ Music) is compiled with all required runtime dependencies, libraries, and graphics drivers bundled. You do not need Python, Node.js, or complex third-party runtimes to execute them out of the box.',
      category: 'Software & Binaries'
    },
    {
      question: 'Can NfyniQ engineer custom hardware drivers, sensor pipelines, or telemetry software for our project?',
      answer: 'Absolutely. We specialize in bespoke engineering across hydro-acoustic transducers, RS-232/485 serial communication, TCP/IP telemetry streams, USB HID, and embedded microcontroller buses (I2C/SPI/CAN). We can build dedicated desktop control stations or mobile companion apps tailored to your proprietary hardware.',
      category: 'Custom Engineering'
    },
    {
      question: 'What is the typical turnaround timeline for custom software or firmware prototyping?',
      answer: 'For focused firmware or desktop telemetry applications, functional MVPs and test builds are typically delivered in 2 to 4 weeks. Full-scale commercial product engineering, cross-platform mobile apps, or multi-threaded processing suites generally range between 6 to 12 weeks depending on protocol complexity.',
      category: 'Timelines & Delivery'
    },
    {
      question: 'Do you provide source code licensing, NDA confidentiality, and IP protection?',
      answer: 'Yes. We sign strict Mutual Non-Disclosure Agreements (NDAs) prior to project review. All custom client engineering includes complete IP handover, clean documentation, source code repositories, and compiled zero-dependency deployment binaries.',
      category: 'Security & IP'
    },
    {
      question: 'How do I request technical consultations or commercial volume licensing?',
      answer: 'You can submit an inquiry directly through our Contact & Quotes page or email our laboratory team at nfyniq@gmail.com. We respond with technical scoping notes and formal project quotations within 24 business hours.',
      category: 'Licensing & Support'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="faq-section-container">
      <div className="section-header-centered" style={{ marginBottom: '2.5rem' }}>
        <div className="section-badge" style={{ background: 'rgba(3, 105, 161, 0.08)', color: 'var(--teal)' }}>
          Frequently Asked Questions
        </div>
        <h2 className="section-title">Common Engineering & Product Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about our standalone software suites, custom engineering services, and IP security.
        </p>
      </div>

      <div className="faq-accordion-list">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
              <button 
                className="faq-question-btn" 
                onClick={() => toggleFAQ(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{faq.question}</span>
                <div className="faq-toggle-icon">
                  <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease' }} />
                </div>
              </button>
              
              <div className="faq-answer-collapse" style={{ maxHeight: isOpen ? '240px' : '0', overflow: 'hidden', transition: 'max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQSection;
