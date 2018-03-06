import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';


class Album extends Component {

  componentDidMount() {
    this.props.loadAlbum();
  }

  render() {
    const { album } = this.state;
    return (
      <h2>{album.name}</h2>
    );
  }
}

export default connect(
  state => ({ album: state.album }),
  { loadAlbum }
)(Album);