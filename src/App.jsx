import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import InteractiveModelViewer from './components/InteractiveModelViewer';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsShowcase from './components/ProjectsShowcase';
import CostEstimator from './components/CostEstimator';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Optional but recommended
import './App.css';

export default function App() {
  const [quoteFormData, setQuoteFormData] = useState(null);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Robust Mobile & Desktop Scroll Reveal Observer
  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    // Reveal elements immediately if IntersectionObserver is unsupported or elements are already near viewport
    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          } else {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        threshold: 0.02, // Triggers immediately as soon as top edge touches viewport (optimized for mobile)
        rootMargin: '0px 0px 60px 0px' // Pre-triggers 60px ahead so content never lags
      }
    );

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenQuoteModal = (serviceName) => {
    if (serviceName) {
      setQuoteFormData({ scope: serviceName });
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimate = (estimateData) => {
    setQuoteFormData(estimateData);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* Navigation Header with Scroll Progress Bar & Responsive Mobile Menu */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Content Sections */}
      <main>
        {/* Hero with Interactive 3D Structural Steel Connection & Continuous Floating Animation */}
        <Hero onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dynamic Infinite Marquee Engineering Ticker Strip */}
        <div className="marquee-strip">
          <div className="marquee-track">
            <span className="marquee-item">⚡ AISC 360-16 COMPLIANT</span>
            <span className="marquee-item">📐 TEKLA STRUCTURES LOD 400</span>
            <span className="marquee-item">🏆 PE STAMPED IN 49 US STATES</span>
            <span className="marquee-item">🎯 99.8% FIRST-PASS APPROVAL</span>
            <span className="marquee-item">⚙️ PEDDINGHAUS DSTV & CNC EXPORT</span>
            <span className="marquee-item">☁️ TRIMBLE CONNECT CLOUD SYNC</span>
            <span className="marquee-item">🌙 24/7 OVERNIGHT RFI RESPONSE</span>
            {/* Duplicate for seamless infinite loop */}
            <span className="marquee-item">⚡ AISC 360-16 COMPLIANT</span>
            <span className="marquee-item">📐 TEKLA STRUCTURES LOD 400</span>
            <span className="marquee-item">🏆 PE STAMPED IN 49 US STATES</span>
            <span className="marquee-item">🎯 99.8% FIRST-PASS APPROVAL</span>
            <span className="marquee-item">⚙️ PEDDINGHAUS DSTV & CNC EXPORT</span>
            <span className="marquee-item">☁️ TRIMBLE CONNECT CLOUD SYNC</span>
            <span className="marquee-item">🌙 24/7 OVERNIGHT RFI RESPONSE</span>
          </div>
        </div>

        {/* Live Counters */}
        <div className="scroll-reveal">
          <StatsSection />
        </div>

        {/* Core Services Portfolio & Deliverables */}
        <div className="scroll-reveal">
          <ServicesSection onSelectServiceForQuote={handleOpenQuoteModal} />
        </div>

        {/* Interactive 3D Tekla & BIM Assembly Studio */}
        <div className="scroll-reveal">
          <InteractiveModelViewer />
        </div>

        {/* The Dkson Associates Advantage & Side-by-Side Comparison */}
        <div className="scroll-reveal">
          <WhyChooseUs onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

        {/* Real-World Projects Portfolio */}
        <div className="scroll-reveal">
          <ProjectsShowcase onOpenQuoteModal={handleOpenQuoteModal} />
        </div>

        {/* Interactive Detailing Cost & Schedule Estimator */}
        <div className="scroll-reveal">
          <CostEstimator onApplyEstimateToForm={handleApplyEstimate} />
        </div>

        {/* Testimonials & Industry Certifications */}
        <div className="scroll-reveal">
          <TestimonialsSection />
        </div>

        {/* Frequently Asked Questions */}
        <div className="scroll-reveal">
          <FAQSection />
        </div>

        {/* Contact & Proposal Request Form */}
        <div className="scroll-reveal">
          <ContactSection initialFormData={quoteFormData} />
        </div>
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Pulsing Animated WhatsApp Action Button & Interactive Chat Drawer */}
      <WhatsAppWidget />
    </div>
  );
}
