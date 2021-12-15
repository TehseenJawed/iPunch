import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import OrderPopover from './component/OrderPopover'
import EditOrderPopover from './component/editOrderPopover'
import { useSelector, useDispatch } from 'react-redux'
import { ALL_ORDER_DATA, ALL_CUSTOMER_DATA } from '../../../redux/reducer/AgentDataReducer';
import { UpdateOrderByID, UpdateOrderByCustomer, UpdateOrderByPaymentStatus, SetMyOrders, UpdateOrderByDate, FetchOrderByDate } from '../../../redux/action/AgentAction';
import { ChangeSnackData, ChangeSnackFlag } from '../../../redux/action/AuthAction';


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
    const dispatch = useDispatch()

    const [invoiceFlag, setInvoiceFlag] = useState(false)
    const [orderFlag, setOrderFlag] = useState(false)
    const [orderData, setOrderData] = useState("")
    const OrderData = useSelector(ALL_ORDER_DATA)
    const ClientData = useSelector(ALL_CUSTOMER_DATA)

    const [tableData, setTableData] = useState("")
    const [sortByID, setSortByID] = useState("")
    const [sortByCustomer, setSortByCustomer] = useState("")
    const [sortByPaymentStatus, setSortByPaymentStatus] = useState("")
    const [selectedOrder, setSelectedOrder] = useState({})
    const [editOrder, setEditOrder] = useState({})
    const [fFrom, setFFrom] = useState(new Date('2021-08-18T21:11:54'))
    const [fTo, setFTo] = useState(new Date('2021-08-18T21:11:54'))
    

    const Customers = ClientData.results
    const allOrders = { setTableData, setOrderFlag, setOrderData, setInvoiceFlag, rows: OrderData.results }
    console.log(fTo)
    const sortByData = (e, type) => {
        if(type === "id"){
            setSortByID(e.target.value)
            dispatch(UpdateOrderByID(e.target.value))
        } else if(type === "by_customer"){
            setSortByCustomer(e.target.value)
            dispatch(UpdateOrderByCustomer(e.target.value))
        } else if(type === "by_payment_status"){
            setSortByPaymentStatus(e.target.value)
            dispatch(UpdateOrderByPaymentStatus(e.target.value))
        }
    }

    const sortByDate = () => {
        if(fFrom != "Wed Aug 18 2021 21:11:54 GMT+0500 (Pakistan Standard Time)" && fTo != "Wed Aug 18 2021 21:11:54 GMT+0500 (Pakistan Standard Time)"){
            dispatch(FetchOrderByDate({fTo, fFrom}))
        } else {
            dispatch(ChangeSnackData({text:"You have to set Date range to fetch the data", variant:"error"}))
            dispatch(ChangeSnackFlag(true))
        }
    }

    return (
        <div>
            {selectedOrder.id !== undefined ? <OrderPopover data={[orderFlag, setOrderFlag, orderData, selectedOrder, setSelectedOrder]} /> : null}
            {selectedOrder.id !== undefined ? <EditOrderPopover data={[editOrder, setEditOrder, selectedOrder]} /> : null}
            <div className="myOrder-mainContainer">
                <div className="myOrder-tableSort">

                    <div className="registerSort-text">
                        Filter
                    </div>

                    <FormControl style={{ marginTop: '15px' }} variant="outlined">
                        <InputLabel style={{ color: '#626FE4' }} htmlFor="outlined-adornment-amount">ORDER ID</InputLabel>
                        <OutlinedInput
                            className="registerClient-tableSelect"
                            id="outlined-adornment-amount"
                            value={sortByID}
                            onChange={(e) => sortByData(e, "id")}
                            startAdornment={<InputAdornment position="start">
                                <FingerprintIcon style={{ fill: "#626FE4" }} />
                            </InputAdornment>}
                            labelWidth={60}
                        />
                    </FormControl>

                    <CssFormControl variant="outlined">
                        <FormHelperText style={{ color: '#626FE4' }}>BY CUSTOMER</FormHelperText>
                        <Select
                            className="registerClient-tableSelect"
                            value={sortByCustomer}
                            onChange={(e) => sortByData(e, "by_customer")}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Select Customer
                            </MenuItem>
                            {Customers !== undefined ?
                                Customers.map((v, i) => <MenuItem value={v.id}>{v.username}</MenuItem>)
                            : null}
                        </Select>
                    </CssFormControl>

                    <CssFormControl variant="outlined">
                        <FormHelperText style={{ color: '#626FE4' }}>BY PAYMENT STATUS</FormHelperText>
                        <Select
                            className="registerClient-tableSelect"
                            value={sortByPaymentStatus}
                            onChange={(e) => sortByData(e, "by_payment_status")}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" disabled>
                                Payment Status
                            </MenuItem>
                            <MenuItem value={"Paid"}>Paid</MenuItem>
                            <MenuItem value={"Not Paid"}>Not Paid</MenuItem>
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

                    <Button className={classes.filterBtn} onClick={sortByDate} variant="contained" href="#contained-buttons"> Filter </Button>

                    <Button className={classes.filterBtn} onClick={() => dispatch(SetMyOrders())} variant="contained" href="#contained-buttons"> Reset </Button>

                </div>

                <div className="myOrder-table">
                    <div className="tableHeader">
                        All Orders
                        <Link to="/invoice">
                          <button className="invoice-btn">Generate Invoice</button>
                        </Link>
                    </div>
                    <OrderTable data={{ setOrderFlag, setSelectedOrder, setEditOrder }} />
                </div>
            </div>

        </div>)
}

export default RegisterClient
