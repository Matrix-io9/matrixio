import React,{useState} from "react";
import { Link } from "react-router-dom";

// import {FaBars} from 'react-icons/fa';
// import styled from 'styled-components';

import 
{
  navbar,
  navLink,
  navLinks,
  active,
  autofix
} from './Navbar.module.css';
import Logo from '../Logo/Logo.js';

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
    const [Navbar, setNavbar]= useState(false);
    const changeBackground = () =>{
      if(window.scrollY >= 80){
        setNavbar(true);
      }
      else{
        setNavbar(false);
      }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div className={Navbar ? `${navbar} ${active} ${autofix}` : `${navbar} ${autofix}`}>
        <Logo />
        <div className={navLinks}>
            <Link className={navLink} to={`/${props.toggleLink}`}>{props.toggleText}</Link>
            <Link  className={navLink} to='#events'>Events</Link>
        </div>
    </div>
    )
}
export default Navbar;