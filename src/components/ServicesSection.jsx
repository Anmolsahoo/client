import React, { useState } from 'react';
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
  Shield,
  FileCheck
} from 'lucide-react';

export default function ServicesSection({ onSelectServiceForQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'detailing', label: 'Steel Detailing' },
    { id: 'connection', label: 'Connection Design' },
    { id: 'bim', label: '3D BIM Modeling' },
    { id: 'misc', label: 'Misc Metals' },
    { id: 'cnc', label: 'CNC Deliverables' }
  ];

  const services = [
    {
      id: 'structural-detailing',
      category: 'detailing',
      code: 'SRV-01',
      icon: <Building2 size={26} />,
      title: 'Structural Steel Detailing',
      description: 'Comprehensive, fabrication-ready shop and erection drawings designed for rapid fabrication and seamless zero-clash field erection.',
      deliverables: [
        'Anchor Bolt Setting Plans & Grout Layouts',
        'Erection Mark Diagrams & Section Views',
        'Individual Beam, Column & Truss Shop Sheets',
        'Advance Bill of Materials (ABM) for Steel Procurement',
        'Field Bolt Summaries & Shipping Mark Lists'
      ],
      standards: 'AISC 360, AISC 303, NISD Class 1 QPP',
      software: 'Tekla Structures, SDS/2'
    },
    {
      id: 'connection-design',
      category: 'connection',
      code: 'SRV-02',
      icon: <Cpu size={26} />,
      title: 'PE Stamped Connection Design',
      description: 'Licensed professional engineering calculations for complex moment, shear, bracing, and truss connections across 49 US States.',
      deliverables: [
        'PE Stamped & Sealed Calculation Packages',
        'Moment Connection Design (WUF-W, RBS Dogbone, Bolted Flange)',
        'Seismic & Wind Lateral Load Path Verification',
        'Heavy Truss Nodes & Chevron Bracing Gussets',
        'Base Plate & High-Capacity Anchor Rod Calculations'
      ],
      standards: 'AISC 358 Prequalified, ASCE 7-22, IBC 2024',
      software: 'IDEA StatiCa, RAM Connection, DESCON'
    },
    {
      id: 'bim-modeling',
      category: 'bim',
      code: 'SRV-03',
      icon: <Box size={26} />,
      title: '3D BIM Modeling & Clash Coordination',
      description: 'High-fidelity LOD 400 & LOD 500 Building Information Models synchronized with architectural, MEP, and structural engineering models.',
      deliverables: [
        'Fully Detailed LOD 400 Construction Models',
        'Navisworks Clash Detection & RFI Resolution',
        'Trimble Connect Cloud Collaboration Live Sync',
        'IFC & 3D DWF File Exports for General Contractors',
        '4D Construction Sequencing & Logistics Simulation'
      ],
      standards: 'BIMForum LOD Spec, ISO 19650',
      software: 'Tekla Structures, Autodesk Revit, Navisworks'
    },
    {
      id: 'misc-metals',
      category: 'misc',
      code: 'SRV-04',
      icon: <Layers size={26} />,
      title: 'Miscellaneous Metals Detailing',
      description: 'Precision detailing for architectural and industrial secondary steel, designed strictly to OSHA, ADA, and local building codes.',
      deliverables: [
        'Commercial Monumental & Pan Stairs with Stringers',
        'OSHA & Industrial Multi-Flight Egress Stairs',
        'ADA Compliant Railings, Guardrails & Balustrades',
        'Roof Access Ladders with Safety Cages & Catwalks',
        'Overhead Canopy Steel, Trench Covers & Grating'
      ],
      standards: 'OSHA 1910.28, NAAMM AMP 510, ADA Standards',
      software: 'Tekla Structures, AutoCAD'
    },
    {
      id: 'cnc-deliverables',
      category: 'cnc',
      code: 'SRV-05',
      icon: <FileCode size={26} />,
      title: 'CNC, DXF & Automated Shop Files',
      description: 'Digital data files tailored directly for your shop automated machinery: CNC beam drill lines, robotic welders, and plate plasma cutters.',
      deliverables: [
        'DSTV (.nc1) Files for Peddinghaus, Ficep, Voortman',
        'DXF Plate Files Cleaned for Plasma & Laser Cutters',
        'FabTrol / Kiss (.kss) Export for ERP Tracking',
        'FabSuite, STRUMIS, and Advance Steel Integration',
        'Electronic Drawing E-Sheets (PDF with Embedded Metadata)'
      ],
      standards: 'DSTV Standard, AISC Digital Data Transfer',
      software: 'Tekla CNC Post-Processors, FabTrol, STRUMIS'
    },
    {
      id: 'precast-rebar',
      category: 'detailing',
      code: 'SRV-06',
      icon: <Grid size={26} />,
      title: 'Precast Concrete & Rebar Detailing',
      description: 'Detailed concrete rebar placement drawings and precast structural elements with comprehensive bar bending schedules.',
      deliverables: [
        'Reinforcing Steel Bar Bending Schedules (BBS)',
        'Foundation & Slab Rebar Placement Drawings',
        'Precast Architectural Wall Panels & Spandrels',
        'Structural Embed Plates & Connection Hardware',
        'Tilt-Up Concrete Wall Panel Shop Drawings'
      ],
      standards: 'ACI 318, CRSI Manual of Standard Practice',
      software: 'Tekla Precast, AutoCAD Rebar'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Shield size={14} />
            <span>Comprehensive Engineering Portfolio</span>
          </div>
          <h2 className="section-title">
            End-to-End <span className="text-gradient">Steel Detailing & BIM</span> Capabilities
          </h2>
          <p className="section-subtitle">
            From initial design model import to automated CNC fabrication files and PE-stamped connection calculations, we provide seamless engineering support for steel fabricators and general contractors.
          </p>
        </div>

        {/* Categories Tab Bar */}
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

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-card-top">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <span className="service-code">{service.code}</span>
              </div>

              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>

              {/* Specs / Deliverables Preview */}
              <ul className="service-specs-list">
                {service.deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="service-spec-item">
                    <Check size={16} className="service-spec-dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Card Footer */}
              <div className="service-card-footer">
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <strong>Tool:</strong> {service.software}
                </div>
                <button 
                  className="service-learn-more"
                  onClick={() => setSelectedServiceModal(service)}
                >
                  <span>Specs & Scope</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      {selectedServiceModal && (
        <div className="modal-overlay" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedServiceModal(null)}>
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div className="service-icon-box" style={{ width: '60px', height: '60px' }}>
                {selectedServiceModal.icon}
              </div>
              <div>
                <span className="badge-tag">{selectedServiceModal.code}</span>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginTop: '0.2rem' }}>
                  {selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.75rem' }}>
              {selectedServiceModal.description}
            </p>

            <h4 style={{ fontSize: '1.05rem', color: 'var(--color-cyan-bright)', marginBottom: '0.75rem' }}>
              Standard Deliverables Package:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {selectedServiceModal.deliverables.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                  <Check size={16} style={{ color: 'var(--color-cyan-bright)' }} />
                  <span>{d}</span>
                </div>
              ))}
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '1rem', 
              padding: '1.25rem', 
              background: 'rgba(15, 23, 42, 0.7)', 
              borderRadius: 'var(--radius-md)', 
              marginBottom: '2rem',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Governing Codes</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{selectedServiceModal.standards}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Software Platform</div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 600 }}>{selectedServiceModal.software}</div>
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
                Inquire About This Service
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

    </section>
  );
}
