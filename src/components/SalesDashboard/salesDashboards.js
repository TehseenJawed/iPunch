import React from 'react';
import CompanyLogo from '../../assets/brand/logo.png'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import Profile from '../../assets/brand/user.jpg'
import Avatar from '@material-ui/core/Avatar';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

const SalesDashboards = ({ children }) => {
    return (
        <div className="salesContainer">
            <div className="salesSide-menu">

                <div className="salesLogo-container">
                    <img className="sales-logo" src={CompanyLogo} alt="Logo" />
                    <div className="sales-logoText">Tehseen Jawed</div>
                </div>

                <div className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#626FE4", fontSize: 18 }} />
                    <div className="salesSide-text">Dashboard</div>
                </div>

                <div className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#5E72E4", fontSize: 18 }} />
                    <div className="salesSide-text">New Orders</div>
                </div>

                <div className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#F5365C", fontSize: 18 }} />
                    <div className="salesSide-text">My Orders</div>
                </div>

                <div className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#11CDEF", fontSize: 18 }} />
                    <div className="salesSide-text">Request a quote</div>
                </div>

                <div className="salesSidemenu-item">
                    <DashboardIcon style={{ fill: "#FB636B", fontSize: 18 }} />
                    <div className="salesSide-text">Track Your Quote</div>
                </div>

                <div className="salesSidemenu-item">
                    <PersonIcon style={{ fill: "#FFD600", fontSize: 18 }} />
                    <div className="salesSide-text">User profile</div>
                </div>

            </div>

            <div className="salesTop-menu">
                <div className="salesTop-Header">
                    <div className="salesTop-Email">Email US: </div>
                    <div className="salesTop-Email">tehseenjawed1@gmail.com</div>
                    <div className="salesTop-Avatar">
                        <Avatar alt="Cindy Baker" src={Profile} />
                        <div>Tehseen Jawed</div>
                    </div>
                </div>

                <div className="salesWidget-Head">
                    
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading">
                            Total Orders
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading2">
                            <FlipToFrontIcon style={{fill: "#626FE4", fontSize:50, marginLeft:-20}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                       <div className="widget-innerCircle">
                            <div className="widget-highlight">$500</div>
                       </div>
                        <div className="widgetItem-heading">
                            Total Orders
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading2">
                            <FlipToFrontIcon style={{fill: "#626FE4", fontSize:50, marginLeft:-20}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading">
                            Total Orders
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading2">
                            <FlipToFrontIcon style={{fill: "#626FE4", fontSize:50, marginLeft:-20}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                        <div className="widget-innerCircle">
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading">
                            Monthly Orders
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading2">
                            <FlipToFrontIcon style={{fill: "#626FE4", fontSize:50, marginLeft:-20}}/>
                        </div>
                    </div>
 
                    <div className="salesWidget-item">
                        
                        <div className="widget-innerCircle">
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading">
                            Monthly Comission
                            <div className="widget-highlight">$500</div>
                        </div>
                        <div className="widgetItem-heading2">
                            <AccountBalanceWalletIcon style={{fill: "#626FE4", fontSize:50, marginLeft:-20}}/>
                        </div>
                    </div>
 

                </div>

            </div>


        </div>
    )
}

export default SalesDashboards
