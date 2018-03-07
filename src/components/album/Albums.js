import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
import Album from './Album';
export class Albums extends Component {

  componentDidMount() {
    this.handleLoad();
  }
  
  handleLoad = () => {
    this.props.loadAlbum();
  }

  render() {
    const { albums } = this.props;
    console.log(albums);
    return (
      <div>
        <h2>albums</h2>
        <Album/>
      </div>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbum }
)(Albums);