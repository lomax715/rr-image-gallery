import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';

class Image extends Component {

  render() {

    const { id, description, url, removeImage, title } = this.props;

    return (
      <li className="image">
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