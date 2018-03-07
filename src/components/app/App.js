import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../images/Albums';
import Header from '../Header';
import Loading from './Loading';
import './main.css';


export default class App extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Loading/>
        <Router>
          <main id="main">
            <Switch>
              <Route exact path="/" component={Albums} />
              <Redirect to="/"/>
            </Switch>
          </main>
        </Router>
      </div>
    );
  }
}