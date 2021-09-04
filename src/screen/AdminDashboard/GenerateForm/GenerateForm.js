import React, { useState } from 'react';
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

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { LOGIN_DATA } from '../../../redux/reducer/AuthReducer';
import {useSelector, useDispatch} from 'react-redux';
import {CreateNewAgent, CreateNewState} from '../../../redux/action/AdminAction'


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
    const dispatch = useDispatch()

    const [agentName, setAgentName] = useState("")
    const [agentPhone, setAgentPhone] = useState()
    const [agentEducation, setAgentEducation] = useState()
    const [agentAddress, setAgentAddress] = useState()
    const [agentSalaryType, setAgentSalaryType] = useState()
    const [agentSalary, setAgentSalary] = useState()
    const [agentExperence, setAgentExperience] = useState()
    const [accNo, setAccNo] = useState()
    const [agentType, setAgentType] = useState()
    const [agentEmail, setAgentEmail] = useState()


    const [state, setState] = useState("")

    const [invoiceNo, setInvoiceNo] = useState(105412)
    const [currency, setCurrency] = useState("")
    const [paymentType, setPaymentType] = useState("")
    const [invoiceLink, setInvoiceLink] = useState("")

    const CreateAgentAccount = () => {

        const newObj = {
            username : agentName,
            createdBy : LoginData.user.id,
            phone : agentPhone,
            education : agentEducation,
            company : "Ideal Punch",
            password : "test12345",
            address : agentAddress,
            salaryType : agentSalaryType,
            salary : agentSalary,
            experience : agentExperence,
            accNumber : accNo,
            role : agentType,
            email : agentEmail
        }
        dispatch(CreateNewAgent(newObj))
    }

    const CreateState = () => {

        const newObj = {
            admin: LoginData.user.id,
            state
        }
        dispatch(CreateNewState(newObj))
    }

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };

    function Copy() {
        var copyText = document.getElementById("getLink");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
      }
  
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
              
            <Tab label="Create Agent Account" {...a11yProps(0)} />
            <Tab label="Add New State" {...a11yProps(1)} />
            {/* <Tab label="Generate Invoice" {...a11yProps(2)} /> */}

          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
            
          <TabPanel value={value} index={0} dir={theme.direction}>
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Create New Agent</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">
                        
                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={LoginData.user.id} id="standard-basic" label="Admin ID" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentName} onChange={(e) => setAgentName(e.target.value)} id="standard-basic" label="Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentPhone} onChange={(e) => setAgentPhone(e.target.value)} id="standard-basic" label="Phone" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentEducation} onChange={(e) => setAgentEducation(e.target.value)} id="standard-basic" label="Education" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentAddress} onChange={(e) => setAgentAddress(e.target.value)} id="standard-basic" label="Address" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={agentSalaryType}
                                    onChange={(e) => setAgentSalaryType(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Payment Type
                                    </MenuItem>
                                    <MenuItem value={"Online Bank Transaction"}>Online Bank Transaction</MenuItem>
                                    <MenuItem value={"Cheque"}>Cheque</MenuItem>
                                    <MenuItem value={"Cash"}>Through Cash</MenuItem>
                                </Select>
                                <FormHelperText>Payment Type</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentSalary} onChange={(e) => setAgentSalary(e.target.value)} id="standard-basic" label="Salary" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentExperence} onChange={(e) => setAgentExperience(e.target.value)} value={agentExperence} id="standard-basic" label="Field Experience" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={accNo} onChange={(e) => setAccNo(e.target.value)} id="standard-basic" label="Account Number" />
                        </div>
                        <div className="salesOrder-Textfield">
                            <FormControl className="salesOrder-Textfield">
                                <Select
                                    value={agentType}
                                    onChange={(e) => setAgentType(e.target.value)}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="" disabled>
                                        Employee Type
                                    </MenuItem>
                                    <MenuItem value={"Sales"}>Sales</MenuItem>
                                    <MenuItem value={"Designer"}>Designer</MenuItem>
                                    <MenuItem value={"Customer"}>Customer</MenuItem>
                                    <MenuItem value={"Customer"}>Admin</MenuItem>
                                </Select>
                                <FormHelperText>Type</FormHelperText>
                            </FormControl>
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" value={agentEmail} onChange={(e) => setAgentEmail(e.target.value)} id="standard-basic" label="Email" />
                        </div>

                        <div className="salesOrder-Textfield3">
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                onClick={CreateAgentAccount}
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Create New Agent
                            </Button>
                        </div>

                    </form>
                </div>
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Add New State</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={LoginData.user.id} id="standard-basic" label="Name" />
                        </div>

                        <div className="salesOrder-Textfield">
                            <TextField className="salesOrder-Textfield" onChange={(e) => setState(e.target.value)} value={state} id="standard-basic" label="Create State" />
                        </div>

                        <div className="salesOrder-Textfield3">
                            <Button variant="contained"
                                className="salesOrder-Textfield3"
                                className={classes.button}
                                onClick={CreateState}
                                endIcon={<Icon>send</Icon>}
                            >
                                Generate Order
                            </Button>
                        </div>

                    </form>
                </div>

          </TabPanel>
          
          {/* <TabPanel value={value} index={2} dir={theme.direction}>
            
          <div className="salesOrder-formContainer">
                    <div className="salesForm-heading">Generate Invoice</div>

                    <form className="salesOrder-formTextfields" noValidate autoComplete="off">

                        <div className="salesOrder-Textfield">
                            <TextField disabled className="salesOrder-Textfield" value={agentName} id="standard-basic" label="Agent Name" />
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
                                    <MenuItem value={"Tehseen Jawed"}>Tehseen Jawed</MenuItem>
                                    <MenuItem value={"Tehseen Jawed"}>Tehseen Jawed</MenuItem>
                                    <MenuItem value={"Tehseen Jawed"}>Tehseen Jawed</MenuItem>
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
                                        Service Type
                                    </MenuItem>
                                    <MenuItem value={"USD"}>$-USD</MenuItem>
                                    <MenuItem value={"CAD"}>$-CAD</MenuItem>
                                    <MenuItem value={"Euros"}>€-Euros</MenuItem>
                                </Select>
                                <FormHelperText>Service Type</FormHelperText>
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
                                    <MenuItem value={"Stripe"}>Stripe</MenuItem>
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
                                className={classes.button}
                                endIcon={<Icon>send</Icon>}
                            >
                                Generate Invoice
                            </Button>
                        </div>

                    </form>
                </div>

          </TabPanel> */}
        
        </SwipeableViews>
      </div>
    );
  }

