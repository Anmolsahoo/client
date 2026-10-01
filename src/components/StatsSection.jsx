import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Award, Building, Compass, CheckCircle } from 'lucide-react';

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    projects: 0,
    states: 0,
    tons: 0,
    approval: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let frame = 0;
          const totalFrames = 60;
          const interval = setInterval(() => {
            frame++;
            const progress = Math.min(frame / totalFrames, 1);
            // easeOutExpo
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts({
              years: Math.floor(ease * 21),
              projects: Math.floor(ease * 1850),
              states: Math.floor(ease * 49),
              tons: Math.floor(ease * 650),
              approval: +(ease * 99.8).toFixed(1)
            });

            if (frame >= totalFrames) {
              clearInterval(interval);
            }
          }, 25);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const stats = [
    {
      icon: <Calendar size={22} />,
      value: `${counts.years}+`,
      label: 'Years Engineering Excellence',
      sub: 'Founded in 2005'
    },
    {
      icon: <Building size={22} />,
      value: `${counts.projects.toLocaleString()}+`,
      label: 'Commercial & Industrial Projects',
      sub: 'Across US & Canada'
    },
    {
      icon: <Award size={22} />,
      value: `${counts.states}`,
      label: 'US States PE Stamped',
      sub: 'Licensed Engineers'
    },
    {
      icon: <Compass size={22} />,
      value: `${counts.tons}k+`,
      label: 'Tons of Steel Detailed',
      sub: 'Fabrication-Ready'
    },
    {
      icon: <CheckCircle size={22} />,
      value: `${counts.approval}%`,
      label: 'Shop Drawing Approval Rate',
      sub: 'Zero Field Rework'
    }
  ];

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">
                {stat.value}
              </div>
              <div className="stat-label">
                {stat.label}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
