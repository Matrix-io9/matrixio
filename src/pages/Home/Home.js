import React from "react";
import Main from '../../layouts/Main'
import DiscordBtn from "../../components/DiscordBtn/DiscordBtn.js";
import About from "../../components/About/About.js";
import Event from '../../components/Events/Event.js';
import Footer from "../../components/Footer/Footer.js";

import './Home.css';

import {
  container,
  bimg,
  introBox,
  heading,
  footerContainer
} from './Home.module.css';

const HomePage = () => {
  return (
    <Main description={"The Ultimate Student Community | Empowering other student communities"}>
      <div className={container}>

        <div className={bimg}></div>
        <div className={introBox}>
          <p className={heading}>Matrix.io</p>
          <DiscordBtn url='https://discord.gg/Mjpjmdrk' />
          <div className="introcard">
            <div className="contentHeading">Matrix.io</div>
            <div className="contentAbout"></div>
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
