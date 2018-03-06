import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages, addImage } from './actions';
import Image from './Image';
import AddImageForm from '../form/addImageForm';

class Images extends Component {
  
  componentDidMount(){
    this.props.loadImages('5a9ec831d22df00021b2c649');
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
  state => ({ image: state.image }),
  { loadImages, addImage }
)(Images);