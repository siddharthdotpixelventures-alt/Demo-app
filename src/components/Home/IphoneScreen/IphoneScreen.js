import React from 'react';
import './IphoneScreen.css';

const IphoneScreen = () => {
  return (
    <main className="phone-showcase">
        <div className="iphone">
            <div className="iphone-notch"></div>
                <div className="iphone-screen">
                     <img
                        id="app-demo"
                        src="/images/app-screenshot.png"
                        alt="App Screenshot"
                    />
                </div>
        </div>
    </main>
  );
};

export default IphoneScreen;
