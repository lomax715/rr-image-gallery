import React, { Component } from 'react';
import './Gallery.css';

export default class GalleryForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      gallery: '',
      ...props
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ gallery: '' });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() {
    const { id, gallery } = this.state;

    return (
      <form onSubmit = {this.handleSubmit} className="add-gallery">
        <label htmlFor="gallery">
          <input required id="gallery" name="gallery" value={gallery} onChange={this.handleChange} placeholder="ex: Gallery Name"/>
        </label>
        <button type="submit">{ id ? 'Update Gallery' : 'Create' }</button>
      </form>
    );
  }

}