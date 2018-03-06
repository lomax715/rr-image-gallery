import React, { Component } from 'react';
import './Album.css';

export default class AlbumForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      album: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ album: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, album } = this.state;

    return (
      <form onSubmit = {this.handleSubmit} className="add-album">
        <label htmlFor="album">
          <input required id="album" name="album" value={album} onChange={this.handleChange} placeholder="ex: Album Name"/>
        </label>
        <button type="submit">{ id ? 'Update Album' : 'Create' }</button>
      </form>
    );
  }

}