import React, { Component } from 'react';
import './Album.css';
import { connect } from 'react-redux';
import { loadAlbum } from './actions';
// import AlbumForm from './AlbumForm';
import Album from './Album';


class Albums extends Component {


  componentDidMount() {
    this.handleLoad();
  }

  handleLoad = () => {
    this.props.loadAlbum();
  };

  render() { 
    const { albums } = this.props;
    return (
      <section className="main-container maxwidth-wrap">
        <div>
          {/* <AlbumForm onEdit={addAlbum}/> */}
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
  { loadAlbum }
)(Albums);