"use client";

import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <header className="header">
        <div className="logo-section">
          <Image
            src="/logo-SRA-Afrique-Bleu-2000.png"
            alt="SRA Afrique Logo"
            width={200}
            height={91}
            className="logo-image"
          />
        </div>

        <div className="spacer-section"></div>

        <nav className="navigation">
          <div className="nav-wrapper">
            <div className="nav-menu">
              <div className="menu-items">
                <div className="nav-item">Accueil</div>
                <div className="nav-item">Qui Sommes-Nous ?</div>
                <div className="nav-item">Nos solutions</div>
                <div className="nav-item">Groupe SRA</div>
                <div className="nav-item">Carrières</div>
                <div className="nav-item">Événements</div>
                <div className="nav-item">Blog</div>
                <div className="nav-item">Contact</div>
              </div>
              <div className="active-indicator"></div>
            </div>
          </div>
        </nav>

        <div className="mobile-menu-toggle">
          <i className="ti ti-menu-2"></i>
        </div>
      </header>

      <style jsx>{`
        .header {
          display: flex;
          width: 100%;
          max-width: 1440px;
          height: 90px; /* Decreased from 100px */
          align-items: center;
          flex-shrink: 0;
          background: #FFF;
          position: relative;
          margin: 0 auto;
          border-bottom: 1px solid #e0e0e0;
        }

        .logo-section {
          display: flex;
          width: 194px;
          padding: 0 80px;
          justify-content: center;
          align-items: center;
          gap: 140px;
          flex-shrink: 0;
          position: relative;
        }

        .logo-image {
          width: 200px; /* Decreased from 250px */
          height: 91px; /* Decreased from 114px */
          flex-shrink: 0;
          aspect-ratio: 86/39;
          position: relative;
        }

        .spacer-section {
          display: flex;
          width: 276px;
          height: 30px;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          flex-shrink: 0;
          position: relative;
        }

        .navigation {
          display: flex;
          width: 924px;
          height: 30px;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          flex-shrink: 0;
          position: relative;
        }

        .nav-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          position: relative;
        }

        .nav-menu {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
        }

        .menu-items {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          position: relative;
        }

        .nav-item {
          color: #0F4C75;
          font-family: var(--font-roboto), -apple-system, Helvetica, sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%;
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-item:hover {
          color: #0E4B74;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 1px;
          background-color: #0E4B74;
          transition: width 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::after {
          width: 60%;
        }

        .active-indicator {
          width: 43px;
          height: 1px;
          background: #0F4C75;
          position: relative;
        }

        .mobile-menu-toggle {
          display: none;
          color: #0F4C75;
          font-size: 24px;
          cursor: pointer;
          padding: 0 20px;
        }

        @media (max-width: 991px) {
          .header {
            width: 100%;
            position: relative;
            padding: 0 20px;
          }

          .logo-section {
            padding: 0 20px;
            width: auto;
          }

          .spacer-section {
            display: none;
          }

          .navigation {
            padding: 0 20px;
            width: auto;
            flex: 1;
          }

          .nav-wrapper {
            width: 100%;
          }

          .menu-items {
            gap: 30px;
          }

          .nav-item {
            font-size: 15px;
          }
        }

        @media (max-width: 640px) {
          .header {
            height: 110px; /* Increased from 90px */
            justify-content: space-between;
          }

          .logo-section {
            padding: 0;
            width: auto;
          }

          .logo-image {
            width: 160px; /* Significantly increased from 120px */
            height: 73px; /* Significantly increased from 55px */
          }

          .navigation {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
