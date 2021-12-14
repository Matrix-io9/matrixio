import React, { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

import {
    container,
    navLink,
    navLinks,
    icon,
    close,
    open
} from './MobileNavbar.module.css';

import CloseIcon from '../../images/icons/close.png';

function MobileNavbar(props) {
    const location = useLocation().pathname
    const [Path, setPath] = useState("/team");
    const [PathName, setPathName] = useState("Team");
    const [showNavbar, setNavbar] = useState(true);
    const navbarHandler = () => {
        setNavbar(false)
    }

    useEffect(() => {
        if (location.localeCompare("/team")) {
            setPath("/team");
            setPathName("Team");
        }
        else {
            setPath("/");
            setPathName("Home");
        }
    }, [location])

    return (
        <div className={`${container} ${showNavbar ? open : close}`}>
            <div className={navLinks}>
                {
                    location === "/team"
                        ?
                        <Link className={navLink} to={Path}>{PathName}</Link>
                        :
                        <>
                            <Link className={navLink} to={Path}>{PathName}</Link>
                            <a className={navLink} href="#events">Events</a>
                            <a className={navLink} href='#about'>About</a>
                            <a className={navLink} href='#partners'>Partners</a>
                        </>
                }
            </div>
            <img className={icon} onClick={navbarHandler} src={CloseIcon} alt="Close" />
        </div>
    )
}

export default MobileNavbar
