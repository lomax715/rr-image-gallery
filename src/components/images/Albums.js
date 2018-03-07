import React, { Component } from 'react';
import { connect } from 'react-redux';
import Album from './Album';
import { loadAlbums } from './actions';


class Albums extends Component {

  componentDidMount(){
    //this.props.loadImages('5a9ec831d22df00021b2c649');
    this.props.loadAlbums();
  }
  
  render(){

    const { albums } = this.props;
    return (

      <ul>
        {albums.map((album => {
          return <Album key={album.id} {...album}/>;
        }))}

      </ul>
    );
  }
}

export default connect(
  state => ({ albums: state.album }),
  { loadAlbums }
)(Albums);