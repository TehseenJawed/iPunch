import React from 'react';
import Logo from '../../../assets/brand/user.jpg';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';

function Profile() {
    return (
        <div className="salesProfile-container">
            <div className="salesProfile-innerContainer1">
                <div className="salesProfile-header">User Profile</div>
                <div className="salesProfile-desc">
                    <div className="salesProfile-innerDesc"> <AssignmentIndIcon style={{fill: "#626FE4", marginRight:40}}/> Name: Tehseen Jawed</div>
                    <div className="salesProfile-innerDesc"> <PhoneIcon style={{fill: "#626FE4", marginRight:40}}/>         Phone: +92-7541256</div>
                    <div className="salesProfile-innerDesc"> <BusinessIcon style={{fill: "#626FE4", marginRight:40}}/>      Company: Ideal Punch</div>
                    <div className="salesProfile-innerDesc"> <AlternateEmailIcon style={{fill: "#626FE4", marginRight:40}}/> Email: tehseenjawed1@gmail.com</div>
                    <div className="salesProfile-innerDesc"> <AlarmOnIcon style={{fill: "#626FE4", marginRight:40}}/> Joined At: 05/03/2021</div>
                    <hr />
                    <div className="salesProfile-innerDesc salesProfile-seperator"> <AlarmOnIcon style={{fill: "#626FE4", marginRight:40}}/> Total Clients: 35</div>
                </div>
            </div>

            <div className="salesProfile-innerContainer2">
                <div className="salesProfile-profileImage">
                    <img className="salesProfile-image" src={Logo} alt="Logo" />
                </div>
            </div>

        </div>
    )
}

export default Profile
