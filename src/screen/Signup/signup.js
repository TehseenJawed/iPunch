import React, {useState, useEffect} from 'react'
import CircularProgress from '../../components/CircularProgress/circularProgress'
import {Link, Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import {useSelector, useDispatch} from 'react-redux';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CompanyLogo from '../../assets/brand/logo.png'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import BusinessIcon from '@material-ui/icons/Business';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import {SIGNUP_FLAG, LOADING, LOGIN_DATA} from '../../redux/reducer/AuthReducer';
import {SignupFunction, ChangeSignupFlag} from '../../redux/action/AuthAction';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const Signup = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passError, setPassError] = useState(false)
    const dispatch = useDispatch()
    const signupFlag = useSelector(SIGNUP_FLAG)
    const loadingSelector = useSelector(LOADING)
    const [snackBar, setSnackBar] = useState(false)
    const [redirectFlag, setRedirectFlag] = useState(false)
    const [userRole, setUserRole] = useState("")
    
    const Signup = () => {
        
        const newObj = {
            username:name,
            phone,
            company,
            email,
            password:pass,
            role: userRole
        }
        dispatch(SignupFunction(newObj))
        
    }


    useEffect(() => {
        if(signupFlag){
            setSnackBar(true)
            dispatch(ChangeSignupFlag(false))
            setTimeout(() => setRedirectFlag(true),500)
        }
    },[signupFlag])

    useEffect(() => {
        if(email.includes("@")){
            setPassError(false)
        }
        if(email !== "" && email.includes("@") == false){
            setPassError(true)
        }
    },[email])

    return (
        <div className="login-container">
            <div className="signup-paper">
                {redirectFlag ? <Redirect to="/login" /> : null}
                <div className="login-indecator">
                    <LockOpenIcon style={{fill: "white"}}/>
                    <span>Signup</span>
                </div>
                
                {loadingSelector ? 
                <div className="login-loaderContainer">
                   <CircularProgress />
                </div>
                :
                <form className="login-form" noValidate autoComplete="off">
                <div className="logo-container">
                    <img className="login-logo" src={CompanyLogo} alt="Logo" />
                </div>
                    <div className="field-set">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
                            <OutlinedInput
                                className="login-field"
                                id="outlined-adornment-amount"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <AssignmentIndIcon style={{fill: "#626FE4"}}/>
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
 
                    <div className="field-set">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                            <OutlinedInput
                                className="login-field"
                                id="outlined-adornment-amount"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <PhoneIcon style={{fill: "#626FE4"}}/>
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
 
                    <div className="field-set">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Company</InputLabel>
                            <OutlinedInput
                                className="login-field"
                                id="outlined-adornment-amount"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <BusinessIcon style={{fill: "#626FE4"}}/>
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
 
                    <div className="field-set">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                error ={passError}
                                className="login-field"
                                id="outlined-adornment-amount"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <AlternateEmailIcon style={{fill: "#626FE4"}}/>
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
 
                    <div className="field-set">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Password</InputLabel>
                            <OutlinedInput
                                className="login-field"
                                id="outlined-adornment-amount" 
                                type="password"
                                value={pass}
                                onChange={(e) => setPass(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <VpnKeyIcon style={{fill: "#626FE4"}}/>
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>
                    
                    <div className="field-set">
                            <FormControl className="signup-Dropdown" variant="outlined">
                                <Select
                                    value={userRole}
                                    onChange={(e) => setUserRole(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                       User Type
                                    </MenuItem>
                                    <MenuItem value={"Agent"}>Agent/Sales</MenuItem>
                                    <MenuItem value={"Designer"}>Designer/Digitizer</MenuItem>
                                </Select>
                                <FormHelperText>User Type</FormHelperText>
                            </FormControl>
                    </div>

                    {/* <div className="login-signup-txt">
                      Getting error during Signup?<span className="login-forgot-txt2">Forgot Password?</span>
                    </div> */}

                    <div className="login-btn">
                      <Button onClick={Signup} variant="contained" style={{backgroundColor:'#626FE4' , color:'white', width:'50%', fontWeight:'bold'}}>Signup</Button>
                    </div>

                    <div className="login-forgot-txt">
                      Have you already Signedup? <Link to="/login" className="login-forgot-txt2">Signin.</Link>
                    </div>
                    
                </form>
                }
            
            </div>
        </div>
    )
}

export default Signup
