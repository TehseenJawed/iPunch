import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import ProtectedRoute from './route/protectedRoute'
import Home from '../screen/Home/Home';
import SalesDashboard from '../components/SalesDashboard/salesDashboards';
import Login from '../screen/Login/login';
import Signup from '../screen/Signup/signup'

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

            <Route exact path="/ip-sales/dashboard">
                <ProtectedRoute>
                    <SalesDashboard>
                        <Home />
                    </SalesDashboard>
                </ProtectedRoute>
            </Route>

        </Switch>
    )
}

export default FunctionalRoute