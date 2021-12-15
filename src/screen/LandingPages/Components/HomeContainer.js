import React, { useState } from 'react'
import HeaderImage from '../../../assets/Landing Page/Home/header-image.jpg'
import { BiRightArrowAlt } from "react-icons/bi";
import BackgroundSlideshow from 'react-background-slideshow';
import slider1 from '../../../assets/myAuctionHeader.jpg'

function HomeContainer() {
    const [sliderChange, setSliderChange] = useState([slider1, slider1, slider1])
    return (
        <div className='backbutton'>
            <BackgroundSlideshow
                className="backgroun-container"
                animationDelay={3000}
                images={sliderChange}
            />

            <div className="home-backgroun-container">

                <div className="home-header-container1">
                    <div className="header-sidecontainer">WELCOME TO</div>
                    <div className="header-sidecontainer-desc">Your satisfaction is our business</div>
                    <div className="header-sidecontainer-desc2"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </div>

                    <div className="buttonContainer">
                        <div className="footer-button">
                            <div className="foolter-icon-button">
                                <BiRightArrowAlt color={'white'} size={30} />
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
                </div>
            </div>
        </div>
    )
}

export default HomeContainer
