import React from 'react'
import { BiRightArrowAlt } from "react-icons/bi";
import { RiQuestionLine } from "react-icons/ri";

function Services() {
    return (
        <div>
            <div className="services-maincontainer">
                <div className="services-service-header">USA Best Embroidery Digitizing & Vector Art Services</div>
                <div className="service-contaienrdesc">
                    Thousands of embroidery digitizing & vector art customers in the USA. We would love to work with you too. Ordering it easy and secure, order online or call us now. Providing best embroidery digitizing & vector art services, we have a team of professional designers
                </div>
                <div className="service-sidecontainer">
                    
                    <div className="serivce-card-1">
                        <div className="service-icon">
                            <RiQuestionLine size={40} color="white"/>
                        </div>
                        <div style={{width:'80%'}}>
                            <div className="servicecard-head">WHY CHOOSE IDEAL PUNCH</div>
                            <div className="servicecard-desc">AFFORDABLE PRICES & EXCELLENT QUALITY</div>
                        </div>
                    </div>

                    <div className="serivce-card-1">
                        <div className="service-icon">
                            <RiQuestionLine size={40} color="white"/>
                        </div>
                        <div style={{width:'80%'}}>
                            <div className="servicecard-head">FASTEST TURN AROUND TIME</div>
                            <div className="servicecard-desc">YES! WE WIN THE RACE WITH OUR COMPITITORS</div>
                        </div>
                    </div>

                    <div className="serivce-card-1">
                        <div className="service-icon">
                            <RiQuestionLine size={40} color="white"/>
                        </div>
                        <div style={{width:'80%'}}>
                            <div className="servicecard-head">FREE TRIAL OFFER</div>
                            <div className="servicecard-desc">FREE STITCH COUNTS</div>
                        </div>
                    </div>

                    <div className="serivce-card-1">
                        <div className="service-icon">
                            <RiQuestionLine size={40} color="white"/>
                        </div>
                        <div style={{width:'80%'}}>
                            <div className="servicecard-head">DEDICATED ACCOUNT MANAGER</div>
                            <div className="servicecard-desc">YOUR OWN ACCOUNT MANAGER, FOR EASY COMMUNICATION</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services
