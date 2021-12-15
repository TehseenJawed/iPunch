import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { DESIGNER_DATA } from '../../../../redux/reducer/AdminReducer';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { BASE_URL } from '../../../../redux/reducer/AuthReducer';
import { PatchOrderbyDesigner, PatchOrdertoDeliver } from '../../../../redux/action/AdminAction';
import { Button } from '@material-ui/core';


export default function DataTable({ data }) {
  const { rows, setChangesFlag, setChangesData, setOrderDetails, setDetailsFlag } = data
  const dispatch = useDispatch()
  const designerData = useSelector(DESIGNER_DATA)
  const tablerows = rows.results
  const BaseURL = useSelector(BASE_URL)
  
  const AssignDesigner = (data) => {
    dispatch(PatchOrderbyDesigner(data))
  }

  const AssignDesignerAction = (data) => {
    switch (data.value) {

      case "Deliver":
        dispatch(PatchOrdertoDeliver(data))

      case "Changes":
        setChangesFlag(true)
        setChangesData(data)
    }
  }
  const columns = [
    {
      field: 'orderNo',
      headerName: 'OrderNo',
      headerAlign: 'center',
      align: 'center',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 140,
      type: 'number',
      renderCell: (params) => <div>{params.row.orderNo}</div>
    },
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
    {
      field: 'assign',
      headerName: 'Assign To',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'number',
      renderCell: (params) => {

        return (
          <div className="field-set">
            {params.row.orderStatus === "Not Assign" ?
              (
                <FormControl className="signup-Dropdown" variant="outlined">
                  <Select
                    onChange={(e) => AssignDesigner({ id: params.row.id, data: { designer: e.target.value, orderStatus: "Assigned" } })}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <FormHelperText>Assign Designer</FormHelperText>
                    <MenuItem value="" disabled>
                      Assign Designer
                    </MenuItem>

                    {designerData !== undefined ?
                      designerData.results.map((v, i) => <MenuItem value={v.id}>{v.username}</MenuItem>)
                      : null}

                  </Select>
                </FormControl>
              ) : null
            }

          </div>
        )
      }
    },
    {
      field: 'id',
      headerName: 'Action',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      width: 170,
      type: 'number',
      renderCell: (params) => {

        return (
          <div className="field-set">
            {
              params.row.orderStatus === "Review" ?
                (
                  <FormControl className="signup-Dropdown" variant="outlined">
                    <Select
                      onChange={(e) => AssignDesignerAction({ id: params.row.id, value: e.target.value, revision: params.row.revisions, data: { orderStatus: "Delivered" } })}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                    >
                      <FormHelperText>Action</FormHelperText>

                      <MenuItem value="Deliver">
                        Send to deliver
                      </MenuItem>
                      <MenuItem value="Changes">
                        Send for changes
                      </MenuItem>

                    </Select>
                  </FormControl>
                ) : null
            }

          </div>
        )
      }
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