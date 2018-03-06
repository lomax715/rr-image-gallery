import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from './actions';

class Images extends Component {
  componentDidMount(){
    this.props.loadImages();
  }
}