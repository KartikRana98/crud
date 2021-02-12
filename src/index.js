import React from 'react';
import ReactDOM from 'react-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router } from "react-router-dom";
import {createBrowserHistory} from "history";
import './index.css';
import App from './App';

export const histoy = createBrowserHistory({forceRefresh: true});





ReactDOM.render(
  <Router>
    <App  />

  </Router>,
 
  document.getElementById('root')
);


