import React from 'react'
import USA from '../../assets/Landing Page/Footer/usa.svg'
import { FaStaylinked, FaCcVisa, FaCcMastercard, FaCcPaypal } from 'react-icons/fa'
import { CgArrowTopRightR } from 'react-icons/cg'
import { BiMessageSquareDetail } from 'react-icons/bi'
import BrandLogo from '../../assets/brand/iplogo.svg'
// import {FaCcMastercard} from  'react-icons/bi'

function Footer() {
    return (
        <div className="footer-landing-container">

            <div className="footer-container-center">
                <img className="footer-logo" src={BrandLogo} alt="Ideal Punch" />

                <div className="foonter-innercontainer-1">
                    <FaCcVisa className="payment-icons" size={50} color={'white'} />
                    <FaCcMastercard className="payment-icons" size={50} color={'white'} />
                    <FaCcPaypal className="payment-icons" size={50} color={'white'} />
                </div>

            </div>

            <div className="footer-container-01">

                <div className="foonter-innercontainer">
                    <BiMessageSquareDetail size={40} color={'white'} />
                    <div className="footer-heading-office">About us</div>
                </div>
                <div className="footer-description">
                    <div className='highlight'>IDEAL PUNCH</div> provides excellent designs of high quality to wide range of customers located all around the globe, primarily in USA, Canada and UK. We provide custom embroidery digitizing, custom logo designing, vector conversion.
                </div>
                

            </div>

            <div className="footer-container-01">
                <div className="foonter-innercontainer">
                    <FaStaylinked color="white" size={40} />
                    <div className="footer-heading-office">Navigations</div>
                </div>

                <div className={window.location.pathname == '/' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    HOME
                </div>

                <div className={window.location.pathname == '/about' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    ABOUT US
                </div>

                <div className={window.location.pathname == '/digitizing' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    DIGITIZING
                </div>

                <div className={window.location.pathname == '/vector' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    VECTOR
                </div>

                <div className={window.location.pathname == '/patch' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    PATCH
                </div>

                <div className={window.location.pathname == '/contactus' ? "footer-description-linkActive" : "footer-description-link"}>
                    <CgArrowTopRightR style={{ marginRight: 25 }} color="white" size={20} />
                    CONTACT US
                </div>

            </div>

            <div className="footer-container-01">

                <div className="foonter-innercontainer">
                    <BiMessageSquareDetail size={40} color={'white'} />
                    <div className="footer-heading-office">Head Office</div>
                </div>
                <div className="footer-description">
                    Our headoffice is placed in some of the most important location of united states.
                <div className='highlight'>LA, TEXAS</div>
                </div>
                <div className="footer-description">
                    +1 (582) 551 6621
                </div>

            </div>
        </div>
    )
}

export default Footer
