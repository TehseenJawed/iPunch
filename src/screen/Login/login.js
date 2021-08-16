import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CircularProgress from '../../components/CircularProgress/circularProgress'
import {Link, Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import CompanyLogo from '../../assets/brand/logo.png'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {LOGIN_DATA} from '../../redux/reducer/AuthReducer';
import {ChangeSalesLogin, ChangeBaseURL} from '../../redux/action/AuthAction'
import SnackBar from '../../components/SnackBar/snackBar';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [loader, setLoader] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [passError, setPassError] = useState(false)
    const [snackBar, setSnackBar] = useState(false)
    const [snackObj, setSnackObj] = useState({})

    const URL = useSelector(LOGIN_DATA)
    const dispatch = useDispatch()
    console.log("===> ",URL)
    const Signin = () => {
        setLoader(true)
        const newObj = {
            email,
            pass
        }

        if(email == "tehseenjawed1@gmail.com" && pass == "test12345"){
            const snack = {
                variant:"success",
                text:"You haved Loggedin successfully"
            }
            setSnackObj(snack)
            setSnackBar(true)
            setTimeout(() => {
                dispatch(ChangeSalesLogin({id:1, name:"Tehseen Jawed"}))
                setRedirect(true)
            },2000)
        }

        else{
            const snack = {
                variant:"error",
                text:"Your Email or password is incorrect."
            }
            setSnackObj(snack)
            setSnackBar(true)
            setLoader(false)
        }
    }
    const snackData = {
        snackBar, 
        setSnackBar,
        ...snackObj
    }

    useEffect(() => {
        if(email.includes("@")){
            console.log("At has found !...")
            setPassError(false)
        }
        if(email !== "" && email.includes("@") == false){
            setPassError(true)
        }
    },[email])

    return (
        <div className="login-container">
            {redirect ? <Redirect to="/ip-sales/dashboard" /> : null}
            
            <div className="login-paper">
                <div className="login-indecator">
                    <LockOpenIcon style={{fill: "white"}}/>
                    <span>Login</span>
                </div>
                <SnackBar data={snackData}/>
                {loader ?
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
