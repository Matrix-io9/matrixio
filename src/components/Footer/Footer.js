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
            {/* <div className="nav-links">
                <a href className="link-1">Home</a>
                <a href="/team" className="link-1">Team</a>
                <a href="#events" className="link-1">Events</a>
                <a href="#about" className="link-1">About</a>
                <a href="#partners" className="link-1">Partners</a>
            </div> */}
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