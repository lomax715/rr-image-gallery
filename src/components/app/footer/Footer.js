import React, { Component } from 'react';
import '../App.css';

export default class Footer extends Component {

  render() { 
    return (
      <footer role="contentinfo" id="footer">
        <section className="footer maxwidth-wrap"> 
          <p>(c) <a href="https://github.com/limongoo/budget-tracker/tree/dev" target="_blank" rel="author noopener noreferrer">Budget Tracker App</a> | <a href="https://github.com/limongoo" target="_blank" rel="author noopener noreferrer">Ivan Limongan</a></p>
        </section>
      </footer>
    );
  }
}