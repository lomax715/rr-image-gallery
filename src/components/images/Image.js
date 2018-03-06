import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Image extends Component{
  render() {
    const { title, url, description } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <img src={url} alt={description}/>
      </div>
    );

  }
}