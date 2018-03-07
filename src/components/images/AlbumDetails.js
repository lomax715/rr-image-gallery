import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import { loadImages } from './actions';
import { connect } from 'react-redux';

class AlbumDetails extends Component{
  
  componentDidMount(){
    this.props.loadImages(this.props.id);
    //this.props.loadAlbums();
  }

  render(){
    const { image } = this.props;
    return (
      <ul>
        {image.map(image => <Image key={image.id} {...image}/>)}
      </ul>
      
    );
  }
}

export default connect(
  (state, props) => ({
    album: state.album,
    image: state.image,
    id: props.match.params.id
  }),
  { loadImages }
)(AlbumDetails);