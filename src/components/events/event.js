import React from 'react';
import EventCard from './EventCard';

import 
{
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
                <EventCard eventName="ElytraHack'21" />
            </div>
        </div>
    )
}

export default Event;
