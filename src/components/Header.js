import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
  render(){
    return (
      <header>
        <h1>Image Gallery</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </header>
    );
  }
}