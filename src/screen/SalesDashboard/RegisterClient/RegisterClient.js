import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Table from '../../../components/Table/table';
import { withStyles } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import { LOADING, LOGIN_DATA, STATE } from '../../../redux/reducer/AuthReducer'
import { ALL_CLIENT_FILTERDATA } from '../../../redux/reducer/AgentDataReducer'
import { SetAllClients_Data, FilterClientByEmail, FilterClientByInterest, FilterClientByState, SetExpectedClients } from '../../../redux/action/AgentAction'
import { Generate_NewClient } from '../../../redux/action/AuthAction'
import CircularProgress from '../../../components/CircularProgress/circularProgress'
import { et } from 'date-fns/locale';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    dateFrom: {
        width: 180,
        marginLeft: 5,
    },
    filterBtn: {
        color: 'white',
        backgroundColor: '#626FE4',
        margin: 5,
        marginTop: 10,
        height: 37,
        fontSize: 2,
        '&:hover': {
            background: "#4d5bd6",
        },
    }
}));

const RegisterClient = () => {
    const classes = useStyles();

    const CssFormControl = withStyles({
        root: {
            marginTop: -5,
            '& label.Mui-focused': {

                color: '#626FE4',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#626FE4',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#626FE4',
                },
                '&:hover fieldset': {
                    borderColor: '#626FE4',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#626FE4',
                },
            },
        },
    })(FormControl);

    const KeyboardDatePick = withStyles({
        root: {
            marginTop: -5,
            '& label.Mui-focused': {

                color: '#626FE4',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#626FE4',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#626FE4',
                },
                '&:hover fieldset': {
                    borderColor: '#626FE4',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#626FE4',
                },
            },
        },
    })(KeyboardDatePicker);

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [state, setState] = useState("")
    const [intrust, setIntrust] = useState("")

    const [fEmail, setFEmail] = useState("")
    const [fInterest, setFInterest] = useState("")
    const [fState, setFState] = useState("")
    const [fFrom, setFFrom] = useState(new Date('2020-08-18T21:11:54'))
    const [fTo, setFTo] = useState(new Date('2020-08-18T21:11:54'))

    const LoginData = useSelector(LOGIN_DATA)
    const ClientData = useSelector(ALL_CLIENT_FILTERDATA)
    const loadingSelector = useSelector(LOADING)
    const State = useSelector(STATE)
    const data = new Date().getTime()
    const dispatch = useDispatch()

    const columns = [
        { id: 'username', label: 'Client Name', align: 'center', minWidth: 40 },
        {
            id: 'state',
            label: 'State',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'orders',
            label: 'Total Orders',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
        {
            id: 'phone',
            label: 'Phone',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'interest',
            label: 'Interest',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
        {
            id: 'created_at',
            label: 'Created Date',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toFixed(2),
        },
    ];

    function createData(name, state, email, orders, phone, interest, date) {
        return { name, state, email, orders, phone, interest, date };
    }

    const rows = ClientData.results

    const clientData = [
        rows,
        columns,
    ]

    const FilterByEmail = (e) => {
        setFEmail(e.target.value)
        dispatch(FilterClientByEmail({ email: e.target.value }))
    }


    const RegisterClient = () => {
        const newObj = {
            username: name,
            state,
            email,
            agent: LoginData.user.id,
            interest: intrust,
            phone,
        }
        dispatch(Generate_NewClient(newObj))
        dispatch(SetAllClients_Data())
    }

    const FilterByInterest = (e) => {
        setFEmail("")
        setFState("")
        setFInterest(e.target.value)
        dispatch(FilterClientByInterest(e.target.value))
    }

    const FilterByState = (e) => {
        setFEmail("")
        setFInterest("")
        setFState(e.target.value)
        dispatch(FilterClientByState(e.target.value))
    }

    const Reset = () => {
        setFEmail("")
        setFInterest("")
        setFState("")
        dispatch(SetAllClients_Data())
    }
    console.log("===> ", rows)
    return (
        <div className="registerClient-mainContainer">
            <div className="registerClient-container">
                <div className="registerClient-heading">Register Your Client</div>

                <div className="registerClient-subContainer">

                    <div className="registerClient-select">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Client Name</InputLabel>
                            <OutlinedInput
                                className="registerClient-select"
                                id="outlined-adornment-amount"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <AssignmentIndIcon style={{ fill: "#626FE4" }} />
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>

                    <div className="registerClient-select">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Phone</InputLabel>
                            <OutlinedInput
                                className="registerClient-select"
                                id="outlined-adornment-amount"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <PhoneIcon style={{ fill: "#626FE4" }} />
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>

                    <div className="registerClient-select">
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                            <OutlinedInput
                                className="registerClient-select"
                                id="outlined-adornment-amount"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                startAdornment={<InputAdornment position="start">
                                    <AlternateEmailIcon style={{ fill: "#626FE4" }} />
                                </InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </div>

                    <div className="registerClient-select">
                        <FormControl variant="outlined">
                            <Select
                                className="registerClient-select"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                displayEmpty
                                // className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    State
                                </MenuItem>

                                {State.results.map((v, i) =>
                                    <MenuItem value={v.state}>{v.state}</MenuItem>
                                )}
                            </Select>
                            <FormHelperText>State</FormHelperText>
                        </FormControl>
                    </div>

                    <div className="registerClient-select">
                        <FormControl variant="outlined">
                            <Select
                                className="registerClient-select"
                                value={intrust}
                                onChange={(e) => setIntrust(e.target.value)}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled>
                                    Intrust
                                </MenuItem>
                                <MenuItem value={"Intrusted"}>Intrusted</MenuItem>
                                <MenuItem value={"Contact Later"}>Contact Later</MenuItem>
                                <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
                            </Select>
                            <FormHelperText>Intrust</FormHelperText>
                        </FormControl>
                    </div>

                </div>

                {loadingSelector ?

                    <CircularProgress />
                    :
                    <div className="registerClient-subContainer">
                        <Button variant="contained"
                            className="salesOrder-Textfield3"
                            style={{ backgroundColor: '#626FE4', color: 'white' }}
                            onClick={RegisterClient}
                            endIcon={<Icon>send</Icon>}
                        >
                            Register Client
                        </Button>
                    </div>
                }

            </div>


            <div className="registerClient-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                <FormControl style={{ marginTop: '15px' }} variant="outlined">
                    <InputLabel style={{ color: '#626FE4' }} htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                        className="registerClient-tableSelect"
                        id="outlined-adornment-amount"
                        value={fEmail}
                        onChange={FilterByEmail}
                        startAdornment={<InputAdornment position="start">
                            <AlternateEmailIcon style={{ fill: "#626FE4" }} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>Interest</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fInterest}
                        onChange={FilterByInterest}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Intrust
                        </MenuItem>
                        <MenuItem value={"Intrusted"}>Intrusted</MenuItem>
                        <MenuItem value={"Contact Later"}>Contact Later</MenuItem>
                        <MenuItem value={"Not Interested"}>Not Interested</MenuItem>
                    </Select>
                    {/* <FormHelperText>Intrust</FormHelperText> */}
                </CssFormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>State</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fState}
                        onChange={FilterByState}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            State
                        </MenuItem>
                        {State.results.map((v, i) =>
                            <MenuItem value={v.state}>{v.state}</MenuItem>
                        )}
                    </Select>
                </CssFormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePick
                        inputVariant="outlined"
                        style={{ marginTop: 15 }}
                        className={classes.dateFrom}
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="From"
                        value={fFrom}
                        onChange={(e) => setFFrom(e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePick
                        inputVariant="outlined"
                        style={{ marginTop: 15 }}
                        className={classes.dateFrom}
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="To"
                        value={fTo}
                        onChange={(e) => setFTo(e)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>

                <Button className={classes.filterBtn} variant="contained" href="#contained-buttons"> Filter </Button>

                <Button className={classes.filterBtn} variant="contained" href="#contained-buttons" onClick={Reset}> Reset </Button>

            </div>
            <div className="registerClient-table">
                <div className="tableHeader">
                    All Clients
                    <button className="table-btn">View</button>
                </div>
                <Table data={clientData} />
            </div>
        </div>
    )
}

export default RegisterClient
