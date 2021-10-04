import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import CompanyLogo from '../../assets/brand/logo.svg'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import Profile from '../../assets/brand/user.jpg'
import Avatar from '@material-ui/core/Avatar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DialerSipIcon from '@material-ui/icons/DialerSip';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DropMenu from '../DropMenu/DropMenu'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import StorageIcon from '@material-ui/icons/Storage';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FlipCameraIosIcon from '@material-ui/icons/FlipCameraIos';
import FormatPaintIcon from '@material-ui/icons/FormatPaint';
import {useSelector, useDispatch} from 'react-redux';
import {LOGIN_FLAG, LOGIN_DATA} from '../../redux/reducer/AuthReducer'

const DesignerDashboard = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const LoginFlag = useSelector(LOGIN_FLAG)
    const LoginData = useSelector(LOGIN_DATA)
    console.log("It is data",LoginFlag)
    const DropObj = {
        anchorEl, 
        setAnchorEl,
        profile:'/ip-sales/user-profile'
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <div className="salesContainer">
            {LoginFlag ? null : <Redirect to="/login" />}
            <div className="salesSide-menu">

                <div className="designerLogo-container">
                    <img className="sales-logo" src={CompanyLogo} alt="Logo" />
                </div>

                <Link to="/ip-designer/dashboard" className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#F5365C", fontSize: 18 }} />
                    <div className="salesSide-text">Dashboard</div>
                </Link>

                <Link to="/ip-designer/my-designs" className="salesSidemenu-item">
                    <ChromeReaderModeIcon style={{ fill: "#FB6340", fontSize: 18 }} />
                    <div className="salesSide-text">My Designs</div>
                </Link>

                <Link to="/ip-designer/my-invoices" className="salesSidemenu-item">
                    <LibraryBooksIcon style={{ fill: "#F5365C", fontSize: 18 }} />
                    <div className="salesSide-text">My Invoices</div>
                </Link>


            </div>
            <div className="salesSide-domeMenu"></div>
            
            <div className="designTop-menu">
                <div className="salesTop-Header">
                    <div className="salesTop-Email">WELCOME {LoginData.user.username} </div>
                    <div className="salesTop-Email"></div>
                    <div className="designerTop-Avatar" onClick={handleClick}>
                        <Avatar alt="Cindy Baker" src={Profile} />
                        <div> {LoginData.user.email}</div>
                    </div>
                </div>
                <DropMenu data={DropObj} />

                <div className="salesWidget-Head">
                    
                    {/* <div className="designWidget-item">
                        <div className="designwidget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            Expected Clients
                            <div className="designerwidget-mainhighlight">37</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-1">
                            <DialerSipIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div> */}
 
                    <div className="designWidget-item">
                       <div className="designwidget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                       </div>
                        <div className="widgetItem-heading">
                            Design Revisions
                            <div className="designerwidget-mainhighlight">7</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-2">
                            <FlipCameraIosIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 
                    <div className="designWidget-item">
                        <div className="designwidget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            My Designs
                            <div className="designerwidget-mainhighlight">350</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-3">
                            <FormatPaintIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 
                    <div className="designWidget-item">
                        <div className="designwidget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            My Comission
                            <div className="designerwidget-mainhighlight">Rs.3500</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-4">
                            <MonetizationOnIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 

                </div>

                <div>
                    {children}
                </div>

            </div>


        </div>
    )
}

export default DesignerDashboard
