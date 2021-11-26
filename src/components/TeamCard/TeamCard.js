import React from "react";
import {
teamCard,
image,
cardTextBox,
cardHeading,
cardText
} from './TeamCard.module.css';

const TeamCard = (props) => {
    return (

        <div className={teamCard}>
            <img src={props.src} alt={props.alt} className={image} />
            <div className={cardTextBox}>
                <p className={cardHeading}>{props.name}</p>
                <hr />
                <p className={cardText}>{props.desc}</p>
            </div>
        </div>
    )
}

export default TeamCard;
