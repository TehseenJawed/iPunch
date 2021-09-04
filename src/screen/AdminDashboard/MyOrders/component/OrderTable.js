import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { useSelector, useDispatch } from 'react-redux';
import {ORDER_DATAFILTER} from '../../../../redux/reducer/AdminReducer'

const columns = [
  {
    field: 'id',
    headerName: 'Customer',
    width: 90,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'username',
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
    field: 'revisions',
    headerName: 'Revisions',
    headerAlign: 'center',
    align: 'center',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: (params) => {
      console.log(params.row.revisions.length)
      return (
        <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
          {params.row.revisions.length-1}
        </div>
      );
    },
  },
  {
    field: 'orderStatus',
    headerName: 'Order Status',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'paymentStatus',
    headerName: 'Payment Status',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    width: 160,
    type: 'number',
    renderCell: (params) => {
      if (params.row.paymentStatus == 'Paid') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            <ThumbUpAltIcon /> {` ${params.getValue(params.id, 'paymentStatus') || ''}`}
          </div>
        )
      }
      else if (params.row.paymentStatus == 'Not Paid') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
             {` ${params.getValue(params.id, 'paymentStatus') || ''}`}  <ThumbDownAltIcon />
          </div>
        )
      }
    },
  },
  {
    field: 'createdAt',
    headerName: 'Order Date',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 150,
    editable: false,
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
];

export default function DataTable({ data }) {
  const classes = useStyles();
  const Orders = useSelector(ORDER_DATAFILTER)

  console.log("It is order here ====> ",Orders.results)
  const [setTableData, setOrderFlag, setOrderData] = data
  return (
    <div className={classes.root} style={{ height: 400, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      <DataGrid
        rows={Orders.results}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
          setOrderData(e.row);
          setOrderFlag(true)
        }}
        onSelectionModelChange={(e) => {
          const selectedIDs = new Set(e);
          const selectedRowData = Orders.results.filter((row) =>
            selectedIDs.has(row.id)
          )
          setTableData(selectedRowData);
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