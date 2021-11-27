import React from "react";

import 
{
  container,
  heading,
  about,
  aboutContainer,
  aboutContent,
  firstLetter,
  image,
  about1,
} from './About.module.css'

const About = () => {
  return (
    <>
    <div className={container}>
      <p className={heading}>About Us</p>
      <div className={aboutContainer}>
        <div className={about}>
          <div className={aboutContent}>
            <p>
              <span className={firstLetter}>We </span> help Communities to organise Hackathons, Workshop, Bootcamps & Events.
            </p>
          </div>
          <img className={image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626247/Matrix.io/community_xwgweo.jpg' alt="about" />
        </div>
      </div>
      <div className={aboutContainer}>
        <div className={about} id={about1}>
          <img className={image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626285/Matrix.io/contest_yjiqp5.jpg' alt="about" />
          <div className={aboutContent}>
            <p>
              <span className={firstLetter}>We </span>advance knowledge by Colloborating with multiple communities for single event.
            </p>
          </div>
        </div>
      </div>
      <div className={aboutContainer}>
        <div className={about}>
          <div className={aboutContent}>
            <p>
              <span className={firstLetter}>We </span> make Event Conducting Process Smooth with Scalable Solutions & Sponsor Support.
            </p>
          </div>
          <img className={image} src='https://res.cloudinary.com/dngbmzf6x/image/upload/v1631626277/Matrix.io/enroll_uikkpt.jpg' alt="about" />
        </div>
      </div>
    </div>
    </>
  )
}

export default About;
