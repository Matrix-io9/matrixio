import React from 'react'
import {
    container,
    socialmedia,
    image,
    heading
} from './JoinCommunity.module.css'

import Linkedin from '../../images/icons/linkedin.png'
import Twitter from '../../images/icons/twitter.png'
import Discord from '../../images/icons/discord.svg'
import Instagram from '../../images/icons/instagram.png'

function JoinCommunity() {
    return (
        <div className={container}>
            <div className={heading}>
                Join our Community
            </div>
            <div className={socialmedia}>
                <a href="https://discord.gg/Mjpjmdrk" target="_blank" rel="noreferrer">
                    <img className={image} src={Discord} alt="Discord" />
                </a>
            </div>
            <div className={socialmedia}>
                <a href="https://www.linkedin.com/company/matrix-io/" target="_blank" rel="noreferrer">
                    <img className={image} src={Linkedin} alt="Linkedin" />
                </a>
            </div>
            <div className={socialmedia}>
                <a href="https://twitter.com/Matrixio9" target="_blank" rel="noreferrer">
                    <img className={image} src={Twitter} alt="Twitter" />
                </a>
            </div>
            <div className={socialmedia}>
                <a href="https://www.instagram.com/matrix.io9/" target="_blank" rel="noreferrer">
                    <img className={image} src={Instagram} alt="Instagram" />
                </a>
            </div>
        </div>
    )
}

export default JoinCommunity
