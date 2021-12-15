import React from 'react'
import LandingHeader from '../../components/LandingComponents/Header'
import LandingFooter from '../../components/LandingComponents/Footer'

function landingpageWrapper({children}) {
    return (
        <div>
            <LandingHeader />
            {children}
            <LandingFooter />
        </div>
    )
}

export default landingpageWrapper
