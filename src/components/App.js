import React, { Component } from 'react';
import './app.css';
import AddImage from './album/AddImage';

export default class App extends Component {

  constructor(){
    super();

    this.state = {};

  }
  
  render() {

    return (
      <div>
        <header>
          <h1>Image Gallery</h1>
        </header>
        <main>
          <AddImage/>
        </main>

      </div>  
    );
  }
}

