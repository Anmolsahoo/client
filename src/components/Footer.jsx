import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ArrowUp,
  Globe,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div className="brand-icon-wrap" style={{ width: '40px', height: '40px' }}>
                <Building2 size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>CALIBER TECH</div>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-cyan-bright)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  STRUCTURAL SOLUTIONS
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Caliber Tech Solutions is a world-class structural steel engineering and detailing partner providing fabrication-ready shop drawings, PE-stamped connection designs, and LOD 400 Tekla BIM modeling across North America.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <span className="badge-tag">AISC Member</span>
              <span className="badge-tag">NISD Certified</span>
              <span className="badge-tag">49 States PE</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Core Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Steel Detailing Services</a></li>
              <li><a href="#bim-viewer" className="footer-link">Interactive 3D BIM Viewer</a></li>
              <li><a href="#why-us" className="footer-link">The Caliber Advantage</a></li>
              <li><a href="#projects" className="footer-link">Project Portfolio</a></li>
              <li><a href="#estimator" className="footer-link">Detailing Cost Estimator</a></li>
              <li><a href="#faq" className="footer-link">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Engineering Disciplines */}
          <div>
            <h4 className="footer-col-title">Engineering Disciplines</h4>
            <ul className="footer-links-list">
              <li><a href="#services" className="footer-link">Structural Steel Shop Drawings</a></li>
              <li><a href="#services" className="footer-link">PE Stamped Connection Calcs</a></li>
              <li><a href="#services" className="footer-link">Tekla 3D BIM Modeling</a></li>
              <li><a href="#services" className="footer-link">Miscellaneous Metals & Stairs</a></li>
              <li><a href="#services" className="footer-link">Automated CNC & DSTV Deliverables</a></li>
              <li><a href="#services" className="footer-link">Rebar & Precast Concrete Detailing</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-col-title">Headquarters & Centers</h4>
            <ul className="footer-links-list">
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>US Headquarters:</strong><br />
                  Overland Park, KS 66213, USA
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Global Engineering Center:</strong><br />
                  New Delhi, India
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Phone size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  US: <a href="tel:+17605882207" style={{ color: 'var(--color-cyan-bright)' }}>+1 (760) 588-2207</a><br />
                  Global: <a href="tel:+919871177166" style={{ color: 'var(--color-cyan-bright)' }}>+91 9871177166</a>
                </span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.88rem' }}>
                <Mail size={18} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0, marginTop: '2px' }} />
                <a href="mailto:info@calibertechsolutions.com" style={{ color: 'var(--color-cyan-bright)' }}>
                  info@calibertechsolutions.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} Caliber Tech Solutions. All rights reserved. Structural Steel Detailing & BIM Modeling.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <button 
              onClick={scrollToTop}
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: 'var(--color-cyan-bright)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
