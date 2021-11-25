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
import { Link } from 'react-router-dom';

function EventCard(props) {
    return (
        <div className={container} style={{ content: `${props.eventName}` }}>
            <div className={card} style={{ content: `${props.eventName}` }}>
                <div className={imgBx}>
                    <img src={props.image} alt="ElytraHack'21" />
                </div>
                <div className={contentBx}>
                    <h2>{props.eventName}</h2>
                    <div className={btn}>
                        <DiscordBtn url={props.discordurl} />
                    </div>
                    <div className={link}>

                        <Link onClick={() => window.open(props.websiteurl, "_blank")}>
                            {props.eventName}
                            <img src="https://img.icons8.com/material-outlined/24/000000/external-link.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
