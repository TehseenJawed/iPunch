import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { ALL_CUSTOMER_DATA, ALL_ORDER_DATA, AllInvoiceData } from '../../../../redux/reducer/AgentDataReducer'
import { LOGIN_DATA, BASE_URL } from '../../../../redux/reducer/AuthReducer'
import {useSelector, useDispatch} from 'react-redux'
import EditProfile from './EditProfilePopover'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  
});

function Row(props) {
  const { row, orders } = props;
  const [open, setOpen] = React.useState(false);
  const [profileFlag, setPrifleFlag] = useState(false)
  const [editProfileData, setEditProfileData] = useState("")
  const BaseURL = useSelector(BASE_URL)
  const classes = useRowStyles();

  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}

  return (
    <React.Fragment>
      {profileFlag ? <EditProfile data={{profileFlag, setPrifleFlag, editProfileData}}/> : null}
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.id}</TableCell>
        <TableCell align="center">{row.client.username}</TableCell>
        <TableCell align="center">{row.status}</TableCell>
        <TableCell align="center">{row.payment_type}</TableCell>
        <TableCell align="center">
          $ {row.amount}
        </TableCell>
        <TableCell align="center">
          <Button onClick={() => copyToClipboard(`${BaseURL}/paypal/${row.id}`)}>COPY</Button>
        </TableCell>
      </TableRow>
      {/* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Orders</TableCell>
                    <TableCell align="center">Unpaid Designs</TableCell>
                    <TableCell align="center">Generate Invoice</TableCell>
                    <TableCell align="center">Paid Designs</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                <TableRow key={row.id}>
                      <TableCell component="th" align="center" scope="row">
                        {orders.customerOrder.length}
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        {orders.unpaidOrders.length}
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        {orders.length}
                      </TableCell>
                      <TableCell component="th" align="center" scope="row">
                        {orders.paidOrders.length}
                      </TableCell>
                </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow> */}
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  const customerData = useSelector(ALL_CUSTOMER_DATA)
  const ordersData = useSelector(ALL_ORDER_DATA)
  const invoiceData = useSelector(AllInvoiceData)
  const loginData = useSelector(LOGIN_DATA)
  const rows = invoiceData.results
  console.log(invoiceData.results)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>#</TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Copy Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
           console.log(row)
            return(
              <Row key={row.id} row={row} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}