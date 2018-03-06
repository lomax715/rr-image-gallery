import React, { Component } from 'react';
import './Gallery.css';
import { connect } from 'react-redux';
import GalleryForm from './GalleryForm';
import Gallery from './Gallery';

export default class Galleries extends Component {

  render() { 
    const { galleries, addGallery } = this.props;

    return (
      <section className="main-container maxwidth-wrap">
        <div>
          <GalleryForm onEdit={addGallery}/>
        </div>
        <ul className="image-ul">
          {galleries.map(gallery => <Gallery key={gallery.id} {...gallery}/>)}
        </ul>

      </section>
    );
  }
}

// export default connect(
//   state => ({ galleries: state.galleries }),
//   {  }
// )(Galleries);