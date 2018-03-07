import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, addImage, loadAlbums } from './actions';
import Image from './Image';
import AddImageForm from '../form/addImageForm';

class Images extends Component {
  state = {
    editing: false
  };

  componentDidMount(){
    this.props.loadImages(this.props.id);
    }
  }


  render(){
    const { image, addImage, id } = this.props;

    return (
      <div>
        <AddImageForm id={id} onEdit={addImage}/>
        <ul>
          {image.map(image => <Image key={image.id} {...image}/>)}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state, props) => ({ 
    image: state.image,
    album: state.album,
    id: props.match.params.id
  }),
  { loadImages, addImage, loadAlbums }
)(Images);