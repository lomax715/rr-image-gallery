import React, { Component } from 'react';
import './Album.css';
import { connect } from 'react-redux';
import { loadAlbum, addImage } from './actions';
import ImageForm from './ImageForm';
import Album from './Album';


class Albums extends Component {


  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    this.props.loadAlbum();
  };

  render() { 
    const { albums, addImage } = this.props;
    return (
      <section className="main-container maxwidth-wrap">
        <div className="add-contain">
          <ImageForm onEdit={addImage}/>
        </div>
        <ul className="album-ul">
          {albums.map(album => <Album key={album.id} {...album}/>)}
        </ul>

      </section>
    );
  }
}

export default connect(
  state => ({ albums: state.albums }),
  { loadAlbum, addImage }
)(Albums);