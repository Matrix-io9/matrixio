import React from 'react';
import EventCard from './eventCard';
import * as eventStyles from './event.module.css'

function Event() {
    return (
        <div id='events' className={eventStyles.container}>
            <p className={eventStyles.heading}>
                Events
            </p>
            <div className={eventStyles.eventCards}>
                <EventCard eventName="ElytraHack'21" />
            </div>
        </div>
    )
}

export default Event;
