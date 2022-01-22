import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../public/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components';

reactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
