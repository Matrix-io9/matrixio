import React from "react";
import Footer from "../../components/Footer/Footer";
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
import ChaitanyaAgrawal from '../../images/team/ChaitanyaAgrawal.jpg'
import NishantSuthar from '../../images/team/NishantSuthar.jpeg'
import MitaliLohar from '../../images/team/MitaliLohar.jpg'
import CharchitAgrawal from '../../images/team/CharchitAgrawal.jpg'
import ArchieParliya from '../../images/team/ArchieParliya.jpg'
import KritiSharma from '../../images/team/KritiSharma.jpeg'
import KaustubDuttPandey from '../../images/team/KaustubDuttPandey.jpg'

const Team = (props) => {
    return (
        <Main description={"Team behind Matrix.io Student Comumunity"}>
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
                    <TeamCard name="Garvit Chouhan" desc="Head | AI/ML Developer" src={GarvitChouhan} alt='Garvit Chouhan' linkedin="https://www.linkedin.com/in/garvit9000/" twitter="https://twitter.com/GarvitChouhan20" />
                    <TeamCard name="Subin S K" desc="Head | MERN Stack Developer" src={SubinSK} alt='Subin S K' linkedin="https://www.linkedin.com/in/subin-s-k-9b767219a/" twitter="https://twitter.com/SubinSK6" />
                    <TeamCard name="Kriti Sharma" desc="Faculty Advisor" src={KritiSharma} alt='Kriti Sharma' linkedin="https://www.linkedin.com/in/subin-s-k-9b767219a/" twitter="" />
                    <TeamCard name="Chaitanya Agrawal" desc="Backend Developer" src={ChaitanyaAgrawal} alt='Chaitanya Agrawal' linkedin="https://www.linkedin.com/in/chaitanya-agarwal-4bb121186" twitter="https://twitter.com/Chaitanya_2002_" />
                    <TeamCard name="Kaustub Pandey" desc="Backend Developer" src={KaustubDuttPandey} alt='Kaustub Pandey' linkedin="https://www.linkedin.com/in/kaustub-dutt-pandey-9921b920a/" twitter="https://twitter.com/PandeyKaustub" />
                    <TeamCard name="Mitali Lohar" desc="Python Developer" src={MitaliLohar} alt='Mitali Lohar' linkedin="https://www.linkedin.com/in/mitali-lohar-333204227" twitter=" https://twitter.com/mitali_lohar" />
                    <TeamCard name="Archie Parliya" desc="C++ Developer" src={ArchieParliya} alt='Archie Parliya' linkedin="https://www.linkedin.com/in/archie-parliya-295169217" twitter="https://twitter.com/ArchieParliya" />
                    <TeamCard name="Nishant Suthar" desc="Java Developer" src={NishantSuthar} alt='Nishant Suthar' linkedin="https://www.linkedin.com/in/nishant-suthar-302100215" twitter="https://twitter.com/NishantSuthar20" />
                    <TeamCard name="Charchit Agrawal" desc="Java Developer" src={CharchitAgrawal} alt='Charchit Agrawal' linkedin="https://www.linkedin.com/in/charchit-agarwal-a8161520b" twitter="https://twitter.com/charchit957" />
                </div>
            </div>
            <Footer />
        </Main>
    )
}

export default Team;
