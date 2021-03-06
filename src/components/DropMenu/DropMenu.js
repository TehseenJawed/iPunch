import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TuneIcon from '@material-ui/icons/Tune';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link, Redirect} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {SignoutFunction} from '../../redux/action/AuthAction'
import {LOGIN_FLAG} from '../../redux/reducer/AuthReducer'


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus({data}) {
  const { anchorEl, setAnchorEl, profile, setChangeFlag } = data
  const dispatch = useDispatch()
  const [reload, setReload] = useState("")
  const LoginFlag = useSelector(LOGIN_FLAG)

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Signout = () => {
    dispatch(SignoutFunction({}))
    setReload("")
    console.log("Working is here")
    
  };

  return (
    <div>
      {LoginFlag ? null : <Redirect to="/login" />}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/ip-sales/user-profile" className="dropmenu-link">
        <StyledMenuItem>
          <ListItemIcon>
            <AccountBoxIcon fontSize="small" style={{fill:"#626FE4"}}/>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </StyledMenuItem>
        </Link>
        
        <StyledMenuItem>
          <ListItemIcon>
            <TuneIcon fontSize="small" style={{fill:"#11CDEF"}}/>
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>

        
        <StyledMenuItem onClick={() => setChangeFlag(true)}>
          <ListItemIcon>
            <VpnKeyIcon fontSize="small" style={{fill:"#11CDEF"}}/>
          </ListItemIcon>
          <ListItemText primary="Password" />
        </StyledMenuItem>
        

        <StyledMenuItem onClick={Signout}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" style={{fill:"#F5365C"}} />
          </ListItemIcon>
          <ListItemText primary="Sign out" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}