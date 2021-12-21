import React, { useState } from 'react'
import HeaderImage from '../../../assets/Landing Page/Home/header-image.png'
import { BiRightArrowAlt } from "react-icons/bi";
import Object1 from '../../../assets/Landing Page/Home/object.png'

function HomeContainer() {
    return (
        <div className='backbutton'>

            <div className="home-backgroun-container">

                <div className="home-header-container1">
                    <div className="header-sidecontainer">Welcome To Ideal Punch</div>
                    <div className="header-sidecontainer-desc">Your Satisfaction Is Our Business</div>
                    <div className="header-sidecontainer-desc2">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>

                    <div className="buttonContainer">
                        <div className="footer-button">
                            <div className="foolter-icon-button">
                                <BiRightArrowAlt color={'white'} size={40} />
                            </div>
                            <div className="foolter-icon-card">
                                Discuss Project
                            </div>
                        </div>
                        <div className="foolter-icon-card-absolute">Discuss Project</div>
                    </div>

                </div>
                <div className="home-header-container1">
                    <img className="header-image" src={HeaderImage} alt="Header Image" />
                    <img className='object1' src={Object1} alt="Image" />
                </div>
            </div>
        </div>
    )
}

export default HomeContainer
