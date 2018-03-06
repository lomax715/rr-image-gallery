import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Album.css';
import { removeImage } from './actions';
// import AlbumForm from './AlbumForm';

class Album extends Component {

  render() {
    const { id, description, url, title, removeImage } = this.props;

    return (
      <li className="album-li">
        <div>
          <div className="img-contain">
            <img src={url} alt={title}/>
          </div>
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={() => removeImage(id)}>✖</button>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { removeImage }
)(Album);