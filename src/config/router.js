import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ProtectedRoute from './route/protectedRoute'
import SalesDashboard from '../components/SalesDashboard/salesDashboards';
import DesignerDashboard from '../components/DesignerDashboard/designerDashboards';
import CustomerDashboard from '../components/CustomerDashboard/customerDashboards'; 
import AdminDashboard from '../components/AdminDashboard/adminDashboard'; 

import Home from '../screen/Home/Home';
import Login from '../screen/Login/login';
import Signup from '../screen/Signup/signup'
import SalesHome from '../screen/SalesDashboard/Dashboard/Dashboard';
import GenerateForm from '../screen/SalesDashboard/GenerateForm/GenerateForm';
import RegisterClient from '../screen/SalesDashboard/RegisterClient/RegisterClient';
import MyOrders from '../screen/SalesDashboard/MyOrders/MyOrders';
import CustomerManagement from '../screen/SalesDashboard/CustomerManagement/CustomerManagement';
import UserProfile from '../screen/SalesDashboard/Profile/Profile';

import DesignerDash from '../screen/DesignerDashboard/Dashboard/Dashboard'; 
import MyDesigns from '../screen/DesignerDashboard/MyDesigns/MyDesigns';
import MyInvoices from '../screen/DesignerDashboard/MyInvoices/MyInvoices';

import CustomerDash from '../screen/CustomerDashboard/Dashboard/Dashboard';

import AdminDash from '../screen/AdminDashboard/Dashboard/Dashboard';
import AdminGenerateForm from '../screen/AdminDashboard/GenerateForm/GenerateForm';
import AdminOrders from '../screen/AdminDashboard/MyOrders/MyOrders';
import AllInvoices from '../screen/AdminDashboard/AllInvoices/AllInvoices';

function FunctionalRoute() {
    return (
        <Switch>

            <Route exact path="/">
                <ProtectedRoute>
                    <SalesDashboard>
                        <Home />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/signup">
                <Signup />
            </Route>

           {/* Sales Dashboard */}
            <Route exact path="/ip-sales/dashboard">
                <ProtectedRoute>
                    <SalesDashboard>
                        <SalesHome />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-sales/generate-form">
                <ProtectedRoute>
                    <SalesDashboard>
                        <GenerateForm />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-sales/register-client">
                <ProtectedRoute>
                    <SalesDashboard>
                        <RegisterClient />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-sales/my-orders">
                <ProtectedRoute>
                    <SalesDashboard>
                        <MyOrders />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-sales/customer-management">
                <ProtectedRoute>
                    <SalesDashboard>
                        <CustomerManagement />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-sales/user-profile">
                <ProtectedRoute>
                    <SalesDashboard>
                        <UserProfile />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-designer/dashboard">
                <ProtectedRoute>
                    <DesignerDashboard>
                        <DesignerDash />
                    </DesignerDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-designer/my-designs">
                <ProtectedRoute>
                    <DesignerDashboard>
                        <MyDesigns />
                    </DesignerDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-designer/my-invoices">
                <ProtectedRoute>
                    <DesignerDashboard>
                        <MyInvoices />
                    </DesignerDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-customer/dashboard">
                <ProtectedRoute>
                    <CustomerDashboard>
                        <CustomerDash />
                    </CustomerDashboard>
                </ProtectedRoute>
            </Route>
            
            <Route exact path="/ip-admin/dashboard">
                <ProtectedRoute>
                    <AdminDashboard>
                        <AdminDash />
                    </AdminDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-admin/generate-form">
                <ProtectedRoute>
                    <AdminDashboard>
                        <AdminGenerateForm />
                    </AdminDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-admin/register-client">
                <ProtectedRoute>
                    <AdminDashboard>
                        <AdminOrders />
                    </AdminDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-admin/all-orders">
                <ProtectedRoute>
                    <AdminDashboard>
                        <AdminOrders />
                    </AdminDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-admin/all-invoices">
                <ProtectedRoute>
                    <AdminDashboard>
                        <AllInvoices />
                    </AdminDashboard>
                </ProtectedRoute>
            </Route>

        </Switch>
    )
}

export default FunctionalRoute