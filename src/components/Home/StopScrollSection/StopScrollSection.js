import React from 'react';
import './StopScrollSection.css';
import StoreButton from '../StoreButton/StoreButton';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../../../constants/storeLinks";


const StopScrollSection = () => {
  return (
    <>
        <div className="final-section">
            <h2 className="final-big-text">Ready to stop the scroll?</h2>
            <p className="final-small-text">Join thousands reclaiming their digital wellbeing</p>

            <div className="button-container">
                <StoreButton
                    href={APP_STORE_URL}
                    image="/images/apple-icon.png"
                    smallText="Download on the"
                    bigText="App Store"
                />
                <StoreButton
                    href={GOOGLE_PLAY_URL}
                    image="/images/google-icon.png"
                    smallText="GET IT ON"
                    bigText="Google Play"
                />
            </div>   
        </div>
    
        <div className="horizontal-line"></div>
        
    </>
  );
};

export default StopScrollSection;
