import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector, useDispatch } from 'react-redux';
import {ALL_INVOICES_FILTER} from '../../../../redux/reducer/AdminReducer'
import { Button } from '@material-ui/core';
import {BASE_URL} from '../../../../redux/reducer/AuthReducer'

export default function InvoiceTable({ data }) {
  const classes = useStyles();
  const Invoice = useSelector(ALL_INVOICES_FILTER)
  console.log(Invoice)
  const BaseURL = useSelector(BASE_URL)
  const [ setOrderFlag, setOrderData, setOrderDetails, setDetailsFlag] = data

  const columns = [
    // {
    //   field: 'details',
    //   headerName: 'Details',
    //   headerAlign: 'center',
    //   align: 'center',
    //   sortable: false,
    //   width: 140,
    //   type: 'number',
    //   renderCell: (params) => {
  
    //     return (<>
    //       <Button onClick={() => {setOrderDetails(params.row); setDetailsFlag(true)}} variant="contained" >
    //         DETAILS
    //       </Button>
  
    //     </>)
    //   }
    // },
    {
      field: 'id',
      headerName: '#',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 200,
      type: 'number',
      renderCell: (params) => <div>{params.row.id}</div>
    },
    {
      field: 'agent',
      headerName: 'Agent',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.agent.username}</div>
    },
    {
      field: 'amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.amount}{params.row.currency}</div>
    },
    {
      field: 'Client',
      headerName: 'Client',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.client.username}</div>
    },
    {
      field: 'client_email',
      headerName: 'Client Email',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.client.email}</div>
    },
    {
      field: 'paymentType',
      headerName: 'Type',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.payment_type}</div>
    },
    {
      field: 'paymentType',
      headerName: 'Delivered Date',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.payment_type}</div>
    },
    
  ];

  
  return (
    <div className={classes.root} style={{ height: 400, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      <DataGrid
        rows={Invoice.results}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
          setOrderData(e.row);
          setOrderFlag(true)
        }}
        onSelectionModelChange={(e) => {
          const selectedIDs = new Set(e);
          const selectedRowData = Invoice.results.filter((row) =>
            selectedIDs.has(row.id)
          )
          // setTableData(selectedRowData);
        }}

        getCellClassName={(params) => {
          if (params.field === 'Amount') {
            return 'order-amount';
          }

          if (params.field === 'status') {
            switch (params.value) {
              case 'Delivered':
                return 'order-delivered'
              case 'Not Delivered':
                return 'order-notdelivered'
            }
          }
          if (params.field === 'orderStatus') {
            switch (params.value) {
              case 'Paid':
                return 'order-delivered'
              case 'Unpaid':
                return 'order-notdelivered'
              case 'Cancelled':
                return 'order-cancelled'
              case 'Updated':
                return 'order-updated'
            }
          }
          return Number(params.value) >= 15 ? 'hot' : 'cold';
        }}
        checkboxSelection
      // disableSelectionOnClick
      />
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    //   '& .super-app-theme--header': {
    //     backgroundColor: 'rgba(255, 7, 0, 0.55)',
    //     display:'flex',
    //     justifyContent:'center',
    //   },
  },
});