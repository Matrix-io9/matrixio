import React from 'react';
import EventCard from './EventCard';

import {
    container,
    heading,
    eventCards
} from './Event.module.css'

function Event() {
    return (
        <div id='events' className={container}>
            <p className={heading}>
                Events
            </p>
            <div className={eventCards}>
                <EventCard eventName="ElytraHack'21" image="https://elytrahack.matrixio.tech/img/logos/wide-small.png" websiteurl="https://elytrahack.matrixio.tech/" discordurl='https://discord.gg/Rp4VPSYfvm' />
                <EventCard eventName="CommOS: Hacktoberfest" image="https://matrix-io9.github.io/Commos.github.io/dist/images/Logo.png" websiteurl="https://matrix-io9.github.io/Commos.github.io/" discordurl='https://discord.gg/Rp4VPSYfvm' />
            </div>
        </div>
    )
}

export default Event;
