import React, {useState, useEffect} from 'react';
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
import {LOGIN_FLAG, LOGIN_DATA} from '../../redux/reducer/AuthReducer'
import {ALL_CLIENT_DATA, ALL_CUSTOMER_DATA, TOTAL_PAID_INVOICE, SET_EXPECTED_CLIENTS} from '../../redux/reducer/AgentDataReducer'
import { DataUsageSharp } from '@material-ui/icons';
import ChangePassword from '../../components/ChangePassword/ChangePassword'

const SalesDashboards = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [changeFlag, setChangeFlag] = useState(false)
    const [totalSales, setTotalSales] = useState(0)
    const [newCustomers, setNewCustomers] = useState([])
    const LoginFlag = useSelector(LOGIN_FLAG)
    const LoginData = useSelector(LOGIN_DATA)
    const clientData = useSelector(ALL_CLIENT_DATA)
    const customerData = useSelector(ALL_CUSTOMER_DATA)
    const paidInvoices = useSelector(TOTAL_PAID_INVOICE)
    const expectedClients = useSelector(SET_EXPECTED_CLIENTS)
    
    const allCustomers = customerData.results
    const DropObj = {
        anchorEl, 
        setAnchorEl,
        profile:'/ip-sales/user-profile',
        setChangeFlag
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    console.log("=========> ",totalSales)

    useEffect( ()  => {
        if(clientData.results !== undefined){
        } if(customerData.results !== undefined){
            const response = customerData.results
            setNewCustomers(response)
        }
        
        
    },[clientData, customerData])

    useEffect( ()  => {
        if(totalSales === 0){
            for(let a = 0; a<paidInvoices.length; a++){
                setTotalSales(totalSales + paidInvoices[a].amount)
            }
        }
    },[paidInvoices])
    return (
        <div className="salesContainer">
            {LoginFlag ? null : <Redirect to="/login" />}
            <ChangePassword flag={{changeFlag, setChangeFlag}}/>
            <div className="salesSide-menu">

                <div className="salesLogo-container">
                    <img className="sales-logo" src={CompanyLogo} alt="Logo" />
                    
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

                <Link to="/ip-sales/payment-management" className="salesSidemenu-item">
                    <AccountBalanceWalletIcon style={{ fill: "#FFD600", fontSize: 18 }} />
                    <div className="salesSide-text">Payment Management</div>
                </Link>

            </div>
            <div className="salesSide-domeMenu"></div>
            
            <div className="salesTop-menu">
                <div className="salesTop-Header">
                    <div className="salesTop-Email">WELCOME {LoginData.user.username}</div>
                    <div className="salesTop-Email"></div>
                    <div className="salesTop-Avatar" onClick={handleClick}>
                        <Avatar alt="Cindy Baker" src={Profile} />
                        <div>{LoginData.user.email}</div>
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
                            <div className="widget-mainhighlight">{expectedClients.results.length}</div>
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
                            All Customers
                            <div className="widget-mainhighlight">{newCustomers.length}</div>
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
                            <div className="widget-mainhighlight">${totalSales}</div>
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
                            <div className="widget-mainhighlight">Rs.0</div>
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
