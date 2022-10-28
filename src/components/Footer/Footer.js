import React from "react";
import {
    footer,link
}
    from './Footer.module.css';
import Icon from "../Icons/Icon.js";

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className={footer}>
            <div className="nav-links" style={{display: "flex",
  justifyContent: "space-between",
  width: "87%",
  marginBottom: "28px",
  position: "relative",
  bottom: "18px"}}>
                <a href="/" className={link}>Home</a>
                <a href="/team" className={link}>Team</a>
                <a href="#events" className={link}>Events</a>
                <a href="#about" className={link}>About</a>
                <a href="#partners" className={link}>Partners</a>
            </div>
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