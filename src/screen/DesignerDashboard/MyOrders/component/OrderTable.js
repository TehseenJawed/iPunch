import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

const columns = [
  {
    field: 'id',
    headerName: '#',
    width: 90,
    align: 'center',
    headerAlign: 'center'
  },
  {
    field: 'CustomerName',
    headerName: 'Customer Name',
    headerAlign: 'center',
    align: 'center',
    width: 170,
    editable: false,
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
    field: 'status',
    headerName: 'Status',
    headerAlign: 'center',
    align: 'center',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    type: 'number',
    renderCell: (params) => {
      if (params.row.status == 'Delivered') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            <ThumbUpAltIcon /> {` ${params.getValue(params.id, 'status') || ''}`}
          </div>
        )
      }
      else if (params.row.status == 'Not Delivered') {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
             {` ${params.getValue(params.id, 'status') || ''}`}  <ThumbDownAltIcon />
          </div>
        )
      }
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
    field: 'receiveDate',
    headerName: 'Receive Date',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 150,
    editable: false,
  },
  {
    field: 'deliveryDate',
    headerName: 'Delivered Date',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    width: 160,
    editable: false,
  },
];

const rows = [
  { id: 1, CustomerName: 'Snow', amount: 50, status: 'Delivered', orderStatus: 'Paid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 2, CustomerName: 'Lannister', amount: 270, status: 'Not Delivered', orderStatus: 'Unpaid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 3, CustomerName: 'Lannister', amount: 1041, status: 'Delivered', orderStatus: 'Cancelled', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 4, CustomerName: 'Stark', amount: 380, status: 'Delivered', orderStatus: 'Unpaid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 5, CustomerName: 'Targaryen', amount: 1550, status: 'Not Delivered', orderStatus: 'Paid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 6, CustomerName: 'Melisandre', amount: 2000, status: 'Not Delivered', orderStatus: 'Paid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 7, CustomerName: 'Clifford', amount: 100, status: 'Not Delivered', orderStatus: 'Updated', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 8, CustomerName: 'Frances', amount: 130, status: 'Delivered', orderStatus: 'Updated', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
  { id: 9, CustomerName: 'Roxie', amount: 1100, status: 'Not Delivered', orderStatus: 'Unpaid', receiveDate: '5/April/2020', deliveryDate: '6/April/2020' },
];

export default function DataTable({ data }) {
  const classes = useStyles();
  const [setTableData, setOrderFlag, setOrderData] = data
  return (
    <div className={classes.root} style={{ height: 400, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
          setOrderData(e.row);
          setOrderFlag(true)
        }}
        onSelectionModelChange={(e) => {
          const selectedIDs = new Set(e);
          const selectedRowData = rows.filter((row) =>
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