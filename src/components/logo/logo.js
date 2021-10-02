import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import * as logoStyles from './logo.module.css'

const Logo =()=>{
    return(
        <div>
            <Link to ="/">
                <img className={logoStyles.logo} src="https://res.cloudinary.com/dngbmzf6x/image/upload/v1631625656/Matrix.io/logo_ar4gsd.png" alt="Matrix.io" />
            </Link>
        </div>
    )
}

export default Logo;