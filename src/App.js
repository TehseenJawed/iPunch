import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Routes from './config/router';
import {
  BrowserRouter as Router
} from "react-router-dom";
import SnackBar from './components/SnackBar/snackBar'
function App() {

  return (
    <Router>
      <Provider store={store}>
       <SnackBar />
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
