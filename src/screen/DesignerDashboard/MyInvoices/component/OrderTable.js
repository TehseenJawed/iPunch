import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import { Button } from '@material-ui/core'





export default function DataTable({ data }) {
  const classes = useStyles();
  const {setTableData, setOrderFlag, setOrderData, rows} = data

  const columns = [
    {
      field: 'id',
      headerName: '#',
      width: 120,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'Amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
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
      width: 200,
      type: 'number',
      renderCell: (params) => {
        if (params.row.status == 'Paid') {
          return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center', color:'green' }}>
              <ThumbUpAltIcon /> {` ${params.getValue(params.id, 'status') || ''}`}
            </div>
          )
        }
        else if (params.row.status == 'Not Paid') {
          return (
            <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center', color:'#F5365C' }}>
               {` ${params.getValue(params.id, 'status') || ''}`}  <ThumbDownAltIcon />
            </div>
          )
        }
      },
    },
    {
      field: 'quantity',
      headerName: 'Design Quantity',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'receiveDate',
      headerName: 'Paid Date',
      headerAlign: 'center',
      align: 'center',
      type: 'number',
      width: 200,
      editable: false,
    },
    {
      field: 'invoice',
      headerName: 'Download Invoice',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      type: 'number',
      renderCell: (params) => {
        return (
          <Button className={classes.downloadBtn} variant="contained" color="secondary">
            View Invoice
          </Button>
        )
      },
    },
  ];

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

          if (params.field === 'orderStatus') {
            return 'order-delivered'
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
  downloadBtn: {
    fontSize: 10,
    height: 30,
    padding: 5,
  }
});