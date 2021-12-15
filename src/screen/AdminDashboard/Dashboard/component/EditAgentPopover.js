import React, { useState, useEffect } from 'react';
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
import { LOADING } from '../../../../redux/reducer/AuthReducer';
import { UpdateClientData } from '../../../../redux/action/AgentAction';
import { UpdateAgentInfo } from '../../../../redux/action/AdminAction';
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
        width: '100%',
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
        backgroundColor: 'white',
        padding: 12,
        marginLeft: '5%'
    },
    setEditForm: {
        width: '100%',
        padding: 20,
        marginBottom:150,
        height: 250,
        display: 'flex',
        // justifyContent: 'center',
        flexWrap: 'wrap'
    },
    textBody: {
        width: '50%',
        marginTop:15
    },
    TextField: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: '85%',
        height: 50
    },
    setPaperText: {
        fontSize: 18,
        margin: 20
    }
}));

export default function TransitionsModal({ data }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { agentDetails, editAgentDetailsFlag, setEditAgentDetailsFlag } = data

    const loadingSelector = useSelector(LOADING)
    
    const handleClose = () => {
        setEditAgentDetailsFlag(false);
    };
    
    const { id, username, accNumber, address, company, education, email, experience, phone, role, salary, salaryType, comission } = agentDetails
    const [nameChange, setName] = useState("")
    const [companyChange, setCompany] = useState("")
    const [emailChange, setEmail] = useState("")
    const [phoneChange, setPhone] = useState("")
    const [educationChange, setEducation] = useState("")
    const [experienceChange, setExperience] = useState("")
    const [addressChange, setAddress] = useState("")
    const [accNumberChange, setAccNumber] = useState("")
    const [roleChange, setRole] = useState("")
    const [salaryChange, setSalary] = useState("")
    const [salaryTypeChange, setSalaryType] = useState("")
    const [comissionChange, setComission] = useState("")
    
    const updateAgent = () => {
        const newObj ={
            username: nameChange,
            accNumber: accNumberChange,
            address: addressChange,
            company: companyChange,
            education: educationChange,
            email: emailChange,
            experience: experienceChange,
            phone: phoneChange,
            role: roleChange,
            salary: salaryChange,
            salaryType: salaryTypeChange,
            comission: comissionChange
        }
        dispatch(UpdateAgentInfo(newObj, id))
        handleClose()
    }

    useEffect(() => {

        setName(username)
        setCompany(company)
        setEmail(email)
        setPhone(phone)
        setEducation(education)
        setExperience(experience)
        setAddress(address)
        setAccNumber(accNumber)
        setRole(role)
        setSalary(salary)
        setSalaryType(salaryType)
        setComission(comission)

    }, [editAgentDetailsFlag])
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={editAgentDetailsFlag}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={editAgentDetailsFlag}>
                    <div className={classes.paper}>
                        <div className={classes.innerPaper1}>

                            <div className={classes.setPaperText}>
                                Edit Changes Here
                            </div>

                            <div className={classes.setEditForm}>
                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Name"} value={nameChange} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Company"} value={companyChange} onChange={(e) => setCompany(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Comission"} value={comissionChange} onChange={(e) => setComission(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Email"} value={emailChange} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Phone"} value={phoneChange} onChange={(e) => setPhone(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Education"} value={educationChange} onChange={(e) => setEducation(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Experience"} value={experienceChange} onChange={(e) => setExperience(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Address"} value={addressChange} onChange={(e) => setAddress(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Account Number"} value={accNumberChange} onChange={(e) => setAccNumber(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Role"} value={roleChange} onChange={(e) => setRole(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <TextField className={classes.TextField} variant="filled" id="standard-basic" label={"Salary"} value={salaryChange} onChange={(e) => setSalary(e.target.value)} />
                                </div>

                                <div className={classes.textBody}>
                                    <FormControl className="salesOrder-Textfield">
                                        <Select
                                            value={salaryTypeChange}
                                            onChange={(e) => setSalaryType(e.target.value)}
                                            displayEmpty
                                            className={classes.TextField}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="Online Bank Transaction">
                                                Online Bank Transaction
                                            </MenuItem>
                                            <MenuItem value="Cheque">
                                                Cheque
                                            </MenuItem>
                                            <MenuItem value="Cash">
                                                Cash
                                            </MenuItem>

                                        </Select>
                                        <FormHelperText style={{color:"white"}}>Salary Type</FormHelperText>
                                    </FormControl>
                                </div>

                            </div>

                            <div className="salesOrder-Textfield3">
                                    <Button variant="contained"
                                        className="salesOrder-Textfield3"
                                        className={classes.button}
                                        onClick={updateAgent}
                                        endIcon={<Icon>send</Icon>}
                                    >
                                        UPDATE CHANGES
                                    </Button>
                                </div>

                        </div>
                        
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}