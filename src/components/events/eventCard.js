import React from 'react';
import * as eventCardStyles from './eventCard.module.css'
import DiscordBtn from '../discordBtn/discordBtn';

function EventCard(props) {
    return (
        <div className={eventCardStyles.container}>
            <div className={eventCardStyles.card}>
                <div className={eventCardStyles.imgBx}>
                    <img src="https://elytrahack.matrixio.tech/img/logos/wide-small.png" alt="ElytraHack'21" />
                </div>
                <div className={eventCardStyles.contentBx}>
                    <h2>{props.eventName}</h2>
                    <div className={eventCardStyles.btn}>
                        <DiscordBtn url='https://discord.gg/Rp4VPSYfvm' />
                    </div>
                    <div className={eventCardStyles.link}>

                        <a onClick={() => window.open("https://elytrahack.matrixio.tech/", "_blank")}>
                            ElytraHack'21
                            <img src="https://img.icons8.com/material-outlined/24/000000/external-link.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
