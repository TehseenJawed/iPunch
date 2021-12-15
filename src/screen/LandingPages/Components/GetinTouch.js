import React from 'react';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

function GetinTouch() {
    return (
        <div className="getinTouch-container">
            <div className="getintouch-sideheader">CONTACT US</div>
            <div className="getintouch-header">GET IN TOUCH WITH NOW</div>

            <div className='getintouch-formcontainer'>
                <div className='form-innercontainer'>
                    <div className='innerformcontainer1'>
                        <div className='getintouch-heading'>We’d Love To Hear From You</div>
                        <div className='getintouch-desc'>Have questions about our services or want a quotation for a project? Let`s talk about how we can help you achieve your goals.</div>
                        <div className='getintouch-seperator'></div>
                        <div className='getintouch-heading'>OUR ADDRESS</div>
                        <div className='getintouch-desc'>(Division of FJS SERVICES INC.)</div>
                        <div className='getintouch-desc'>12054 3rd St. NE</div>
                        <div className='getintouch-desc'>Blaine , MN 55434</div>
                        <div className='getintouch-seperator'></div>
                        <div className='getintouch-heading'>CONTACT DETAILS</div>
                        <div className='getintouch-desc'><ImPhone style={{ marginRight: 10 }} size={25} /> +1 (556) 554-4412</div>
                        <div className='getintouch-desc'><MdEmail style={{ marginRight: 10 }} size={25} /> midealpunch@gmail.com</div>
                    </div>
                    <div className='innerformcontainer2'>
                        <div className='getintouch-heading setheadie'>CONTACT US</div>
                        <div className='contact-form'>
                            <input className='inputfields-half' type="text" placeholder='Name' />
                            <input className='inputfields-half' type="number" placeholder='Phone' />
                            <input className='inputfields-full' type="email" placeholder='Email' />
                            <textarea className='textField-full' id="w3review" name="w3review" rows="4" cols="50" />
                            <div className='contactform-button'>LET'S TALK</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetinTouch
