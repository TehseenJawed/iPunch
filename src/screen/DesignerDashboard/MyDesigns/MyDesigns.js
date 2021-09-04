import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Table from '../../../components/Table/table';
import { withStyles } from '@material-ui/core'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import Designs from './component/Designs'
import InvoiceTable from './component/InvoiceTable'
import OrderPopover from './component/OrderPopover'
import InvoicePopover from './component/InvoicePopover'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    dateFrom:{
        width:180,
        marginLeft:5,
    },
    filterBtn:{
        color:'white',
        backgroundColor:'#626FE4',
        margin:5,
        marginTop:10,
        height:37,
        fontSize:2,
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

    const [fOrder,  setFOrder] = useState("")
    const [fCustomer,  setFCustomer] = useState("")
    const [fDelStatus,  setFDelStatus] = useState("")
    const [fFrom,  setFFrom] = useState(new Date('2020-08-18T21:11:54'))
    const [fTo,  setFTo] = useState(new Date('2020-08-18T21:11:54'))

    const rows = [
        {
            id: 695478,
            orderStatus: "Delivered",
            delivered: "5/05/2021",
            type:"vector",
            comission:4.99,
            revision: [
              { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
              { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
            ],
        },
        {
            id: 695478,
            orderStatus: "Delivered",
            delivered: "5/05/2021",
            type:"vector",
            comission:4.99,
            revision: [
              { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
              { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
            ],
        },
        {
            id: 695478,
            orderStatus: "Delivered",
            delivered: "5/05/2021",
            type:"vector",
            comission:4.99,
            revision: [
              { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
              { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
            ],
        },
        {
            id: 695478,
            orderStatus: "Delivered",
            delivered: "5/05/2021",
            type:"vector",
            comission:4.99,
            revision: [
              { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
              { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
            ],
        },
        {
            id: 695478,
            orderStatus: "Delivered",
            delivered: "5/05/2021",
            type:"vector",
            comission:4.99,
            revision: [
              { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
              { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
            ],
        },
    ]
    const allOrders = {rows} 
    return (<div>
        <div className="myOrder-mainContainer">

            <div className="myOrder-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                <FormControl style={{ marginTop: '15px' }} variant="outlined">
                    <InputLabel style={{ color: '#626FE4' }} htmlFor="outlined-adornment-amount">By Order ID</InputLabel>
                    <OutlinedInput
                        className="registerClient-tableSelect"
                        id="outlined-adornment-amount"
                        value={fOrder}
                        onChange={(e) => setFOrder(e.target.value)}
                        startAdornment={<InputAdornment position="start">
                            <FingerprintIcon style={{ fill: "#626FE4" }} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Design Type</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fCustomer}
                        onChange={(e) => setFCustomer(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                           Select Type
                        </MenuItem>
                        <MenuItem value={"Un Delivered"}>Vector Design</MenuItem>
                        <MenuItem value={"Un Delivered"}>Embroidery Design</MenuItem>
                    </Select>
                </CssFormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePick
                        inputVariant="outlined"
                        style={{marginTop:15}}
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
                        style={{marginTop:15}}
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
                
                <Button className={classes.filterBtn} variant="contained" href="#contained-buttons"> Reset </Button>

            </div>
           
           
            <div className="myOrder-table">
                <div className="tableHeader">
                    Unpaid Designs
                </div>
                <Designs data={allOrders} />
            </div>
        </div>

        <div className="myOrder-mainContainer">

            <div className="myOrder-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                <FormControl style={{ marginTop: '15px' }} variant="outlined">
                    <InputLabel style={{ color: '#626FE4' }} htmlFor="outlined-adornment-amount">By Invoice ID</InputLabel>
                    <OutlinedInput
                        className="registerClient-tableSelect"
                        id="outlined-adornment-amount"
                        value={fOrder}
                        onChange={(e) => setFOrder(e.target.value)}
                        startAdornment={<InputAdornment position="start">
                            <FingerprintIcon style={{ fill: "#626FE4" }} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Customer</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fCustomer}
                        onChange={(e) => setFCustomer(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                           Select Customer
                        </MenuItem>
                        <MenuItem value={"Un Delivered"}>Tehseen Jawed</MenuItem>
                        <MenuItem value={"Un Delivered"}>Tehseen Jawed</MenuItem>
                        <MenuItem value={"Un Delivered"}>Tehseen Jawed</MenuItem>
                        <MenuItem value={"Un Delivered"}>Tehseen Jawed</MenuItem>
                        <MenuItem value={"Un Delivered"}>Tehseen Jawed</MenuItem>
                    </Select>
                </CssFormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Status</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fDelStatus}
                        onChange={(e) => setFDelStatus(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Payment Status
                        </MenuItem>
                        <MenuItem value={"Un Delivered"}>Un Delivered</MenuItem>
                        <MenuItem value={"Delivered"}>Delivered</MenuItem>
                    </Select>
                </CssFormControl>

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePick
                        inputVariant="outlined"
                        style={{marginTop:15}}
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
                        style={{marginTop:15}}
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
                
                <Button className={classes.filterBtn} variant="contained" href="#contained-buttons"> Reset </Button>

            </div>
            <div className="myOrder-table">
                <div className="tableHeader">
                    Paid Designs
                </div>
                <Designs data={allOrders} />
            </div>
        </div>
    </div>)
}

export default RegisterClient
