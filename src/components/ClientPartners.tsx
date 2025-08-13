"use client";
import React from "react";

const ClientPartners = () => {
 return (
  <div className="client-partners-section">
   <div className="partners-banner">
    <div className="partners-track">
     {/* First set of images */}
     <div className="partner-item">
      <img src="/clinet-01.png" alt="Client Partner 1" />
     </div>
     <div className="partner-item">
      <img src="/clinet-02.png" alt="Client Partner 2" />
     </div>
     <div className="partner-item">
      <img src="/clinet-03.png" alt="Client Partner 3" />
     </div>
     <div className="partner-item">
      <img src="/clinet-04.png" alt="Client Partner 4" />
     </div>
     <div className="partner-item">
      <img src="/clinet-05.png" alt="Client Partner 5" />
     </div>
     <div className="partner-item">
      <img src="/clinet-06.png" alt="Client Partner 6" />
     </div>
     {/* Duplicate set for seamless loop */}
     <div className="partner-item">
      <img src="/clinet-01.png" alt="Client Partner 1" />
     </div>
     <div className="partner-item">
      <img src="/clinet-02.png" alt="Client Partner 2" />
     </div>
     <div className="partner-item">
      <img src="/clinet-03.png" alt="Client Partner 3" />
     </div>
     <div className="partner-item">
      <img src="/clinet-04.png" alt="Client Partner 4" />
     </div>
     <div className="partner-item">
      <img src="/clinet-05.png" alt="Client Partner 5" />
     </div>
     <div className="partner-item">
      <img src="/clinet-06.png" alt="Client Partner 6" />
     </div>
    </div>
   </div>

   <style jsx>{`
        .client-partners-section {
          width: 100%;
          background: #f0f8ff;
          padding: 40px 0;
          overflow: hidden;
        }

        .partners-banner {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .partners-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .partner-item {
          flex-shrink: 0;
          margin: 0 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .partner-item img {
          height: 50px;
          width: auto;
          object-fit: contain;
          // filter: grayscale(100%);
          // opacity: 0.7;
          transition: all 0.3s ease;
        }

        .partner-item:hover img {
          // filter: grayscale(0%);
          opacity: 1;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .partners-banner:hover .partners-track {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .client-partners-section {
            padding: 30px 0;
          }
          
          .partner-item {
            margin: 0 25px;
          }
          
          .partner-item img {
            height: 50px;
          }
        }

        @media (max-width: 480px) {
          .partner-item {
            margin: 0 20px;
          }
          
          .partner-item img {
            height: 40px;
          }
        }
      `}</style>
  </div>
 );
};

export default ClientPartners;
