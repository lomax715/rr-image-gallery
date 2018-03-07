import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import Images from '../image/Images';

class AlbumDetail extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadAlbum();
  }

  render() {
    const { album } = this.props;
    const { name } = album;
    
    return (
      <Fragment>
        <h1>{name}</h1>
        <Images/>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ album: state.album }),
  { loadAlbum }
)(AlbumDetail);