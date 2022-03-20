import React from "react";
import {
    footer,
}
    from './Footer.module.css';
import Icon from "../Icons/Icon.js";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className={footer}>
            <p>
                Copyright &copy; {date}
                <br />
            </p>
            <div>
                <Icon />
            </div>
        </div>
    )
}
export default Footer;