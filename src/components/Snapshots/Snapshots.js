import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
    snapshots,
    image,
} from './Snapshots.module.css';
import './Snapshots.css';

import One from '../../images/ss/1.png'
import Two from '../../images/ss/2.png'
import Three from '../../images/ss/3.jpg'
import Four from '../../images/ss/4.png'

function Snapshots() {
    return (
        <div className={snapshots}>
            <Carousel axis='horizontal' infiniteLoop={true} autoPlay useKeyboardArrows transitionTime={1000} preventMovementUntilSwipeScrollTolerance={true} dynamicHeight={true}>
                <img className={image} src={One} alt="1" />
                <img className={image} src={Two} alt="2" />
                <img className={image} src={Three} alt="3" />
                <img className={image} src={Four} alt="4" />
            </Carousel>
        </div>
    )
}

export default Snapshots
