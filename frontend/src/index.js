import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/App';
import reducers from './main/reducers'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
   && window.__REDUX_DEVTOOLS_EXTENSION__();

// apply the promise from redux-promise, create the store, configure
// reducers and devTools configuration   
const store = applyMiddleware(multi, promise, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
  <HashRouter>
      <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
