import React from 'react'
import { MdWork } from 'react-icons/md'
function About() {
    return (
        <div>
            <div className='about-container'>
                <div className='about-subconainer1'>
                    <div className='header-heading'>ABOUT US</div>
                    <div className='header-desc'>If you can Dream it we can Develop it.</div>
                </div>
                <div className='about-subconainer2'>
                    <div className='icon-around'>
                        <MdWork size={65} color="white" />
                    </div>
                </div>

            </div>

            <div className='aboutContainer'>
                <div className='about-innercontainer'>
                    <div className='aboutus-heading'>WHAT WE SERVE</div>
                    <div className='aboutus-text'>
                        IDEAL PUNCH provides excellent designs of high quality to wide range of customers located all around the globe, primarily in USA, Canada and UK. We provide custom embroidery digitizing, custom logo designing, vector conversion, puff design, picture embroider, famous brands design, cross stitches design, blending design, applique design, sequins design, shield design, business cards designing and screen printing services at very affordable price.
                    </div>
                    <div className='aboutus-text'>
                    We are one of the most promising and highly rated companies with dedicated team of all sort of embroidery and art work for graphics and screen printing. We are serving in international market since from a long time. We have clients in different parts of the world and they all are very satisfied with us because “YOUR SATISFACTION IS OUR BUSINESS” our highly experienced digitizers and artist fell the requirement of customers from their heart and provide their 100%.
                    </div>
                    <div className='aboutus-text'>
                    If you are new to embroidery digitizing, it is the process of taking a logo, pattern, other creative artwork, even photo, and converting it into a digital file in certain format/language that the embroidery machine can execute and stitch it out. Embroidery digitizing is a complex process which uses stitch types including fill stitch, satin stitch and running stitch to create an embroidery design. This process is done with the help skilled digitizer's manual input and creative treatments.
                    </div>
                    <div className='aboutus-text'>
                    As a matter of fact, many of our clients sent us "auto-digitized" file and asked us to re-digitize it, since the result of an "auto-digitized" design is as bad as the ones done by amateur digitizer. The reason is simple, embroidery digitizing requires creative input and so far no computer or robot is as creative as human and they may never be.
                    </div>
                    <div className='aboutus-text'>
                    We provide 24-hours service 7 days a week. With advanced technology, equipment and embroidery digitizing and vectoring software with 12 hour turnaround.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
