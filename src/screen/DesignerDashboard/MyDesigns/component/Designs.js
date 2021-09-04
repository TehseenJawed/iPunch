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
import { Button } from '@material-ui/core'

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


function Row(props) {
  const { row, setUnpaidFlag } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

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
        <TableCell align="center">{row.orderStatus}</TableCell>
        <TableCell align="center">{row.delivered}</TableCell>
        <TableCell align="center">{row.type}</TableCell>
        <TableCell align="center">{row.revision.length}</TableCell>
        <TableCell align="center">
          {row.comission}
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
                    <TableCell align="center">Dispute Status</TableCell>
                    <TableCell align="center">Download File</TableCell>
                    <TableCell align="center">Final Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.revision.map((historyRow) => {
                    return (
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
                    )
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

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.string.isRequired,
//     carbs: PropTypes.string.isRequired,
//     fat: PropTypes.string.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string.isRequired,
//     protein: PropTypes.string.isRequired,
//   }).isRequired,
// };


export default function CollapsibleTable({ data }) {
  const { setUnpaidFlag, rows } = data
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Order #</TableCell>
            <TableCell align="center">Order Status</TableCell>
            <TableCell align="center">Delivered Date</TableCell>
            <TableCell align="center">Design Type</TableCell>
            <TableCell align="center">No of revisions</TableCell>
            <TableCell align="center">Comission</TableCell>
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