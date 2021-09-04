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
import OrderTable from './component/OrderTable'
import InvoiceTable from './component/InvoiceTable'
import OrderPopover from './component/OrderPopover'


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
    
    const [invoiceFlag, setInvoiceFlag] = useState(false)
    const [orderFlag, setOrderFlag] = useState(false)
    const [orderData, setOrderData] = useState("")


    const [tableData, setTableData] = useState("")
    const [fOrder,  setFOrder] = useState("")
    const [fCustomer,  setFCustomer] = useState("")
    const [fDelStatus,  setFDelStatus] = useState("")
    const [fOrdStatus,  setFOrdStatus] = useState("")
    const [fState,  setFState] = useState("")
    const [fFrom,  setFFrom] = useState(new Date('2020-08-18T21:11:54'))
    const [fTo,  setFTo] = useState(new Date('2020-08-18T21:11:54'))
    
    const rows = [
        { id: 1, amount: 50, status: 'Paid', quantity: 20, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 2, amount: 270, status: 'Not Paid', quantity: 52, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 3, amount: 1041, status: 'Paid', quantity: 20, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 4, amount: 380, status: 'Paid', quantity: 41, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 5, amount: 1550, status: 'Not Paid', quantity: 12, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 6, amount: 2000, status: 'Not Paid', quantity: 12, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 7, amount: 100, status: 'Not Paid', quantity: 10, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 8, amount: 130, status: 'Paid', quantity: 5, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
        { id: 9, amount: 1100, status: 'Not Paid', quantity: 1, receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
      ];

    const allOrders = {setTableData, setOrderFlag, setOrderData, setInvoiceFlag, rows}
    return (<div>
        <OrderPopover data={[orderFlag, setOrderFlag, orderData]}/>
        <div className="myOrder-mainContainer">

            <div className="myOrder-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                

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
                    My Invoices
                </div>
                <OrderTable data={allOrders} />
            </div>
        </div>

    </div>)
}

export default RegisterClient
