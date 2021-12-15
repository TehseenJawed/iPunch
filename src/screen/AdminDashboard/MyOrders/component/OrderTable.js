import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useSelector, useDispatch } from 'react-redux';
import {ORDER_DATAFILTER} from '../../../../redux/reducer/AdminReducer'
import { Button } from '@material-ui/core';
import {BASE_URL} from '../../../../redux/reducer/AuthReducer'

export default function DataTable({ data }) {
  const classes = useStyles();
  const Orders = useSelector(ORDER_DATAFILTER)
  const BaseURL = useSelector(BASE_URL)
  const {setOrderDetails, setDetailsFlag, detailsFlag} = data
  const columns = [
    {
      field: 'details',
      headerName: 'Details',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => {
  
        return (<>
          <Button onClick={() => {setOrderDetails(params.row); setDetailsFlag(true)}} variant="contained" >
            DETAILS
          </Button>
  
        </>)
      }
    },
    {
      field: 'paymentStatus',
      headerName: 'Agent',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.agent.username}</div>
    },
    {
      field: 'createdAt',
      headerName: 'Created Date',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{new Date(params.row.createdAt).toDateString()}</div>
    },
    {
      field: 'updatedAt',
      headerName: 'Delivered Date',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{new Date(params.row.updatedAt).toDateString()}</div>
    },
    {
      field: 'Amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 170,
      valueGetter: (params) =>
        ` $${params.getValue(params.id, 'amount') || ''}`,
    },
    {
      field: 'orderStatus',
      headerName: 'Status',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 170,
      renderCell: (params) => <div>{params.row.orderStatus}</div>
    },
    {
      field: 'serviceType',
      headerName: 'Service',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 170,
      editable: false,
    },
    {
      field: 'files',
      headerName: 'Files',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => {
  
        const DownloadFiles = () => {
          for (let i = 0; i < params.row.files.length; i++) {
            var a = document.createElement("a");
            a.setAttribute('download', '');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', `${BaseURL}uploads/${params.row.files[i]}`);
            a.click()
          }
  
        }
  
        return (
          <Button onClick={DownloadFiles} variant="contained" color="primary">
            Files
          </Button>
        )
      }
    },
    {
      field: 'deliverFiles',
      headerName: 'Designer Files',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => {
  
        const DownloadFiles = () => {
          for (let i = 0; i < params.row.deliverFiles.length; i++) {
            var a = document.createElement("a");
            a.setAttribute('download', '');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', `${BaseURL}uploads/${params.row.deliverFiles[i]}`);
            a.click()
          }
  
        }
  
        return (<>
          {params.row.deliverFiles.length > 0 ?
            (
              <Button onClick={DownloadFiles} variant="contained" color="primary">
                Download
              </Button>
            ) : null
          }
  
        </>)
      }
    },
    
  ];

  console.log("It is order here ====> ",Orders.results)
  
  return (
    <div className={classes.root} style={{ height: 400, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      <DataGrid
        rows={Orders.results}
        columns={columns}
        pageSize={5}
        // onCellDoubleClick={(e) => {
        //   setOrderData(e.row);
        //   setOrderFlag(true)
        // }}
        onSelectionModelChange={(e) => {
          const selectedIDs = new Set(e);
          const selectedRowData = Orders.results.filter((row) =>
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