import React from 'react';
import ReactDOM from 'react-dom';
import {Routes} from './components';
import {Provider} from 'react-redux';
import store from './redux/store/store';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
