import React from 'react'
import CommunityCard from '../CommunityCard/CommunityCard'

import {
    CPContainer,
    CPHeading,
    InnerContainer,
} from './CommunityPartners.module.css'


function CommunityPartners() {
    function importAll(r) {
        return r.keys().map(r);
    }

    const images = importAll(require.context('../../images/communitypartners/', false, /\.(png|jpe?g|svg)$/));
    return (
        <div className={CPContainer}>
            <div className={CPHeading}>
                Community Partners
            </div>
            <hr />
            <div className={InnerContainer}>
                {
                    images.map((image) => {
                        return <CommunityCard path={image.default} />
                    })
                }
            </div>
        </div>
    )
}

export default CommunityPartners
