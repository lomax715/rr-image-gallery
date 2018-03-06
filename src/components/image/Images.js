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
    const { images, addImage } = this.props;
    
    return (
      <Fragment>
        <h1>Album Name Placeholder</h1>
        <ImageForm onComplete={addImage}/>
        <ul className="images">
          {images.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </Fragment>
    );
  }
}

export default connect(
  state => ({ images: state.images }),
  { addImage, loadImages }
)(Images);