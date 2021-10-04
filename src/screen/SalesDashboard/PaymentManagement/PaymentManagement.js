import React from 'react'
import InvoiceTable from './component/InvoiceMTable'
const PaymentManagement = () => {
    return (
        <div className="customerManagement-container">
            <div className="customerManagement-heading">Manage Your Invoices Here</div>
            <div className="customerManagement-innerContainer">
              <InvoiceTable />
            </div>
        </div>
    )
}

export default PaymentManagement
