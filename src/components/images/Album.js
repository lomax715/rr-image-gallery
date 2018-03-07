import React, { Component } from 'react';
import { connect } from 'react-redux';


class Album extends Component{
  render() {
    const { id, name } = this.props;
    return (
      <li>{id}{name}
      </li>
    );

  }
}

export default connect (
  state => ({ album: state.album }),
  null

)(Album);