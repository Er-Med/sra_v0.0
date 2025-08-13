"use client";
import React from "react";

const WrapperSecondSlide = () => {
  return (
    <div className="slide-root">
      <div className="hero-container">
        <div className="hero-content">

          <h1 className="main-heading">
            Solutions <span className="highlight-text">innovantes</span> pour votre entreprise
          </h1>

          <p className="description">
            Découvrez nos solutions ERP Sage et services d&apos;accompagnement sur mesure pour optimiser votre transformation digitale.
          </p>

          <div className="action-buttons">
            <button className="primary-button">
              Lorem ipsum
              <span className="arrow-icon">→</span>
            </button>
          </div>

        </div>
      </div>

      <img
        src="/Group%2012140%20(2).png"
        alt="Group 12140"
        className="hero-main-image"
      />

      <style jsx>{`
        .slide-root {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 97px;
          width: 100%;
          max-width: 1441px;
        }
        .hero-container {
          width: 675px;
          height: 497px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 44px;
          flex-shrink: 0;
          padding: 40px 0;
        }
        
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 32px;
          position: relative;
          z-index: 1;
        }
        
        .main-heading {
          color: #000;
          font-family: var(--font-roboto), sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          margin: 0;
          animation: headIn 1200ms ease-out both 80ms;
          will-change: transform, opacity;
        }
        
        .highlight-text { color: #1B5F8C; }
        
        .description {
          color: #000;
          font-family: var(--font-roboto), sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.5;
          margin: 0;
          max-width: 600px;
          animation: descIn 1200ms ease-out both 150ms;
          will-change: transform, opacity;
        }
        
        .action-buttons { display: flex; align-items: center; gap: 24px; margin-top: 16px; animation: bottomIn 1200ms ease-out both 220ms; will-change: transform, opacity; }
        .primary-button { display: flex; align-items: center; gap: 12px; padding: 16px 32px; background-color: #1B5F8C; color: white; border: none; border-radius: 50px; font-family: var(--font-roboto), sans-serif; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease; }
        .primary-button:hover { background-color: #03a9f4; }
        .arrow-icon { font-size: 18px; font-weight: 300; }
        
        .hero-main-image { width: 585.188px; height: 507px; flex-shrink: 0; animation: imgIn 1200ms ease-out both 250ms; will-change: transform, opacity; }

        @keyframes descIn { from { opacity: 0; transform: translateX(-28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes imgIn { from { opacity: 0; transform: translateX(28px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes headIn { from { opacity: 0; transform: translateY(-28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes bottomIn { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @media (prefers-reduced-motion: reduce) { .description, .hero-main-image, .main-heading, .action-buttons { animation: none; } }

        @media (max-width: 1200px) { .slide-root { flex-direction: column; gap: 40px; align-items: center; } .hero-main-image { width: 100%; max-width: 500px; height: auto; } .hero-container { width: 100%; max-width: 600px; height: auto; padding: 20px 0; } }
        @media (max-width: 768px) { .main-heading { font-size: 36px; } }
        @media (max-width: 480px) { .main-heading { font-size: 28px; } }
      `}</style>
    </div>
  );
};

export default WrapperSecondSlide;
