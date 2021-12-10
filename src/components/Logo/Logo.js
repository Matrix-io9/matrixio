import React from "react";
import { Link } from "react-router-dom";

import {
logo
} from './Logo.module.css'

const Logo = () => {
    return (
        <Link to="/">
            <img className={logo} src="https://res.cloudinary.com/dngbmzf6x/image/upload/v1631625656/Matrix.io/logo_ar4gsd.png" alt="Matrix.io" />
        </Link>
    )
}

export default Logo;