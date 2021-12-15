import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {ALL_CUSTOMER_DATA_SORT, CUSTOMER_SORT_FILTER} from '../../../../redux/reducer/AgentDataReducer'
import {SetAllCustomer_Filter, SetAllCustomer_FilterData} from '../../../../redux/action/AgentAction'
import {useSelector, useDispatch} from 'react-redux'



const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 490,
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({data}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const dispatch = useDispatch()
  const customerRows = useSelector(ALL_CUSTOMER_DATA_SORT)
  const fiterCustomer = useSelector(CUSTOMER_SORT_FILTER)
  const rows = customerRows.results

  const {columns, range} = data

  const changeTableRows = (e) => {
    dispatch(SetAllCustomer_Filter(e))
  }
  useEffect(() => {
    if(customerRows !== undefined){
      dispatch(SetAllCustomer_FilterData())
    }
  },[fiterCustomer])
  return (
    <Paper className={classes.root}>
        {rows !== undefined ?

      <div>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number' ? column.format(value) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })} 
        </TableBody>
      </Table>
      
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={customerRows.totalResults}
        rowsPerPage={fiterCustomer.limit}
        page={fiterCustomer.page}
        onPageChange={(e, newpage) => changeTableRows({limit:range.limit, page:newpage})}
        onRowsPerPageChange={(e) => changeTableRows({limit:e.target.value, page:fiterCustomer.page})}
      /></div>

      :null}
    </Paper>
  );
}