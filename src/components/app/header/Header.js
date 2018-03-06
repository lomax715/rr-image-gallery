import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Header extends Component {

  render() { 
    return (
      <header role="banner" id="header">
        <section className="head-container maxwidth-wrap">
          <h1 className="logo">La Galleria</h1>
          <nav>
            <ul>
              <li><Link to="/">Galleries</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              {/* <Route path="/movies" render={() => <li>~</li>}/> */}
            </ul>
          </nav>
        </section> 
      </header>
    );
  }
}