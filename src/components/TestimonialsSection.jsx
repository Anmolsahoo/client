import React from 'react';
import { Star, Quote, Award, CheckCircle, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const reviews = [
    {
      name: 'Marcus Vance',
      role: 'VP of Fabrication Operations',
      company: 'Midwest Structural Steel Fabricators (Chicago, IL)',
      project: '3,800 Ton Multi-Story Distribution Hub',
      stars: 5,
      quote: 'Dkson Associates delivered over 2,500 fabrication sheets 10 days ahead of our crane mobilization date. When our erectors hung the steel in the field, there was not a single hole misaligned. Their overnight RFI response time is unmatched in this industry.'
    },
    {
      name: 'David Reynolds, PE, SE',
      role: 'Chief Structural Engineer',
      company: 'Apex Design-Build Partners (Dallas, TX)',
      project: '42-Story High-Rise Office Tower',
      stars: 5,
      quote: 'Having their PE stamped connection design team working directly alongside the Tekla detailing squads eliminated the typical 3-week ping-pong between engineer of record and detailer. Their moment connection calculations passed city plan review on the first submission.'
    },
    {
      name: 'Brent Holmgren',
      role: 'General Manager',
      company: 'Pacific Coast Steel & Ironworks (Seattle, WA)',
      project: 'Monumental Airport Terminal Canopy & Pan Stairs',
      stars: 5,
      quote: 'Their miscellaneous metals detailing squad handled monumental curved stairs and seismic canopies that two other detailing firms declined to touch. The 3D model clash checks saved us at least $120,000 in potential field rework.'
    }
  ];

  const affiliations = [
    { name: 'AISC Member', desc: 'American Institute of Steel Construction' },
    { name: 'NISD Certified', desc: 'National Information Solutions Detailers (Class 1)' },
    { name: 'Trimble Tekla Partner', desc: 'Advanced BIM Structural Modeling Certified' },
    { name: 'SDS2 Steel Detailing', desc: 'Automated 3D Connection Modeling' },
    { name: '49 States PE Licenses', desc: 'US Registered Professional Engineers' }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(148, 163, 184, 0.1)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title-wrap">
          <div className="section-badge">
            <Quote size={14} />
            <span>Fabricator Endorsements</span>
          </div>
          <h2 className="section-title">
            Trusted By Premier <span className="text-gradient">Steel Fabricators & EPC Firms</span>
          </h2>
          <p className="section-subtitle">
            See how Dkson Associates keeps fabricators ahead of schedule, under budget, and completely free of field erection conflicts.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4.5rem'
        }}>
          {reviews.map((r, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem', color: '#f59e0b' }}>
                {[...Array(r.stars)].map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p style={{ 
                color: '#e2e8f0', 
                fontSize: '0.96rem', 
                lineHeight: '1.7', 
                fontStyle: 'italic',
                marginBottom: '1.75rem',
                flexGrow: 1
              }}>
                "{r.quote}"
              </p>

              {/* Author */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid rgba(148, 163, 184, 0.12)' }}>
                <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>
                  {r.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-cyan-bright)' }}>
                  {r.role}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                  {r.company}
                </div>
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.75rem', 
                  color: '#a5b4fc', 
                  fontFamily: 'var(--font-mono)',
                  background: 'rgba(99, 102, 241, 0.12)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  display: 'inline-block'
                }}>
                  Project: {r.project}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Industry Certifications Strip */}
        <div style={{
          background: 'rgba(10, 15, 29, 0.8)',
          border: '1px solid rgba(6, 182, 212, 0.25)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '1.5rem',
          alignItems: 'center'
        }}>
          {affiliations.map((aff, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={26} style={{ color: 'var(--color-cyan-bright)', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff' }}>{aff.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{aff.desc}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
