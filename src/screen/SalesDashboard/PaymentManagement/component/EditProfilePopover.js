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
import {LOADING} from '../../../../redux/reducer/AuthReducer';
import {UpdateClientData} from '../../../../redux/action/AgentAction';
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
        height: 250,
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
    const { profileFlag, setPrifleFlag, editProfileData } = data
    
    const loadingSelector = useSelector(LOADING)
    console.log(editProfileData)
    
    const handleClose = () => {
        setPrifleFlag(false);
    };
    const [name, setName] = useState(editProfileData.username) 
    const [company, setCompany] = useState(editProfileData.company)
    const [email, setEmail] = useState(editProfileData.email)
    const [phone, setPhone] = useState(editProfileData.phone)
    const [website, setWebsite] = useState(editProfileData.website)
    const [accStatus, setAccStatus] = useState(editProfileData.accStatus)
    
    const updateUser = () => {
        const newObj ={
            id:editProfileData.id,
            username: name,
            company,
            email,
            phone,
            website,
            accStatus
        }
        dispatch(UpdateClientData(newObj))
        handleClose()
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={profileFlag}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={profileFlag}>
                    <div className={classes.paper}>
                        <div className={classes.innerPaper1}>

                            <div className={classes.setPaperText}>
                                Edit Changes Here
                            </div>

                            <div className={classes.setEditForm}>
                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={editProfileData.username} value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={editProfileData.company} value={company} onChange={(e) => setCompany(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={editProfileData.email} value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={editProfileData.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={editProfileData.website} value={website} onChange={(e) => setWebsite(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <FormControl className="salesOrder-Textfield">
                                        <Select
                                            value={accStatus}
                                            onChange={(e) => setAccStatus(e.target.value)}
                                            displayEmpty
                                            className={classes.TextField}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="Not Verified">
                                                Not Verified
                                            </MenuItem>
                                            <MenuItem value="Verified">
                                                Verified
                                            </MenuItem>

                                        </Select>
                                        <FormHelperText style={{color:"white"}}>{editProfileData.accStatus}</FormHelperText>
                                    </FormControl>
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