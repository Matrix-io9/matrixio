import React, { useState} from "react";
// import  {FaBars}  from 'react-icons/fa';
import Logo from '../logo/logo.js';
// import styled from 'styled-components';
import { useScrollPosition } from "./useScrollEffect";
import * as navbarStyles from './navbar.module.css';

// const Bars = styled(FaBars)`
//   display: none;
//   color: white;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;

const Navbar = (props) => {
    const [scroll, setScroll] = useState(0);

    useScrollPosition(function setScrollPosition({ currentPosition }) {
        setScroll(currentPosition.y);
    });

    return (
        <div className={`${navbarStyles.navbar} ${navbarStyles.autofix} ${scroll > 80 ? 'someClass' : ''}`}>
            <Logo />
            <div className={navbarStyles.navLinks}>
                <a className={navbarStyles.navLink} href={`/${props.toggleLink}`}>{props.toggleText}</a>
                <a  className={navbarStyles.navLink} href='#events'>Events</a>
            </div>
        </div>
    )
}

export default Navbar;