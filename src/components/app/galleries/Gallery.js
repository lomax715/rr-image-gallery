import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Gallery.css';
// import { updateCategory, removeCategory } from './actions';

class Gallery extends Component {

  render() {
    const { url, title, description } = this.props;

    return (
      <li className="gallery-li">
        <img src={url} alt={title}/>
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
}

export default connect(
  null,
  { }
)(Gallery);