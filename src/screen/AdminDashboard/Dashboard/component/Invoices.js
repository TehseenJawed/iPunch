import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { ALL_INVOICES } from '../../../../redux/reducer/AdminReducer';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer';
import { PatchOrderbyDesigner, PatchOrdertoDeliver } from '../../../../redux/action/AdminAction';
import { Button } from '@material-ui/core';


export default function DataTable({ data }) {
  const {  setChangesFlag, setChangesData } = data
  const rows = useSelector(ALL_INVOICES)

  const dispatch = useDispatch()
  const tablerows = rows.results
  const BaseURL = useSelector(BASE_URL)
  console.log(tablerows)
  const AssignDesigner = (data) => {
    switch(data.value){
      
      case "Deliver":
        dispatch(PatchOrdertoDeliver(data))

      case "Changes":
        setChangesFlag(true)
        setChangesData(data)
    }
  }

  const columns = [
    {
      field: 'id',
      headerName: '#',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 220,
      type: 'string',
      renderCell: (params) => <div>{params.row.id}</div>
    },
    {
      field: 'agent',
      headerName: 'Agent',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.agent.username}</div>
    },
    {
      field: 'status',
      headerName: 'Current Status',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.status}</div>
    },
    {
      field: 'client',
      headerName: 'Client',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.client.username}</div>
    },
    {
      field: 'amount',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.amount}{params.row.currency}</div>
    },
    {
      field: 'paymentType',
      headerName: 'Amount',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'string',
      renderCell: (params) => <div>{params.row.payment_type}</div>
    },
  ];

  return (
    <div style={{ height: 490, width: '100%', backgroundColor: 'white', textAlign: "center" }}>
      {tablerows !== undefined ? <DataGrid
        rows={tablerows}
        columns={columns}
        pageSize={5}
        // onSelectionModelChange={(e) => {
        //   const selectedIDs = new Set(e);
        //   const selectedRowData = rows.filter((row) =>
        //     selectedIDs.has(row.id)
        //   )
        // }}

        getCellClassName={(params) => {
          if (params.field === 'Amount') {
            return 'order-amount';
          }

          if (params.field === 'createdAt') {
            return 'invoice-paid'
          }
        }}
      // checkboxSelection
      />
        : null}
    </div>
  );
}