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
import {useSelector, useDispatch} from 'react-redux';
import { Button } from '@material-ui/core';
import {BASE_URL} from '../../../../redux/reducer/AuthReducer'
import {SetOrderToDeliver} from '../../../../redux/action/DesignerAction'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  downloadBtn: {
    fontSize: 10,
    height: 30,
    padding: 5,
  }
});

const CalculateComission = (status, amount) => {
  const finalAmount = 0
  switch (status) {
    case 'Changed from client':

  }
}

function createData(id, name, timeLeft, type, details, price) {
  return {
    id,
    name,
    timeLeft,
    type,
    details,
    price,
    revision: [
      { date: '2020-01-05', desc: '11091700', status: 'Changed from client', amount: 0, file: '' },
      { date: '2020-01-02', desc: 'Anonymous', status: 'Designer Error', amount: 100, file: '' },
    ],
  };
}

function Row(props) {
  const { row, setUnpaidFlag, setDeliverOrder } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  const BaseURL = useSelector(BASE_URL)
  const dispatch = useDispatch()
  console.log(BaseURL)
  const DownloadFiles = () => {
    for (let i = 0; i < row.files.length; i++) {
      var a = document.createElement("a");
      a.setAttribute('download', '');
      a.setAttribute('target', '_blank');
      a.setAttribute('href', `${BaseURL}uploads/${row.files[i]}`);
      a.click()
    }

  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="center">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.created_at}</TableCell>
        <TableCell align="center">{row.service_type}</TableCell>
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">
          <Button onClick={DownloadFiles} className={classes.downloadBtn} variant="contained" color="secondary">
            Files
          </Button>
        </TableCell>
        <TableCell align="center">
          <Button onClick={() => {setUnpaidFlag(true); dispatch(SetOrderToDeliver((row)))}} className={classes.downloadBtn} variant="contained" color="secondary">
            Deliver
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Instructions</TableCell>
                    <TableCell align="center">Dispute Status</TableCell>
                    <TableCell align="center">Final Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.revisions.map((historyRow) => {
                    if(historyRow !== ""){
                      let date = new Date(historyRow.revisionAt)
                      console.log(historyRow)
                      return (
                        <TableRow key={historyRow.date}>
  
                          <TableCell component="th" scope="row" align="center">
                            {JSON.stringify(date)}
                          </TableCell>
  
                          <TableCell align="center">{historyRow.designerMessage}</TableCell>
                          
                          <TableCell align="center">{historyRow.dispute}</TableCell>
  
                          <TableCell align="center">
                            {
                              historyRow.status == 'Changed from client' ? <div className="designer-increament">Rs.+{historyRow.amount}</div> : null
                            }
                            {
                              historyRow.status == 'Designer Error' ? <div className="designer-decreament">Rs.-{historyRow.amount}</div> : null
                            }
                          </TableCell>
  
                        </TableRow>
                      )
                    }
                    
                  })}
                  <TableRow>
                    <TableCell component="th" scope="row" align="center">

                    </TableCell>
                    <TableCell component="th" scope="row" align="center">

                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      Total Earning
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      100
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


export default function CollapsibleTable({ data }) {
  const { setUnpaidFlag, rows, setDeliverOrder } = data
  const results = rows.results
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Order #</TableCell>
            <TableCell align="center">Assign By</TableCell>
            <TableCell align="center">Time Left</TableCell>
            <TableCell align="center">Design Type</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Files</TableCell>
            <TableCell align="center">Deliver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results !== undefined ?
          results.map((row) => (
            <Row setUnpaidFlag={setUnpaidFlag} setDeliverOrder={setDeliverOrder} key={row.name} row={row} />
          ))
        : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}