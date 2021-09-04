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
import {Button} from '@material-ui/core'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  downloadBtn:{
    fontSize:10,
    height:30,
    padding:5,
  }
});

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
  const { row, setUnpaidFlag } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root} ondblclick={() => setUnpaidFlag(true)}>
        <TableCell align="center">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.timeLeft}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.details}</TableCell>
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
                    <TableCell align="center">Dispute Status</TableCell>
                    <TableCell align="center">Download File</TableCell>
                    <TableCell align="center">Final Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.revision.map((historyRow) => (
                    <TableRow key={historyRow.date}>

                      <TableCell component="th" scope="row" align="center">
                        {historyRow.date}
                      </TableCell>

                      <TableCell align="center">{historyRow.status}</TableCell>

                      <TableCell align="center">
                        <Button className={classes.downloadBtn} variant="contained" color="secondary">
                          Download RAR
                        </Button>
                      </TableCell>

                      <TableCell align="center">
                        {
                          historyRow.status == 'Changed from client' ? <div className="designer-increament">Rs.+{historyRow.amount}</div> : null
                        }
                        {
                          historyRow.status == 'Designer Error' ? <div className="designer-decreament">Rs.-{historyRow.amount}</div> : null
                        }
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.string.isRequired,
    carbs: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    protein: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(695478, "Tehseen Jawed", '10h', 'vector', "1.2 inches height and width product i am interested in", 3.99),
  createData(125478, "Tehseen Jawed", '10h', 'vector', "1.2 inches height and width product i am interested in", 4.99),
  createData(952135, "Tehseen Jawed", '10h', 'vector', "1.2 inches height and width product i am interested in", 3.79),
  createData(605478, "Tehseen Jawed", '10h', 'vector', "1.2 inches height and width product i am interested in", 32.5),
  createData(605, "Tehseen Jawed", '10h', 'vector', "1.2 inches height and width product i am interested in", 1.5),
];

export default function CollapsibleTable({ data }) {
  const { setUnpaidFlag } = data
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Invoice #</TableCell>
            <TableCell align="center">No of Designs</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Payment Time</TableCell>
            <TableCell align="center">Payment Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row setUnpaidFlag={setUnpaidFlag} key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}