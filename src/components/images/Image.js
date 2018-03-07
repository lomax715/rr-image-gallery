import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';

class Image extends Component{
  render() {
    const { title, url, description, id, removeImage } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <img src={url} alt={description}/>
        <p>{description}</p>
        <button onClick={() => removeImage(id)}>Delete</button>
      </div>
    );

  }
}

export default connect (
  state => state,
  { removeImage }

)(Image);