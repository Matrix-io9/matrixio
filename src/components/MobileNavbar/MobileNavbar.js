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
                <Link className={navLink} to='#events'>Events</Link>
                <Link className={navLink} to='#about'>About</Link>
                <Link className={navLink} to='#partners'>Partners</Link>
            </div>
            <img className={icon} src={CloseIcon} alt="Close" />
        </div>
    )
}

export default MobileNavbar
