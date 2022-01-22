import React from 'react';
import reactDOM from 'react-dom';
import '../public/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { AppWrapper } from './components';

reactDOM.render(
  <Router>
    <Routes>
      <Route path="*" element={<AppWrapper />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
