import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//!-----Universal SCSS settings
import './App.scss';
//!-----SCSS for tag styling
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';

import Home from './components/Home';

const routing = (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/work' component={App} /> 
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
