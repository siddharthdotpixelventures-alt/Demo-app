import React from 'react';
import './Home.css';
import StoreButton from "./StoreButton/StoreButton";
import IphoneScreen from "./IphoneScreen/IphoneScreen";
import TakeControl from "./TakeControl/TakeControl";
import StopScrollSection from "./StopScrollSection/StopScrollSection";
import FooterSection from "./FooterSection/FooterSection";

import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../../constants/storeLinks";

const Home = () => {
  return (
    <div className="home-container">
      <img src="/images/brainrot-reviews.png" alt="Centered" className="center-image" />
      <h2 className="black-text">Your screen is stealing your life.</h2>
      <h2 className="red-text">Let's take it back.</h2>

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

        <IphoneScreen />

        <TakeControl />

        <StopScrollSection />

        <FooterSection />
        
    </div>
  );
};

export default Home;
