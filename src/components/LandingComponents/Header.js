import React from 'react'
import BrandLogo from '../../assets/brand/iplogo.svg'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className={window.location.pathname == "/" ? "landing-header-container" : "landing-headercontainer"}>

            <div className="landing-header-subcontainer2">

                <div className="landing-header-subcontainer1">
                    <img className="landing-brand-logo" src={BrandLogo} alt="Ideal Punch" />
                </div>
                
                <div className="landing-links-container">

                    <Link to="/" className={window.location.pathname == '/' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        Home
                    </Link>

                    <Link to="/about" className={window.location.pathname == '/about' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        About us
                    </Link>

                    <Link to="/digitizing" className={window.location.pathname == '/digitizing' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        Digitizing
                    </Link>

                    <Link to="/vector" className={window.location.pathname == '/vector' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        Vector
                    </Link>

                    <Link to="/patch" className={window.location.pathname == '/patch' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        Patch
                    </Link>

                    <Link to="/contactus" className={window.location.pathname == '/contact-us' ? "heaeder-link-activetext" : "heaeder-link-text"}>
                        Contact us
                    </Link>

                </div>

                <Link to="/login" className='header-signup'>
                    Sign in Now
                </Link>
            </div>
        </div>
    )
}

export default Header
