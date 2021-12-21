import React from 'react'
import Ask from '../../../assets/Landing Page/Home/ask.png'
import Free from '../../../assets/Landing Page/Home/free.png'
import Fast from '../../../assets/Landing Page/Home/fast.png'
import { IoMdGitNetwork } from 'react-icons/io'
function Services() {
    return (
        <div className='feature-container'>
            <div className="innerfeature-container1">
                <div className='features-sidecontainer2'>

                    <div className='mainfeature-container'>
                        <div className="innset-icon">
                            <img src={Ask} alt="Ask" />
                        </div>
                        <div className='inner-heading'>Why Choose Ideal Punch</div>
                        <div className='inner-desc'>Affordable Prices & Excellent Quality</div>
                    </div>

                    <div className='mainfeature-container2'>
                        <div className="innset-icon2">
                            <img src={Free} alt="Free" />
                        </div>
                        <div className='inner-heading2'>Free Trial Offers</div>
                        <div className='inner-desc2'>Free Stitch Counts</div>
                    </div>

                </div>
                <div className='features-sidecontainer'>

                    <div className='mainfeature-container2'>
                        <div className="innset-icon2">
                            <img src={Fast} alt="Fast" />
                        </div>
                        <div className='inner-heading2'>Fastest Turn Around Time</div>
                        <div className='inner-desc2'>Yes! We Win The Race With Our Compititors</div>
                    </div>

                    <div className='mainfeature-container2'>
                        <div className="innset-icon2">
                            <IoMdGitNetwork size={45} color={"white"} />
                        </div>
                        <div className='inner-heading2'>Dedicated Account Manager</div>
                        <div className='inner-desc2'>Your Own Assigned Account Manager For Easy Communication</div>
                    </div>

                </div>
            </div>
            <div className="innerfeature-container">
                <div className='feature-container2'>
                    <div className='feature-header'>
                        USA Best Embroidery Digitizing & Vector Art Services
                    </div>
                    <div className='feature-desc'>
                        Thousands of embroidery digitizing & vector art customers in the USA. We would love to work with you too. Ordering it easy and secure, order online or call us now. Providing best embroidery digitizing & vector art services, we have a team of professional designers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
