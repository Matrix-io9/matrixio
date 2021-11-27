import React from "react";
import Main from '../../layouts/Main'
import DiscordBtn from "../../components/DiscordBtn/DiscordBtn.js";
import About from "../../components/About/About.js";
import Event from '../../components/Events/Event.js';
import Footer from "../../components/Footer/Footer.js";

import './Home.css';
import One from '../../images/ss/1.png'
import Two from '../../images/ss/2.png'
import Three from '../../images/ss/3.jpg'
import Four from '../../images/ss/4.png'

import {
  container,
  bimg,
  introBox,
  footerContainer,
  introCard,
  contentHeadingOne,
  contentHeadingTwo,
  contentAbout,
  snapshots,
  imagefirst,
  imagesecond,
  imagethird,
  image

} from './Home.module.css';

const HomePage = () => {
  return (
    <Main description={"The Ultimate Student Community | Empowering other student communities"}>
      <div className={container}>

        <div className={bimg}></div>
        <div className={introBox}>
          {/* <p className={heading}>Matrix.io</p> */}
          {/* <DiscordBtn url='https://discord.gg/Mjpjmdrk' /> */}
          <div className={introCard}>
            <div className={contentHeadingOne}>Matrix.io</div>
            <div className={contentHeadingTwo}>The Ultimate Community</div>
            <hr style={{ width: '60%', color: '#fda611', borderStyle: 'solid', height: 0, boxSizing: 'content-box' }} />
            <div className={contentAbout}>We empower not only the students as well as the communities which are part of our community.</div>
          </div>
          <div className={snapshots}>
            <img className={image} id={imagefirst} src={One} alt="1" />
            <img className={image} id={imagefirst} src={Two} alt="2" />
            <img className={image} id={imagefirst} src={Three} alt="3" />
            <img className={image} id={imagefirst} src={Four} alt="4" />
          </div>
        </div>

        <About />

        <Event />

        <div className={footerContainer}>
          <Footer />
        </div>

      </div>
    </Main>
  )
}

export default HomePage;
