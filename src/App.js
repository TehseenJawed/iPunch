import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Routes from './config/router';
import {
  BrowserRouter as Router
} from "react-router-dom";
function App() {

  return (
    <Router>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Router>
  );
}

export default App;
