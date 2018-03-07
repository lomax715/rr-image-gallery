import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Albums from '../images/Albums';
import Header from '../Header';
import Loading from './Loading';
//import AlbumDetails from '../images/AlbumDetails';
import Images from '../images/Images';
import './main.css';


export default class App extends Component{
  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Loading/>
            <main id="main">
              <Switch>
                <Route exact path="/" component={Albums} />
                <Route path="/albums/:id" component={Images}/>
                <Redirect to="/"/>
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}