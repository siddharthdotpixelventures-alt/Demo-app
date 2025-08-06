import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <>
  <div className="footer-nav">
        <a href="/blog">Blog</a>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
        <a href="/contact">Contact</a>
        <a href="/faq">FAQ</a>
      </div>

      <div className="footer-bottom-text">
        © 2025 brainrot. All rights reserved.
      </div>
      </>
  );
};

export default FooterSection;
