import React from "react";

import 
{
    iconsContainer,
    icon
}
 from './Icon.module.css'

const Icon=()=>{
    return(
        <div className={iconsContainer}>
            <a href="mailto:team@matrixio.tech">
                <img className={icon} src="https://res.cloudinary.com/dngbmzf6x/image/upload/v1631625652/Matrix.io/gmail_pjvwsb.png" alt="icon" />
            </a>
            <a href="https://www.linkedin.com/company/matrix-io/about/">
                <img className={icon} src="https://res.cloudinary.com/dngbmzf6x/image/upload/v1631625652/Matrix.io/linkedin_xzygxp.png" alt="icon" />
            </a>
            <a href="https://discord.gg/VyKh8v4Naw">
                <img className={icon} src="https://res.cloudinary.com/dngbmzf6x/image/upload/v1631632267/Matrix.io/discord_icon.png" alt="icon" />
            </a>    
        </div>
    )
}

export default Icon;