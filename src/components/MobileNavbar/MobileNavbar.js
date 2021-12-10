import React from 'react'
import { Link } from "react-router-dom";

import {
    container,
    navLink,
    navLinks,
    icon
} from './MobileNavbar.module.css';
import CloseIcon from '../../images/icons/close.png';

function MobileNavbar(props) {
    if (props.SideNavbar) {
        container.display = "flex";
    }
    return (
        <div className={container}>
            <div className={navLinks}>
                <Link className={navLink} to={`/${props.toggleLink}`}>{props.toggleText}</Link>
                <a className={navLink} href="#events">Events</a>
                <a className={navLink} href='#about'>About</a>
                <a className={navLink} href='#partners'>Partners</a>
            </div>
            <img className={icon} src={CloseIcon} alt="Close" />
        </div>
    )
}

export default MobileNavbar
