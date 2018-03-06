import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';
import './image.css';

class Image extends Component {

  render() {

    const { id, description, url, removeImage, title } = this.props;

    return (
      <li className="image">
        <h2>{title}</h2>
        <figure>
          <img src={url} alt={title}/>
          <figcaption>{description}</figcaption>
          <button onClick={() => removeImage(id)}>X</button>
        </figure>
      </li>
    );
  }
}

export default connect(
  null,
  { removeImage }
)(Image);