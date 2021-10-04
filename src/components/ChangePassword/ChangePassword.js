import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';
import {useSelector, useDispatch} from 'react-redux';
import {ChangePassword} from '../../redux/action/AuthAction'
import {LOGIN_DATA, LOADING} from '../../redux/reducer/AuthReducer'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        width: '70vh',
        height: '600px',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    innerPaper2: {
        width: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    },
    headText: {
        fontSize: 35,
        margin: 15,
        marginBottom: 35
    },
    descText: {
        fontSize: 15,
        margin: 15
    },
    orderImage: {
        width: 200
    },
    setFields:{
        marginTop:15
    },
    button: {
        margin: theme.spacing(1),
        width: '90%',
        marginLeft: '5%'
    },
}));

export default function TransitionsModal({flag}) {
    const classes = useStyles();
    const [prevPassword, setPrePassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const dispatch = useDispatch()
    const Loading = useSelector(LOADING)
    const LoginData = useSelector(LOGIN_DATA)
    const {changeFlag, setChangeFlag} = flag
    
    const changePassword = () => {
        const newObj = {
            prevPassword,
            newPassword,
            email:LoginData.user.email
        }
        dispatch(ChangePassword(newObj))
    };

    useEffect(() => {
        setPrePassword("")
        setNewPassword("")
        setChangeFlag(false)
    },[Loading])
    
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={changeFlag}
                onClose={() => setChangeFlag(!changeFlag)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={changeFlag}>
                    <div className={classes.paper}>
                        <div className={classes.innerPaper2}>

                            <FormControl className={classes.setFields} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">Previous Password</InputLabel>
                                <OutlinedInput
                                    className="login-field"
                                    type="password"
                                    id="outlined-adornment-amount"
                                    value={prevPassword}
                                    onChange={(e) => setPrePassword(e.target.value)}
                                    startAdornment={<InputAdornment position="start">
                                        <VpnKeyIcon style={{ fill: "#626FE4" }} />
                                    </InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>

                            <FormControl className={classes.setFields} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">New Password</InputLabel>
                                <OutlinedInput
                                    className="login-field"
                                    id="outlined-adornment-amount"
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    startAdornment={<InputAdornment position="start">
                                        <VpnKeyIcon style={{ fill: "#626FE4" }} />
                                    </InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>

                            <div className="login-btn">
                      <Button onClick={changePassword} variant="contained" style={{backgroundColor:'#626FE4' , color:'white', width:'50%', fontWeight:'bold'}}>Change Password</Button>
                    </div>

                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}