import React from 'react';
import {
    container,
    card,
    imgBx,
    contentBx,
    btn,
    link
} from './EventCard.module.css';

import DiscordBtn from '../DiscordBtn/DiscordBtn';
function EventCard(props) {
    return (
        <div className={container}>
            <div className={card}>
                <div className={imgBx}>
                    <img src={props.logo} alt="ElytraHack'21" />
                </div>
                <div className={contentBx}>
                    <h2>{props.eventName}</h2>
                    <div className={btn}>
                        <DiscordBtn url='https://discord.gg/Rp4VPSYfvm' />
                    </div>
                    <div className={link} onClick={() => window.open(props.eventWebsite, "_blank")}>
                        {props.eventName}
                        <img src="https://img.icons8.com/material-outlined/24/000000/external-link.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
