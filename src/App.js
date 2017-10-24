import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routing-config'
import { NoMatch } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/Routingdata" activeClassName="active">presidentJSON</NavLink></li>
              {}
            </ul>
          </div>
          <div className="App-intro">
            <Switch>
              {}
                {routes.map((route,index) => (<Route key={index} path={route.path} component={route.component} exact={route.exact} />))}
                <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
