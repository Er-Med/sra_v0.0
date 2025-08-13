"use client";
import React, { useEffect, useState } from "react";
import WrapperFirstSlide from "./Wrapper-first-slide";
import WrapperSecondSlide from "./Wrapper-second-slide";
import WrapperThirdSlide from "./Wrapper-third-slide";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const slides = [
    { component: <WrapperFirstSlide /> },
    { component: <WrapperSecondSlide /> },
    { component: <WrapperThirdSlide /> },
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Fade-in on initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className={`hero-container ${isMounted ? "fade-in" : ""}`}>
      <div className="main-hero-section">
        <div key={currentSlide} className="slide-content fade-slide">
          {slides[currentSlide].component}
        </div>
      </div>

      <div className="carousel-indicators decorative-position" aria-label="Hero slides" role="tablist">
        <div
          className={`indicator ${currentSlide === 0 ? 'active' : ''}`}
          onClick={() => handleSlideChange(0)}
          role="tab" aria-selected={currentSlide === 0}
        >
          {currentSlide === 0 ? (
            <svg width="48" height="24" viewBox="27.4404 0.5 46.1192 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.1592 0.5L73.5596 24.5H57.8408L27.4404 0.5H43.1592Z" fill="white" stroke="#0F4C75" />
            </svg>
          ) : (
            <svg width="48" height="24" viewBox="0 0 49 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L31.6667 25H49L17.3333 0H0Z" fill="#0E4B74" />
            </svg>
          )}
        </div>
        <div
          className={`indicator ${currentSlide === 1 ? 'active' : ''}`}
          onClick={() => handleSlideChange(1)}
          role="tab" aria-selected={currentSlide === 1}
        >
          {currentSlide === 1 ? (
            <svg width="48" height="24" viewBox="27.4404 0.5 46.1192 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.1592 0.5L73.5596 24.5H57.8408L27.4404 0.5H43.1592Z" fill="white" stroke="#0F4C75" />
            </svg>
          ) : (
            <svg width="48" height="24" viewBox="0 0 49 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L31.6667 25H49L17.3333 0H0Z" fill="#0E4B74" />
            </svg>
          )}
        </div>
        <div
          className={`indicator ${currentSlide === 2 ? 'active' : ''}`}
          onClick={() => handleSlideChange(2)}
          role="tab" aria-selected={currentSlide === 2}
        >
          {currentSlide === 2 ? (
            <svg width="48" height="24" viewBox="27.4404 0.5 46.1192 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.1592 0.5L73.5596 24.5H57.8408L27.4404 0.5H43.1592Z" fill="white" stroke="#0F4C75" />
            </svg>
          ) : (
            <svg width="48" height="24" viewBox="0 0 49 25" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L31.6667 25H49L17.3333 0H0Z" fill="#0E4B74" />
            </svg>
          )}
        </div>
      </div>


      <style jsx>{`
        .hero-container { width: 100%; position: relative; background-color: #f0f8ff; display: flex; flex-direction: column; align-items: center; }
        .fade-in { animation: fadeIn 1200ms ease-out both; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

        .main-hero-section { display: flex; justify-content: center; align-items: flex-end; gap: 0; flex-shrink: 0; position: relative; margin-top: 40px; width: 100%; max-width: 1441px; }

        .slide-content { width: 100%; }
        .fade-slide { animation: crossfade 900ms ease-out both; }
        @keyframes crossfade { from { opacity: 0; } to { opacity: 1; } }

        .carousel-indicators { display: flex; justify-content: center; align-items: center; gap: 0; margin: 0; line-height: 0; }
        .decorative-position { margin-top: 30px; }
        .indicator { cursor: pointer; padding: 0; margin: 0; transition: transform 0.2s ease; position: relative; z-index: 1; }
        .indicator + .indicator { margin-left: -20px; z-index: 0; }
        .indicator svg { display: block; margin: 0; }
        .indicator:hover { transform: scale(1.05); }

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
