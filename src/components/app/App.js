import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component{
  render(){
    return (
      <Router>
        <main id="main">
          <Switch>
            <Route exact path="/"/>
            <Redirect to="/"/>
          </Switch>
        </main>
      </Router>
    );
  }
}