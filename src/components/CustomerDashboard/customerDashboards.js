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
import {useSelector, useDispatch} from 'react-redux';
import {LOGIN_FLAG} from '../../redux/reducer/AuthReducer'

const SalesDashboards = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const LoginFlag = useSelector(LOGIN_FLAG)
    console.log("Flag is here ==> ",LoginFlag)
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

                <div className="salesLogo-container">
                    <img className="sales-logo" src={CompanyLogo} alt="Logo" />
                    <div className="sales-logoText">Tehseen Jawed</div>
                </div>

                <Link to="/ip-sales/dashboard" className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#626FE4", fontSize: 18 }} />
                    <div className="salesSide-text">Dashboard</div>
                </Link>

                <Link to="/ip-sales/generate-form" className="salesSidemenu-item">
                    <ChromeReaderModeIcon style={{ fill: "#5E72E4", fontSize: 18 }} />
                    <div className="salesSide-text">Generate Form</div>
                </Link>

                <Link to="/ip-sales/register-client" className="salesSidemenu-item">
                    <LibraryBooksIcon style={{ fill: "#F5365C", fontSize: 18 }} />
                    <div className="salesSide-text">Register Clients</div>
                </Link>

                <Link to="/ip-sales/my-orders" className="salesSidemenu-item">
                    <FlipToBackIcon style={{ fill: "#11CDEF", fontSize: 18 }} />
                    <div className="salesSide-text">My Orders</div>
                </Link>

                <Link to="/ip-sales/customer-management" className="salesSidemenu-item">
                    <StorageIcon style={{ fill: "#FB636B", fontSize: 18 }} />
                    <div className="salesSide-text">Customer Management</div>
                </Link>

                <Link className="salesSidemenu-item">
                    <AccountBalanceWalletIcon style={{ fill: "#FFD600", fontSize: 18 }} />
                    <div className="salesSide-text">Payment Management</div>
                </Link>

            </div>
            <div className="salesSide-domeMenu"></div>
            
            <div className="salesTop-menu">
                <div className="salesTop-Header">
                    <div className="salesTop-Email">Email US: </div>
                    <div className="salesTop-Email">tehseenjawed1@gmail.com</div>
                    <div className="salesTop-Avatar" onClick={handleClick}>
                        <Avatar alt="Cindy Baker" src={Profile} />
                        <div>Tehseen Jawed</div>
                    </div>
                </div>
                <DropMenu data={DropObj} />

                <div className="salesWidget-Head">
                    
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            Expected Clients
                            <div className="widget-mainhighlight">37</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-1">
                            <DialerSipIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                       <div className="widget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                       </div>
                        <div className="widgetItem-heading">
                            My New Clients
                            <div className="widget-mainhighlight">7</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-2">
                            <GroupAddIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            Monthly Sales
                            <div className="widget-mainhighlight">$1700</div>
                        </div>
                        <div className="widgetItem-heading2 widgetItem-3">
                            <MoveToInboxIcon style={{fill: "white", fontSize:25}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight"><span>this</span>Month</div>
                        </div>
                        <div className="widgetItem-heading">
                            My Comission
                            <div className="widget-mainhighlight">Rs.3500</div>
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

export default SalesDashboards
