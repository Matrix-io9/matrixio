import React, { createContext } from "react";
import Main from '../../layouts/Main'
// import DiscordBtn from ".8./../components/DiscordBtn/DiscordBtn.js";
import About from "../../components/About/About.js";
import Event from '../../components/Events/Event.js';
import Footer from "../../components/Footer/Footer.js";
import useMediaQuery from "../../hooks/useMediaQuery.js";

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
  image,
  wave,
  waves

} from './Home.module.css';
import CommunityPartners from "../../components/CommunityPartners/CommunityPartners";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import Newsletter from "../../components/Newsletter/Newsletter";

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 700px)');
  const DeviceContext = createContext(false);

  return (
    <DeviceContext.Provider value={isMobile}>
      <Main description={"The Ultimate Student Community | Empowering other student communities"}>
        <div className={container}>
          <div className={bimg}>
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
          </div>
          <About />
          <Event />
          <CommunityPartners />
          <Newsletter />
          <JoinCommunity />
          <div className={waves}>
            <svg className={wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00a7eb" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,74.7C480,64,600,96,720,138.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div>
          <div className={footerContainer}>
            <Footer />
          </div>
        </div>
      </Main>
    </DeviceContext.Provider>
  )
}

export default HomePage;
