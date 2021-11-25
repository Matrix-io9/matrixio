import React from 'react';
import 
{
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
        <div className={container}>
            <div className={card}>
                <div className={imgBx}>
                    <img src="https://elytrahack.matrixio.tech/img/logos/wide-small.png" alt="ElytraHack'21" />
                </div>
                <div className={contentBx}>
                    <h2>{props.eventName}</h2>
                    <div className={btn}>
                        <DiscordBtn url='https://discord.gg/Rp4VPSYfvm' />
                    </div>
                    <div className={link}>

                        <Link onClick={() => window.open("https://elytrahack.matrixio.tech/", "_blank")}>
                            ElytraHack'21
                            <img src="https://img.icons8.com/material-outlined/24/000000/external-link.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventCard;
