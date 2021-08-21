import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ProtectedRoute from './route/protectedRoute'
import SalesDashboard from '../components/SalesDashboard/salesDashboards';
import DesignerDashboard from '../components/DesignerDashboard/designerDashboards';

import Home from '../screen/Home/Home';
import Login from '../screen/Login/login';
import Signup from '../screen/Signup/signup'
import SalesHome from '../screen/SalesDashboard/Dashboard/Dashboard'
import GenerateForm from '../screen/SalesDashboard/GenerateForm/GenerateForm'
import RegisterClient from '../screen/SalesDashboard/RegisterClient/RegisterClient'
import MyOrders from '../screen/SalesDashboard/MyOrders/MyOrders'
import CustomerManagement from '../screen/SalesDashboard/CustomerManagement/CustomerManagement'
import UserProfile from '../screen/SalesDashboard/Profile/Profile'

import DesignerDash from '../screen/DesignerDashboard/Dashboard/Dashboard' 

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

            <Route exact path="/ip-designer/generate-form">
                <ProtectedRoute>
                    <DesignerDashboard>
                        <DesignerDash />
                    </DesignerDashboard>
                </ProtectedRoute>
            </Route>

            <Route exact path="/ip-designer/register-client">
                <ProtectedRoute>
                    <DesignerDashboard>
                        <DesignerDash />
                    </DesignerDashboard>
                </ProtectedRoute>
            </Route>

        </Switch>
    )
}

export default FunctionalRoute