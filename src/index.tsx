import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import './redux-demo';

import App from './app/App';

import {Provider} from 'react-redux';
import store from './app/state/store';

import {BrowserRouter as Router} from 'react-router-dom';


// Provider used to pass store reference to React-Redux container component via React Context

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
 );
