import React, {useState} from 'react';
import { DataGrid } from '@material-ui/data-grid';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';





export default function DataTable({data}) {
    const {setTableData, setUnpaidFlag, setOrderData, clientOrderRows, clientOrderColumn} = data
    const rows = clientOrderRows
    const columns = clientOrderColumn
  return (
    <div style={{ height: 490, width: '100%', backgroundColor:'white', textAlign: "center" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellDoubleClick={(e) => {
            setOrderData(e.row);
            setUnpaidFlag(true)
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
    </div>
  );
}