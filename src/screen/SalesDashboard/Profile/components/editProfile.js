import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import {LOADING, LOGIN_DATA} from '../../../../redux/reducer/AuthReducer';
import {UpdateProfileInfo} from '../../../../redux/action/AuthAction';
import { useSelector, useDispatch } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '../../../../components/CircularProgress/circularProgress'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        width: '130vh',
        height: '600px',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        // alignItems:'center',
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    innerPaper1: {
        width: '70%',
        background: '#626FE4',
        borderRadius: 10,
        color: 'white'
    },
    innerPaper2: {
        width: '30%'
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
    button: {
        margin: theme.spacing(1),
        width: '90%',
        backgroundColor:'white',
        padding:12,
        marginLeft: '5%'
    },
    setEditForm: {
        width: '100%',
        padding: 20,
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    textBody: {
        width: '50%',
    },
    TextField: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '85%',
        height:50
    },
    setPaperText:{
        fontSize:18,
        margin:20
    }
}));

export default function TransitionsModal({ data }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const Data = useSelector(LOGIN_DATA)
    const loadingSelector = useSelector(LOADING)
    console.log(Data.user)
    const {accNumber, address, company, education, email, phone, username} = Data.user
    const { editProfile, setEditProfile } = data
    
    const handleClose = () => {
        setEditProfile(false);
    };
    const [name, setName] = useState("") 
    const [companyInput, setCompanyInput] = useState("")
    const [educationInput, setEducationInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    const [addressInput, setAddressInput] = useState("")
    const [accNumberInput, setAccNumberInput] = useState("")
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    
    const updateUser = () => {
        const newObj ={
            username: name,
            company: companyInput,
            email: emailInput,
            phone: phoneInput,
            address: addressInput,
            accNumber: accNumberInput,
        }
        dispatch(UpdateProfileInfo(newObj))
        handleClose()
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={editProfile}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={editProfile}>
                    <div className={classes.paper}>
                        <div className={classes.innerPaper1}>

                            <div className={classes.setPaperText}>
                                Edit Changes Here
                            </div>

                            <div className={classes.setEditForm}>
                                <div className={classes.textBody}>
                                    <div>NAME</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={username} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>COMPANY</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={company} value={companyInput} onChange={(e) => setCompanyInput(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>EDUCATION</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={education} value={educationInput} onChange={(e) => setEducationInput(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>EMAIL</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={email} value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>ACC NUMBER</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={accNumber} value={accNumberInput} onChange={(e) => setAccNumberInput(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>PHONE</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={phone} value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <div>ADDRESS</div>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={address} value={addressInput} onChange={(e) => setAddressInput(e.target.value)} />
                                </div>

                            </div>

                            {loadingSelector ?
                        <CircularProgress />
                        :
                        <div className="salesOrder-Textfield3">
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                className={classes.button}
                                onClick={updateUser}
                                endIcon={<Icon>send</Icon>}
                            >
                                UPDATE CHANGES
                            </Button>
                        </div>
                        }

                        </div>
                        <div className={classes.innerPaper2}>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}