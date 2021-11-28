import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TeamCard from "../../components/TeamCard/TeamCard";
import {
    teamContainer,
    teamCards,
    teamContentIntro,
    teamContentAbout,
    teamContentHeading,

} from './Team.module.css';

import './Team.css';
import Main from "../../layouts/Main";

import GarvitChouhan from '../../images/team/GarvitChouhan.png'
import SubinSK from '../../images/team/SubinSK.jpg'
// import ChaitanyaAgrawal from '../../images/team/ChaitanyaAgrawal.' 
import NishantSuthar from '../../images/team/NishantSuthar.jpeg'
import MitaliLohar from '../../images/team/MitaliLohar.jpg'
import CharchitAgrawal from '../../images/team/CharchitAgrawal.jpg'
import ArchieParliya from '../../images/team/ArchieParliya.jpg'

const Team = () => {
    return (
        <Main description={"Team behind Matrix.io Student Comumunity"}>
            <Navbar toggleText='Home' toggleLink='' />

            <div className={teamContentIntro}>
                <div className={teamContentHeading}>
                    Team
                </div>
                <div className={teamContentAbout}>
                    The team which makes Matrix.io a big success.
                </div>
            </div>

            <div className={teamContainer}>
                <div className={teamCards}>
                    <TeamCard name="Garvit Chouhan" desc="Head | AI/ML Developer" src={GarvitChouhan} alt='Garvit Chouhan' linkedin="https://www.linkedin.com/in/garvit9000/" twitter="" />
                    <TeamCard name="Subin S K" desc="Head | MERN Stack Developer" src={SubinSK} alt='Subin S K' linkedin="https://www.linkedin.com/in/subin-s-k-9b767219a/" twitter="https://twitter.com/SubinSK6" />
                    {/* <TeamCard name="Chaitanya Agrawal" desc="Python Backend Developer" src={ChaitanyaAgrawal} alt='Chaitanya Agrawal' linkedin="https://www.linkedin.com/in/chaitanya-agarwal-4bb121186"/> */}
                    <TeamCard name="Charchit Agrawal" desc="Java Developer" src={CharchitAgrawal} alt='Charchit Agrawal' linkedin="https://www.linkedin.com/in/charchit-agarwal-a8161520b" twitter="https://twitter.com/charchit957" />
                    <TeamCard name="Nishant Suthar" desc="Java Developer" src={NishantSuthar} alt='Nishant Suthar' linkedin="https://www.linkedin.com/in/nishant-suthar-302100215" twitter="https://twitter.com/NishantSuthar20" />
                    <TeamCard name="Mitali Lohar" desc="Python Developer" src={MitaliLohar} alt='Mitali Lohar' />
                    <TeamCard name="Archie Parliya" desc="C++ Developer" src={ArchieParliya} alt='Archie Parliya' />
                </div>
            </div>
            <Footer />
        </Main>
    )
}

export default Team;
