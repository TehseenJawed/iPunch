import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import {AllUncompleteOrders} from '../../../../redux/reducer/AgentDataReducer'
import {useSelector, useDispatch} from 'react-redux'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';



export default function DataTable({data}) {
    const {setTableData, setOrderFlag, setOrderData} = data
    const rows = useSelector(AllUncompleteOrders)
    
    const columns = [
      { 
        field: 'customer',
        headerName: 'Customer',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
      renderCell: (params) => {
        return (
          <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
            {params.row.customer.username}
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
        width: 170,
        valueGetter: (params) =>
          ` $${params.getValue(params.id, 'amount') || ''}`,
      },
      {
        field: 'orderStatus',
        headerName: 'Status',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 170,
      },
      {
        field: 'paymentStatus',
        headerName: 'Payment Status',
        headerAlign: 'center',
        align: 'center',
        description: 'This column has a value getter and is not sortable.',
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
        headerName: 'Created Date',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        width: 170,
        editable: false,
      },
      {
        field: 'paidDate',
        headerName: 'Paid Date',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        width: 170,
        editable: false,
      },
    ];
    

  return (
    <div style={{ height: 490, width: '100%', backgroundColor:'white', textAlign: "center" }}>
      {rows.results !== undefined ?
      <DataGrid
      rows={rows.results}
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

          if(params.field === 'paymentStatus'){
              switch (params.value){
                  case 'Paid':
                      return 'invoice-paid'
                  case 'Not Paid':
                      return 'invoice-notpaid'
              }
          }
        }}
      // checkboxSelection
    />
  : null}
    </div>
  );
}