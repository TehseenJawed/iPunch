import React from 'react'
import CustomerTable from './component/CustomerMTable'
const CustomerManagement = () => {
    return (
        <div className="customerManagement-container">
            <div className="customerManagement-heading">Manage Yxcour Clients Here</div>
            <div className="customerManagement-innerContainer">
              <CustomerTable />
            </div>
        </div>
    )
}

export default CustomerManagement
