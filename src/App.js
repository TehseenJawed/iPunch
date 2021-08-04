import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import Home from './screen/Home/Home'

function App() {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
