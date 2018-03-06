import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addImage, loadImages } from './actions';
import Image from './Image';
import ImageForm from './ImageForm';

class Images extends Component {
  
  componentDidMount() {
    this.handleLoad();
  }

  handleLoad() {
    this.props.loadImages();
  }

  render() {
    const { album, addImage, albumName } = this.props;
    const { images } = album; // issue with returned data is object, expecting an array
    console.log(album);
    return (
      <Fragment>
        <h1>{albumName}</h1>
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ album: state.images }),
  { addImage, loadImages }
)(Images);