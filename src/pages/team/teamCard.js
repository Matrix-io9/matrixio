import React from "react";
import * as teamCardStyles from './teamCard.module.css';

const TeamCard = (props) => {
    return (

        <div className={teamCardStyles.teamCard}>
            <img src={props.src} alt={props.alt} className={teamCardStyles.image} />
            <div className={teamCardStyles.cardTextBox}>
                <p className={teamCardStyles.cardHeading}>{props.name}</p>
                <hr />
                <p className={teamCardStyles.cardText}>{props.desc}</p>
            </div>
        </div>
    )
}

export default TeamCard;