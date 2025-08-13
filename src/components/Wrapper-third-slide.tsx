"use client";
import React from "react";

const WrapperThirdSlide = () => {
  return (
    <div className="slide-root">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="main-heading">
            Accélérez votre <span className="highlight-text">croissance</span> faites appel à nous
          </h1>

          <p className="description">
            Des équipes expertes et des méthodologies éprouvées pour mener vos projets
            à bien, dans les délais et avec la qualité attendue.
          </p>

          <div className="action-buttons">
            <button className="primary-button">
              Nous contacter
              <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      <img
        src="/Group%2012140.png"
        alt="Group 12140 (2)"
        className="hero-main-image"
      />

      <style jsx>{`
        .slide-root { display: flex; justify-content: center; align-items: flex-end; gap: 97px; width: 100%; max-width: 1441px; }
        .hero-container { width: 675px; height: 497px; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: 32px; flex-shrink: 0; padding: 40px 0; }
        .hero-content { display: flex; flex-direction: column; align-items: flex-start; gap: 32px; }
        .main-heading { color: #000; font-family: var(--font-roboto), sans-serif; font-size: 48px; font-weight: 700; line-height: 1.2; margin: 0; animation: headIn 1200ms ease-out both 80ms; will-change: transform, opacity; }
        .highlight-text { color: #1B5F8C; }
        .description { color: #000; font-family: var(--font-roboto), sans-serif; font-size: 16px; font-weight: 400; line-height: 1.5; margin: 0; max-width: 600px; animation: descIn 1200ms ease-out both 150ms; will-change: transform, opacity; }
        .action-buttons { display: flex; align-items: center; gap: 24px; margin-top: 16px; animation: bottomIn 1200ms ease-out both 220ms; will-change: transform, opacity; }
        .primary-button { display: flex; align-items: center; gap: 10px; padding: 14px 28px; background-color: #1B5F8C; color: #fff; border: none; border-radius: 50px; font-family: var(--font-roboto), sans-serif; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.3s ease; }
        .primary-button:hover { background-color: #03a9f4; }
        .arrow-icon { font-size: 18px; font-weight: 300; }
        .secondary-button { padding: 14px 28px; background-color: transparent; color: #1B5F8C; border: 2px solid #1B5F8C; border-radius: 50px; font-family: var(--font-roboto), sans-serif; font-size: 16px; font-weight: 500; cursor: pointer; transition: all 0.3s ease; }
        .secondary-button:hover { background-color: #03a9f4; color: #fff; border-color: #03a9f4; }
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

export default WrapperThirdSlide;
