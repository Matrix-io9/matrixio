import React from "react";
import {
    footer,
    link
}
    from './Footer.module.css';
import Icon from "../Icons/Icon.js";

const Footer = () => {
    return (
        <div className={footer}>
            <p>
                Made with ❤ by&nbsp;
                <a className={link} href="https://www.linkedin.com/in/subin-s-k-9b767219a/" rel="noreferrer" target="_blank">
                    Subin
                </a>
            </p>
            <div>
                <Icon />
            </div>
        </div>
    )
}
// i'm samsy subin
export default Footer;