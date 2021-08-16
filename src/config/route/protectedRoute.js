import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {SALES_DATA} from '../../redux/reducer/AuthReducer'


function PrivateRoute ({ children, ...rest }) {
  const LoginFlag = useSelector(SALES_DATA)

  return (
    <Route {...rest} render={() => {
      return LoginFlag == true
        ? children
        : <Redirect to='/login' />
    }} />
  )
}


export default PrivateRoute