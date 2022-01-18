import React from 'react'

import {
    container,
    msg,
    infoIcon
} from './DialogBox.module.css'

const DialogBox = ({ message }) => {
    return (
        <div className={container}>
            <span className={msg}>{message}</span>

            <svg xmlns="http://www.w3.org/2000/svg" className={infoIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </div>
    )
}

export default DialogBox
