import React from "react";
import {
    teamCard,
    image,
    cardTextBox,
    cardHeading,
    cardText,
    socialMediaLinks,
    icon,
    link
} from './TeamCard.module.css';

import Twitter from '../../images/icons/twitter.png'
import Linkedin from '../../images/icons/linkedin.png'
const TeamCard = (props) => {
    console.log(props.src)
    return (
        <div className={teamCard}>
            <img src={props.src} alt={props.alt} className={image} />
            <div className={cardTextBox}>
                <p className={cardHeading}>{props.name}</p>
                <hr />
                <p className={cardText}>{props.desc}</p>
            </div>
            <div className={socialMediaLinks}>
                {
                    props.linkedin ?
                        <a href={props.linkedin} target="_blank" className={link} rel="noreferrer">
                            <img className={icon} src={Linkedin} alt="linkedin"></img>
                        </a>
                        : <></>
                }
                {
                    props.twitter ?
                        <a href={props.twitter} target="_blank" rel="noreferrer" className={link}>
                            <img className={icon} src={Twitter} alt="twitter"></img>
                        </a> :
                        <></>
                }
            </div>
        </div>
    )
}

export default TeamCard;
