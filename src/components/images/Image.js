import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeImage } from './actions';

export default class Image extends Component{
  render() {
    const { title, url, description, id } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <img src={url} alt={description}/>
        <button onClick={() => removeImage(id)}>Delete</button>
      </div>
    );

  }
}