import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TeamCard from "../../components/TeamCard/TeamCard";
import
{
  teamContainer,
  teamHeading,
    teamCards,
    
} from './Team.module.css';

import Main from "../../layouts/Main";

const Team = () => {
    return (
        <Main description={"Team behind Matrix.io Student Comumunity"}>
        <div>
            <Navbar toggleText='Home' toggleLink=''/>
            <div>
                <div className={teamContainer}>
                    <p className={teamHeading}>
                        Team
                    </p>
                    <div className={teamCards}>
                        <TeamCard name="Garvit Chouhan" desc="Co-Founder Matrix.io" src='./src/images/team/GarvitChouhan.png' alt='Garvit Chouhan' />
                        <TeamCard name="Subin S K" desc="Co-Founder Matrix.io" src='./src/images/team/SubinSK.png' alt='Subin S K' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </Main>
    )
}

export default Team;
