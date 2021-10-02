import React from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import TeamCard from "./teamCard";
import * as teamStyles from './team.module.css'

const Team = () => {
    return (
        <div>
            <Navbar toggleText='Home' toggleLink=''/>
            <div>
                <div className={teamStyles.teamContainer}>
                    <p className={teamStyles.teamHeading}>
                        Team
                    </p>
                    <div className={teamStyles.teamCards}>
                        <TeamCard name="Garvit Chouhan" desc="Co-Founder Matrix.io" src='https://raw.githubusercontent.com/Matrix-io9/elytrahack2021/e58f4a54ccf523b3676c9b5ded1cced8dfe7eb6f/img/Garvit%20Chouhan.png?raw=true' alt='Garvit Chouhan' />
                        <TeamCard name="Subin S K" desc="Co-Founder Matrix.io" src='https://github.com/Matrix-io9/elytrahack2021/blob/e58f4a54ccf523b3676c9b5ded1cced8dfe7eb6f/img/Subin%20S%20K.png?raw=true' alt='Subin S K' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Team;