import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {ALL_CUSTOMER_DATA} from '../../../../redux/reducer/AgentDataReducer'
import {useSelector, useDispatch} from 'react-redux'



const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable({data}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const customerRows = useSelector(ALL_CUSTOMER_DATA)
  const rows = customerRows.results

  const {columns, range, changeCustomerPage} = data

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
          {rows.slice(range.page * range.limit, range.page * range.limit + range.limit).map((row) => {
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
        count={rows.length}
        rowsPerPage={range.limit}
        page={range.page}
        onPageChange={(e, newpage) => changeCustomerPage({limit:range.limit, page:newpage})}
        onRowsPerPageChange={(e) => changeCustomerPage({limit:e.target.value, page:range.page})}
      /></div>

      :null}
    </Paper>
  );
}