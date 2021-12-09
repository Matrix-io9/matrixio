import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
    snapshots,
    imagefirst,
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
            <Carousel axis='horizontal' infiniteLoop={true} autoPlay useKeyboardArrows transitionTime={1000} dynamicHeight={true} preventMovementUntilSwipeScrollTolerance={true}>
                <img className={image} id={imagefirst} src={One} alt="1" />
                <img className={image} id={imagefirst} src={Two} alt="2" />
                <img className={image} id={imagefirst} src={Three} alt="3" />
                <img className={image} id={imagefirst} src={Four} alt="4" />
            </Carousel>
        </div>
    )
}

export default Snapshots
