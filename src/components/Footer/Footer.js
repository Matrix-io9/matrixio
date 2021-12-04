import React from "react";
import {
footer
}
    from './Footer.module.css';
import Icon from "../Icons/Icon.js";

const Footer = () => {
    return (
        <div className={footer}>
            <p>
                Made with ❤ by Subin
            </p>
            <div>
                <Icon />
            </div>
        </div>
    )
}
// i'm samsy subin
export default Footer;