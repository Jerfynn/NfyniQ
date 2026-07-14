import React from 'react';
import { Mail, Shield, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page-container" style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h2 className="page-title">Contact Us</h2>
      <p className="page-subtitle" style={{ marginBottom: '2.5rem' }}>
        Establish a direct communication link with the NfyniQ engineering and robotics deck.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Glassmorphism details card */}
        <div className="glass" style={{ padding: '2.5rem', border: '1px solid rgba(13, 148, 136, 0.15)', boxShadow: '0 8px 32px rgba(13, 148, 136, 0.04)', textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(13, 148, 136, 0.08)', display: 'flex', alignItems: 'center', justifyOrigin: 'center', justifyContent: 'center', margin: '0 auto 1rem', border: '1px solid rgba(13, 148, 136, 0.2)' }}>
            <Mail style={{ color: 'var(--teal)' }} size={24} />
          </div>
          
          <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
            Direct Email Transmission
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: '1.5' }}>
            Send your queries, specifications, or custom system requests directly to our support and engineering inbox.
          </p>

          <a 
            href="mailto:nfyniq@gmail.com" 
            style={{ 
              display: 'inline-block',
              padding: '10px 24px', 
              background: 'linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%)', 
              color: '#ffffff',
              borderRadius: '6px', 
              fontSize: '0.92rem', 
              fontWeight: '600', 
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(30, 58, 138, 0.25)',
              transition: 'transform var(--transition-fast)'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            nfyniq@gmail.com
          </a>
        </div>

        {/* Stylized Node server map */}
        <div className="glass" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#0a101f', border: '1px solid rgba(13,148,136,0.15)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontWeight: '600', width: '100%', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Globe size={14} style={{ stroke: 'var(--cyan)' }} /> <span>Active Global Server Uplinks</span>
          </div>

          {/* Stylized vector map with dots */}
          <div style={{ width: '100%', height: '180px', position: 'relative', background: '#050a14', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
            <svg width="100%" height="100%" viewBox="0 0 400 200" style={{ opacity: 0.25 }}>
              {/* Clean wireframe grid */}
              <path d="M 0,50 L 400,50 M 0,100 L 400,100 M 0,150 L 400,150" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
              <path d="M 100,0 L 100,200 M 200,0 L 200,200 M 300,0 L 300,200" stroke="rgba(0, 240, 255, 0.05)" strokeWidth="1" />
              
              {/* World contour representation in paths */}
              <path d="M 50,70 Q 70,50 90,80 T 110,60 T 130,90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <path d="M 220,60 Q 250,50 280,80 T 310,60 T 340,90" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            </svg>

            {/* Pulsing server nodes */}
            {/* Node 1: US-East (80, 60) */}
            <div className="server-ping" style={{ left: '80px', top: '60px' }}></div>
            {/* Node 2: Europe (200, 50) */}
            <div className="server-ping" style={{ left: '200px', top: '50px' }}></div>
            {/* Node 3: Mumbai (260, 95) */}
            <div className="server-ping" style={{ left: '260px', top: '95px' }}></div>
            {/* Node 4: Tokyo (320, 70) */}
            <div className="server-ping" style={{ left: '320px', top: '70px' }}></div>
            
            <style>{`
              .server-ping {
                position: absolute;
                width: 8px;
                height: 8px;
                background: var(--cyan);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                box-shadow: 0 0 10px var(--cyan);
              }
              .server-ping::after {
                content: '';
                position: absolute;
                top: -6px;
                left: -6px;
                width: 20px;
                height: 20px;
                border: 1px solid var(--cyan);
                border-radius: 50%;
                animation: server-pulse-anim 1.8s infinite linear;
                opacity: 0;
              }
              @keyframes server-pulse-anim {
                0% { transform: scale(0.2); opacity: 1; }
                100% { transform: scale(1.2); opacity: 0; }
              }
            `}</style>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
