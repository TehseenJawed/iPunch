import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DropZone from '../../../components/Dropzone/Dropzone'
import CircularProgress from '../../../components/CircularProgress/circularProgress'

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {LOADING, LOGIN_DATA, INVOICE_ID, SERVICES, UPDATE_INVOICE_DATA} from '../../../redux/reducer/AuthReducer'
import {ALL_CUSTOMER_DATA} from '../../../redux/reducer/AgentDataReducer'
import {Order_By_Agent, Create_Customer_Account, Generate_InvoiceBy_Agent} from '../../../redux/action/AuthAction'
import {SetAllCustomer_Data} from '../../../redux/action/AgentAction'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      marginTop:'5%',
      marginLeft:'2%',
      width: '95%', 
      
    },
    button: {
                margin: theme.spacing(1),
                backgroundColor: '#626FE4',
                color: 'white',
                padding: '10px 150px',
                '&:hover': {
                    background: "#4d5bd6",
                },

                [theme.breakpoints.down('md')]: {
                    marginLeft:'1%',
                    padding: '10px 50px',
                    width:310
                }
            },
  }));
  
  export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const LoginData = useSelector(LOGIN_DATA)
    const loadingSelector = useSelector(LOADING)
    const InvoiceId = useSelector(INVOICE_ID)
    const ClientData = useSelector(ALL_CUSTOMER_DATA)
    const Services = useSelector(SERVICES)
    const InvoiceData = useSelector(UPDATE_INVOICE_DATA)

    console.log("InvoiceData is here ",InvoiceData)

    const [client, setClient] = useState("")
    const [service, setService] = useState("")
    const [upload, setUpload] = useState("")
    const [description, setDescription] = useState("")

    const [customerName, setCustomerName] = useState("")
    const [phone, setPhone] = useState("")
    const [company, setCompany] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")
    const [price, setPrice] = useState("")

    const [invoiceNo, setInvoiceNo] = useState(105412)
    const [currency, setCurrency] = useState("")
    const [amount, setAmount] = useState(0)
    const [paymentType, setPaymentType] = useState("")
    const [invoiceLink, setInvoiceLink] = useState("")
    const getDate = new Date()
    const dispatch = useDispatch()
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };
    const Customers = ClientData.results

    function Copy() {
        var copyText = document.getElementById("getLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }

    const generateOrder = async () => {
        var newObj = new FormData()
        newObj.append('agent',LoginData.user.id);
        newObj.append('customer',client);
        newObj.append('orderStatus','Not Assign');
        newObj.append('paymentStatus','Not Paid');
        newObj.append('revisions',[]);
        newObj.append('amount',amount);
        newObj.append('serviceType',service);
        upload.forEach((item) => newObj.append("files", item))
        newObj.append('description',description);
        // newObj.append('created_at',getDate.getTime());
        
        await dispatch(Order_By_Agent(newObj))
        setAmount("")
        setService("")
        setUpload("")
        setDescription("")

    }
    
    const CustomerAccount = async () => {
        
        const newObj = {
            agent:LoginData.user.id,
            username:customerName,
            website,
            accStatus:"Not Verified",
            phone,
            company,
            email,
            password:"test12345",
            
        }
        await dispatch(Create_Customer_Account(newObj))
        await dispatch(SetAllCustomer_Data())
    }
  
    const GenerateInvoice = async () => {
        const newObj = {
            agent:LoginData.user.id,
            client:client,
            amount:price,
            status:"Not Paid",
            currency,
            payment_type:paymentType,
        }
        await dispatch(Generate_InvoiceBy_Agent(newObj))
        setClient("")
        setPrice("")
        setCurrency("")
        setPaymentType("")
    }
    
    useEffect(() => {
        if(InvoiceId !== "") setInvoiceLink(`http://localhost:3000/paypal/${InvoiceId}`)
    },[InvoiceId])
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
              
            <Tab label="New Order" {...a11yProps(0)} />
            <Tab label="Customer Account" {...a11yProps(1)} />
            <Tab label="Generate Invoice" {...a11yProps(2)} />

          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
            
          <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Generate Order for Client</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={LoginData.user.username} id="standard-basic" label="Agent Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={amount} onChange={(e) => setAmount(e.target.value)} id="standard-basic" label="Amount"/>
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={client}
                                    onChange={(e) => setClient(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Client
                                    </MenuItem>
                                    {Customers !== undefined ?
                                      Customers.map((v,i) => <MenuItem value={v.id}>{v.username}</MenuItem>)
                                    :null}
                                </Select>
                                <FormHelperText>Client</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={service}
                                    onChange={(e) => setService(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Service Type
                                    </MenuItem>

                                    {Services.results !== undefined ?
                                      Services.results.map((v,i) => <MenuItem value={v.service}>{v.service}</MenuItem>)
                                    : null
                                    }

                                </Select>
                                <FormHelperText>Service Type</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <DropZone upload={upload} setUpload={setUpload} />
                        </div>

                        <div className="salesOrder-Textfield2">
                            <TextField value={description} onChange={(e) => setDescription(e.target.value)} className="salesOrder-Textfield2" multiline rows={4} id="standard-basic" label="Describe Design Idea" />
                        </div>
                        {loadingSelector ?
                        <CircularProgress />
                        :
                        <div className="salesOrder-Textfield3">
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                className={classes.button}
                                onClick={generateOrder}
                                endIcon={<Icon>send</Icon>}
                            >
                                Create New Order
                            </Button>
                        </div>
                        }
                        

                    </form>
                </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Generate Customer Account</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={LoginData.user.username} id="standard-basic" label="Agent Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={customerName} onChange={(e) => setCustomerName(e.target.value)} id="standard-basic" label="Customer Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={phone} onChange={(e) => setPhone(e.target.value)} id="standard-basic" label="Phone" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={company} onChange={(e) => setCompany(e.target.value)} id="standard-basic" label="Company" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={email} onChange={(e) => setEmail(e.target.value)} id="standard-basic" label="Email" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={website} onChange={(e) => setWebsite(e.target.value)} id="standard-basic" label="Website" />
                        </div>

                        <div className="salesOrder-Textfield3">
                            {loadingSelector ?
                            <CircularProgress />
                            :
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                onClick={CustomerAccount}
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Create New Account
                            </Button>
                            }
                        </div>

                    </form>
                </div>

          </TabPanel>
          
          <TabPanel value={value} index={2} dir={theme.direction}>
            
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Generate Invoice</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={LoginData.user.username} id="standard-basic" label="Agent Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={invoiceNo} id="standard-basic" label="Invoice No." />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={price} onChange={(e) => setPrice(e.target.value)} id="standard-basic" label="Price-$/€" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={client}
                                    onChange={(e) => setClient(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Client
                                    </MenuItem>
                                    {Customers !== undefined ?
                                       Customers.map((v,i) => <MenuItem value={v.id}>{v.username}</MenuItem>)
                                    :null}
                                </Select>
                                <FormHelperText>Client</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Currency
                                    </MenuItem>
                                    <MenuItem value={"USD"}>$-USD</MenuItem>
                                    <MenuItem value={"CAD"}>$-CAD</MenuItem>
                                    <MenuItem value={"Euros"}>€-Euros</MenuItem>
                                </Select>
                                <FormHelperText>Currency</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={paymentType}
                                    onChange={(e) => setPaymentType(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Payment Type
                                    </MenuItem>
                                    <MenuItem value={"PayPal"}>PayPal</MenuItem>
                                    {/* <MenuItem value={"Stripe"}>Stripe</MenuItem> */}
                                </Select>
                                <FormHelperText>Payment Type</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-copyField">
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    id="getLink"
                                    className="salesOrder-CopysubField"
                                    value={invoiceLink}
                                    placeholder="Copy Invoice Link"
                                />
                                
                                <IconButton onClick={Copy} color="primary" aria-label="directions">
                                    <FileCopyIcon />
                                </IconButton>
                            </Paper>
                        </div>

                        <div className="salesOrder-Textfield3">
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                onClick={GenerateInvoice}
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Generate Invoice
                            </Button>
                        </div>

                    </form>
                </div>

          </TabPanel>
        
        </SwipeableViews>
      </div>
    );
  }

