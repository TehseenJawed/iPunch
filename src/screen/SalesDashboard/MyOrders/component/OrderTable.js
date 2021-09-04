import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import {useSelector, useDispatch} from 'react-redux'
import {ALLDeliverOrders} from '../../../../redux/reducer/AgentDataReducer';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer';
import { Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


export default function DataTable({ data }) {
  const classes = useStyles();
  const rows =useSelector(ALLDeliverOrders)
  const BaseURL = useSelector(BASE_URL)

  const columns = [
    {
      field: 'Customer',
      headerName: 'Customer',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        console.log(params.row.revisions.length)
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            {params.row.customer.username}
          </div>
        );
      },
    },
    {
      field: 'revision',
      headerName: 'Revision',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            {(params.row.revisions.length)-1}
          </div>
        );
      },
    },
    {
      field: 'Amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            <MonetizationOnIcon /> {` ${params.getValue(params.id, 'amount') || ''}`}
          </div>
        );
      },
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
            <Button onClick={DownloadFiles} variant="contained" color="secondary">
              Download
            </Button>
          )
          // params.row.agent.username
        }
    },
    {
      field: 'paymentStatus',
      headerName: 'Payment',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'serviceType',
      headerName: 'Service',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'updatedAt',
      headerName: 'Delivered Date',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 160,
      editable: false,
    },
    {
      field: 'revision',
      headerName: 'Order Status',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            {params.row.orderStatus}
          </div>
        );
      },
  },
  ];

  console.log("It is row ===> ",rows.results)
  return (
    <div className={classes.root} style={{ height: 400, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      <DataGrid
        rows={rows.results}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
        }}
        onSelectionModelChange={(e) => {
          // const selectedIDs = new Set(e);
          // const selectedRowData = rows.filter((row) =>
          //   selectedIDs.has(row.id)
          // )
        }}

        getCellClassName={(params) => {
          if (params.field === 'Amount') {
            return 'order-amount';
          }

          if (params.field === 'order_status') {
            switch (params.value) {
              case 'Assigned':
                return 'order-delivered'
              case 'Not Assign':
                return 'order-notdelivered'
            }
          }
          if (params.field === 'payment_status') {
            switch (params.value) {
              case 'Paid':
                return 'order-delivered'
              case 'Not Paid':
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