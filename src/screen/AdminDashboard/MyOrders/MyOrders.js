import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
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
import { useSelector, useDispatch } from 'react-redux';
import { ORDER_DATAFILTER, SALES_AGENTS} from '../../../redux/reducer/AdminReducer'
import {FetchOrderByAgent, FetchOrderByOrderStatus, FetchOrders, FetchInvoicesByAgent, FetchInvoicesByPayment, FetchInvoicesByID, FetchInvoices, FetchOrderByID, FetchOrderByDate} from '../../../redux/action/AdminAction'
import OrderDetails from './component/OrderPopover'

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
    
    const Customer = useSelector(ORDER_DATAFILTER)
    const dispatch = useDispatch()
    const SalesAgent = useSelector(SALES_AGENTS)
    const [orderDetails, setOrderDetails] = useState({})

    const [tableData, setTableData] = useState("")
    const [fOrder,  setFOrder] = useState("")
    const [fCustomer,  setFCustomer] = useState("")
    const [fDelStatus,  setFDelStatus] = useState("")
    const [fFrom,  setFFrom] = useState(new Date('2021-08-18T21:11:54'))
    const [fTo,  setFTo] = useState(new Date('2021-08-18T21:11:54'))
    const [detailsFlag, setDetailsFlag] = useState(false)
    
    const [agentForInvoice, setAgentForInvoice] = useState(false)
    const [paymentInvoice, setPaymentInvoice] = useState(false)
    

    const fetchInvoice = (e, filter) => {
        switch(filter){
            case "Invoice Number":
                setFOrder(e.target.value)
                dispatch(FetchInvoicesByID(e.target.value))
                break
            case "Invoice Agent":
                setAgentForInvoice(e.target.value);
                setPaymentInvoice("")
                dispatch(FetchInvoicesByAgent(e.target.value))
                break
            case "Invoice Payment":
                setPaymentInvoice(e.target.value);
                setAgentForInvoice("");
                dispatch(FetchInvoicesByPayment(e.target.value))
                break
        }
    }
    
    const fetchOrder = (e, filter) => {
        switch(filter){
            case "OrderID":
                setFOrder(e.target.value)
                dispatch(FetchOrderByID(e.target.value))
                break
            case "OrderAgent":
                setFCustomer(e.target.value); 
                setFDelStatus("")
                setFOrder("")
                dispatch(FetchOrderByAgent(e.target.value))
                break
            case "OrderStatus":
                setFDelStatus(e.target.value); 
                setFCustomer("")
                setFOrder("")
                dispatch(FetchOrderByOrderStatus(e.target.value))
                break
        }
    }

    const fetchOrderByDate = () => {
        console.log(fFrom, fTo)
        dispatch(FetchOrderByDate({fFrom, fTo}))
    }
    
    const allOrders = [setTableData, orderDetails, setOrderDetails, setDetailsFlag, detailsFlag]
    return (
    <div>
        <div className="myOrder-mainContainer">
        {orderDetails.amount !== undefined ? <OrderDetails data={{setOrderDetails, orderDetails, setDetailsFlag, detailsFlag}}/> : null }
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
                        onChange={(e) => fetchOrder(e, "OrderID")}
                        startAdornment={<InputAdornment position="start">
                            <FingerprintIcon style={{ fill: "#626FE4" }} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Agent</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fCustomer}
                        onChange={(e) => {fetchOrder(e, "OrderAgent")}}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                           Select Customer
                        </MenuItem>
                        {SalesAgent.results.map((v,i) => <MenuItem value={v.id}>{v.username}</MenuItem>)}
                        
                    </Select>
                </CssFormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>Order Status</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={fDelStatus}
                        onChange={(e) => {fetchOrder(e, "OrderStatus")}}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Order Status
                        </MenuItem>
                        <MenuItem value={"Not Assign"}>Not Assign</MenuItem>
                        <MenuItem value={"Assigned"}>Assigned</MenuItem>
                        <MenuItem value={"Review"}>Review</MenuItem>
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

                <Button className={classes.filterBtn} onClick={fetchOrderByDate} variant="contained" href="#contained-buttons"> Filter </Button>
                
                <Button className={classes.filterBtn} onClick={() => dispatch(FetchOrders())} variant="contained" href="#contained-buttons"> Reset </Button>

            </div>
           
           
            <div className="myOrder-table">
                <div className="tableHeader">
                    ORDERS
                    <button disabled className="invoice-btn">Generate Invoice</button>
                </div>
               <OrderTable data={{setTableData, orderDetails, setOrderDetails, setDetailsFlag}} /> 
            </div>
        </div>
        
        <div className="myOrder-mainContainer">

            <div className="myOrder-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                <FormControl style={{ marginTop: '15px' }} variant="outlined">
                    <InputLabel style={{ color: '#626FE4' }} htmlFor="outlined-adornment-amount">Invoice Number</InputLabel>
                    <OutlinedInput
                        className="registerClient-tableSelect"
                        id="outlined-adornment-amount"
                        value={fOrder}
                        onChange={(e) => fetchInvoice(e, "Invoice Number")}
                        startAdornment={<InputAdornment position="start">
                            <FingerprintIcon style={{ fill: "#626FE4" }} />
                        </InputAdornment>}
                        labelWidth={60}
                    />
                </FormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Agent</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={agentForInvoice}
                        onChange={(e) => {fetchInvoice(e, "Invoice Agent")}}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                           Select Customer
                        </MenuItem>
                        {SalesAgent.results.map((v,i) => <MenuItem value={v.id}>{v.username}</MenuItem>)}
                        
                    </Select>
                </CssFormControl>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>Payment Status</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={paymentInvoice}
                        onChange={(e) => {fetchInvoice(e, "Invoice Payment")}}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Order Status
                        </MenuItem>
                        <MenuItem value={"Paid"}>Paid</MenuItem>
                        <MenuItem value={"Not Paid"}>Not Paid</MenuItem>
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
                
                <Button className={classes.filterBtn} onClick={() => dispatch(FetchInvoices())} variant="contained" href="#contained-buttons"> Reset </Button>

            </div>
           
           
            <div className="myOrder-table">
                <div className="tableHeader">
                    INVOICES
                    {/* <button disabled className="invoice-btn">Generate Invoice</button> */}
                </div>
                <InvoiceTable data={allOrders} />
            </div>
        </div>
        
        <div className="myOrder-mainContainer">

            <div className="myOrder-tableSort">

                <div className="registerSort-text">
                    Filter
                </div>

                <CssFormControl variant="outlined">
                    <FormHelperText style={{ color: '#626FE4' }}>By Agent</FormHelperText>
                    <Select
                        className="registerClient-tableSelect"
                        value={agentForInvoice}
                        onChange={(e) => {fetchInvoice(e, "Invoice Agent")}}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                           Select Customer
                        </MenuItem>
                        {SalesAgent.results.map((v,i) => <MenuItem value={v.id}>{v.username}</MenuItem>)}
                        
                    </Select>
                </CssFormControl>

            </div>
           
           
            <div className="myOrder-table">
                <div className="tableHeader">
                    SALARY
                    {/* <button disabled className="invoice-btn">Generate Invoice</button> */}
                </div>
                <InvoiceTable data={allOrders} />
            </div>
        </div>

       
    </div>
    )
}

export default RegisterClient
