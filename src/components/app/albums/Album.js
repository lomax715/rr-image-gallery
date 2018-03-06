import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Album.css';
import { removeAlbum } from './actions';
// import AlbumForm from './AlbumForm';

class Album extends Component {

  render() {
    const { id, description, url, title } = this.props;

    return (
      <li className="album-li">
        <div>
          <img src={url} alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => removeAlbum(id)}>✖</button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { removeAlbum }
)(Album);