import React, { Component } from 'react';
import './styles/addImage.css';

export default class AddImage extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      url: '',
      ...props
    };
  }

  render() {
    return (
      <form className="addImage">
        <label htmlFor="title">Image Title
          <input name="title"/>
        </label>
        <label htmlFor="description">Image Description
          <input name="description"/>
        </label>
        <label htmlFor="url">Image URL
          <input name="url"/>
        </label>
        <button type="submit">Add</button>
      </form>
    );
  }
}