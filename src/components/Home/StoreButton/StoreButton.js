import React from 'react';
import './StoreButton.css';

const StoreButtons = ({ href, image, smallText, bigText }) => {
  return (
    <a
      href={href}
      className="store-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt="store-icon" className="store-icon" />
      <div className="store-text">
        <span className="store-small-text">{smallText}</span>
        <span className="store-big-text">{bigText}</span>
      </div>
    </a>
  );
};

export default StoreButtons;
