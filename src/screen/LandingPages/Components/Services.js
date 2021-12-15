import React from 'react'
import LogoDesign from '../../../assets/Landing Page/Home/logodesigning.png'
import VectorDesigning from '../../../assets/Landing Page/Home/vectordesigning.png'
import Embroidery from '../../../assets/Landing Page/Home/embroidery.png'

function Services() {
    return (
        <div className="service-container">
            <div className="service-innercontainer">
                <div className="services-header">
                    OUR SERVICES
                </div>

                <div className="innerservice-container">

                    <div className="service-card-container">
                        <img src={LogoDesign} alt="Logo Design" />
                        <div className="service-head">Logo Designing</div>
                        <div className="service-desc">Your logo should give an indirect message to the audience and let the public guess your business type & It will create curiosity.</div>
                    </div>

                    <div className="service-card-container">
                        <img src={Embroidery} alt="Embroidery Design" />
                        <div className="service-head">Embroidery Digitizing</div>
                        <div className="service-desc">Our team of art designers along with concept artist are ready to help you guys to put your mind concept on screen.</div>
                    </div>

                    <div className="service-card-container">
                        <img src={VectorDesigning} alt="Embroidery Design" />
                        <div className="service-head">Vector Arts</div>
                        <div className="service-desc">We are dedicated team of brand experts, concept creator, technicians dedicated to energizing your business.</div>
                    </div>
                    
                    <div className="service-card-container">
                        <img src={LogoDesign} alt="Logo Design" />
                        <div className="service-head">Patches</div>
                        <div className="service-desc">Your logo should give an indirect message to the audience and let the public guess your business type & It will create curiosity.</div>
                    </div>

                    <div className="service-card-container">
                        <img src={Embroidery} alt="Embroidery Design" />
                        <div className="service-head">Jacket Back</div>
                        <div className="service-desc">Our team of art designers along with concept artist are ready to help you guys to put your mind concept on screen.</div>
                    </div>

                    <div className="service-card-container">
                        <img src={VectorDesigning} alt="Embroidery Design" />
                        <div className="service-head">Left Chest</div>
                        <div className="service-desc">We are dedicated team of brand experts, concept creator, technicians dedicated to energizing your business.</div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Services
