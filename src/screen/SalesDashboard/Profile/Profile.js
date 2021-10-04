import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/brand/user.jpg';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import Button from '@material-ui/core/Button';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import { LOGIN_DATA } from '../../../redux/reducer/AuthReducer';
import { ALL_CUSTOMER_DATA, TOTAL_PAID_INVOICE } from '../../../redux/reducer/AgentDataReducer';
import { useSelector } from 'react-redux';
import EditProfile from './components/editProfile'

function Profile() {
    const [totalSales, setTotalSales] = useState(0)
    const [editProfile, setEditProfile] = useState(false)
    const Data = useSelector(LOGIN_DATA)
    const customerData = useSelector(ALL_CUSTOMER_DATA)
    const paidInvoices = useSelector(TOTAL_PAID_INVOICE)
    const { user } = Data
    console.log(user)

    useEffect(() => {
        if (totalSales === 0) {
            for (let a = 0; a < paidInvoices.length; a++) {
                setTotalSales(totalSales + paidInvoices[a].amount)
            }
        }
    }, [paidInvoices])
    return (
        <div className="salesProfile-container">
            <EditProfile data={{editProfile, setEditProfile}}/>
            <div className="salesProfile-innerContainer1">
                <div className="salesProfile-header">User Profile</div>
                <div className="salesProfile-desc">
                    <div className="salesProfile-innerDesc"> <AssignmentIndIcon style={{ fill: "#626FE4", marginRight: 40 }} /> NAME: {user.username}</div>
                    <div className="salesProfile-innerDesc"> <AssignmentIndIcon style={{ fill: "#626FE4", marginRight: 40 }} /> RESPONSIBILITY: {user.role}</div>
                    <div className="salesProfile-innerDesc"> <PhoneIcon style={{ fill: "#626FE4", marginRight: 40 }} />         PHONE: {user.phone}</div>
                    <div className="salesProfile-innerDesc"> <BusinessIcon style={{ fill: "#626FE4", marginRight: 40 }} />      COMPANY: {user.company}</div>
                    <div className="salesProfile-innerDesc"> <BusinessIcon style={{ fill: "#626FE4", marginRight: 40 }} />      EDUCATION: {user.education}</div>
                    <div className="salesProfile-innerDesc"> <AlternateEmailIcon style={{ fill: "#626FE4", marginRight: 40 }} /> EMAIL: {user.email}</div>
                    <div className="salesProfile-innerDesc"> <BusinessIcon style={{ fill: "#626FE4", marginRight: 40 }} />      EXPERIENCE: {user.experience} YEARS</div>
                    <hr />
                    <div className="salesProfile-innerDesc salesProfile-seperator"> <AlarmOnIcon style={{ fill: "#626FE4", marginRight: 40 }} /> CUSTOMERS: {customerData.results.length}</div>
                    <div className="salesProfile-innerDesc salesProfile-seperator"> <AlarmOnIcon style={{ fill: "#626FE4", marginRight: 40 }} /> SALES: ${totalSales}</div>
                </div>
            </div>

            <div className="salesProfile1-innerContainer2">
                <div style={{ textAlign: 'center' }}>
                    <div className="salesProfile-profileImage">
                        <img className="salesProfile-image" src={Logo} alt="Logo" />
                    </div>
                    <Button onClick={() => setEditProfile(true)}>EDIT PROFILE</Button>
                </div>
            </div>

        </div>
    )
}

export default Profile
