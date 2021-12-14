import React, { useState, useEffect } from "react";
import Logo from '../Logo/Logo.js';
import { Link, useLocation } from "react-router-dom";

import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import {
  navbar,
  navLink,
  navLinks,
  active,
  autofix
} from './Navbar.module.css';
import MobileNavbar from "../MobileNavbar/MobileNavbar.js";

const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Navbar = (props) => {
  const location = useLocation().pathname
  const [Path, setPath] = useState("/team");
  const [PathName, setPathName] = useState("Team");
  const [Navbar, setNavbar] = useState(false);
  const [showMobileNavbar, setMobileNavbar] = useState(false);

  const handleMobileNavbar = () => {
    showMobileNavbar ? setMobileNavbar(false) : setMobileNavbar(true);
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

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <div className={Navbar ? `${navbar} ${active} ${autofix}` : `${navbar} ${autofix}`}>
      {showMobileNavbar ?
        <MobileNavbar />
        :
        <></>
      }
      <Logo />
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
      {Navbar ?
        <Bars onClick={handleMobileNavbar} color="rgb(4, 97, 233)" /> : <Bars onClick={handleMobileNavbar} />
      }

    </div>
  )
}
export default Navbar;