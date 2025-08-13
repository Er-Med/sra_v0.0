"use client";
import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import WrapperFirstSlide from "./Wrapper-first-slide";
import WrapperSecondSlide from "./Wrapper-second-slide";
import WrapperThirdSlide from "./Wrapper-third-slide";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  const slides = [
    { component: <WrapperFirstSlide /> },
    { component: <WrapperSecondSlide /> },
    { component: <WrapperThirdSlide /> },
  ];

  const handleSlideChange = (index: number) => {
    if (index === currentSlide) return;

    // Animate the slide change
    gsap.to(`.slide-content`, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setCurrentSlide(index);
        gsap.to(`.slide-content`, {
          opacity: 1,
          duration: 0.3
        });
      }
    });

    // Animate indicators with new design
    animateIndicators(index);
  };

  const animateIndicators = (activeIndex: number) => {
    const indicators = indicatorsRef.current?.querySelectorAll('div[style*="skew"]');
    if (indicators) {
      indicators.forEach((indicator, index) => {
        if (index === activeIndex) {
          // Animate active indicator
          gsap.to(indicator, {
            scale: 1.2,
            duration: 0.3,
            ease: "back.out(1.7)"
          });
        } else {
          // Animate inactive indicators
          gsap.to(indicator, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        }
      });
    }
  };

  // Fade-in on initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      handleSlideChange(nextSlide);
    }, 5000);
    return () => clearInterval(id);
  }, [currentSlide, slides.length]);

  // Initialize GSAP animations
  useEffect(() => {
    if (indicatorsRef.current) {
      // Set initial state
      gsap.set(indicatorsRef.current.querySelectorAll('div[style*="skew"]'), { scale: 1 });

      // Animate initial active indicator
      if (indicatorsRef.current.querySelector('div[style*="skew"]')) {
        gsap.set(indicatorsRef.current.querySelector('div[style*="skew"]'), { scale: 1.2 });
      }
    }
  }, []);

  return (
    <div className={`hero-container ${isMounted ? "fade-in" : ""}`}>
      <div className="main-hero-section">
        <div key={currentSlide} className="slide-content fade-slide">
          {slides[currentSlide].component}
        </div>
      </div>

      <div className="carousel-indicators-container">
        <div ref={indicatorsRef} className="indicators-wrapper">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`indicator-item ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                if (index !== currentSlide) {
                  handleSlideChange(index)
                }
              }}
            >
              {/* Diagonal stripe pattern */}
              <div className="stripe-pattern">
                <svg width="100%" height="100%" viewBox="0 0 40 8">
                  <defs>
                    <pattern id={`stripes-${index}`} patternUnits="userSpaceOnUse" width="4" height="8">
                      <path d="M0,8 L4,0" stroke="white" strokeWidth="0.5" opacity="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#stripes-${index})`} />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>


      <style jsx>{`        .hero-container { 
          width: 100%; 
          position: relative; 
          min-height: calc(100vh - 90px); 
          background-color: #f0f8ff; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
        }
        .fade-in { animation: fadeIn 1200ms ease-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        .main-hero-section { display: flex; justify-content: center; align-items: flex-end; gap: 0; flex-shrink: 0; position: relative; margin-top: 40px; width: 100%; max-width: 1441px; }

        .slide-content { width: 100%; }
        .fade-slide { animation: crossfade 900ms ease-out both; }
        @keyframes crossfade { from { opacity: 0; } to { opacity: 1; } }

        .carousel-indicators-container {
          padding: 32px 0 48px 0;
          display: flex;
          justify-content: center;
        }

        .indicators-wrapper {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .indicator-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          width: 15px;
          height: 25px;
          transform: skew(50deg);
          transition: all 0.3s ease;
          border: 1px solid #0F4C75;
          background-color: #fff;
        }

        .indicator-item.active {
          background-color: #0F4C75;
        }

        .stripe-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.2;
        }

        .stripe-pattern svg {
          width: 100%;
          height: 100%;
        }

        .logos-section { display: flex; width: 100%; max-width: 1440px; justify-content: center; align-items: center; gap: 10px; position: relative; margin-top: 50px; height: 116px; }
        .logos-container { width: 100%; max-width: 1440px; height: 116.165px; position: relative; }
        .logos-frame { display: flex; width: 100%; justify-content: space-between; align-items: center; position: absolute; left: 0; top: 0; height: 116px; }

        .divider-section { width: 100%; max-width: 1277px; height: 51px; flex-shrink: 0; position: relative; margin-top: 50px; }
        .divider-container { width: 1277px; height: 51px; flex-shrink: 0; position: absolute; left: 0; top: 0; }
        .divider-line { width: 1277px; height: 0; background: #707070; position: absolute; left: 0; top: 26px; }
        .divider-shape { width: 104px; height: 51px; flex-shrink: 0; fill: #0E4B74; position: absolute; left: 587px; top: 0; }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .fade-in, .fade-slide { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;

