import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Album.css';
import { updateAlbum, removeAlbum } from './actions';
import AlbumForm from './AlbumForm';

class Album extends Component {

  state = {
    editing: false
  };

  handleEdit = name => {
    this.props.updateAlbum(name);
    this.setState({ editing: false });
  };

  handleToggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  render() {
    const { id, name } = this.props;
    const { editing } = this.state;

    return (
      <li className="album-li">
        <div>
          {editing ? 
            <AlbumForm id={id} text={name} onEdit={this.handleEdit}/> :
            <p><span className="category-title">{name}</span></p>
          }
          <div className="buttons">
            <button onClick={this.handleToggleEdit}>
              {editing ? 'cancel' : '✎'}
            </button>
            <button onClick={() => removeAlbum(id)}>✖</button>
          </div>
        </div>
      </li>
    );
  }
}

export default connect(
  null,
  { updateAlbum, removeAlbum }
)(Album);