import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  Cpu, 
  Box, 
  Layers, 
  FileCode, 
  Grid, 
  Check, 
  ArrowRight,
  ExternalLink,
  Maximize2
} from 'lucide-react';

export default function ServicesSection({ onSelectServiceForQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'detailing', label: 'Steel Detailing' },
    { id: 'connection', label: 'Connection Design' },
    { id: 'bim', label: '3D BIM Modeling' },
    { id: 'engineering', label: 'Structural Design' },
    { id: 'estimation', label: 'MTO Estimation' },
    { id: 'misc', label: 'Misc Metals' }
  ];

  const services = [
    {
      id: 'structural-detailing',
      category: 'detailing',
      code: 'SERVICE 01',
      subCode: 'DET-AISC',
      icon: <Building2 size={26} />,
      title: 'Structural Steel Detailing',
      tagline: 'Comprehensive shop & erection drawings with zero-clash fabrication accuracy',
      description: 'We deliver comprehensive, fabrication-ready shop and erection drawings designed for rapid CNC fabrication and seamless, clash-free field erection across North America.',
      image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/3-4254478.png?format=webp',
      badge: 'Tekla LOD 400 Ready',
      deliverables: [
        'Anchor Bolt Setting Plans & Grout Elevation Layouts',
        'Shop Beams, Heavy Columns & Complex Truss Sheets',
        'Advance Bill of Materials (ABM) for Fast Mill Ordering',
        'Field Bolt Summaries & Erection Mark Diagrams',
        'Part Detail Sheets with Dimensioned CNC Hole Patterns'
      ],
      standards: 'AISC 360, AISC 303, NISD Class 1 QPP',
      software: 'Tekla Structures v2024, SDS/2'
    },
    {
      id: 'connection-design',
      category: 'connection',
      code: 'SERVICE 02',
      subCode: 'ENG-PE49',
      icon: <Cpu size={26} />,
      title: 'PE Stamped Connection Design',
      tagline: 'Licensed engineering calculations for complex moment, shear & seismic connections',
      description: 'Professional engineering connection design packages stamped by licensed structural engineers across 49 US States. Certified for high-seismic and extreme lateral wind loading.',
      image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/4-4254478.png?format=webp',
      badge: 'PE Stamped in 49 States',
      deliverables: [
        'Moment Connections (WUF-W, RBS Dogbone, Bolted Flange)',
        'Heavy Chevron & Diagonal Bracing Gusset Plate Design',
        'Column Base Plates & High-Capacity Anchor Rod Packages',
        'Full Structural Calculation Books with PE Engineering Seal',
        'Non-Standard Custom Node Finite Element Verification'
      ],
      standards: 'AISC 358 Prequalified, ASCE 7-22, IBC 2024',
      software: 'IDEA StatiCa, RAM Connection, DESCON'
    },
    {
      id: 'bim-modeling',
      category: 'bim',
      code: 'SERVICE 03',
      subCode: 'BIM-LOD500',
      icon: <Box size={26} />,
      title: '3D BIM Modeling & Clash Coordination',
      tagline: 'High-fidelity LOD 400 Building Information Models synchronized across all trades',
      description: 'Intelligent, constructible 3D BIM models coordinated with architectural, MEP, and civil disciplines to eliminate costly field clashes before steel ever touches the fabrication shop floor.',
      image: 'https://3dpointshot.com/img/service/bim-modelling.png',
      badge: 'Trimble Connect Live Sync',
      deliverables: [
        'Fully Detailed LOD 400 & LOD 500 Constructible Models',
        'Navisworks Automated Clash Detection & Matrix Reports',
        'Trimble Connect Cloud Collaboration Live Sync',
        'IFC, 3D DWG & 3D PDF Model Deliverables for GCs',
        '4D Construction Sequencing & Phased Erection Simulation'
      ],
      standards: 'BIMForum LOD Spec, ISO 19650',
      software: 'Tekla Structures, Autodesk Revit, Navisworks'
    },
    {
      id: 'structural-design',
      category: 'engineering',
      code: 'SERVICE 04',
      subCode: 'DES-AISC',
      icon: <Layers size={26} />,
      title: 'Structural Steel Design & Engineering',
      tagline: 'Code-compliant structural engineering solutions from concept framing to foundation load paths',
      description: 'Complete structural steel engineering and framing design for commercial, industrial, and institutional facilities. Optimized member sizing for maximum steel weight economy.',
      image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/5-4254478.png?format=webp',
      badge: 'AISC 360 & AWS D1.1',
      deliverables: [
        'Gravity & Lateral Load Path Engineering Calculations',
        'Optimal Wide-Flange & HSS Structural Member Sizing',
        'Foundation Reaction Schedules & Embed Coordination',
        'Value-Engineered Steel Weight Reduction Analysis',
        'Peer Review & Value Engineering Support'
      ],
      standards: 'AISC 360-16, ASCE 7, AWS D1.1 Code',
      software: 'STAAD.Pro, ETABS, SAP2000'
    },
    {
      id: 'mto-estimation',
      category: 'estimation',
      code: 'SERVICE 05',
      subCode: 'EST-MTO',
      icon: <FileCode size={26} />,
      title: 'Estimation & Material Take-Off (MTO)',
      tagline: 'Rapid and accurate structural tonnage extraction for competitive fabrication bidding',
      description: 'Precision structural steel quantity take-offs, advance bill of materials (ABM), and steel tonnage estimates to help steel fabricators prepare competitive, winning project bids.',
      image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/1-4254477.png?format=webp',
      badge: '24-48h Fast Turnaround',
      deliverables: [
        'Comprehensive Structural Steel Tonnage Breakdown',
        'Advance Bill of Materials (ABM) for Mill Lead Time',
        'Field Bolt Counts, Anchor Rods & Hardware Lists',
        'Surface Area Calculations for Paint & Fireproofing',
        'Detailed Summary Spreadsheets in Excel & Kiss Format'
      ],
      standards: 'AISC Estimating Guidelines, NISD Standards',
      software: 'FabTrol, STRUMIS, Bluebeam Revu'
    },
    {
      id: 'misc-metals',
      category: 'misc',
      code: 'SERVICE 06',
      subCode: 'MISC-METALS',
      icon: <Grid size={26} />,
      title: 'Miscellaneous Metals Detailing',
      tagline: 'Secondary architectural and industrial steel detailed strictly to OSHA and ADA codes',
      description: 'Precision detailing for commercial stairs, railings, catwalks, ladders, and canopies. Engineered for clean architectural aesthetics and seamless jobsite assembly.',
      image: 'https://content.app-sources.com/s/432484035579470251/uploads/Caliber/Cowell-Jaguar-Landrover-Isometri-3286297.webp?format=webp',
      badge: 'OSHA & ADA Compliant',
      deliverables: [
        'Commercial Pan, Monolithic & Monumental Stairs',
        'OSHA Egress Multi-Tier Stairs with Safety Landings',
        'ADA Compliant Railings, Guardrails & Glass Balustrades',
        'Roof Access Ladders with Safety Cages & Grating',
        'Canopy Steel, Overhead Frames & Dunnage Detailing'
      ],
      standards: 'OSHA 1910.28, NAAMM AMP 510, ADA Standards',
      software: 'Tekla Structures, AutoCAD'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  // IntersectionObserver to trigger smooth opposite-side slide-in as user scrolls to each card
  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('[data-service-card="true"]');
    if (!cards || cards.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      cards.forEach(card => card.classList.add('card-arrived'));
      return;
    }

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-arrived');
            cardObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      }
    );

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      // Pre-mark arrived only if user already scrolled past above the viewport
      if (rect.bottom < 0) {
        card.classList.add('card-arrived');
      } else {
        card.classList.remove('card-arrived');
        cardObserver.observe(card);
      }
    });

    return () => cardObserver.disconnect();
  }, [activeCategory, filteredServices.length]);

  return (
    <section id="services" ref={sectionRef} className="section services-master-section">
      {/* Background Ambience */}
      <div className="ambient-glow ambient-cyan" style={{ top: '10%', right: '-5%', width: '500px', height: '500px', opacity: 0.08 }}></div>
      <div className="ambient-glow ambient-indigo" style={{ top: '55%', left: '-5%', width: '550px', height: '550px', opacity: 0.08 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header with Bottom-to-Top entrance animation */}
        <div className="section-title-wrap dkson-service-header">
          <div className="dkson-sub-badge">
            <span className="pulse-dot"></span>
            <span>WHAT WE OFFER</span>
          </div>

          <h2 className="section-title dkson-main-heading">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="section-subtitle dkson-subtitle-text">
            Comprehensive structural steel solutions from concept to fabrication. Every drawing and connection engineered for rapid fabrication, zero field rework, and 100% code compliance.
          </p>

          <div className="dkson-header-accent-line"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="services-tabs-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`service-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ========================================================
            CALIBER TECH OPPOSITE-SIDE DUAL-CARD SCROLL SHOWCASE
            Row h has 2 Cards:
            - Left Card slides in from LEFT (translateX(-110px))
            - Right Card slides in from RIGHT (translateX(+110px))
            - Rows alternate sides:
              Even (0, 2, 4): Left = Image Card, Right = Detail Card
              Odd (1, 3, 5): Left = Detail Card, Right = Image Card
            ======================================================== */}
        <div className="services-dual-showcase-list">
          {filteredServices.map((service, index) => {
            const isEven = index % 2 === 0;

            // Card A: Image Showcase Card
            const renderImageCard = () => (
              <div className="service-dual-img-card group">
                <div className="service-dual-img-inner">
                  <img 
                    src={service.image} 
                    alt={`${service.title} - Dkson Associates structural steel detailing`}
                    loading="lazy"
                    decoding="async"
                    className="service-dual-img"
                  />
                  <div className="service-dual-img-overlay"></div>
                  
                  {/* Floating Badges */}
                  <div className="service-dual-top-badge">
                    <span className="pulse-dot"></span>
                    <span>{service.badge}</span>
                  </div>

                  <div className="service-dual-img-footer">
                    <span className="service-dual-tool-tag">{service.software}</span>
                    <button 
                      className="service-dual-expand-btn"
                      title="Inspect full visual"
                      onClick={() => setPreviewImage({ url: service.image, title: service.title })}
                    >
                      <Maximize2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );

            // Card B: Rich Engineering Feature Card
            const renderDetailCard = () => (
              <div className="service-dual-detail-card">
                {/* Top Row: Service Number and Icon */}
                <div className="service-dual-detail-top">
                  <div className="service-dual-icon-wrap">
                    {service.icon}
                  </div>
                  <div className="service-dual-code-pill">
                    <span className="service-dual-main-code">{service.code}</span>
                    <span className="service-dual-sub-code">{service.subCode}</span>
                  </div>
                </div>

                <h3 className="service-dual-title">{service.title}</h3>
                <p className="service-dual-tagline">{service.tagline}</p>
                <p className="service-dual-desc">{service.description}</p>

                {/* 2-Column Key Deliverables with Checkmarks */}
                <div className="service-dual-features-grid">
                  {service.deliverables.slice(0, 4).map((d, dIdx) => (
                    <div key={dIdx} className="service-dual-feature-item">
                      <div className="service-dual-check-icon">
                        <Check size={14} />
                      </div>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Row */}
                <div className="service-dual-action-row">
                  <button 
                    className="btn-primary service-dual-quote-btn"
                    onClick={() => {
                      if (onSelectServiceForQuote) onSelectServiceForQuote(service.title);
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>Request Detailing Quote</span>
                    <ArrowRight size={16} />
                  </button>

                  <button 
                    className="btn-outline service-dual-scope-btn"
                    onClick={() => setSelectedServiceModal(service)}
                  >
                    <span>View Full Scope</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            );

            return (
              <div 
                key={service.id}
                data-service-row="true"
                data-service-idx={index}
                className="service-paired-row"
              >
                {/* FIRST CARD:
                    - Desktop: In left column, slides in from LEFT (-120px)
                    - Mobile: 1st card in viewport, slides in from LEFT (-70px) */}
                <div 
                  data-service-card="true"
                  data-card-index={index * 2}
                  className="service-sliding-card card-desktop-left card-comes-from-left mobile-comes-from-left"
                >
                  {isEven ? renderImageCard() : renderDetailCard()}
                </div>

                {/* SECOND CARD:
                    - Desktop: In right column, slides in from RIGHT (+120px)
                    - Mobile: 2nd card in viewport, slides in from RIGHT (+70px) */}
                <div 
                  data-service-card="true"
                  data-card-index={index * 2 + 1}
                  className="service-sliding-card card-desktop-right card-comes-from-right mobile-comes-from-right"
                >
                  {isEven ? renderDetailCard() : renderImageCard()}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Modal for Service Specifications */}
      {selectedServiceModal && (
        <div className="modal-overlay" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-card dkson-modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedServiceModal(null)}>
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="service-icon-box" style={{ width: '60px', height: '60px' }}>
                {selectedServiceModal.icon}
              </div>
              <div>
                <span className="badge-tag">{selectedServiceModal.code} // {selectedServiceModal.subCode}</span>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '0.2rem' }}>
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {selectedServiceModal.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-cyan-bright)', marginBottom: '0.75rem', fontWeight: 600 }}>
              Complete Engineering Deliverables Package:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {selectedServiceModal.deliverables.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#cbd5e1', fontSize: '0.92rem' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    borderRadius: '50%', 
                    background: 'rgba(6, 182, 212, 0.2)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Check size={13} style={{ color: 'var(--color-cyan-bright)' }} />
                  </div>
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem', 
              padding: '1.25rem', 
              background: 'rgba(15, 23, 42, 0.8)', 
              borderRadius: 'var(--radius-md)', 
              marginBottom: '2rem',
              border: '1px solid rgba(6, 182, 212, 0.25)'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Governing Codes</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>{selectedServiceModal.standards}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Primary Software Engine</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600, marginTop: '0.2rem' }}>{selectedServiceModal.software}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                className="btn-primary" 
                style={{ flex: 1 }}
                onClick={() => {
                  setSelectedServiceModal(null);
                  if (onSelectServiceForQuote) onSelectServiceForQuote(selectedServiceModal.title);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Request Detailing Quote
              </button>
              <button 
                className="btn-outline" 
                onClick={() => setSelectedServiceModal(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Lightbox Modal for Full Image Inspection */}
      {previewImage && (
        <div className="modal-overlay" onClick={() => setPreviewImage(null)}>
          <div className="modal-card dkson-img-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPreviewImage(null)}>✕</button>
            <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.25rem' }}>{previewImage.title}</h3>
            <img 
              src={previewImage.url} 
              alt={previewImage.title}
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: 'var(--radius-lg)' }} 
            />
          </div>
        </div>
      )}

    </section>
  );
}
