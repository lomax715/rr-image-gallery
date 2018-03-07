import React, { Component } from 'react';
import { connect } from 'react-redux';


class Album extends Component{
  render() {
    const { album } = this.props;
    return (
      <li>
      </li>
    );

  }
}

export default connect (
  state => ({ album: state.album }),
  null

)(Album);