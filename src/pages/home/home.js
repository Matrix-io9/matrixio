import React from "react";
import Footer from "../../components/footer/footer.js";
import Navbar from "../../components/navbar/navbar.js";
import About from "../../components/about/about.js";
import Event from '../../components/events/event.js';
import * as homeStyles from './home.module.css';
import './home.css';
import DiscordBtn from "../../components/discordBtn/discordBtn.js";

const HomePage = () => {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.bimg}>
        <div className={homeStyles.navbarContainer}>
          <Navbar toggleText='Team' toggleLink='team'/>
        </div>
        <div className={homeStyles.introBox}>
          <p className={homeStyles.heading}>Matrix.io</p>
          <DiscordBtn url='https://discord.gg/Mjpjmdrk'/>
        </div>
      </div>

      <About/>
      <Event />
      <div className={homeStyles.footerContainer}>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage;
