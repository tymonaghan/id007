import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../public/style.css';

reactDOM.render(
  <Provider store={store}>
    <div>put components here</div>
  </Provider>,
  document.getElementById('app')
);
