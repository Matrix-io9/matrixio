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
                <EventCard eventName="ElytraHack'21" eventWebsite="https://elytrahack.matrixio.tech/" logo="https://elytrahack.matrixio.tech/img/logos/wide-small.png" />
                <EventCard eventName="CommOS:Hacktoberfest'21" eventWebsite="https://matrix-io9.github.io/Commos.github.io/" logo="https://matrix-io9.github.io/Commos.github.io/dist/images/Logo.png" />
            </div>
        </div>
    )
}

export default Event;
