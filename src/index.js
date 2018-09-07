import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';
import {store} from './store';
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
