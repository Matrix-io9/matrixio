import React from 'react'

import {
    card,
    image
} from './CommunityCard.module.css';

function CommunityCard(props) {
    return (
        <div className={card}>
            <img src={props.path} alt={props.name} className={image} />
        </div>
    )
}

export default CommunityCard
