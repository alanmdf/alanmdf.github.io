import React from 'react';

import AboutMeText from './AboutMeText';
import SocialMediaDiv from './SocialMediaDiv';

import ProfileImg from '../images/profile-picture.png';

function AboutMe() {
  return (
    <section className="about-me-section">
      <h1 className="titles-text">_about me</h1>
      <div className="about-me-box">
        <div className="profile-img-div">
          <img src={ ProfileImg } alt="" />
          <SocialMediaDiv />
        </div>
        <div className="text-and-links-box">
          <AboutMeText />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
