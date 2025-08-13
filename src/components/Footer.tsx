import React from "react";

const Footer = () => (
  <footer style={{ padding: '1rem', borderTop: '1px solid #eee', background: '#fafafa', textAlign: 'center' }}>
    <small>&copy; {new Date().getFullYear()} SRA Afrique. All rights reserved.</small>
  </footer>
);

export default Footer; 