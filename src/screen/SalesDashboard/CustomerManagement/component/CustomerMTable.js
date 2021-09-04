import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
import { ALL_CUSTOMER_DATA, ALL_ORDER_DATA } from '../../../../redux/reducer/AgentDataReducer'
import { LOGIN_DATA } from '../../../../redux/reducer/AuthReducer'
import {useSelector, useDispatch} from 'react-redux'

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
  const classes = useRowStyles();
  console.log(orders)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{row.username}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.company}</TableCell>
        <TableCell align="center">{row.id}</TableCell>
      </TableRow>
      <TableRow>
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
      </TableRow>
    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  const customerData = useSelector(ALL_CUSTOMER_DATA)
  const ordersData = useSelector(ALL_ORDER_DATA)
  const loginData = useSelector(LOGIN_DATA)
  const rows = customerData.results
  console.log(ordersData.results)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Customer Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Company</TableCell>
            <TableCell align="center">Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            const customerOrder = []
            const unpaidOrders = []
            const paidOrders = []
            for(var a = 0; a<ordersData.results.length; a++){
              console.log(ordersData.results[a])
              if(ordersData.results[a].customer.id === row.id){
                customerOrder.push(ordersData.results[a])
                if(ordersData.results[a].paymentStatus === "Not Paid"){
                  unpaidOrders.push(ordersData.results[a])
                }
                if(ordersData.results[a].paymentStatus === "Paid"){
                  paidOrders.push(ordersData.results[a])
                }
              }
            }

            const filterOrders = {customerOrder, unpaidOrders, paidOrders}
            return(
              <Row key={row.id} row={row} orders={filterOrders} />
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}