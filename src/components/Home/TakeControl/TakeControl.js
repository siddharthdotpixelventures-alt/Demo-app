import React from 'react';
import './TakeControl.css';

const TakeControl = () => {
  return (
    <div className="take-control-container">
      <div className="title-container">
        <h1 className="title-text">Take back control</h1>
      </div>

      <div className="square-container">
        <div className="square-box">
          <div className="square-content">
            <div className="square-icon">📊</div>
            <h2 className="square-title">Track your usage</h2>
            <p className="square-description">
              See exactly how much time you waste on social media
            </p>
          </div>
        </div>

        <div className="square-box">
          <div className="square-content">
            <div className="square-icon">⏱️</div>
            <h2 className="square-title">Set limits</h2>
            <p className="square-description">
              Create boundaries for healthier digital habits
            </p>
          </div>
        </div>

        <div className="square-box">
          <div className="square-content">
            <div className="square-icon">🧠</div>
            <h2 className="square-title">Focus mode</h2>
            <p className="square-description">
              Block distractions when you need to concentrate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeControl;
