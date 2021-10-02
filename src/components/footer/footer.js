import React from "react";
import * as footerStyles from './footer.module.css';
import Icon from "../icons/icon.js";

const Footer = ()=>{
    return(
        <div className={footerStyles.footer}>
            <p>
                Made with ❤ by Subin
            </p>
            <div>
                <Icon />
            </div>
        </div>
    )
}

export default Footer;