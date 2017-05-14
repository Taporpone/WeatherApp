import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './Store';

import { Router, browserHistory } from 'react-router';
import routes from './Routes';

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
