import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadAlbums } from './actions';
import Images from '../image/Images';
import Album from './Album';

class Albums extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadAlbum();
  }

  render() {
    const { albums } = this.props;
    
    return (
      <Fragment>
        {albums.map()}
      </Fragment>
    );
  }
}

export default connect(
  state => ({ album: state.albums }),
  { loadAlbums }
)(Albums);