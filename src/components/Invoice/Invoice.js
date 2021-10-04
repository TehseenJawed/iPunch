import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SELECTED_ORDER_FOR_INVOICE } from '../../redux/reducer/AgentDataReducer'
import { LOGIN_DATA } from '../../redux/reducer/AuthReducer'
import IdealPunch from '../../assets/brand/logo.svg'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function CustomizedMenus() {
    const invoiceData = useSelector(SELECTED_ORDER_FOR_INVOICE)
    const AgentData = useSelector(LOGIN_DATA)
    const { username, email, phone } = AgentData.user
    const { } = invoiceData[0].customer
    window.print()
    return (
        <div className="invoice-container">
            <div className="invoice-setContainer">

                <div className="invoice-innerContainer">

                    <div className="invoice-logoContainer">
                        <img className="invoice-logo" src={IdealPunch} alt="logo" />
                    </div>

                    <div className="invoice-header">

                        <div className="invoiceInner-header">
                            <p className="invoice-header-desc">PHONE: (851)-585-7452</p>
                            <p className="invoice-header-desc">ADDRESS: Q-65 Area Lanmheights Appartmen</p>
                            <p className="invoice-header-desc">WEBSITE: https://www.idealpunch.com</p>
                        </div>
                        <div className="agent-container">
                            <p className="agent-header">AGENT INFORMATION</p>
                            <p className="agent-desc">NAME: {username}</p>
                            <p className="agent-desc">PHONE: {phone}</p>
                            <p className="agent-desc">EMAIL: {email}</p>
                        </div>

                    </div>
                </div>

                <div className="customer-container">
                    <p className="agent-header">CUSTOMER INFORMATION</p>
                    <p className="customer-desc">NAME: {invoiceData[0].customer.username}</p>
                    <p className="customer-desc">COMPANY: {invoiceData[0].customer.company}</p>
                    <p className="customer-desc">EMAIL: {invoiceData[0].customer.email}</p>
                    <p className="customer-desc">PHONE: {invoiceData[0].customer.phone}</p>
                    <p className="customer-desc">EMAIL: {invoiceData[0].customer.website}</p>

                </div>

                <div className="customer-container">

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">ID</TableCell>
                                    <TableCell align="center">FILE</TableCell>
                                    <TableCell align="center">AMOUNT</TableCell>
                                    <TableCell align="center">SERVICE</TableCell>
                                    <TableCell align="center">CREATED</TableCell>
                                    <TableCell align="center">DELIVERED</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    invoiceData.map((v,i) => {
                                        let created = new Date(v.createdAt);
                                        let delivered = new Date(v.updatedAt);
                                        return(
                                            <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell  align="center" component="th" scope="row">
                                            {v.id}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {v.deliverFiles[0]}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {v.amount}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {v.serviceType}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {created.toDateString()}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {delivered.toDateString()}
                                        </TableCell>
                                    </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            </div>

        </div>
    );
}