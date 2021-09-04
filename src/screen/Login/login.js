import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CircularProgress from '../../components/CircularProgress/circularProgress'
import {Link, Redirect} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CompanyLogo from '../../assets/brand/logo.png'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {LOGIN_DATA, LOGIN_FLAG, LOADING} from '../../redux/reducer/AuthReducer';
import {ChangeSalesLogin, LoginFunction} from '../../redux/action/AuthAction'
import SnackBar from '../../components/SnackBar/snackBar';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [passError, setPassError] = useState(false)
    const [snackBar, setSnackBar] = useState(false)
    const [snackObj, setSnackObj] = useState({})

    const loadingSelector = useSelector(LOADING)
    const LoginFlag = useSelector(LOGIN_FLAG)
    const LoginData = useSelector(LOGIN_DATA)
    const dispatch = useDispatch()
    console.log(LoginData)
    const Signin = () => {
        const newObj = {
            email,
            password:pass
        }
        dispatch(LoginFunction(newObj))
    }
     
    const snackData = {
        snackBar, 
        setSnackBar,
        ...snackObj
    }

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

            {LoginFlag === true && LoginData.user.role == "Sales" ? <Redirect to="/ip-sales/dashboard" /> : null}
            {LoginFlag === true && LoginData.user.role == "Designer" ? <Redirect to="/ip-designer/dashboard" /> : null}
            {LoginFlag === true && LoginData.user.role == "Customer" ? <Redirect to="/ip-customer/dashboard" /> : null}
            {LoginFlag === true && LoginData.user.role == "Admin" ? <Redirect to="/ip-admin/dashboard" /> : null}
            
            <div className="login-paper">

                <div className="login-indecator">
                    <LockOpenIcon style={{fill: "white"}}/>
                    <span>Login</span>
                </div>

                <SnackBar data={snackData}/>
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
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                className="login-field"
                                error ={passError}
                                id="outlined-adornment-amount"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <AccountCircle style={{fill: "#626FE4"}}/>
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
                    
                    <div className="login-signup-txt">
                      Getting error during Signin<span className="login-forgot-txt2">Forgot Password?</span>
                    </div>

                    <div className="login-btn">
                      <Button onClick={Signin} variant="contained" style={{backgroundColor:'#626FE4' , color:'white', width:'50%', fontWeight:'bold'}}>Sign in</Button>
                    </div>

                    <div className="login-forgot-txt">
                      Do not have account? <Link to="/signup" className="login-forgot-txt2">Signup.</Link>
                    </div>
                    
                </form>

                }
            </div>
        </div>
    )
}

export default Login
