import React from "react";
import * as aboutStyles from './about.module.css'

const About = () => {
  return (
    <>
    <div className={aboutStyles.container}>
      <p className={aboutStyles.heading}>About Us</p>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.about}>
          <div className={aboutStyles.aboutContent}>
            <p>
              <span className={aboutStyles.firstLetter}>We </span> help Communities to organise Hackathons, Workshop, Bootcamps & Events.
            </p>
          </div>
          <img className={aboutStyles.image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626247/Matrix.io/community_xwgweo.jpg' alt="about" />
        </div>
      </div>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.about} id={aboutStyles.about1}>
          <img className={aboutStyles.image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626285/Matrix.io/contest_yjiqp5.jpg' alt="about" />
          <div className={aboutStyles.aboutContent}>
            <p>
              <span className={aboutStyles.firstLetter}>We </span>advance knowledge by Colloborating with multiple communities for single event.
            </p>
          </div>
        </div>
      </div>
      <div className={aboutStyles.aboutContainer}>
        <div className={aboutStyles.about}>
          <div className={aboutStyles.aboutContent}>
            <p>
              <span className={aboutStyles.firstLetter}>We </span> make Event Conducting Process Smooth with Scalable Solutions & Sponsor Support.
            </p>
          </div>
          <img className={aboutStyles.image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626277/Matrix.io/enroll_uikkpt.jpg' alt="about" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About;
